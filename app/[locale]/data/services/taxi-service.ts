/**
 * Taxi Service Data
 * Stable ID: service_taxi_service
 */

import type { BaseService } from '../types';
import { contactInfo } from '../contact';

export const taxiService: BaseService = {
  id: 'service_taxi_service',
  slug: 'taxi-service',
  name: {
    hr: 'Taxi usluga',
    en: 'Taxi Service',
  },
  category: 'transport',
  icon: '🚕',
  heroImage: '/images/taxiservice.jpg',
  description: {
    hr: 'Lokalna taxi usluga za prijevoz po otoku Korčuli. Dostupno 24/7 za vaše potrebe.',
    en: 'Local taxi service for transport around Korčula island. Available 24/7 for your needs.',
  },
  shortDescription: {
    hr: 'Lokalna taxi usluga dostupna 24/7',
    en: 'Local taxi service available 24/7',
  },
  contact: {
    phone: contactInfo.phone,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
  },
  bookingRequired: false,
  keywords: {
    hr: 'taxi, prijevoz, korčula, lokalni prijevoz',
    en: 'taxi, transport, korcula, local transport',
  },
};

