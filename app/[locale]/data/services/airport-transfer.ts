/**
 * Airport Transfer Service Data
 * Stable ID: service_airport_transfer
 */

import type { BaseService } from '../types';
import { contactInfo } from '../contact';

export const airportTransfer: BaseService = {
  id: 'service_airport_transfer',
  slug: 'airport-transfer',
  name: {
    hr: 'Transfer iz zračne luke',
    en: 'Airport Transfer',
  },
  category: 'transport',
  icon: '🚗',
  heroImage: '/images/taxi-service.jpg',
  description: {
    hr: 'Organiziramo prijevoz iz zračnih luka Split ili Dubrovnik do Vele Luke. Pouzdan i udoban prijevoz za vaš dolazak i odlazak.',
    en: 'We organize transport from Split or Dubrovnik airports to Vela Luka. Reliable and comfortable transport for your arrival and departure.',
  },
  shortDescription: {
    hr: 'Pouzdan prijevoz iz Splita ili Dubrovnika',
    en: 'Reliable transport from Split or Dubrovnik',
  },
  price: {
    from: 80,
    currency: 'EUR',
    unit: 'trip',
    note: {
      hr: 'Cijena ovisi o lokaciji i broju putnika',
      en: 'Price depends on location and number of passengers',
    },
  },
  contact: {
    phone: contactInfo.phone,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
  },
  bookingRequired: true,
  keywords: {
    hr: 'transfer, zračna luka, split, dubrovnik, prijevoz',
    en: 'transfer, airport, split, dubrovnik, transport',
  },
};

