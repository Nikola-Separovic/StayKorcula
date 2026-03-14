/**
 * Default layout metadata - used when no page-specific metadata exists
 * Delegates to central SEO module for consistency
 */
import type { Metadata } from 'next';
import type { Locale } from '../lib/i18n/i18n';
import { generateHomeMetadata } from '../lib/seo';

export function generateMetadata(locale: Locale): Metadata {
  return generateHomeMetadata(locale);
} 