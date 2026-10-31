import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/base.css';

// Published policy addresses are clean paths (cheripic.com/safety). When the
// host serves the app for such a path, fold it into the hash route the app
// actually uses (/#/safety) before the first render.
const { pathname, search, hash } = window.location;
if (pathname !== '/' && !hash.startsWith('#/')) {
  window.history.replaceState(null, '', `/${search}#${pathname.replace(/\/+$/, '')}`);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
