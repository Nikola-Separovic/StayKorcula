/**
 * Holiday House Kata Babina Property Data
 * Stable ID: property_holiday_house_kata_babina
 *
 * House with 3 bedrooms, 2 bathrooms
 * Located in Babina cove on Korčula island
 * Sea view, beach right next to the house
 * WiFi, kitchen, balcony, garden. No AC.
 */

import type { BaseProperty } from '../types';
import { contactInfo } from '../contact';

const BABINA = '/images/BABINA';

export const holidayHouseKataBabina: BaseProperty = {
  id: 'property_holiday_house_kata_babina',
  slug: 'holiday-house-kata-babina',
  name: {
    hr: 'Holiday House Kata Babina',
    en: 'Holiday House Kata Babina',
  },
  location: {
    hr: 'Babina, Korčula',
    en: 'Babina, Korčula',
  },
  coordinates: {
    latitude: 42.96,
    longitude: 16.72,
  },
  googleMaps: {
    embedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.5125869298377!2d16.926251076323503!3d42.967474871143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a42bbc18c8681%3A0xff7a4cbdba62ff54!2sBabina%2011%2C%2020260%2C%20%C4%8Cara!5e0!3m2!1shr!2shr!4v1773260877932!5m2!1shr!2shr',
    linkUrl: 'https://maps.app.goo.gl/GANt3C6TfsR35SDKA',
  },
  description: {
    hr: 'Kuća s 3 spavaće sobe i 2 kupaonice, smještena u uvali Babina na otoku Korčuli. Uživajte u lijepom pogledu na more, plaža je odmah do kuće. Kuća ima Wi-Fi, potpuno opremljenu kuhinju, balkon i vrt. Idealno za obiteljski odmor u miru mediteranske prirode.',
    en: 'House with 3 bedrooms and 2 bathrooms, located in Babina cove on the island of Korčula. Enjoy a beautiful sea view with the beach right next to the house. The house has Wi-Fi, a fully equipped kitchen, balcony, and garden. Ideal for a family vacation in the peace of Mediterranean nature.',
  },
  shortDescription: {
    hr: 'Kuća u uvali Babina — 3 sobe, 2 kupaonice, plaža odmah do kuće',
    en: 'House in Babina cove — 3 bedrooms, 2 bathrooms, beach right next to the house',
  },
  heroImage: `${BABINA}/babina1.jpg`,
  mainImage: `${BABINA}/babina20.jpg`,
  gallery: [
    { src: `${BABINA}/babina1.jpg`, alt: { hr: 'Holiday House Kata Babina - Pogled', en: 'Holiday House Kata Babina - View' } },
    { src: `${BABINA}/babina2.jpg`, alt: { hr: 'Holiday House Kata Babina - Eksterijer', en: 'Holiday House Kata Babina - Exterior' } },
    { src: `${BABINA}/babina3.jpg`, alt: { hr: 'Holiday House Kata Babina - Pogled na more', en: 'Holiday House Kata Babina - Sea view' } },
    { src: `${BABINA}/babina4.jpg`, alt: { hr: 'Holiday House Kata Babina - Terasa', en: 'Holiday House Kata Babina - Terrace' } },
    { src: `${BABINA}/babina5.jpg`, alt: { hr: 'Holiday House Kata Babina - Interijer', en: 'Holiday House Kata Babina - Interior' } },
    { src: `${BABINA}/babina6.jpg`, alt: { hr: 'Holiday House Kata Babina - Dnevni boravak', en: 'Holiday House Kata Babina - Living room' } },
    { src: `${BABINA}/babina7.jpg`, alt: { hr: 'Holiday House Kata Babina - Kuhinja', en: 'Holiday House Kata Babina - Kitchen' } },
    { src: `${BABINA}/babina8.jpg`, alt: { hr: 'Holiday House Kata Babina - Spavaća soba', en: 'Holiday House Kata Babina - Bedroom' } },
    { src: `${BABINA}/babina9.jpg`, alt: { hr: 'Holiday House Kata Babina - Kupaonica', en: 'Holiday House Kata Babina - Bathroom' } },
    { src: `${BABINA}/babina10.jpg`, alt: { hr: 'Holiday House Kata Babina - Balkon', en: 'Holiday House Kata Babina - Balcony' } },
    { src: `${BABINA}/babina11.jpg`, alt: { hr: 'Holiday House Kata Babina - Vrt', en: 'Holiday House Kata Babina - Garden' } },
    { src: `${BABINA}/babina12.jpg`, alt: { hr: 'Holiday House Kata Babina - Pogled na uvalu', en: 'Holiday House Kata Babina - Cove view' } },
    { src: `${BABINA}/babina13.jpg`, alt: { hr: 'Holiday House Kata Babina - Plaža', en: 'Holiday House Kata Babina - Beach' } },
    { src: `${BABINA}/babina14.jpg`, alt: { hr: 'Holiday House Kata Babina - Detalj', en: 'Holiday House Kata Babina - Detail' } },
    { src: `${BABINA}/babina15.jpg`, alt: { hr: 'Holiday House Kata Babina - Vanjski prostor', en: 'Holiday House Kata Babina - Outdoor space' } },
    { src: `${BABINA}/babina16.jpg`, alt: { hr: 'Holiday House Kata Babina - Pogled', en: 'Holiday House Kata Babina - View' } },
    { src: `${BABINA}/babina17.jpg`, alt: { hr: 'Holiday House Kata Babina - More', en: 'Holiday House Kata Babina - Sea' } },
    { src: `${BABINA}/babina18.jpg`, alt: { hr: 'Holiday House Kata Babina - Okolica', en: 'Holiday House Kata Babina - Surroundings' } },
    { src: `${BABINA}/babina19.jpg`, alt: { hr: 'Holiday House Kata Babina - Kuća', en: 'Holiday House Kata Babina - House' } },
    { src: `${BABINA}/babina20.jpg`, alt: { hr: 'Holiday House Kata Babina - Uvala Babina', en: 'Holiday House Kata Babina - Babina cove' } },
    { src: `${BABINA}/babina21.jpg`, alt: { hr: 'Holiday House Kata Babina - Pogled na more', en: 'Holiday House Kata Babina - Sea view' } },
    { src: `${BABINA}/babina22.jpg`, alt: { hr: 'Holiday House Kata Babina - Detalj', en: 'Holiday House Kata Babina - Detail' } },
    { src: `${BABINA}/babina23.jpg`, alt: { hr: 'Holiday House Kata Babina - Interijer', en: 'Holiday House Kata Babina - Interior' } },
    { src: `${BABINA}/babina24.jpg`, alt: { hr: 'Holiday House Kata Babina - Pogled', en: 'Holiday House Kata Babina - View' } },
    { src: `${BABINA}/babina25.jpg`, alt: { hr: 'Holiday House Kata Babina - Terasa', en: 'Holiday House Kata Babina - Terrace' } },
    { src: `${BABINA}/babina26.jpg`, alt: { hr: 'Holiday House Kata Babina - Okolica', en: 'Holiday House Kata Babina - Surroundings' } },
  ],
  capacity: {
    people: 6,
    bedrooms: 3,
    bathrooms: 2,
  },
  amenities: [
    { icon: 'beach', description: { hr: 'Plaža odmah do kuće', en: 'Beach right next to the house' } },
    { icon: 'wifi', description: { hr: 'Wi-Fi', en: 'Wi-Fi' } },
    { icon: 'kitchen', description: { hr: 'Potpuno opremljena kuhinja', en: 'Fully equipped kitchen' } },
    { icon: 'terrace', description: { hr: 'Balkon s pogledom', en: 'Balcony with view' } },
    { icon: 'sun', description: { hr: 'Ležaljke na terasi', en: 'Sunbeds on terrace' } },
    { icon: 'shower', description: { hr: '2 kupaonice', en: '2 bathrooms' } },
  ],
  content: {
    location: {
      subtitle: { hr: 'U uvali Babina na otoku Korčuli', en: 'In Babina cove on the island of Korčula' },
      fromSplit: { hr: 'Iz Splita: trajekt do Vele Luke (2.5h), zatim vožnja do Babine (~15 min)', en: 'From Split: ferry to Vela Luka (2.5h), then drive to Babina (~15 min)' },
      fromDubrovnik: { hr: 'Iz Dubrovnika: trajekt do Vele Luke (1.5h), zatim vožnja do Babine (~15 min)', en: 'From Dubrovnik: ferry to Vela Luka (1.5h), then drive to Babina (~15 min)' },
      localTransport: { hr: 'Od trajektne luke do Babine: oko 15 minuta vožnje', en: 'From ferry port to Babina: about 15 minutes drive' },
      nearby: [
        { hr: 'Plaža - odmah do kuće', en: 'Beach - right next to the house' },
        { hr: 'Restorani - u Prigradici (5 min)', en: 'Restaurants - in Prigradica (5 min)' },
        { hr: 'Trgovina - u Blatu (10 min)', en: 'Shop - in Blato (10 min)' },
        { hr: 'Ljekarna - u Blatu (10 min)', en: 'Pharmacy - in Blato (10 min)' },
      ],
    },
    about: {
      subtitle: { hr: 'Vaš dom u srcu Mediterana', en: 'Your home in the heart of the Mediterranean' },
    },
  },
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
        hr: 'Ima li klima uređaj?',
        en: 'Is there air conditioning?',
      },
      answer: {
        hr: 'Kuća nema klima uređaj.',
        en: 'The house does not have air conditioning.',
      },
    },
    {
      question: {
        hr: 'Koliko je udaljena plaža?',
        en: 'How far is the beach?',
      },
      answer: {
        hr: 'Plaža je odmah do kuće.',
        en: 'The beach is right next to the house.',
      },
    },
    {
      question: {
        hr: 'Ima li Wi-Fi?',
        en: 'Is there Wi-Fi?',
      },
      answer: {
        hr: 'Da, Wi-Fi je dostupan.',
        en: 'Yes, Wi-Fi is available.',
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
    { key: 'fastWifi' },
  ],
  checkIn: '15:00',
  checkOut: '10:00',
  keywords: {
    hr: 'kuća, babina, korčula, smještaj, plaža, odmor, uvala',
    en: 'house, babina, korcula, accommodation, beach, vacation, cove',
  },
};
