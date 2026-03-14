/**
 * Villa Aquamare Property Data
 * Stable ID: property_villa_aquamare
 */

import type { BaseProperty } from '../types';
import { contactInfo } from '../contact';

export const villaAquamare: BaseProperty = {
  id: 'property_villa_aquamare',
  slug: 'villa-aquamare',
  name: {
    hr: 'Villa Aquamare',
    en: 'Villa Aquamare',
  },
  location: {
    hr: 'Vela Luka, Korčula',
    en: 'Vela Luka, Korčula',
  },
  coordinates: {
    latitude: 42.9631,
    longitude: 16.7222,
  },
  googleMaps: {
    embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14559.582017316408!2d16.711350429310116!3d42.958613119434006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a713378eda8ef%3A0x9918a273998bc1a2!2sVilla%20Aquamare!5e0!3m2!1shr!2shr!4v1755541633084!5m2!1shr!2shr',
    linkUrl: 'https://maps.app.goo.gl/BJEZmcu8VxmjRSFd8',
  },
  description: {
    hr: 'Villa Aquamare je moderna vila smještena u prekrasnoj Veloj Luci na otoku Korčuli. Uživajte u direktnom pristupu moru, prekrasnim pogledima i svim udobnostima koje trebate za savršen odmor.',
    en: 'Villa Aquamare is a modern villa located in beautiful Vela Luka on the island of Korčula. Enjoy direct sea access, stunning views, and all the comforts you need for a perfect vacation.',
  },
  shortDescription: {
    hr: 'Moderna vila uz more u Veloj Luci — rezervirajte direktno po najboljoj cijeni',
    en: 'Modern seafront villa in Vela Luka — book direct for the best rate',
  },
  heroImage: '/images/dron.jpg',
  mainImage: '/images/dron.jpg',
  gallery: [
    { src: '/images/velaluka4.jpg', alt: { hr: 'Villa Aquamare - Pogled na more', en: 'Villa Aquamare - Sea view' } },
    { src: '/images/velaluka2.jpg', alt: { hr: 'Villa Aquamare - Eksterijer', en: 'Villa Aquamare - Exterior' } },
    { src: '/images/velaluka3.jpg', alt: { hr: 'Villa Aquamare - Terasa', en: 'Villa Aquamare - Terrace' } },
    { src: '/images/velaluka.jpg', alt: { hr: 'Villa Aquamare - Dnevni boravak', en: 'Villa Aquamare - Living room' } },
    { src: '/images/349336069.webp', alt: { hr: 'Villa Aquamare - Kuhinja', en: 'Villa Aquamare - Kitchen' } },
    { src: '/images/349334426.webp', alt: { hr: 'Villa Aquamare - Spavaća soba', en: 'Villa Aquamare - Bedroom' } },
    { src: '/images/349333765.webp', alt: { hr: 'Villa Aquamare - Kupaonica', en: 'Villa Aquamare - Bathroom' } },
    { src: '/images/349336369.webp', alt: { hr: 'Villa Aquamare - Bazen', en: 'Villa Aquamare - Pool area' } },
    { src: '/images/481041700.webp', alt: { hr: 'Villa Aquamare - Vrt', en: 'Villa Aquamare - Garden' } },
    { src: '/images/481041392.webp', alt: { hr: 'Villa Aquamare - Blagovaonica', en: 'Villa Aquamare - Dining area' } },
    { src: '/images/481041478.webp', alt: { hr: 'Villa Aquamare - Balkon', en: 'Villa Aquamare - Balcony' } },
    { src: '/images/481041562.webp', alt: { hr: 'Villa Aquamare - Pogled', en: 'Villa Aquamare - View' } },
    { src: '/images/481041620.webp', alt: { hr: 'Villa Aquamare - Pogled s terase', en: 'Villa Aquamare - Terrace view' } },
    { src: '/images/481041746.webp', alt: { hr: 'Villa Aquamare - Pogled na vrt', en: 'Villa Aquamare - Garden view' } },
    { src: '/images/349334614.webp', alt: { hr: 'Villa Aquamare - Interijer detalj', en: 'Villa Aquamare - Interior detail' } },
    { src: '/images/222533758.webp', alt: { hr: 'Villa Aquamare - Pogled na lokaciju', en: 'Villa Aquamare - Location view' } },
    { src: '/images/222819596.webp', alt: { hr: 'Villa Aquamare - Pogled na more 2', en: 'Villa Aquamare - Sea view 2' } },
    { src: '/images/222267459.webp', alt: { hr: 'Villa Aquamare - Detalj eksterijera', en: 'Villa Aquamare - Exterior detail' } },
    { src: '/images/221928316.webp', alt: { hr: 'Villa Aquamare - Pogled na plažu', en: 'Villa Aquamare - Beach view' } },
    { src: '/images/285689169.webp', alt: { hr: 'Villa Aquamare - Pogled na zalazak sunca', en: 'Villa Aquamare - Sunset view' } },
    { src: '/images/285689169 (1).webp', alt: { hr: 'Villa Aquamare - Večernji pogled', en: 'Villa Aquamare - Evening view' } },
  ],
  capacity: {
    people: 8,
    bedrooms: 3,
    bathrooms: 3,
  },
  amenities: [
    { icon: 'beach', description: { hr: 'Privatni pristup plaži', en: 'Private beach access' } },
    { icon: 'wifi', description: { hr: 'Brzi besplatni Wi-Fi', en: 'Fast free Wi-Fi' } },
    { icon: 'ac', description: { hr: 'Klima uređaj u svim sobama', en: 'Air conditioning in all rooms' } },
    { icon: 'parking', description: { hr: 'Besplatno parkiranje', en: 'Free parking' } },
    { icon: 'kitchen', description: { hr: 'Potpuno opremljena kuhinja', en: 'Fully equipped kitchen' } },
    { icon: 'terrace', description: { hr: 'Privatna terasa s pogledom', en: 'Private terrace with view' } },
    { icon: 'bbq', description: { hr: 'Roštilj na terasi', en: 'BBQ on terrace' } },
    { icon: 'coffee', description: { hr: 'Besplatna kava i čaj', en: 'Free coffee and tea' } },
    { icon: 'tv', description: { hr: 'Smart TV s Netflix', en: 'Smart TV with Netflix' } },
    { icon: 'shower', description: { hr: 'Vrući tuš 24/7', en: 'Hot shower 24/7' } },
    { icon: 'sun', description: { hr: 'Sunčana terasa', en: 'Sunny terrace' } },
    { icon: 'umbrella', description: { hr: 'Sjenice i suncobrani', en: 'Shades and umbrellas' } },
  ],
  additionalServices: [
    { hr: 'Transfer iz zračne luke - Organiziramo prijevoz iz Splita ili Dubrovnika', en: 'Airport transfer - We organize transport from Split or Dubrovnik' },
    { hr: 'Iznajmljivanje čamaca - Istražite otok s našim partnerima', en: 'Boat rental - Explore the island with our partners' },
    { hr: 'Preporuke restorana - Najbolji lokalni restorani i konobe', en: 'Restaurant recommendations - Best local restaurants and konobas' },
    { hr: 'Turistički vodič - Preporuke za aktivnosti i atrakcije', en: 'Tourist guide - Recommendations for activities and attractions' },
    { hr: 'Pranje rublja - Usluga pranja i glačanja', en: 'Laundry service - Washing and ironing service' },
    { hr: 'Dostava namirnica - Naručite namirnice prije dolaska', en: 'Grocery delivery - Order groceries before arrival' },
  ],
  reviews: [
    {
      id: 1,
      name: 'Ana & Marko',
      location: 'Zagreb, Hrvatska',
      rating: 5,
      text: {
        hr: 'Savršen odmor! Vila je prekrasna, direktno uz more. Uživali smo u svakom trenutku. Vlasnici su bili vrlo gostoljubivi i pomogli su nam oko svega što smo trebali. Definitivno ćemo se vratiti!',
        en: 'Perfect vacation! The villa is beautiful, right by the sea. We enjoyed every moment. The owners were very hospitable and helped us with everything we needed. We will definitely return!',
      },
      date: 'Kolovoz 2023',
    },
    {
      id: 2,
      name: 'Sarah & John',
      location: 'London, UK',
      rating: 5,
      text: {
        hr: 'Nevjerojatna vila s prekrasnim pogledom na more! Lokacija je savršena, samo nekoliko koraka od plaže. Vila je moderna, čista i ima sve što trebate. Domaćini su bili nevjerojatno pomoćni i učinili su naš boravak nezaboravnim.',
        en: 'Amazing villa with stunning sea views! The location is perfect, just steps from the beach. The villa is modern, clean, and has everything you need. The hosts were incredibly helpful and made our stay unforgettable.',
      },
      date: 'July 2023',
    },
    {
      id: 3,
      name: 'Petar & Marija',
      location: 'Split, Hrvatska',
      rating: 5,
      text: {
        hr: 'Odlična vila s prekrasnim pogledom na more. Terasa je savršena za večernje druženje. Sve je bilo čisto i uređeno. Preporučujemo svima!',
        en: 'Excellent villa with beautiful sea view. The terrace is perfect for evening gatherings. Everything was clean and tidy. We recommend to everyone!',
      },
      date: 'Rujan 2023',
    },
    {
      id: 4,
      name: 'Michael & Lisa',
      location: 'Berlin, Germany',
      rating: 5,
      text: {
        hr: 'Savršena lokacija i prekrasna vila! Voljeli smo privatnu terasu i pogled na more. Vila je dobro opremljena i domaćini su bili vrlo ljubazni. Definitivno ćemo se vratiti!',
        en: 'Perfect location and beautiful villa! We loved the private terrace and the sea view. The villa is well-equipped and the hosts were very friendly. We will definitely come back!',
      },
      date: 'June 2023',
    },
    {
      id: 5,
      name: 'Ivan & Petra',
      location: 'Rijeka, Hrvatska',
      rating: 5,
      text: {
        hr: 'Fantastičan odmor u prekrasnoj vili. Pogled na more je nevjerojatan, a terasa je idealna za uživanje. Sve je bilo savršeno organizirano.',
        en: 'Fantastic vacation in a beautiful villa. The sea view is incredible, and the terrace is ideal for relaxation. Everything was perfectly organized.',
      },
      date: 'Srpanj 2023',
    },
    {
      id: 6,
      name: 'Emma & David',
      location: 'Amsterdam, Netherlands',
      rating: 5,
      text: {
        hr: 'Prekrasna vila na savršenoj lokaciji! Pogled na more je zapanjujući i vila ima sve što trebate za udoban boravak. Toplo preporučujemo!',
        en: 'Beautiful villa in a perfect location! The sea view is breathtaking and the villa has everything you need for a comfortable stay. Highly recommended!',
      },
      date: 'August 2023',
    },
  ],
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
        hr: 'Da, besplatno parkiranje je uključeno.',
        en: 'Yes, free parking is included.',
      },
    },
    {
      question: {
        hr: 'Dozvoljeni kućni ljubimci?',
        en: 'Are pets allowed?',
      },
      answer: {
        hr: 'Nažalost, kućni ljubimci nisu dozvoljeni.',
        en: 'Unfortunately, pets are not allowed.',
      },
    },
    {
      question: {
        hr: 'Koliko je udaljena plaža?',
        en: 'How far is the beach?',
      },
      answer: {
        hr: 'Vila se nalazi direktno uz more.',
        en: 'The villa is located directly by the sea.',
      },
    },
    {
      question: {
        hr: 'Kolika je brzina Wi-Fi-a?',
        en: 'What is the Wi-Fi speed?',
      },
      answer: {
        hr: 'Brzi Wi-Fi dostupan je u cijeloj vili.',
        en: 'Fast Wi-Fi is available throughout the villa.',
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
    { key: 'airConditioning' },
  ],
  checkIn: '15:00',
  checkOut: '10:00',
  keywords: {
    hr: 'vila, korčula, vela luka, smještaj, apartman, more, odmor',
    en: 'villa, korcula, vela luka, accommodation, apartment, sea, vacation',
  },
};

