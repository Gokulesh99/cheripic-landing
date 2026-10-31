/* ---------------------------------------------------------------
   Master User Agreement copy. Same rule as content.js —
   edit the words here, never inside a component.

   Body entries render as:
     'string'          -> paragraph
     { sub: '...' }    -> sub-heading
     { ul: [...] }     -> bullet list
     { email: '...' }  -> mailto link
     { lead, email }   -> sentence ending in an inline mailto link
     { href, label }   -> internal page link
   A section `id` makes it directly linkable (#/legal/privacy).
----------------------------------------------------------------*/

export const legalMeta = {
  title: 'CheriPic Master User Agreement',
  subtitle:
    'Privacy Policy · Terms of Service · Disclaimer · AI Policy · Subscription Policy · Community Guidelines · Account Deletion',
  effectiveDate: 'August 29, 2026',
  platform: 'CheriPic®',
  operatedBy: 'Cave Xpert Inc.',
  websites: ['cheripic.com', 'cheripic.net'],
  support: 'support@cheripic.com',
};

export const legalSections = [
  {
    num: '1',
    title: 'Acceptance of This Agreement',
    body: [
      'Welcome to CheriPic.',
      'By accessing, browsing, downloading, installing, registering for, subscribing to, or using CheriPic, CheriAI, our websites, applications, products, events, experiences, promotions, member benefits, partner privileges, content, and services, you acknowledge that you have read, understood, and agree to be legally bound by this Agreement.',
      'If you do not agree with any provision of this Agreement, you must immediately discontinue use of CheriPic.',
    ],
  },
  {
    num: '2',
    title: 'Who We Are',
    body: [
      'CheriPic is a relationship intelligence platform owned and operated by Cave Xpert Inc.',
      'Our mission is to help individuals make more informed relationship decisions through:',
      {
        ul: [
          'Identity verification',
          'Relationship intelligence',
          'Compatibility assessments',
          'Educational content',
          'AI-assisted guidance',
          'Member introductions',
          'Experiences',
          'Privileges',
          'Premium membership benefits',
        ],
      },
      'CheriPic is not a dating guarantee, matchmaking guarantee, marriage guarantee, therapy service, counseling service, or professional advisory service.',
    ],
  },
  {
    num: '3',
    title: 'Eligibility',
    body: [
      'CheriPic is available only to individuals aged 21 years or older.',
      'You must provide accurate information, have the legal capacity to enter a binding agreement and comply with our policies and applicable law.',
      'We require your date of birth during registration. To activate Connect, you must complete our government-issued photo ID and selfie verification process.',
      'We may request additional information to confirm eligibility. Accounts that do not meet our requirements may be rejected, restricted, suspended or terminated.',
      'Providing a false age, using a false identity or attempting to bypass verification is prohibited.',
      { lead: 'If you believe an eligibility decision is incorrect, contact', email: 'support@cheripic.com' },
    ],
  },
  {
    id: 'availability',
    num: '4',
    title: 'Service Availability',
    body: [
      'CheriPic is operated by Cave Xpert Inc., a Delaware-incorporated company.',
      'CheriPic launches its services in selected countries in phases. Registration, introductions, subscriptions and partner offers may have different availability.',
      'Please check our Service Availability page before registering or purchasing a subscription.',
      { href: '#/service-availability', label: 'View Service Availability' },
      'We may restrict services where necessary because of applicable law, payment-provider requirements or operational limitations.',
      'Our US incorporation does not mean that every service is available in every country. Nothing in these terms limits rights that cannot lawfully be excluded.',
    ],
  },
  {
    num: '5',
    title: 'Member Accounts',
    body: [
      'Members are responsible for:',
      {
        ul: [
          'Maintaining account security',
          'Protecting login credentials',
          'Keeping information accurate',
          'All activities occurring under their account',
        ],
      },
      'You agree not to:',
      {
        ul: [
          'Create false accounts',
          'Misrepresent your identity',
          'Impersonate another person',
          'Upload fraudulent information',
          'Circumvent platform safeguards',
        ],
      },
    ],
  },
  {
    num: '6',
    title: 'Member Verification',
    body: [
      'While CheriPic may perform identity verification and other checks, verification does not guarantee:',
      {
        ul: [
          'Character',
          'Honesty',
          'Relationship intentions',
          'Financial status',
          'Emotional stability',
          'Future conduct',
          'Criminal history',
          'Relationship success',
        ],
      },
      'Members acknowledge that other users may provide inaccurate, incomplete, misleading, outdated, or false information.',
      'You remain solely responsible for your decisions and interactions.',
    ],
  },
  {
    num: '7',
    title: 'No Guarantee of Relationship Success',
    body: [
      'CheriPic does not guarantee:',
      {
        ul: [
          'Introductions',
          'Matches',
          'Relationships',
          'Friendships',
          'Engagements',
          'Marriages',
          'Compatibility',
          'Emotional outcomes',
          'Long-term success',
        ],
      },
      'Relationship outcomes depend upon numerous variables beyond the control of CheriPic.',
      'All introductions are informational only.',
    ],
  },
  {
    id: 'ai',
    num: '8',
    title: 'CheriAI Policy',
    body: [
      'CheriAI is an educational technology tool designed to assist users in understanding relationship dynamics, communication patterns, compatibility indicators, and relationship intelligence concepts.',
      'CheriAI is NOT:',
      {
        ul: [
          'A therapist',
          'A psychologist',
          'A psychiatrist',
          'A counselor',
          'A medical professional',
          'A legal advisor',
          'A financial advisor',
          'A crisis service',
          'An emergency service',
        ],
      },
      'Information generated by CheriAI may contain inaccuracies, limitations, assumptions, or incomplete information.',
      'Users must exercise independent judgment.',
      'No statement generated by CheriAI should be interpreted as professional advice.',
      'If you require medical, psychological, legal, financial, or emergency assistance, consult a qualified professional immediately.',
    ],
  },
  {
    id: 'conduct',
    num: '9',
    title: 'Member Conduct',
    body: [
      'Members agree not to:',
      {
        ul: [
          'Harass others',
          'Threaten others',
          'Discriminate against others',
          'Engage in hate speech',
          'Stalk others',
          'Share private information without consent',
          'Commit fraud',
          'Misrepresent themselves',
          'Engage in illegal activity',
          'Use the platform for prostitution, escorting, trafficking, exploitation, or unlawful purposes',
        ],
      },
      'Violations may result in suspension, removal, or permanent termination.',
    ],
  },
  {
    num: '10',
    title: 'Safety Disclaimer',
    body: [
      'CheriPic cannot guarantee the safety of any member.',
      'Users are encouraged to:',
      {
        ul: [
          'Meet in public places',
          'Inform trusted contacts',
          'Conduct independent verification',
          'Exercise caution',
          'Use common sense',
        ],
      },
      "Any meeting, communication, relationship, transaction, or interaction occurring online or offline is undertaken entirely at the user's own risk.",
    ],
  },
  {
    id: 'privacy',
    num: '11',
    title: 'Privacy Policy',
    body: [
      'We respect your privacy and process information in accordance with applicable privacy laws.',
      'Information collected may include:',
      { sub: 'Identity Information' },
      { ul: ['Name', 'Date of birth', 'Gender', 'Nationality', 'Profile photographs', 'Verification records'] },
      { sub: 'Contact Information' },
      { ul: ['Email address', 'Mobile number', 'Location information'] },
      { sub: 'Platform Information' },
      { ul: ['Device data', 'Browser information', 'Usage data', 'IP address', 'Login records'] },
      { sub: 'Relationship Intelligence Data' },
      { ul: ['Assessment responses', 'Preferences', 'Compatibility responses', 'Communication patterns'] },
      { sub: 'Identity Verification Images' },
      'Members who choose to use Connect submit a photo of a government-issued ID and a fresh verification selfie. These images, and the legal name provided for verification, are used only for identity review. They are not shown on member profiles or to other members.',
    ],
  },
  {
    num: '12',
    title: 'How We Use Information',
    body: [
      'We may use information to:',
      {
        ul: [
          'Operate services',
          'Verify users',
          'Improve services',
          'Detect fraud',
          'Improve matching systems',
          'Generate compatibility insights',
          'Provide support',
          'Communicate updates',
          'Offer privileges and experiences',
          'Comply with legal obligations',
        ],
      },
    ],
  },
  {
    id: 'cookies',
    num: '13',
    title: 'Cookie Policy',
    body: [
      'CheriPic may use cookies, pixels, analytics technologies, session identifiers, and similar technologies to:',
      {
        ul: [
          'Improve user experience',
          'Maintain sessions',
          'Improve security',
          'Analyze traffic',
          'Improve platform performance',
          'Personalize content',
        ],
      },
      'By using CheriPic, you consent to the use of such technologies where permitted by law.',
    ],
  },
  {
    num: '14',
    title: 'Information Sharing',
    body: [
      'We do not sell personal information.',
      'Information may be shared with:',
      {
        ul: [
          'Service providers',
          'Payment processors',
          'Verification providers',
          'Analytics providers',
          'Business partners',
          'Legal authorities where required',
        ],
      },
      'Such sharing is limited to legitimate business purposes.',
    ],
  },
  {
    num: '15',
    title: 'International Data Transfers',
    body: [
      'By using CheriPic, you acknowledge that information may be stored or processed outside your country of residence.',
      'We implement commercially reasonable safeguards consistent with applicable legal requirements.',
    ],
  },
  {
    id: 'deletion',
    num: '16',
    title: 'Data Retention and Account Deletion',
    body: [
      'We keep personal information for as long as your account is active and as needed to provide the services, then as required by law or for the safety purposes described below.',
      { sub: 'Deleting your account' },
      'You can permanently delete your account at any time in the CheriPic app (Profile & settings › Delete account) or by emailing support@cheripic.com from the address you use to sign in. Step-by-step instructions are available at cheripic.com/#/delete-account.',
      'When an account is deleted, we delete:',
      {
        ul: [
          'Your profile, profile photos and Connect photos',
          'Identity verification images and verification details',
          'Interests, connections, Red Room conversations and notifications',
          'CheriAI conversations, reflection and assessment responses, and saved preferences',
          'Your sign-in account and active sessions',
        ],
      },
      { sub: 'Records we may retain' },
      'We may retain a limited set of records where we have a legal obligation or a legitimate safety purpose, including:',
      {
        ul: [
          'Payment and billing records',
          'Reports made about member conduct and related moderation records',
          'Records of account suspensions, to help prevent removed members from returning',
          'Records of transactional emails and notifications we sent',
          'A minimal, anonymised record that a deletion was requested and completed',
        ],
      },
      'Retained records are kept only for as long as necessary for these purposes and are then deleted.',
      { sub: 'Subscriptions' },
      'Memberships purchased on cheripic.com are cancelled when your account is deleted. Subscriptions purchased through the Apple App Store or Google Play must also be cancelled in that store to stop future charges.',
      'Content that other members have already copied or saved outside CheriPic cannot be recalled.',
    ],
  },
  {
    num: '17',
    title: 'Partner Benefits and Privileges',
    body: [
      'CheriPic may partner with:',
      {
        ul: [
          'Restaurants',
          'Hotels',
          'Airlines',
          'Event organizers',
          'Travel companies',
          'Wellness providers',
          'Retail businesses',
          'Service providers',
        ],
      },
      'Partner businesses are independent entities.',
      'CheriPic does not own, control, supervise, manage, or guarantee partner businesses.',
      'Any purchase, booking, reservation, redemption, attendance, transaction, or interaction is solely between the member and the partner.',
    ],
  },
  {
    num: '18',
    title: 'Limitation of Partner Liability',
    body: [
      'To the fullest extent permitted by law, CheriPic and Cave Xpert Inc. shall not be liable for:',
      {
        ul: [
          'Injury',
          'Illness',
          'Death',
          'Property damage',
          'Theft',
          'Financial loss',
          'Travel disruptions',
          'Service failures',
          'Food-related incidents',
          'Partner negligence',
          'Partner misconduct',
        ],
      },
      'Where possible, CheriPic may voluntarily assist members in resolving disputes.',
      'Such assistance creates no legal obligation.',
    ],
  },
  {
    num: '19',
    title: 'Experiences and Events',
    body: [
      'Members participate in experiences, activities, travel, events, meetups, dinners, retreats, and social gatherings entirely at their own risk.',
      'CheriPic does not guarantee:',
      { ul: ['Safety', 'Attendance', 'Compatibility', 'Outcomes', 'Quality of service'] },
      'Members assume all risks associated with participation.',
    ],
  },
  {
    num: '20',
    title: 'Promotional Benefits and Member Rewards',
    body: [
      'From time to time CheriPic may offer:',
      {
        ul: [
          'Member appreciation benefits',
          'Sponsored experiences',
          'Complimentary travel opportunities',
          'Fully paid couples trips',
          'Luxury experiences',
          'Premium member rewards',
          'Promotional campaigns',
        ],
      },
      "Such opportunities are promotional benefits provided at CheriPic's sole discretion.",
      'These opportunities are not:',
      { ul: ['Lotteries', 'Gambling activities', 'Raffles', 'Games of chance', 'Sweepstakes'] },
      'Selection criteria may include:',
      {
        ul: [
          'Membership type',
          'Platform participation',
          'Community engagement',
          'Compliance with platform policies',
          'Eligibility criteria',
          'Promotional campaign objectives',
        ],
      },
      'CheriPic reserves the unrestricted right to:',
      {
        ul: [
          'Modify campaigns',
          'Cancel campaigns',
          'Suspend campaigns',
          'Change eligibility requirements',
          'Select recipients',
        ],
      },
      'No member is guaranteed selection.',
    ],
  },
  {
    id: 'subscriptions',
    num: '21',
    title: 'Subscriptions',
    body: [
      'CheriPic may offer:',
      { ul: ['Free memberships', 'Premium Lite memberships', 'Premium memberships', 'Future subscription plans'] },
      'Membership fees are charged according to the pricing displayed at purchase.',
      'Pricing may change without notice for future billing periods.',
    ],
  },
  {
    num: '22',
    title: 'Refund Policy',
    body: [
      'All purchases are generally final.',
      'Refunds may be denied once value has been delivered.',
      'Value includes but is not limited to:',
      {
        ul: [
          'Account activation',
          'Introductions',
          'Compatibility insights',
          'Access to member profiles',
          'CheriAI conversations',
          'Assessment reports',
          'Premium benefits',
          'Experiences access',
          'Privileges access',
          'Promotional access',
          'Redeemed benefits',
        ],
      },
      'Once value has been received, refunds become null and void except where required by applicable law.',
      'Chargeback abuse may result in account termination.',
    ],
  },
  {
    num: '23',
    title: 'Intellectual Property',
    body: [
      'All intellectual property rights relating to CheriPic, CheriAI, assessments, reports, systems, branding, software, content, designs, graphics, videos, educational materials, and methodologies remain the exclusive property of Cave Xpert Inc.',
      'Unauthorized copying, distribution, reproduction, reverse engineering, scraping, or exploitation is prohibited.',
    ],
  },
  {
    num: '24',
    title: 'Termination',
    body: [
      'CheriPic may suspend, restrict, investigate, or terminate accounts at any time for:',
      {
        ul: [
          'Fraud',
          'Abuse',
          'Harassment',
          'Misconduct',
          'Misrepresentation',
          'Safety concerns',
          'Violation of this Agreement',
        ],
      },
      'Termination may occur without notice where necessary.',
    ],
  },
  {
    id: 'disclaimer',
    num: '25',
    title: 'Disclaimer of Warranties',
    body: [
      'ALL SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS.',
      'CAVE XPERT INC. DISCLAIMS ALL WARRANTIES INCLUDING:',
      {
        ul: [
          'MERCHANTABILITY',
          'FITNESS FOR A PARTICULAR PURPOSE',
          'NON-INFRINGEMENT',
          'ACCURACY',
          'RELIABILITY',
          'AVAILABILITY',
          'PERFORMANCE',
        ],
      },
      'WE DO NOT WARRANT THAT SERVICES WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR SUITABLE FOR ANY PARTICULAR PURPOSE.',
    ],
  },
  {
    num: '26',
    title: 'Limitation of Liability',
    body: [
      'TO THE MAXIMUM EXTENT PERMITTED BY LAW, CAVE XPERT INC., CHERIPIC, CHERIAI, ITS OFFICERS, DIRECTORS, EMPLOYEES, CONTRACTORS, AFFILIATES, SUCCESSORS, ASSIGNS, AND PARTNERS SHALL NOT BE LIABLE FOR:',
      {
        ul: [
          'DIRECT DAMAGES',
          'INDIRECT DAMAGES',
          'INCIDENTAL DAMAGES',
          'SPECIAL DAMAGES',
          'CONSEQUENTIAL DAMAGES',
          'EMOTIONAL DISTRESS',
          'RELATIONSHIP LOSSES',
          'BUSINESS LOSSES',
          'REPUTATIONAL LOSSES',
          'LOST PROFITS',
          'DATA LOSS',
        ],
      },
      'ARISING FROM:',
      {
        ul: [
          'USE OF THE PLATFORM',
          'MEMBER INTERACTIONS',
          'CHERIAI OUTPUT',
          'PARTNER SERVICES',
          'EVENTS',
          'EXPERIENCES',
          'PROMOTIONAL BENEFITS',
          'RELATIONSHIP OUTCOMES',
        ],
      },
      'YOUR USE OF CHERIPIC IS ENTIRELY AT YOUR OWN RISK.',
    ],
  },
  {
    num: '27',
    title: 'Indemnification',
    body: [
      'You agree to defend, indemnify, and hold harmless Cave Xpert Inc., CheriPic, CheriAI, affiliates, officers, employees, contractors, and partners from any claims, losses, liabilities, damages, costs, expenses, and legal fees arising from:',
      {
        ul: [
          'Your conduct',
          'Your use of the platform',
          'Your relationships',
          'Your interactions with other members',
          'Your interactions with partners',
          'Your violation of this Agreement',
        ],
      },
    ],
  },
  {
    num: '28',
    title: 'Governing Law and Dispute Resolution',
    body: [
      'Before commencing formal legal proceedings, parties agree to first attempt good-faith resolution through direct communication with CheriPic.',
      'Nothing in this Agreement shall remove any mandatory rights granted to consumers under applicable law.',
    ],
  },
  {
    num: '29',
    title: 'Changes to This Agreement',
    body: [
      'CheriPic may update this Agreement at any time.',
      'Updated versions become effective immediately upon publication on cheripic.com or cheripic.net.',
      'Continued use of the platform constitutes acceptance of updated terms.',
    ],
  },
  {
    id: 'verification-safety-ai',
    num: '30',
    title: 'Eligibility, Verification, Safety and AI',
    body: [
      'We process registration information, dates of birth and verification information to assess eligibility and protect platform integrity.',
      'Where you use Connect, this may include government-issued identification, selfies and verification results.',
      'We also process member reports, relevant reported content and enforcement records to investigate concerns and apply our policies.',
      'Where you use CheriAI, your messages and relevant information may be processed by the service providers identified in this policy. Required permissions are requested before applicable information is shared.',
      'Access to sensitive information is limited to authorized personnel and service providers with a legitimate need.',
      'Retention, deletion, international processing and your privacy rights are explained in the relevant sections of this policy.',
    ],
  },
  {
    id: 'contact',
    num: '31',
    title: 'Contact',
    body: [
      'Questions, complaints, legal notices, privacy requests, and support inquiries may be directed to:',
      { email: 'support@cheripic.com' },
    ],
  },
];
