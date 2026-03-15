/**
 * Site-wide configuration constants
 * Centralized brand information and settings
 */

export const siteConfig = {
  name: 'StayKorčula',
  tagline: {
    hr: 'Vaš mediteranski bijeg na Korčuli',
    en: 'Your Mediterranean escape on Korčula',
  },
  description: {
    hr: 'Moderne vile i apartmani uz more na otoku Korčuli. Rezervirajte direktno po najboljoj cijeni.',
    en: 'Modern villas and apartments by the sea on island of Korčula, Croatia. Book direct for the best rate.',
  },
  url: 'https://staykorcula.vercel.app',
  logo: '/images/logo.png',
  defaultLocale: 'hr' as const,
  locales: ['hr', 'en'] as const,
} as const;

