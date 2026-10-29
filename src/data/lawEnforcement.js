/* ---------------------------------------------------------------
   Law enforcement request guidelines (#/law-enforcement), linked
   as "Legal" in the footer. Same rule as content.js — edit the
   words here, never inside a component. Body entries use the
   legal.js shapes.
----------------------------------------------------------------*/

export const lawEnforcementMeta = {
  title: 'Law Enforcement Request Guidelines',
  updated: 'Last updated: 29 October 2026',
};

export const lawEnforcementSections = [
  {
    id: 'about',
    title: 'About these guidelines',
    body: [
      'CheriPic is a Relationship Intelligence Platform operated by Cave Xpert Inc., a Delaware corporation.',
      'These guidelines explain how law enforcement agencies and other authorized government authorities may submit requests relating to CheriPic accounts or records. We review requests under applicable law, including relevant US requirements and any applicable international legal processes.',
      'We seek to cooperate with lawful investigations while protecting our members’ privacy. A request does not automatically entitle the requester to account information.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact for law enforcement requests',
    body: [
      { lead: 'Send requests to:', email: 'legal@cheripic.com' },
      'Address requests to: Cave Xpert Inc., Operator of CheriPic',
      'Please use an official government or law enforcement email address. We may independently verify the requester’s identity and authority before taking action.',
      'This email address is provided for receiving and coordinating requests. It does not waive applicable requirements for formal service of legal process.',
      'For ordinary account support, use the support contact listed on our website.',
    ],
  },
  {
    id: 'information-to-include',
    title: 'Information to include',
    body: [
      'Please provide:',
      {
        ul: [
          'The requesting agency’s name, country and address.',
          'The requesting officer’s name, title, official email address and telephone number.',
          'A case or investigation reference number.',
          'The applicable legal authority and a copy of the relevant legal process, where required.',
          'Information sufficient to identify the account, such as its registered email address, CheriPic handle or member ID.',
          'A specific description of the records requested and their relevance to the investigation.',
          'The relevant date range, including the time zone.',
          'Any response deadline and the legal basis for it.',
          'Any legally binding restriction on notifying the affected member.',
        ],
      },
      'Please make requests as specific and limited as possible. If a request is not in English, please provide an English translation to assist review.',
    ],
  },
  {
    id: 'review-and-disclosure',
    title: 'Review and disclosure',
    body: [
      'We assess the requester’s authority, the validity and scope of the request, applicable disclosure restrictions and the information available to us.',
      'Different types of records may require different legal processes. For US requests, these may include a subpoena, court order or search warrant, depending on the records sought and applicable law. A request for private communications requires the legal authority applicable to that content.',
      'We may request clarification, seek a narrower scope, or challenge requests that are invalid, overly broad or otherwise legally objectionable.',
      'We disclose information only when legally required or otherwise permitted by applicable law. Any disclosure is limited to information within our possession, custody or control that we can lawfully provide.',
    ],
  },
  {
    id: 'outside-the-us',
    title: 'Requests from outside the United States',
    body: [
      'Authorities outside the United States may contact us using the same email address.',
      'A foreign request or order does not, by itself, establish that disclosure is lawful. Depending on the circumstances, an appropriate international cooperation process, US legal process or another legally recognized mechanism may be necessary.',
      'We assess international requests individually, including applicable privacy and disclosure restrictions.',
    ],
  },
  {
    id: 'preservation',
    title: 'Preservation requests',
    body: [
      'Authorized authorities may request preservation of specifically identified existing records while appropriate legal process is obtained.',
      'Include the account identifiers, the records and date range to be preserved, the investigation reference and the legal basis for preservation.',
      'Where 18 U.S.C. § 2703(f) applies, records are preserved for 90 days, with an additional 90 days upon a qualifying renewed request.',
      'Preservation is separate from disclosure. A preservation request does not authorize release of records, require prospective monitoring or guarantee that requested information exists.',
    ],
  },
  {
    id: 'emergency',
    title: 'Emergency requests',
    body: [
      'If an investigation involves an emergency presenting a danger of death or serious physical injury that requires disclosure without delay, email:',
      { email: 'legal@cheripic.com' },
      'Subject: EMERGENCY LAW ENFORCEMENT REQUEST',
      'Include:',
      {
        ul: [
          'Your agency and independently verifiable contact information.',
          'The person or account involved.',
          'The nature of the emergency and the immediate risk.',
          'Why ordinary legal process cannot be obtained in time.',
          'The specific information needed and how it relates to the emergency.',
          'A direct telephone number for follow-up.',
        ],
      },
      'We assess emergency requests individually and may disclose relevant information where permitted by applicable law. An emergency label alone does not establish a lawful basis for disclosure.',
      'CheriPic is not an emergency service. This email address is not a substitute for contacting local emergency services, and we cannot guarantee an immediate response.',
    ],
  },
  {
    id: 'availability',
    title: 'Availability of records',
    body: [
      'We can provide only information that is available to us and that we are legally permitted or required to disclose.',
      'The availability of account information, communications, technical records or other data depends on the service involved, our applicable retention practices and the circumstances of the account.',
      'Do not assume that deleted information can be recovered or that all requested records are retained.',
    ],
  },
  {
    id: 'notification',
    title: 'Member notification',
    body: [
      'We may notify an affected member about a request unless notification is legally prohibited or we determine that withholding or delaying notice is appropriate and legally permitted, including in emergency circumstances.',
      'If notification is legally restricted, provide the relevant order or other binding legal authority and its duration.',
    ],
  },
  {
    id: 'secure-handling',
    title: 'Secure handling',
    body: [
      'Please do not send passwords or unrelated sensitive information.',
      'For requests involving sensitive records or substantial attachments, contact us first to coordinate an appropriate transfer method. We will coordinate the method of any lawful production with the verified requesting authority.',
    ],
  },
  {
    id: 'updates',
    title: 'Updates',
    body: [
      'We may update these guidelines as our services, procedures or legal obligations change. The date above identifies the latest revision.',
    ],
  },
];
