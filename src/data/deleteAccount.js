/* ---------------------------------------------------------------
   Account deletion page copy (#/delete-account). Same rule as
   content.js — edit the words here, never inside a component.

   Public, no sign-in: Google Play requires a web page where people
   can learn how to delete their account and request deletion
   without the app. Body entries use the legal.js shapes.
----------------------------------------------------------------*/

export const deleteAccountMeta = {
  title: 'Delete your CheriPic account',
  subtitle: 'You can permanently delete your CheriPic account and associated data at any time.',
  requestSubject: 'Account deletion request',
  requestBody: 'Please delete my CheriPic account.\n\nAccount email: \n',
  requestLabel: 'Email a deletion request',
};

export const deleteAccountSections = [
  {
    id: 'in-the-app',
    title: 'Delete in the app',
    body: [
      { ol: ['Open the CheriPic app and tap your profile icon.', 'Choose Delete account at the bottom of Profile & settings.', 'Review what will be removed, then confirm with Delete my account.'] },
      'Your account is deleted as soon as you confirm, and you are signed out on that device. We send a confirmation to your email address.',
    ],
  },
  {
    id: 'without-the-app',
    title: 'Request deletion without the app',
    body: [
      'Email us from the address you use to sign in to CheriPic and ask us to delete your account. To protect your account, we will confirm the request with you by email before deleting it.',
      { email: 'support@cheripic.com' },
    ],
  },
  {
    id: 'what-is-deleted',
    title: 'What is deleted',
    body: [
      {
        ul: [
          'Your profile, profile photos and Connect photos',
          'Identity verification images and verification details',
          'Interests, connections, Red Room conversations and notifications',
          'CheriAI conversations, reflection and assessment responses, and saved preferences',
          'Your sign-in account and active sessions',
        ],
      },
    ],
  },
  {
    id: 'what-may-be-kept',
    title: 'What may be kept',
    body: [
      'We may keep a limited set of records where the law requires it or for member safety: payment and billing records, reports made about member conduct, records of account suspensions, records of transactional emails and notifications we sent, and an anonymised record that the deletion was completed. These are kept only as long as necessary and then deleted.',
      'See Data Retention and Account Deletion in our Privacy Policy for details.',
    ],
  },
  {
    id: 'subscriptions',
    title: 'Subscriptions',
    body: [
      'Memberships purchased on cheripic.com are cancelled automatically when your account is deleted.',
      'If you subscribed through the Apple App Store or Google Play, also cancel the subscription in that store to stop future charges.',
    ],
  },
];
