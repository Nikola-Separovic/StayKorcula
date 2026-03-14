import type { Metadata } from 'next';
import { getAllServices } from '../../data/services';
import { getLocaleDictionary, isValidLocale, type Locale } from '../../lib/i18n/i18n';
import { resolveLocale } from '../../lib/utils/resolveLocale';
import ServicesClient from './ServicesClient';

interface PageProps {
  params: {
    locale: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(params.locale);
  const { generateListingMetadata } = await import('../../lib/seo');
  return generateListingMetadata(locale, 'services');
}

export default async function ServicesPage({ params }: PageProps) {
  const locale = resolveLocale(params.locale);

  if (!isValidLocale(params.locale)) {
    return null;
  }

  const dictionary = await getLocaleDictionary(locale);
  const services = getAllServices(locale);

  return (
    <ServicesClient
      services={services}
      dictionary={dictionary}
      locale={locale}
    />
  );
}

