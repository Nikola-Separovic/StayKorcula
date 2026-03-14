/**
 * Services aggregator
 * Imports all services and provides helper functions
 */

import type { BaseService } from '../types';
import type { Locale } from '../../lib/i18n/i18n';
import { boatRental } from './boat-rental';
import { speedboatTour } from './speedboat-tour';
import { airportTransfer } from './airport-transfer';
import { taxiService } from './taxi-service';

// Import all services here
const allServices: BaseService[] = [
  boatRental,
  speedboatTour,
  taxiService,
  airportTransfer,
  // Add more services here as they are created
];

/**
 * Get all services
 */
export function getAllServices(locale?: Locale): BaseService[] {
  return allServices as BaseService[];
}

/**
 * Get service by slug
 */
export function getServiceBySlug(slug: string): BaseService | undefined {
  return allServices.find((s) => s.slug === slug);
}

/**
 * Get service by ID
 */
export function getServiceById(id: string): BaseService | undefined {
  return allServices.find((s) => s.id === id);
}

/**
 * Get all service slugs (for static generation)
 */
export function getAllServiceSlugs(): string[] {
  return allServices.map((s) => s.slug);
}

/**
 * Get all service IDs
 */
export function getAllServiceIds(): string[] {
  return allServices.map((s) => s.id);
}

/**
 * Get services by category
 */
export function getServicesByCategory(category: BaseService['category']): BaseService[] {
  return allServices.filter((s) => s.category === category);
}

// Export types
export type { BaseService as Service };
export type * from '../types';

// Re-export Service type for convenience
export type { BaseService } from '../types';

// Export individual services (for direct imports if needed)
export { boatRental, speedboatTour, airportTransfer, taxiService };

