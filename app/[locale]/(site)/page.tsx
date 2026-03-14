import type { Metadata } from 'next';
import { getLocaleDictionary, isValidLocale, type Locale } from '../lib/i18n/i18n';
import { resolveLocale } from '../lib/utils/resolveLocale';
import { getAllProperties } from '../data/properties';
import { getAllServices } from '../data/services';
import { getFeaturedTestimonials } from '../data/testimonials';
import { generateLandingSchema } from '../lib/schema/landing';
import HomePageClient from './HomePageClient';

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(params.locale);
  const { generateHomeMetadata } = await import('../lib/seo');
  return generateHomeMetadata(locale);
}

export default async function HomePage({ params }: PageProps) {
  const locale = resolveLocale(params.locale);

  if (!isValidLocale(params.locale)) {
    return null;
  }

  const dictionary = await getLocaleDictionary(locale);
  const testimonials = getFeaturedTestimonials(3);
  const landingSchema = generateLandingSchema(locale);
  const properties = getAllProperties(locale);
  const services = getAllServices(locale);

  return (
    <HomePageClient
      dictionary={dictionary}
      locale={locale}
      properties={properties}
      services={services}
      testimonials={testimonials}
      landingSchema={landingSchema}
    />
  );
}
