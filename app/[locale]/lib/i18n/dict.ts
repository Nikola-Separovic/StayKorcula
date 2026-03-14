import type { Locale } from '../utils/resolveLocale';

export const dictionaries = {
  hr: {
    // Navigation
    nav: {
      home: 'Početna',
      accommodations: 'Smještaj',
      services: 'Usluge',
      about: 'O nama',
      gallery: 'Galerija',
      amenities: 'Sadržaji',
      location: 'Lokacija',
      reviews: 'Recenzije',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
    
    // Hero Section
    hero: {
      headline: 'Vaš mediteranski bijeg na Korčuli',
      subheadline: 'Moderna vila uz more u Veloj Luci — rezervirajte direktno po najboljoj cijeni',
      bookDirect: 'Rezervirajte direktno',
      viewGallery: 'Pogledajte galeriju',
      whatsapp: 'WhatsApp',
      call: 'Pozovite',
    },
    
    // USPs
    usps: {
      beachfront: 'Uz more',
      seaView: 'Pogled na more',
      privateTerrace: 'Privatna terasa',
      freeParking: 'Besplatno parkiranje',
      fastWifi: 'Brzi Wi-Fi',
      airConditioning: 'Klima uređaj',
    },
    
    // About Section
    about: {
      title: 'O Villa Aquamare',
      subtitle: 'Vaš dom u srcu Mediterana',
      description: 'Villa Aquamare je moderna vila smještena u prekrasnoj Veloj Luci na otoku Korčuli. Uživajte u direktnom pristupu moru, prekrasnim pogledima i svim udobnostima koje trebate za savršen odmor.',
      location: 'Vela Luka, Korčula, Hrvatska',
      learnMore: 'Saznajte više',
    },
    
    // Gallery
    gallery: {
      title: 'Galerija',
      subtitle: 'Pogledajte naše prekrasne prostorije',
      viewAll: 'Pogledajte sve',
    },
    
    // Amenities
    amenities: {
      title: 'Sadržaji',
      subtitle: 'Sve što trebate za savršen odmor',
      beach: 'Plaža',
      pool: 'Bazen',
      wifi: 'Wi-Fi',
      ac: 'Klima uređaj',
      parking: 'Parkiranje',
      kitchen: 'Kuhinja',
      terrace: 'Terasa',
      bbq: 'Roštilj',
      coffee: 'Kava i čaj',
      tv: 'Smart TV',
      shower: 'Vrući tuš',
      sun: 'Sunčana terasa',
      umbrella: 'Sjenice',
    },
    
    // Location
    location: {
      title: 'Lokacija',
      subtitle: 'U srcu prekrasne Vele Luke',
      address: 'Vela Luka, Korčula, Hrvatska',
      directions: 'Kako doći',
      fromSplit: 'Iz Splita: trajekt do Vele Luke (2.5h)',
      fromDubrovnik: 'Iz Dubrovnika: trajekt do Vele Luke (1.5h)',
      localTransport: 'Od trajektne luke do vile: 5-10 minuta vožnje',
      localTransportNote: 'Možemo organizirati transfer iz luke',
      nearbyLabel: 'U blizini:',
      nearby: ['Plaža - 2 min', 'Restorani - 5 min', 'Trgovina - 3 min', 'Ljekarna - 5 min'],
      openInMaps: 'Otvori u Google Maps',
    },
    
    // Reviews
    reviews: {
      title: 'Što kažu naši gosti',
      subtitle: 'Iskustva koja nas čine ponosnima',
      rating: 'Ocjena',
      stars: 'zvjezdica',
    },
    
    // FAQ
    faq: {
      title: 'Često postavljena pitanja',
      subtitle: 'Sve što trebate znati',
      checkIn: 'Kada je check-in?',
      checkInAnswer: 'Check-in je od 15:00, check-out do 10:00.',
      cancellation: 'Politika otkazivanja?',
      cancellationAnswer: 'Besplatno otkazivanje do 7 dana prije dolaska.',
      parking: 'Ima li parking?',
      parkingAnswer: 'Da, besplatno parkiranje je uključeno.',
      pets: 'Dozvoljeni kućni ljubimci?',
      petsAnswer: 'Nažalost, kućni ljubimci nisu dozvoljeni.',
      beachDistance: 'Koliko je udaljena plaža?',
      beachDistanceAnswer: 'Vila se nalazi direktno uz more.',
      wifiSpeed: 'Kolika je brzina Wi-Fi-a?',
      wifiSpeedAnswer: 'Brzi Wi-Fi dostupan je u cijeloj vili.',
    },
    
    // Contact & Booking
    contact: {
      title: 'Kontakt i rezervacija',
      subtitle: 'Rezervirajte direktno i uštedite',
      form: {
        name: 'Ime i prezime',
        email: 'Email',
        phone: 'Telefon',
        checkIn: 'Datum dolaska',
        checkOut: 'Datum odlaska',
        guests: 'Broj gostiju',
        message: 'Poruka',
        submit: 'Pošaljite upit',
        submitting: 'Slanje...',
        success: 'Hvala! Uskoro ćemo vas kontaktirati.',
        error: 'Greška. Molimo pokušajte ponovno.',
        inquiryTitle: 'Provjerite dostupnost',
      },
      trustElements: {
        bestPrice: 'Najbolja cijena direktne rezervacije',
        noFees: 'Bez naknada platforme',
        instantConfirmation: 'Trenutna potvrda',
      },
      contactInfo: {
        email: 'staykorcula@gmail.com',
        phone: '+385 95 822 3830',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
      },
      propertyPlaceholder: 'Smještaj',
    },
    
    // Footer
    footer: {
      address: 'Vela Luka, Korčula, Hrvatska',
      email: 'staykorcula@gmail.com',
      phone: '+385 95 822 3830',
      social: 'Društvene mreže',
      copyright: '© 2026 StayKorčula. Sva prava pridržana.',
    },
    
    // Common
    common: {
      loading: 'Učitavanje...',
      error: 'Greška',
      success: 'Uspješno',
      close: 'Zatvori',
      next: 'Sljedeće',
      previous: 'Prethodno',
      view: 'Pogledaj',
      book: 'Rezerviraj',
      bookNow: 'Rezervirajte sada',
      contact: 'Kontakt',
      propertyPlaceholder: 'Smještaj',
      readMore: 'Saznajte više',
      viewDetails: 'Pogledaj detalje',
      back: 'Natrag',
    },
    
    // Landing Page
    landing: {
      hero: {
        title: 'Otkrijte čari Korčule',
        subtitle: 'Vaš savršen odmor počinje ovdje. Vile, apartmani i usluge na jednom mjestu.',
        ctaAccommodations: 'Pogledajte smještaj',
        ctaServices: 'Istražite usluge',
        whatsapp: 'WhatsApp',
        call: 'Pozovite',
      },
      featuredProperties: {
        title: 'Izdvojeni smještaj',
        subtitle: 'Naša preporuka za vas',
        viewAll: 'Pogledajte sve',
        guests: 'gosti',
        bedrooms: 'sobe',
        bathrooms: 'kupaonice',
        viewDetails: 'Pogledaj detalje',
      },
      featuredServices: {
        title: 'Naše usluge',
        subtitle: 'Učinite svoj odmor još boljim',
        viewAll: 'Istražite sve',
        learnMore: 'Saznajte više',
      },
      about: {
        title: 'O StayKorčula',
        subtitle: 'Vaš partner za nezaboravan odmor',
        description: 'StayKorčula nudi pažljivo odabrane vile i apartmane na otoku Korčuli, uz niz dodatnih usluga za potpuno opuštanje i uživanje.',
        mission: 'Naša misija je pružiti vam autentično iskustvo otoka Korčule, kombinirajući udobnost modernog smještaja s ljepotom mediteranske prirode.',
        why: {
          title: 'Zašto rezervirati direktno?',
          directContact: 'Direktan kontakt s vlasnicima',
          bestPrice: 'Najbolja cijena bez provizija',
          trusted: 'Pouzdani lokalni partneri',
          fastResponse: 'Brzi odgovor na upite',
          professional: 'Profesionalna usluga',
          tailored: 'Prilagođena iskustva',
        },
      },
      island: {
        title: 'Otok Korčula',
        subtitle: 'Otkrijte ljepote našeg otoka',
        highlights: [
          { icon: '🏖️', title: 'Prekrasne plaže', description: 'Skrivene uvalice i kristalno čisto more' },
          { icon: '🍷', title: 'Vino i gastronomija', description: 'Najbolje vinske regije i lokalna kuhinja' },
          { icon: '🏛️', title: 'Povijesni grad', description: 'Stari grad Korčula s bogatom poviješću' },
          { icon: '⛵', title: 'Brodski izleti', description: 'Istražite okolne otoke i skrivene uvale' },
          { icon: '🌅', title: 'Nevjerojatni zalasci', description: 'Spektakularni pogledi na more i planine' },
          { icon: '🏃', title: 'Aktivnosti', description: 'Ronjenje, vožnja bicikla, šetnje prirodom' },
        ],
      },
      usp: {
        title: 'Zašto odabrati StayKorčula?',
        items: [
          { icon: '🤝', title: 'Direktan kontakt', description: 'Komunicirajte direktno s vlasnicima' },
          { icon: '💰', title: 'Najbolja cijena', description: 'Garancija najbolje cijene bez provizija' },
          { icon: '✅', title: 'Pouzdani partneri', description: 'Provjereni lokalni partneri' },
          { icon: '⚡', title: 'Brzi odgovor', description: 'Brzi odgovor na sve upite' },
          { icon: '🎯', title: 'Profesionalna usluga', description: 'Visokokvalitetna usluga' },
          { icon: '🎨', title: 'Prilagođeno', description: 'Prilagođena iskustva za vas' },
        ],
      },
      testimonials: {
        title: 'Što naši gosti kažu',
        subtitle: 'Iskustva naših zadovoljnih gostiju',
      },
      cta: {
        title: 'Spremni za odmor iz snova?',
        subtitle: 'Kontaktirajte nas danas i rezervirajte svoj boravak!',
        contactUs: 'Kontaktirajte nas',
        whatsapp: 'WhatsApp',
        call: 'Pozovite',
      },
      contact: {
        title: 'Kontaktirajte nas',
        subtitle: 'Mi smo tu da vam pomognemo oko svega što trebate',
        quickResponse: 'Odgovaramo u roku od 24 sata',
        email: 'Email',
        phone: 'Telefon',
        whatsapp: 'WhatsApp',
        sendMessage: 'Pošaljite poruku',
        bookNow: 'Rezervirajte sada',
      },
    },
    
    // Accommodations Listing
    accommodations: {
      title: 'Smještaj',
      subtitle: 'Odaberite savršenu opciju za vaš odmor',
      filter: {
        all: 'Sve',
        villas: 'Vile',
        apartments: 'Apartmani',
      },
      noResults: 'Nema rezultata',
      viewDetails: 'Pogledaj detalje',
      from: 'od',
      perNight: 'po noći',
    },
    
    // Services Listing
    services: {
      title: 'Usluge',
      subtitle: 'Sve što trebate za kompletan odmor',
      viewDetails: 'Saznajte više',
      category: {
        transport: 'Prijevoz',
        boat: 'Čamci',
        activity: 'Aktivnosti',
        other: 'Ostalo',
      },
      bookingRequired: 'Potrebna rezervacija',
      contactForPrice: 'Kontaktirajte za cijenu',
      from: 'od',
      per: 'po',
      hour: 'satu',
      day: 'danu',
      trip: 'turi',
      person: 'osobi',
      boats: 'čamaca',
      noResults: 'Nema dostupnih usluga',
    },
    
    // Service Page (dynamic)
    service: {
      hero: {
        bookNow: 'Rezervirajte sada',
        contactUs: 'Kontaktirajte nas',
        whatsapp: 'WhatsApp',
        call: 'Pozovite',
      },
      about: {
        title: 'O usluzi',
        overview: 'Pregled',
        duration: 'Trajanje',
        capacity: 'Kapacitet',
        availability: 'Dostupnost',
      },
      pricing: {
        title: 'Cijene',
        from: 'od',
        per: 'po',
        note: 'Napomena',
        contactForPrice: 'Kontaktirajte za cijenu',
      },
      included: {
        title: 'Što je uključeno',
        subtitle: 'Sve što vam treba je uključeno',
      },
      extras: {
        title: 'Dodatne opcije',
        subtitle: 'Proširite svoje iskustvo',
        per: 'po',
        hour: 'satu',
        day: 'danu',
        trip: 'turi',
        person: 'osobi',
      },
      gallery: {
        title: 'Galerija',
        viewAll: 'Pogledajte sve slike',
      },
      faq: {
        title: 'Često postavljana pitanja',
        subtitle: 'Pronađite odgovore na vaša pitanja',
      },
      contact: {
        title: 'Rezervacija i kontakt',
        subtitle: 'Kontaktirajte nas za rezervaciju ili više informacija',
        contactHeading: 'Kontaktirajte nas',
        form: {
          name: 'Ime i prezime',
          email: 'Email',
          phone: 'Telefon',
          date: 'Datum',
          guests: 'Broj osoba',
          message: 'Poruka',
          submit: 'Pošaljite upit',
          submitting: 'Slanje...',
          success: 'Hvala! Kontaktirat ćemo vas uskoro.',
          error: 'Greška. Molimo pokušajte ponovno.',
        },
        contactInfo: {
          email: 'Email',
          phone: 'Telefon',
          whatsapp: 'WhatsApp',
        },
      },
    },
    
    // Validation Messages
    validation: {
      nameMin: 'Ime mora imati najmanje 2 znaka',
      emailInvalid: 'Molimo unesite valjanu email adresu',
      phoneMin: 'Molimo unesite valjan broj telefona',
      phoneInvalid: 'Molimo unesite valjan broj telefona',
      checkInRequired: 'Molimo odaberite datum dolaska',
      checkOutRequired: 'Molimo odaberite datum odlaska',
      guestsMin: 'Molimo odaberite broj gostiju',
      guestsMax: 'Maksimalno 10 gostiju',
      required: 'Ovo polje je obavezno',
    },
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      accommodations: 'Accommodations',
      services: 'Services',
      about: 'About',
      gallery: 'Gallery',
      amenities: 'Amenities',
      location: 'Location',
      reviews: 'Reviews',
      faq: 'FAQ',
      contact: 'Contact',
    },
    
    // Hero Section
    hero: {
      headline: 'Your Mediterranean escape on Korčula Island',
      subheadline: 'Modern seafront villa in Vela Luka — book direct for the best rate',
      bookDirect: 'Book direct',
      viewGallery: 'View Gallery',
      whatsapp: 'WhatsApp',
      call: 'Call',
    },
    
    // USPs
    usps: {
      beachfront: 'Beachfront',
      seaView: 'Sea View',
      privateTerrace: 'Private Terrace',
      freeParking: 'Free Parking',
      fastWifi: 'Fast Wi-Fi',
      airConditioning: 'Air Conditioning',
    },
    
    // About Section
    about: {
      title: 'About Villa Aquamare',
      subtitle: 'Your home in the heart of the Mediterranean',
      description: 'Villa Aquamare is a modern villa located in beautiful Vela Luka on the island of Korčula. Enjoy direct sea access, stunning views, and all the comforts you need for a perfect vacation.',
      location: 'Vela Luka, Korčula, Croatia',
      learnMore: 'Learn More',
    },
    
    // Gallery
    gallery: {
      title: 'Gallery',
      subtitle: 'Explore our beautiful spaces',
      viewAll: 'View All',
    },
    
    // Amenities
    amenities: {
      title: 'Amenities',
      subtitle: 'Everything you need for a perfect stay',
      beach: 'Beach',
      pool: 'Pool',
      wifi: 'Wi-Fi',
      ac: 'Air Conditioning',
      parking: 'Parking',
      kitchen: 'Kitchen',
      terrace: 'Terrace',
      bbq: 'BBQ',
      coffee: 'Coffee & Tea',
      tv: 'Smart TV',
      shower: 'Hot Shower',
      sun: 'Sunny Terrace',
      umbrella: 'Shades',
    },
    
    // Location
    location: {
      title: 'Location',
      subtitle: 'In the heart of beautiful Vela Luka',
      address: 'Vela Luka, Korčula, Croatia',
      directions: 'How to get here',
      fromSplit: 'From Split: ferry to Vela Luka (2.5h)',
      fromDubrovnik: 'From Dubrovnik: ferry to Vela Luka (1.5h)',
      localTransport: 'From ferry port to villa: 5-10 minutes drive',
      localTransportNote: 'We can organize transfer from port',
      nearbyLabel: 'Nearby:',
      nearby: ['Beach - 2 min', 'Restaurants - 5 min', 'Shop - 3 min', 'Pharmacy - 5 min'],
      openInMaps: 'Open in Google Maps',
    },
    
    // Reviews
    reviews: {
      title: 'What our guests say',
      subtitle: 'Experiences that make us proud',
      rating: 'Rating',
      stars: 'stars',
    },
    
    // FAQ
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know',
      checkIn: 'What are check-in times?',
      checkInAnswer: 'Check-in is from 15:00, check-out until 10:00.',
      cancellation: 'Cancellation policy?',
      cancellationAnswer: 'Free cancellation up to 7 days before arrival.',
      parking: 'Is parking available?',
      parkingAnswer: 'Yes, free parking is included.',
      pets: 'Are pets allowed?',
      petsAnswer: 'Unfortunately, pets are not allowed.',
      beachDistance: 'How far is the beach?',
      beachDistanceAnswer: 'The villa is located directly by the sea.',
      wifiSpeed: 'What is the Wi-Fi speed?',
      wifiSpeedAnswer: 'Fast Wi-Fi is available throughout the villa.',
    },
    
    // Contact & Booking
    contact: {
      title: 'Contact & Booking',
      subtitle: 'Book direct and save',
      form: {
        name: 'Full Name',
        email: 'Email',
        phone: 'Phone',
        checkIn: 'Check-in Date',
        checkOut: 'Check-out Date',
        guests: 'Number of Guests',
        message: 'Message',
        submit: 'Send Inquiry',
        submitting: 'Sending...',
        success: 'Thank you! We\'ll contact you soon.',
        error: 'Error. Please try again.',
        inquiryTitle: 'Check Availability',
      },
      trustElements: {
        bestPrice: 'Best price with direct booking',
        noFees: 'No platform fees',
        instantConfirmation: 'Instant confirmation',
      },
      contactInfo: {
        email: 'staykorcula@gmail.com',
        phone: '+385 95 822 3830',
        whatsapp: 'WhatsApp',
        instagram: 'Instagram',
      },
      propertyPlaceholder: 'Property',
    },
    
    // Footer
    footer: {
      address: 'Vela Luka, Korčula, Croatia',
      email: 'staykorcula@gmail.com',
      phone: '+385 95 822 3830',
      social: 'Social Media',
      copyright: '© 2026 StayKorčula. All rights reserved.',
    },
    
    // Common
    common: {
      loading: 'Loading...',
      error: 'Error',
      success: 'Success',
      close: 'Close',
      next: 'Next',
      previous: 'Previous',
      view: 'View',
      book: 'Book',
      bookNow: 'Book Now',
      contact: 'Contact',
      propertyPlaceholder: 'Property',
      readMore: 'Learn more',
      viewDetails: 'View details',
      back: 'Back',
    },
    
    // Landing Page
    landing: {
      hero: {
        title: 'Discover the Charms of Korčula',
        subtitle: 'Your perfect vacation starts here. Villas, apartments, and services in one place.',
        ctaAccommodations: 'View Accommodations',
        ctaServices: 'Explore Services',
        whatsapp: 'WhatsApp',
        call: 'Call',
      },
      featuredProperties: {
        title: 'Featured Accommodations',
        subtitle: 'Our recommendations for you',
        viewAll: 'View All',
        guests: 'guests',
        bedrooms: 'bedrooms',
        bathrooms: 'bathrooms',
        viewDetails: 'View Details',
      },
      featuredServices: {
        title: 'Our Services',
        subtitle: 'Make your vacation even better',
        viewAll: 'Explore All',
        learnMore: 'Learn more',
      },
      about: {
        title: 'About StayKorčula',
        subtitle: 'Your partner for an unforgettable vacation',
        description: 'StayKorčula offers carefully selected villas and apartments on the island of Korčula, along with a range of additional services for complete relaxation and enjoyment.',
        mission: 'Our mission is to provide you with an authentic Korčula island experience, combining the comfort of modern accommodation with the beauty of Mediterranean nature.',
        why: {
          title: 'Why book direct?',
          directContact: 'Direct contact with owners',
          bestPrice: 'Best price without commissions',
          trusted: 'Trusted local partners',
          fastResponse: 'Fast response to inquiries',
          professional: 'Professional service',
          tailored: 'Tailored experiences',
        },
      },
      island: {
        title: 'Korčula Island',
        subtitle: 'Discover the beauty of our island',
        highlights: [
          { icon: '🏖️', title: 'Beautiful Beaches', description: 'Hidden coves and crystal clear sea' },
          { icon: '🍷', title: 'Wine & Gastronomy', description: 'Best wine regions and local cuisine' },
          { icon: '🏛️', title: 'Historic Town', description: 'Old Town Korčula with rich history' },
          { icon: '⛵', title: 'Boat Trips', description: 'Explore surrounding islands and hidden coves' },
          { icon: '🌅', title: 'Amazing Sunsets', description: 'Spectacular views of sea and mountains' },
          { icon: '🏃', title: 'Activities', description: 'Diving, cycling, nature walks' },
        ],
      },
      usp: {
        title: 'Why Choose StayKorčula?',
        items: [
          { icon: '🤝', title: 'Direct Contact', description: 'Communicate directly with owners' },
          { icon: '💰', title: 'Best Price', description: 'Best price guarantee without commissions' },
          { icon: '✅', title: 'Trusted Partners', description: 'Verified local partners' },
          { icon: '⚡', title: 'Fast Response', description: 'Quick response to all inquiries' },
          { icon: '🎯', title: 'Professional Service', description: 'High-quality service' },
          { icon: '🎨', title: 'Tailored', description: 'Tailored experiences for you' },
        ],
      },
      testimonials: {
        title: 'What Our Guests Say',
        subtitle: 'Experiences from our satisfied guests',
      },
      cta: {
        title: 'Ready for Your Dream Vacation?',
        subtitle: 'Contact us today and book your stay!',
        contactUs: 'Contact Us',
        whatsapp: 'WhatsApp',
        call: 'Call',
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you with everything you need',
        quickResponse: 'We respond within 24 hours',
        email: 'Email',
        phone: 'Phone',
        whatsapp: 'WhatsApp',
        sendMessage: 'Send message',
        bookNow: 'Book Now',
      },
    },
    
    // Accommodations Listing
    accommodations: {
      title: 'Accommodations',
      subtitle: 'Choose the perfect option for your stay',
      filter: {
        all: 'All',
        villas: 'Villas',
        apartments: 'Apartments',
      },
      noResults: 'No results found',
      viewDetails: 'View details',
      from: 'from',
      perNight: 'per night',
    },
    
    // Services Listing
    services: {
      title: 'Services',
      subtitle: 'Everything you need for a complete vacation',
      viewDetails: 'Learn more',
      category: {
        transport: 'Transport',
        boat: 'Boats',
        activity: 'Activities',
        other: 'Other',
      },
      bookingRequired: 'Booking required',
      contactForPrice: 'Contact for price',
      from: 'from',
      per: 'per',
      hour: 'hour',
      day: 'day',
      trip: 'trip',
      person: 'person',
      boats: 'boats',
      noResults: 'No services available',
    },
    
    // Service Page (dynamic)
    service: {
      hero: {
        bookNow: 'Book Now',
        contactUs: 'Contact Us',
        whatsapp: 'WhatsApp',
        call: 'Call',
      },
      about: {
        title: 'About the Service',
        overview: 'Overview',
        duration: 'Duration',
        capacity: 'Capacity',
        availability: 'Availability',
      },
      pricing: {
        title: 'Pricing',
        from: 'from',
        per: 'per',
        note: 'Note',
        contactForPrice: 'Contact for price',
      },
      included: {
        title: 'What\'s Included',
        subtitle: 'Everything you need is included',
      },
      extras: {
        title: 'Additional Options',
        subtitle: 'Enhance your experience',
        per: 'per',
        hour: 'hour',
        day: 'day',
        trip: 'trip',
        person: 'person',
      },
      gallery: {
        title: 'Gallery',
        viewAll: 'View all images',
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to your questions',
      },
      contact: {
        title: 'Booking & Contact',
        subtitle: 'Contact us for booking or more information',
        contactHeading: 'Contact Us',
        form: {
          name: 'Full Name',
          email: 'Email',
          phone: 'Phone',
          date: 'Date',
          guests: 'Number of People',
          message: 'Message',
          submit: 'Send Inquiry',
          submitting: 'Sending...',
          success: 'Thank you! We\'ll contact you soon.',
          error: 'Error. Please try again.',
        },
        contactInfo: {
          email: 'Email',
          phone: 'Phone',
          whatsapp: 'WhatsApp',
        },
      },
    },
    
    // Validation Messages
    validation: {
      nameMin: 'Name must be at least 2 characters',
      emailInvalid: 'Please enter a valid email address',
      phoneMin: 'Please enter a valid phone number',
      phoneInvalid: 'Please enter a valid phone number',
      checkInRequired: 'Please select check-in date',
      checkOutRequired: 'Please select check-out date',
      guestsMin: 'Please select number of guests',
      guestsMax: 'Maximum 10 guests',
      required: 'This field is required',
    },
  },
};

export const getDictionary = (locale: Locale) => dictionaries[locale];

/** Dictionary shape for a single locale - use for component props */
export type Dictionary = typeof dictionaries.hr; 