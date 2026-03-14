import type { Metadata } from 'next';
import { getAllProperties } from '../../data/properties';
import { getLocaleDictionary, isValidLocale, type Locale } from '../../lib/i18n/i18n';
import { resolveLocale } from '../../lib/utils/resolveLocale';
import AccommodationsClient from './AccommodationsClient';

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(params.locale);
  const { generateListingMetadata } = await import('../../lib/seo');
  return generateListingMetadata(locale, 'accommodations');
}

export default async function AccommodationsPage({ params }: PageProps) {
  const locale = resolveLocale(params.locale);
  
  if (!isValidLocale(params.locale)) {
    return null;
  }
  
  const dictionary = await getLocaleDictionary(locale);
  const properties = getAllProperties(locale);

  return (
    <AccommodationsClient
      properties={properties}
      dictionary={dictionary}
      locale={locale}
    />
  );
}

