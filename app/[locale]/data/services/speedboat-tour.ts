/**
 * Speedboat Tour Service Data
 * Stable ID: service_speedboat_tour
 */

import type { BaseService } from '../types';
import { contactInfo } from '../contact';

export const speedboatTour: BaseService = {
  id: 'service_speedboat_tour',
  slug: 'speedboat-tour',
  name: {
    hr: 'Brzi čamac - Ture',
    en: 'Speedboat Tours',
  },
  category: 'boat',
  heroImage: '/images/modra-spilja.webp',
  description: {
    hr: 'Uživajte u brzim tura čamcem do najljepših lokacija oko Korčule. Idealno za obitelji i grupe koje žele istražiti otoke i uvalice.',
    en: 'Enjoy fast speedboat tours to the most beautiful locations around Korčula. Ideal for families and groups who want to explore islands and coves.',
  },
  shortDescription: {
    hr: 'Brze ture do najljepših lokacija oko otoka',
    en: 'Fast tours to the most beautiful locations around the island',
  },
  price: {
    from: 150,
    currency: 'EUR',
    unit: 'trip',
    note: {
      hr: 'Cijena za grupu do 6 osoba',
      en: 'Price for group up to 6 people',
    },
  },
  capacity: {
    min: 2,
    max: 6,
    unit: 'people',
  },
  contact: {
    phone: contactInfo.phone,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
  },
  bookingRequired: true,
  keywords: {
    hr: 'brzi čamac, ture, korčula, izleti',
    en: 'speedboat, tours, korcula, excursions',
  },
};

