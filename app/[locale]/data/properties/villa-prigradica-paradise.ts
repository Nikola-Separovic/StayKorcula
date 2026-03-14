/**
 * Villa Prigradica Paradise Property Data
 * Stable ID: property_villa_prigradica_paradise
 *
 * Seaside villa in Prigradica-Kurija bay on Korčula island
 * 3 bedrooms, 2 bathrooms, 2 living rooms
 * Private beach, terrace, parking
 */

import type { BaseProperty } from '../types';
import { contactInfo } from '../contact';

const PRIGRADICA = '/images/PRIGRADICA';

export const villaPrigradicaParadise: BaseProperty = {
  id: 'property_villa_prigradica_paradise',
  slug: 'villa-prigradica-paradise',
  name: {
    hr: 'Villa Prigradica Paradise',
    en: 'Villa Prigradica Paradise',
  },
  location: {
    hr: 'Prigradica-Kurija, Korčula',
    en: 'Prigradica-Kurija, Korčula',
  },
  coordinates: {
    latitude: 42.966133,
    longitude: 16.808586,
  },
  googleMaps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d182.4769230354504!2d16.81719437521045!3d42.96498480522125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1shr!2shr!4v1773352576974!5m2!1shr!2shr',
    linkUrl: 'https://maps.app.goo.gl/ycsJuTgc9AzbsJfD9',
  },
  description: {
    hr: 'Dobrodošli u Villa Prigradica Paradise, prekrasan smještaj uz more u mirnoj uvali Prigradica-Kurija na otoku Korčuli. Ova šarmantna vila nudi zadivljujuće poglede na Jadransko more i savršeno je mjesto za opuštajući odmor. Uživajte u ekskluzivnom pristupu vlastitoj privatnoj plaži, samo nekoliko koraka od vile. S tri prostrane spavaće sobe, dvije moderne kupaonice i dva ugodna dnevnika, vila udobno prima goste koji traže udobnost i stil. Potpuno je opremljena kuhinjom i prostranim dnevnim boravkom. Privatno parkiranje i prostrana terasa s pogledom na more i zalazak sunca čine boravak nezaboravnim.',
    en: 'Welcome to Villa Prigradica Paradise, a stunning seaside retreat located in the tranquil bay of Prigradica-Kurija on the beautiful island of Korčula. This charming villa offers breathtaking views of the Adriatic Sea, providing the perfect setting for a relaxing getaway. Enjoy exclusive access to your own private beach, just steps away from the villa. With three spacious bedrooms, two modern bathrooms, and two inviting living rooms, the villa comfortably accommodates guests seeking both comfort and style. Fully equipped kitchen, private parking, and an expansive terrace for enjoying the sea breeze and stunning sunsets.',
  },
  shortDescription: {
    hr: 'Vila uz more u Prigradici — 3 sobe, 2 kupaonice, privatna plaža',
    en: 'Seaside villa in Prigradica — 3 bedrooms, 2 bathrooms, private beach',
  },
  heroImage: `${PRIGRADICA}/prigradica1.jpg`,
  mainImage: `${PRIGRADICA}/prigradica1.jpg`,
  gallery: [
    { src: `${PRIGRADICA}/prigradica1.jpg`, alt: { hr: 'Villa Prigradica Paradise - Pogled', en: 'Villa Prigradica Paradise - View' } },
    { src: `${PRIGRADICA}/prigradica2.jpg`, alt: { hr: 'Villa Prigradica Paradise - Eksterijer', en: 'Villa Prigradica Paradise - Exterior' } },
    { src: `${PRIGRADICA}/prigradica3.jpg`, alt: { hr: 'Villa Prigradica Paradise - Pogled na more', en: 'Villa Prigradica Paradise - Sea view' } },
    { src: `${PRIGRADICA}/prigradica4.jpg`, alt: { hr: 'Villa Prigradica Paradise - Terasa', en: 'Villa Prigradica Paradise - Terrace' } },
    { src: `${PRIGRADICA}/prigradica5.jpg`, alt: { hr: 'Villa Prigradica Paradise - Interijer', en: 'Villa Prigradica Paradise - Interior' } },
    { src: `${PRIGRADICA}/prigradica6.jpg`, alt: { hr: 'Villa Prigradica Paradise - Dnevni boravak', en: 'Villa Prigradica Paradise - Living room' } },
    { src: `${PRIGRADICA}/prigradica7.jpg`, alt: { hr: 'Villa Prigradica Paradise - Kuhinja', en: 'Villa Prigradica Paradise - Kitchen' } },
    { src: `${PRIGRADICA}/prigradica8.jpg`, alt: { hr: 'Villa Prigradica Paradise - Spavaća soba', en: 'Villa Prigradica Paradise - Bedroom' } },
    { src: `${PRIGRADICA}/prigradica9.jpg`, alt: { hr: 'Villa Prigradica Paradise - Kupaonica', en: 'Villa Prigradica Paradise - Bathroom' } },
    { src: `${PRIGRADICA}/prigradica10.jpg`, alt: { hr: 'Villa Prigradica Paradise - Terasa', en: 'Villa Prigradica Paradise - Terrace' } },
    { src: `${PRIGRADICA}/prigradica11.jpg`, alt: { hr: 'Villa Prigradica Paradise - Pogled', en: 'Villa Prigradica Paradise - View' } },
    { src: `${PRIGRADICA}/prigradica12.jpg`, alt: { hr: 'Villa Prigradica Paradise - Plaža', en: 'Villa Prigradica Paradise - Beach' } },
    { src: `${PRIGRADICA}/prigradica13.jpg`, alt: { hr: 'Villa Prigradica Paradise - More', en: 'Villa Prigradica Paradise - Sea' } },
    { src: `${PRIGRADICA}/prigradica14.jpg`, alt: { hr: 'Villa Prigradica Paradise - Uvala', en: 'Villa Prigradica Paradise - Cove' } },
    { src: `${PRIGRADICA}/prigradica15.jpg`, alt: { hr: 'Villa Prigradica Paradise - Vanjski prostor', en: 'Villa Prigradica Paradise - Outdoor space' } },
    { src: `${PRIGRADICA}/prigradica16.jpg`, alt: { hr: 'Villa Prigradica Paradise - Pogled', en: 'Villa Prigradica Paradise - View' } },
    { src: `${PRIGRADICA}/prigradica17.jpg`, alt: { hr: 'Villa Prigradica Paradise - Zalazak sunca', en: 'Villa Prigradica Paradise - Sunset' } },
    { src: `${PRIGRADICA}/prigradica18.jpg`, alt: { hr: 'Villa Prigradica Paradise - Okolica', en: 'Villa Prigradica Paradise - Surroundings' } },
    { src: `${PRIGRADICA}/prigradica19.jpg`, alt: { hr: 'Villa Prigradica Paradise - Vila', en: 'Villa Prigradica Paradise - Villa' } },
    { src: `${PRIGRADICA}/prigradica20.jpg`, alt: { hr: 'Villa Prigradica Paradise - Pogled na more', en: 'Villa Prigradica Paradise - Sea view' } },
    { src: `${PRIGRADICA}/prigradica21.jpg`, alt: { hr: 'Villa Prigradica Paradise - Terasa', en: 'Villa Prigradica Paradise - Terrace' } },
    { src: `${PRIGRADICA}/prigradica22.jpg`, alt: { hr: 'Villa Prigradica Paradise - Interijer', en: 'Villa Prigradica Paradise - Interior' } },
    { src: `${PRIGRADICA}/prigradica23.jpg`, alt: { hr: 'Villa Prigradica Paradise - Dnevni boravak', en: 'Villa Prigradica Paradise - Living room' } },
    { src: `${PRIGRADICA}/prigradica24.jpg`, alt: { hr: 'Villa Prigradica Paradise - Pogled', en: 'Villa Prigradica Paradise - View' } },
    { src: `${PRIGRADICA}/prigradica25.jpg`, alt: { hr: 'Villa Prigradica Paradise - Detalj', en: 'Villa Prigradica Paradise - Detail' } },
    { src: `${PRIGRADICA}/prigradica26.jpg`, alt: { hr: 'Villa Prigradica Paradise - Plaža', en: 'Villa Prigradica Paradise - Beach' } },
    { src: `${PRIGRADICA}/prigradica27.jpg`, alt: { hr: 'Villa Prigradica Paradise - More', en: 'Villa Prigradica Paradise - Sea' } },
    { src: `${PRIGRADICA}/prigradica28.jpg`, alt: { hr: 'Villa Prigradica Paradise - Uvala Prigradica', en: 'Villa Prigradica Paradise - Prigradica bay' } },
    { src: `${PRIGRADICA}/prigradica29.jpg`, alt: { hr: 'Villa Prigradica Paradise - Pogled', en: 'Villa Prigradica Paradise - View' } },
  ],
  capacity: {
    people: 8,
    bedrooms: 3,
    bathrooms: 2,
  },
  amenities: [
    { icon: 'beach', description: { hr: 'Privatna plaža', en: 'Private beach' } },
    { icon: 'wifi', description: { hr: 'Wi-Fi', en: 'Wi-Fi' } },
    { icon: 'kitchen', description: { hr: 'Potpuno opremljena kuhinja', en: 'Fully equipped kitchen' } },
    { icon: 'terrace', description: { hr: 'Prostrana terasa s pogledom', en: 'Expansive terrace with sea view' } },
    { icon: 'parking', description: { hr: 'Privatno parkiranje', en: 'Private parking' } },
    { icon: 'sun', description: { hr: 'Pogled na zalazak sunca', en: 'Sunset views' } },
    { icon: 'shower', description: { hr: '2 moderne kupaonice', en: '2 modern bathrooms' } },
  ],
  additionalServices: [
    { hr: 'Transfer iz zračne luke - Organiziramo prijevoz iz Splita ili Dubrovnika', en: 'Airport transfer - We organize transport from Split or Dubrovnik' },
    { hr: 'Iznajmljivanje čamaca - Istražite otok s našim partnerima', en: 'Boat rental - Explore the island with our partners' },
    { hr: 'Preporuke restorana - Najbolji lokalni restorani u Prigradici', en: 'Restaurant recommendations - Best local restaurants in Prigradica' },
    { hr: 'Turistički vodič - Preporuke za aktivnosti i atrakcije', en: 'Tourist guide - Recommendations for activities and attractions' },
    { hr: 'Pranje rublja - Usluga pranja i glačanja', en: 'Laundry service - Washing and ironing service' },
    { hr: 'Dostava namirnica - Naručite namirnice prije dolaska', en: 'Grocery delivery - Order groceries before arrival' },
  ],
  reviews: [],
  faq: [
    {
      question: {
        hr: 'Kada je check-in?',
        en: 'What are check-in times?',
      },
      answer: {
        hr: 'Check-in je od 15:00, check-out do 10:00.',
        en: 'Check-in is from 15:00, check-out until 10:00.',
      },
    },
    {
      question: {
        hr: 'Politika otkazivanja?',
        en: 'Cancellation policy?',
      },
      answer: {
        hr: 'Besplatno otkazivanje do 7 dana prije dolaska.',
        en: 'Free cancellation up to 7 days before arrival.',
      },
    },
    {
      question: {
        hr: 'Ima li parking?',
        en: 'Is parking available?',
      },
      answer: {
        hr: 'Da, privatno parkiranje je uključeno.',
        en: 'Yes, private parking is included.',
      },
    },
    {
      question: {
        hr: 'Koliko je udaljena plaža?',
        en: 'How far is the beach?',
      },
      answer: {
        hr: 'Privatna plaža je samo nekoliko koraka od vile.',
        en: 'The private beach is just steps away from the villa.',
      },
    },
    {
      question: {
        hr: 'Ima li Wi-Fi?',
        en: 'Is there Wi-Fi?',
      },
      answer: {
        hr: 'Da, Wi-Fi je dostupan u cijeloj vili.',
        en: 'Yes, Wi-Fi is available throughout the villa.',
      },
    },
  ],
  contact: {
    phone: contactInfo.phone,
    whatsapp: contactInfo.whatsapp,
    email: contactInfo.email,
  },
  usps: [
    { key: 'beachfront' },
    { key: 'seaView' },
    { key: 'privateTerrace' },
    { key: 'freeParking' },
    { key: 'fastWifi' },
  ],
  checkIn: '15:00',
  checkOut: '10:00',
  keywords: {
    hr: 'vila, prigradica, kurija, korčula, smještaj, privatna plaža, more, odmor',
    en: 'villa, prigradica, kurija, korcula, accommodation, private beach, sea, vacation',
  },
  content: {
    location: {
      subtitle: { hr: 'U uvali Prigradica-Kurija na otoku Korčuli', en: 'In Prigradica-Kurija bay on the island of Korčula' },
      fromSplit: { hr: 'Iz Splita: trajekt do Vele Luke (2.5h), zatim vožnja do Prigradice (~15 min)', en: 'From Split: ferry to Vela Luka (2.5h), then drive to Prigradica (~15 min)' },
      fromDubrovnik: { hr: 'Iz Dubrovnika: trajekt do Vele Luke (1.5h), zatim vožnja do Prigradice (~15 min)', en: 'From Dubrovnik: ferry to Vela Luka (1.5h), then drive to Prigradica (~15 min)' },
      localTransport: { hr: 'Od trajektne luke do Prigradice: oko 15 minuta vožnje', en: 'From ferry port to Prigradica: about 15 minutes drive' },
      nearby: [
        { hr: 'Privatna plaža - odmah do vile', en: 'Private beach - right at the villa' },
        { hr: 'Restorani - u Prigradici (5 min)', en: 'Restaurants - in Prigradica (5 min)' },
        { hr: 'Trgovina - u Blatu (10 min)', en: 'Shop - in Blato (10 min)' },
        { hr: 'Ljekarna - u Blatu (10 min)', en: 'Pharmacy - in Blato (10 min)' },
      ],
    },
    about: {
      subtitle: { hr: 'Vaš dom u srcu Mediterana', en: 'Your home in the heart of the Mediterranean' },
    },
  },
};
