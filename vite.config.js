import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import path from 'node:path';
import fs from 'node:fs';
import zlib from 'node:zlib';

/**
 * Emit pre-compressed .gz and .br next to every text asset so a CDN/server can
 * serve them directly (Content-Encoding) instead of compressing per request.
 * Built on Node's zlib to avoid vite-plugin-compression's dual-instance bug,
 * where only the first algorithm instance actually writes files.
 */
function precompressAssets({ threshold = 1024 } = {}) {
  const exts = new Set(['.js', '.mjs', '.css', '.html', '.json', '.svg', '.txt', '.xml']);
  let outDir = 'dist';
  return {
    name: 'precompress-assets',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const walk = (dir) => {
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name);
          if (entry.isDirectory()) {
            walk(full);
            continue;
          }
          if (full.endsWith('.gz') || full.endsWith('.br')) continue;
          if (!exts.has(path.extname(full))) continue;
          const buf = fs.readFileSync(full);
          if (buf.length < threshold) continue;
          fs.writeFileSync(`${full}.gz`, zlib.gzipSync(buf, { level: 9 }));
          fs.writeFileSync(
            `${full}.br`,
            zlib.brotliCompressSync(buf, {
              params: {
                [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                [zlib.constants.BROTLI_PARAM_SIZE_HINT]: buf.length,
              },
            }),
          );
        }
      };
      walk(path.resolve(outDir));
    },
  };
}

export default defineConfig({
  plugins: [
    react(),
    // Compress raster/vector assets at build time (PNG/JPG/WebP/SVG).
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      webp: { quality: 80 },
    }),
    // Ship pre-compressed variants so the CDN can serve .gz / .br directly.
    precompressAssets({ threshold: 1024 }),
  ],
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    // Split React into its own long-cached chunk so app updates don't
    // re-download the framework.
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            return 'vendor';
          }
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
});
