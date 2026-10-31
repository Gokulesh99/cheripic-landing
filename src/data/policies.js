/* ---------------------------------------------------------------
   Standalone policy pages rendered by pages/Policy. Same rule as
   content.js — edit the words here, never inside a component.

   Keyed by page; App.jsx maps each route to one key. Body entries
   use the legal.js shapes. A section without a `title` renders as
   the page's untitled lead-in. All pages are public — no sign-in.
----------------------------------------------------------------*/

import { legalSections } from './legal';

const SUPPORT = 'support@cheripic.com';

/* Approved refund terms live in the Master User Agreement (clause 22);
   the Subscriptions & Refunds page repeats them so there is one source. */
const refundTerms = legalSections.find((section) => section.title === 'Refund Policy').body;

export const policies = {
  /* Naming a market here does not switch it on — only enable a country
     once it is confirmed open. */
  availability: {
    title: 'Service Availability & Regional Terms',
    subtitle: 'Operated by Cave Xpert Inc.',
    updated: 'Last updated: 31 October 2026',
    sections: [
      {
        id: 'primary-markets',
        title: 'Our primary markets',
        body: [
          'CheriPic is a Relationship Intelligence Platform operated by Cave Xpert Inc., a Delaware-incorporated company.',
          'Our primary customer markets are:',
          { ul: ['United States of America.', 'Canada.', 'United Kingdom.'] },
          'CheriPic is available only to adults aged 21 and over. Registration, intentional romantic introductions, subscriptions and other features remain subject to eligibility checks and availability in your location.',
        ],
      },
      {
        id: 'services',
        title: 'Services and availability',
        body: [
          'CheriPic supports self-reflection, intentional romantic introductions for eligible singles and relationship growth.',
          'Features may be introduced in phases. Availability can differ by country, state, province, membership and purchase channel. CheriPass offers depend on participating partners and their individual terms.',
          'Naming a country on this page does not mean that every feature is currently available there. Available services and purchase options are shown during registration and before payment.',
        ],
      },
      {
        id: 'united-states',
        title: 'United States of America',
        body: [
          'Services offered to US customers are subject to applicable federal and state laws, including relevant consumer protection, privacy, subscription and online-safety requirements.',
          'Paid subscription terms, including the price, billing frequency, automatic renewal and cancellation method, are disclosed before purchase.',
          'Nothing in our terms excludes rights or protections that cannot lawfully be waived.',
        ],
      },
      {
        id: 'canada',
        title: 'Canada',
        body: [
          'Services offered to Canadian customers are subject to applicable federal and provincial laws, including relevant privacy, consumer protection, subscription and language requirements.',
          'Where applicable, personal information is handled under the Personal Information Protection and Electronic Documents Act (PIPEDA) and relevant provincial privacy legislation.',
          'Availability may differ between provinces where additional requirements apply. Nothing in our terms removes mandatory provincial or federal consumer rights.',
        ],
      },
      {
        id: 'united-kingdom',
        title: 'United Kingdom',
        body: [
          'Services offered to UK customers are subject to applicable UK requirements, including relevant data protection, consumer protection and online-safety laws.',
          'Where applicable, these include the UK General Data Protection Regulation, the Data Protection Act 2018 and the Online Safety Act 2023, as amended.',
          'UK customers retain applicable statutory cancellation, refund and other consumer rights. These rights are not replaced by our general subscription or refund terms.',
        ],
      },
      {
        id: 'other-countries',
        title: 'Customers in other countries',
        body: [
          'CheriPic does not claim worldwide availability.',
          'Access from another country does not, by itself, establish eligibility to register, purchase a subscription or use introductions.',
          'We may introduce additional countries following a review of relevant legal requirements, payment-provider eligibility and operational readiness. We may restrict particular services where those requirements cannot be met.',
          'You must provide accurate country and billing information and must not bypass geographic restrictions.',
        ],
      },
      {
        id: 'privacy',
        title: 'Privacy and international processing',
        body: [
          'Personal information may be processed outside your country of residence by Cave Xpert Inc. and its service providers.',
          'Our Privacy Policy explains the information processed, its purposes, relevant recipients, retention practices, applicable safeguards and how to exercise privacy rights.',
          { href: '#/legal/privacy', label: 'Read the Privacy Policy' },
          'Using CheriPic does not remove protections provided by applicable data protection law.',
        ],
      },
      {
        id: 'subscriptions',
        title: 'Subscriptions and customer rights',
        body: [
          'Before purchase, the applicable payment screen shows the subscription price, currency, billing period and renewal terms.',
          'Our Subscription, Cancellation & Refund Policy explains how to manage purchases and request assistance. Purchases through Apple or Google may follow the relevant store’s procedures.',
          { href: '#/legal/subscriptions-refunds', label: 'Read the Subscription, Cancellation & Refund Policy' },
          'Where mandatory local law provides additional rights, those rights continue to apply despite any conflicting general wording in our policies.',
        ],
      },
      {
        id: 'changes',
        title: 'Restrictions and changes',
        body: [
          'We may limit or suspend availability where necessary to meet legal, safety, payment-provider or operational requirements.',
          'Where required, affected customers will receive notice and any applicable cancellation or refund rights.',
        ],
      },
      {
        id: 'contact',
        title: 'Contact',
        body: [
          'For questions about country availability, subscriptions or regional rights, contact:',
          { email: SUPPORT },
          'CheriPic — operated by Cave Xpert Inc.',
        ],
      },
    ],
  },

  acceptableUse: {
    title: 'CheriPic Acceptable Use Policy',
    subtitle: 'Operated by Cave Xpert Inc.',
    sections: [
      {
        id: 'overview',
        body: [
          'CheriPic supports self-reflection, intentional romantic introductions and relationship growth. These rules apply to profiles, photographs, messages, AI interactions and other platform activity.',
        ],
      },
      {
        id: 'age-and-identity',
        title: 'Age and identity',
        body: [
          'You must be at least 21 years old. False ages, fake profiles, impersonation, fraudulent documents and attempts to bypass verification are prohibited.',
        ],
      },
      {
        id: 'harassment',
        title: 'Harassment and abuse',
        body: [
          'Harassment, stalking, threats, intimidation, hateful conduct, discriminatory abuse and repeated unwanted contact are prohibited.',
        ],
      },
      {
        id: 'sexual-content',
        title: 'Sexual content and exploitation',
        body: [
          'Pornography, nudity, sexually explicit content, non-consensual intimate material, sexual exploitation, trafficking, prostitution, escort solicitation and compensated sexual arrangements are prohibited.',
        ],
      },
      {
        id: 'child-protection',
        title: 'Child protection',
        body: [
          'Child sexual abuse and exploitation are strictly prohibited. This includes grooming, sexual solicitation involving minors and child sexual abuse material, including manipulated or AI-generated material.',
        ],
      },
      {
        id: 'scams',
        title: 'Scams and financial manipulation',
        body: [
          'Romance scams, extortion, fraudulent investments, deceptive requests for money and attempts to obtain financial credentials are prohibited.',
          'CheriPic must not be used to arrange payments between members.',
        ],
      },
      {
        id: 'privacy',
        title: 'Privacy',
        body: [
          'Do not disclose another person’s private information without authorization. Do not obtain sensitive information through deception or share material you do not have permission to use.',
        ],
      },
      {
        id: 'spam-and-security',
        title: 'Spam and security',
        body: [
          'Spam, malicious links, unauthorized automation, account compromise, ban evasion and attempts to bypass security or privacy controls are prohibited.',
        ],
      },
      {
        id: 'ai-use',
        title: 'AI use',
        body: ['Do not use CheriAI to create prohibited content, deceive, exploit, threaten or harass anyone.'],
      },
      {
        id: 'reporting',
        title: 'Reporting',
        body: [
          { lead: 'Report suspected violations using the available reporting tools or contact', email: SUPPORT },          'Do not attach suspected child sexual abuse material to ordinary support emails.',
        ],
      },
      {
        id: 'enforcement',
        title: 'Enforcement',
        body: [
          'We may investigate suspected violations and issue warnings, remove content, restrict features, suspend accounts or terminate accounts.',
          'Serious safety concerns may require immediate protective action. Relevant matters may be reported to competent authorities where required by law.',
          'Contact support@cheripic.com if you believe an enforcement decision is incorrect.',
        ],
      },
      {
        id: 'updates',
        title: 'Updates',
        body: ['We may update this policy. Material changes will be communicated where required by applicable law.'],
      },
    ],
  },

  communityGuidelines: {
    title: 'CheriPic Community Guidelines',
    subtitle: 'Help us build a respectful community.',
    sections: [
      {
        id: 'guidelines',
        body: [
          {
            ul: [
              'Be honest about your identity, relationship status and intentions.',
              'Respect other people’s boundaries and decisions.',
              'Do not pressure anyone to reveal photographs, meet, send money or continue a conversation.',
              'Do not send explicit content.',
              'Do not request money, investment payments or financial credentials.',
              'Protect your own privacy and respect the privacy of others.',
              'Do not harass, threaten, impersonate or exploit anyone.',
              'Report suspected misconduct and block unwanted contact.',
              'Follow our Acceptable Use Policy.',
            ],
          },
          'Violations may lead to content removal, account restrictions, suspension or termination.',
          { lead: 'For reports or questions about an enforcement decision, contact', email: SUPPORT },
          { href: '#/legal/acceptable-use', label: 'Read the Acceptable Use Policy' },
        ],
      },
      // {
      //   /* Carried over from the Member Conduct clause of the Master User
      //      Agreement — the rules above don't already cover these. */
      //   id: 'also-prohibited',
      //   title: 'Also not allowed',
      //   body: [
      //     {
      //       ul: [
      //         'Discriminating against others or engaging in hate speech.',
      //         'Stalking others.',
      //         'Committing fraud or engaging in illegal activity.',
      //         'Using the platform for prostitution, escorting, trafficking, exploitation or unlawful purposes.',
      //       ],
      //     },
      //   ],
      // },
      // {
      //   id: 'enforcement',
      //   title: 'Enforcement',
      //   body: [
      //     'Violations may lead to content removal, account restrictions, suspension or termination.',
      //     { lead: 'For reports or questions about an enforcement decision, contact', email: SUPPORT },
      //   ],
      // },
    ],
  },

  /* Before publishing statements about verification and report handling,
     confirm both work and that a named person receives safety reports. */
  safety: {
    title: 'Safety & Child Protection',
    subtitle: 'CheriPic is available only to adults aged 21 and over.',
    sections: [
      {
        id: 'verification',
        title: 'Verification',
        body: [
          'Members must complete ID and selfie verification before activating Connect. Verification does not guarantee a person’s intentions, behaviour or safety.',
        ],
      },
      {
        id: 'photograph-privacy',
        title: 'Photograph privacy',
        body: [
          'Connect profile photographs remain hidden until mutual acceptance. Once a photograph is visible to someone, CheriPic cannot guarantee that they will not copy or capture it.',
        ],
      },
      {
        id: 'reporting',
        title: 'Reporting concerns',
        body: [
          { lead: 'Report suspected misconduct through the available reporting tools or contact', email: SUPPORT },
          'We review reports and may remove content, restrict features, suspend accounts or terminate accounts.',
        ],
      },
      {
        id: 'child-protection',
        title: 'Child protection',
        body: [
          'Child sexual abuse and exploitation are strictly prohibited. This includes grooming, sexual solicitation involving minors and child sexual abuse material, whether real, manipulated or AI-generated.',
          'Do not download, redistribute or email suspected abuse material. Report the account or content location instead.',
          'We take protective action and preserve or report relevant information where required by applicable law.',
          'Our child-safety contact can be reached through support@cheripic.com. Use the subject line “Child Safety Concern”.',
        ],
      },
      {
        id: 'scam-prevention',
        title: 'Scam prevention',
        body: ['Do not send money, share financial credentials or accept investment requests from other members.'],
      },
      {
        id: 'emergencies',
        title: 'Emergencies',
        body: [
          'CheriPic is not an emergency service. If someone is in immediate danger, contact emergency services where they are located.',
        ],
      },
      {
        id: 'cheriai',
        title: 'CheriAI',
        body: [
          'CheriAI provides AI-assisted reflection. Its responses may be incorrect. It is not a therapist, medical service or emergency service.',
        ],
      },
    ],
  },

  /* Needs legal review, a confirmed support inbox and a named owner for
     legal requests before release. */
  lawEnforcement: {
    title: 'Law Enforcement Guidelines',
    subtitle: 'CheriPic is operated by Cave Xpert Inc.',
    sections: [
      {
        id: 'overview',
        body: [
          'These guidelines explain how law enforcement agencies can submit requests concerning CheriPic accounts.',
        ],
      },
      {
        id: 'submitting',
        title: 'Submitting a request',
        body: [
          'Send requests from a verifiable official agency email address to support@cheripic.com with the subject line “Law Enforcement Request”.',
          'Include:',
          {
            ul: [
              'Agency name and address.',
              'Officer’s name, title and official contact information.',
              'Case or reference number.',
              'Applicable legal authority and legal documents.',
              'Relevant CheriPic account identifiers.',
              'Information requested and the relevant date range.',
              'Any legal restriction on notifying the account holder.',
            ],
          },
          'Sending an email does not, by itself, constitute valid legal service.',
        ],
      },
      {
        id: 'review-and-disclosure',
        title: 'Review and disclosure',
        body: [
          'We review requests under applicable law. We may request clarification, narrow an overbroad request or decline a request that does not meet applicable requirements.',
          'Submitting a request does not guarantee disclosure. Information can be provided only where available and lawfully disclosable.',
        ],
      },
      {
        id: 'preservation',
        title: 'Preservation',
        body: [
          'Preservation requests should clearly identify the relevant accounts, records and legal authority. Preserving information does not authorize its disclosure.',
        ],
      },
      {
        id: 'emergency',
        title: 'Emergency requests',
        body: [
          'Where there is an imminent danger of death or serious physical injury, identify the emergency, the person at risk and why the requested information is necessary.',
          'Emergency disclosure is considered only where permitted by applicable law. CheriPic is not an emergency-response service.',
        ],
      },
      {
        id: 'international',
        title: 'International requests',
        body: [
          'Requests from outside the United States are reviewed under applicable legal and cross-border procedures.',
        ],
      },
      {
        id: 'notification',
        title: 'User notification',
        body: [
          'We may notify affected users unless notification is prohibited by law or delayed where legally permitted.',
        ],
      },
      {
        id: 'security',
        title: 'Security',
        body: [
          'Requests and responsive information are handled by authorized personnel through appropriate secure procedures.',
        ],
      },
    ],
  },

  /* The Manage Subscription button in the app must work, and refund
     eligibility/processing times must be approved, before payments open.
     Never publish "no refunds under any circumstances". */
  subscriptions: {
    title: 'Subscriptions, Cancellation & Refunds',
    sections: [
      {
        id: 'overview',
        body: [
          'CheriPic offers free membership and paid subscriptions where available.',
          'The purchase screen shows the plan price, currency, billing period, included features and applicable limits before payment.',
          'Subscriptions renew automatically unless cancelled.',
        ],
      },
      {
        id: 'web-purchases',
        title: 'Web purchases',
        body: [
          'Manage or cancel subscriptions purchased on our website through Manage Subscription in your account.',
          'Cancellation stops future renewals. Access normally continues until the end of the paid subscription period.',
        ],
      },
      {
        id: 'app-store-purchases',
        title: 'App-store purchases',
        body: [
          'Subscriptions purchased through Apple or Google are managed through the relevant store. Refund requests for those purchases follow the applicable store process and mandatory consumer rights.',
        ],
      },
      {
        id: 'refund-requests',
        title: 'Refund requests',
        body: [
          'For website purchases, contact support@cheripic.com with your account email and payment reference.',
          'We review requests under our published refund terms and applicable law. Nothing in this policy removes mandatory consumer rights.',
        ],
      },
      {
        id: 'digital-delivery',
        title: 'Digital delivery',
        body: [
          'Paid features are activated after successful payment and confirmation of account eligibility. Contact support if access does not activate.',
        ],
      },
      {
        id: 'account-deletion',
        title: 'Account deletion',
        body: [
          'Deleting an account and cancelling a subscription are separate actions. Follow the cancellation instructions shown during deletion to avoid continued store billing.',
        ],
      },
    ],
    plans: true,
  },

  /* Keep the legal company name and contact details matched to the
     Stripe account. Add the registered business address once confirmed. */
  contact: {
    title: 'Contact Us',
    sections: [
      {
        id: 'operator',
        body: [
          'CheriPic is operated by Cave Xpert Inc., a Delaware-incorporated company.',
          { lead: 'Support:', email: SUPPORT },
        ],
      },
      {
        id: 'specific-requests',
        title: 'Specific requests',
        body: [
          { href: '#/delete-account', label: 'Delete your account' },
          { href: '#/legal/subscriptions-refunds', label: 'Subscriptions, cancellation & refunds' },
          { href: '#/safety', label: 'Report a safety or child-safety concern' },
          { href: '#/legal/law-enforcement', label: 'Law enforcement requests' },
        ],
      },
    ],
  },
};
