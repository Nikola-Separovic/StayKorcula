/**
 * Boat Rental Service Data
 * Stable ID: service_boat_rental
 */

import type { BaseService } from '../types';
import { contactInfo } from '../contact';

export const boatRental: BaseService = {
  id: 'service_boat_rental',
  slug: 'boat-rental',
  name: {
    hr: 'Iznajmljivanje čamaca',
    en: 'Boat Rental',
  },
  category: 'boat',
  icon: '🚤',
  description: {
    hr: 'Istražite prekrasan otok Korčulu i okolne otoke s našim iznajmljenim čamcima. Nudimo različite opcije ovisno o vašim potrebama.',
    en: 'Explore the beautiful island of Korčula and surrounding islands with our rental boats. We offer different options depending on your needs.',
  },
  shortDescription: {
    hr: 'Istražite otok s našim partnerima za iznajmljivanje čamaca',
    en: 'Explore the island with our boat rental partners',
  },
  heroImage: '/images/boat-rental.jpeg',
  price: {
    from: 80,
    currency: 'EUR',
    unit: 'day',
    note: {
      hr: 'Cijena ovisi o tipu čamca i sezoni',
      en: 'Price depends on boat type and season',
    },
  },
  included: [
    { icon: '🛥️', text: { hr: 'Čamac s motorom', en: 'Motorboat' } },
    { icon: '🦺', text: { hr: 'Sigurnosna oprema', en: 'Safety equipment' } },
    { icon: '⛽', text: { hr: 'Gorivo (osnovno)', en: 'Fuel (basic)' } },
    { icon: '🗺️', text: { hr: 'Karta i preporuke', en: 'Map and recommendations' } },
  ],
  extras: [
    {
      name: { hr: 'Skiper', en: 'Skipper' },
      price: { amount: 50, currency: 'EUR', unit: 'day' },
      description: { hr: 'Profesionalni skiper za vašu sigurnost', en: 'Professional skipper for your safety' },
    },
  ],
  features: [
    { hr: 'Različiti tipovi čamaca dostupni', en: 'Various boat types available' },
    { hr: 'Sigurnosna oprema uključena', en: 'Safety equipment included' },
    { hr: 'Instrukcije za početnike', en: 'Instructions for beginners' },
    { hr: 'Preporuke za najbolje lokacije', en: 'Recommendations for best locations' },
  ],
  duration: {
    hr: 'Minimalno 4 sata, maksimalno 7 dana',
    en: 'Minimum 4 hours, maximum 7 days',
  },
  capacity: {
    min: 2,
    max: 8,
    unit: 'people',
  },
  faq: [
    {
      question: { hr: 'Trebam li imati dozvolu za vožnju čamca?', en: 'Do I need a license to drive the boat?' },
      answer: { hr: 'Za manje čamce dozvola nije potrebna, ali preporučujemo iskustvo. Za veće čamce možemo osigurati skipera.', en: 'For smaller boats, a license is not required, but we recommend experience. For larger boats, we can provide a skipper.' },
    },
    {
      question: { hr: 'Što je uključeno u cijenu?', en: 'What is included in the price?' },
      answer: { hr: 'Uključeno je: čamac, osnovna sigurnosna oprema, karta i preporuke. Gorivo se naplaćuje dodatno.', en: 'Included: boat, basic safety equipment, map and recommendations. Fuel is charged extra.' },
    },
  ],
  contact: {
    phone: contactInfo.phone,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
  },
  bookingRequired: true,
  availability: {
    hr: 'Dostupno tijekom cijele sezone',
    en: 'Available throughout the season',
  },
  keywords: {
    hr: 'iznajmljivanje čamaca, korčula, brod, čamac, more',
    en: 'boat rental, korcula, boat, ship, sea',
  },
};

