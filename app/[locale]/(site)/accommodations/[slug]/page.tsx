import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPropertyBySlug } from '../../../data/properties';
import { getLocaleDictionary, isValidLocale, type Locale } from '../../../lib/i18n/i18n';
import { resolveLocale } from '../../../lib/utils/resolveLocale';
import { siteConfig } from '../../../data/config';
import PropertyPageClient from './PropertyPageClient';
import { generatePropertyMetadata } from '../../../lib/schema/property';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const { getAllPropertySlugs } = await import('../../../data/properties');
  const slugs = getAllPropertySlugs();
  
  return siteConfig.locales.flatMap((locale) =>
    slugs.map((slug) => ({
      locale,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(params.locale);
  const property = getPropertyBySlug(params.slug);
  
  if (!property) {
    return {};
  }
  
  return generatePropertyMetadata(property, locale);
}

export default async function PropertyPage({ params }: PageProps) {
  const locale = resolveLocale(params.locale);
  
  if (!isValidLocale(params.locale)) {
    notFound();
  }
  
  const property = getPropertyBySlug(params.slug);
  
  if (!property) {
    notFound();
  }
  
  const dictionary = await getLocaleDictionary(locale);
  
  return (
    <PropertyPageClient
      property={property}
      dictionary={dictionary}
      locale={locale}
    />
  );
}

