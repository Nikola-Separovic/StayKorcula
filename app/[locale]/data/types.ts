/**
 * Shared type definitions for properties and services
 * Used across all property and service data files
 */

import type { Locale } from '../lib/i18n/i18n';

/**
 * Localized string type
 */
export type LocalizedString = {
  [key in Locale]: string;
};

/**
 * Localized field - can be localized or direct value
 */
export type LocalizedField<T> = T | LocalizedString;

/**
 * Property Gallery Image
 */
export interface PropertyGalleryImage {
  src: string;
  alt: LocalizedString;
}

/**
 * Property Amenity
 */
export interface PropertyAmenity {
  icon: string; // Icon identifier (matches dictionary key)
  description: LocalizedString;
}

/**
 * Property Review
 */
export interface PropertyReview {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: LocalizedString;
  date: string;
}

/**
 * Property FAQ Item
 */
export interface PropertyFAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}

/**
 * Property USP (Unique Selling Point)
 */
export interface PropertyUSP {
  key: string; // Icon key
  icon?: string; // Optional icon override
}

/**
 * Property Contact
 */
export interface PropertyContact {
  phone?: string;
  whatsapp?: string;
  email?: string;
}

/**
 * Property Coordinates
 */
export interface PropertyCoordinates {
  latitude: number;
  longitude: number;
}

/**
 * Google Maps Configuration
 */
export interface GoogleMapsConfig {
  /** Custom embed URL for iframe. When omitted, generated from coordinates. */
  embedUrl?: string;
  /** Custom link for "Open in Maps" button. When omitted, generated from coordinates. */
  linkUrl?: string;
}

/**
 * Property capacity summary (for listings and About section)
 */
export interface PropertyCapacity {
  people: number;
  bedrooms: number;
  bathrooms: number;
}

/**
 * Price Range
 */
export interface PriceRange {
  from: number;
  currency: string;
}

/**
 * Property-specific content overrides for sections
 * When provided, these override the default dictionary values
 */
export interface PropertyContent {
  location?: {
    subtitle?: LocalizedString;
    fromSplit?: LocalizedString;
    fromDubrovnik?: LocalizedString;
    localTransport?: LocalizedString;
    nearby?: LocalizedString[]; // e.g. ['Plaža - 2 min', 'Restorani - 5 min']
  };
  about?: {
    subtitle?: LocalizedString;
  };
}

/**
 * Base Property Interface
 * All properties must implement this
 */
export interface BaseProperty {
  id: string; // Stable ID: "property_villa_aquamare"
  slug: string; // URL slug: "villa-aquamare"
  name: LocalizedString;
  location: LocalizedString;
  coordinates?: PropertyCoordinates;
  googleMaps?: GoogleMapsConfig;
  description: LocalizedString;
  shortDescription: LocalizedString;
  heroImage: string;
  mainImage?: string; // For listings, defaults to heroImage
  gallery: PropertyGalleryImage[];
  capacity: PropertyCapacity;
  amenities: PropertyAmenity[];
  additionalServices?: LocalizedString[];
  reviews: PropertyReview[];
  faq: PropertyFAQItem[];
  contact?: PropertyContact;
  usps?: PropertyUSP[];
  priceRange?: PriceRange;
  checkIn?: string;
  checkOut?: string;
  keywords?: LocalizedString; // SEO keywords
  schema?: Record<string, any>; // Custom schema overrides
  content?: PropertyContent; // Property-specific section overrides
}

/**
 * Service Gallery Image
 */
export interface ServiceGalleryImage {
  src: string;
  alt: LocalizedString;
}

/**
 * Service Included Item
 */
export interface ServiceIncluded {
  icon?: string;
  text: LocalizedString;
}

/**
 * Service Extra
 */
export interface ServiceExtra {
  name: LocalizedString;
  price?: {
    amount: number;
    currency: string;
    unit?: 'hour' | 'day' | 'trip' | 'person';
  };
  description?: LocalizedString;
}

/**
 * Service FAQ Item
 */
export interface ServiceFAQItem {
  question: LocalizedString;
  answer: LocalizedString;
}

/**
 * Service Price
 */
export interface ServicePrice {
  from?: number;
  currency: string;
  unit?: 'hour' | 'day' | 'trip' | 'person';
  note?: LocalizedString;
}

/**
 * Service Capacity
 */
export interface ServiceCapacity {
  min?: number;
  max?: number;
  unit: 'people' | 'boats';
}

/**
 * Service Contact
 */
export interface ServiceContact {
  phone?: string;
  whatsapp?: string;
  email?: string;
}

/**
 * Base Service Interface
 * All services must implement this
 */
export interface BaseService {
  id: string; // Stable ID: "service_boat_rental"
  slug: string; // URL slug: "boat-rental"
  name: LocalizedString;
  category: 'transport' | 'boat' | 'activity' | 'other';
  icon?: string; // Emoji or icon identifier
  description: LocalizedString;
  shortDescription: LocalizedString;
  heroImage?: string;
  gallery?: ServiceGalleryImage[];
  price?: ServicePrice;
  included?: ServiceIncluded[];
  extras?: ServiceExtra[];
  features?: LocalizedString[];
  duration?: LocalizedString;
  capacity?: ServiceCapacity;
  faq?: ServiceFAQItem[];
  contact?: ServiceContact;
  bookingRequired?: boolean;
  availability?: LocalizedString;
  keywords?: LocalizedString; // SEO keywords
  schema?: Record<string, any>; // Custom schema overrides
}

// Type aliases for convenience
export type Service = BaseService;
export type Property = BaseProperty;

