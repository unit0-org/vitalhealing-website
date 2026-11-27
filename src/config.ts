// Site-wide settings. Edit values here, not in components.

export const site = {
  name: 'Vital Healing',
  owner: 'Dianeris Posada',
  url: 'https://vitalhealingcoaching.com',
  email: 'dianeris.posada@vitalhealingcoaching.com',
  bookingUrl: 'https://calendly.com/vitalhealingcoaching/reunion-de-20-minutos',
  credentialUrl: 'https://www.credly.com/badges/5852edb7-ab2f-4192-a83c-08340669a5a9',
  social: {
    instagram: 'https://www.instagram.com/vitalhealingcoaching/',
    facebook: 'https://www.facebook.com/VitalHealingCoaching',
    linkedin: 'https://www.linkedin.com/in/dianeris-posada',
  },
};

export const programs = {
  menopause: {
    // Hormone Reset sign-up / checkout link. Empty = the sign-up buttons open the free 20-minute call (site.bookingUrl).
    registerUrl: '',
  },
};

export const masterclass = {
  // ISO date-time with offset, e.g. '2027-01-21T18:00:00-08:00'. null shows "date coming soon".
  date: '2026-12-17T17:00:00-07:00' as string | null,
  timeZoneLabel: 'PT (Vancouver)',
  // Where the registration form POSTs (email platform / CRM endpoint).
  // Empty = the form opens a pre-filled email to Dianeris instead, so no sign-up is lost.
  formAction: '',
};
