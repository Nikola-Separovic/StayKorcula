import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getServiceBySlug } from '../../../data/services';
import type { BaseService } from '../../../data/types';
import { getLocaleDictionary, isValidLocale, type Locale } from '../../../lib/i18n/i18n';
import { resolveLocale } from '../../../lib/utils/resolveLocale';
import { siteConfig } from '../../../data/config';
import ServicePageClient from './ServicePageClient';
import { generateServiceSchema } from '../../../lib/schema/service';

interface PageProps {
  params: {
    locale: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const { getAllServiceSlugs } = await import('../../../data/services');
  const slugs = getAllServiceSlugs();
  
  return slugs.flatMap((slug) =>
    ['hr', 'en'].map((locale) => ({
      slug,
      locale,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const locale = resolveLocale(params.locale);
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {};
  }

  const isCroatian = locale === 'hr';
  const { generateMetadata: generateSEOMetadata } = await import('../../../lib/seo');

  return generateSEOMetadata({
    locale,
    title: `${service.name[locale]} | ${isCroatian ? 'Usluge' : 'Services'} | ${siteConfig.name}`,
    description: service.description[locale],
    keywords: isCroatian
      ? `${service.name[locale]}, usluge, korčula, ${service.category}`
      : `${service.name[locale]}, services, korcula, ${service.category}`,
    path: `services/${service.slug}`,
    image: service.heroImage || undefined,
    imageAlt: service.name[locale],
  });
}

export default async function ServicePage({ params }: PageProps) {
  const locale = resolveLocale(params.locale);

  if (!isValidLocale(params.locale)) {
    notFound();
  }

  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const dictionary = await getLocaleDictionary(locale);
  const serviceSchema = generateServiceSchema(service as BaseService, locale);

  return (
    <ServicePageClient
      service={service as BaseService}
      dictionary={dictionary}
      locale={locale}
      serviceSchema={serviceSchema}
    />
  );
}

