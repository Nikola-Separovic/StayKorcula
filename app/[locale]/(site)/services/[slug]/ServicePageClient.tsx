'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Service } from '../../../data/types';
import type { Dictionary, Locale } from '../../../lib/i18n/i18n';
import ServiceHero from '../../../components/sections/ServiceHero';
import ServiceAbout from '../../../components/sections/ServiceAbout';
import ServiceGallery from '../../../components/sections/ServiceGallery';
import ServiceIncluded from '../../../components/sections/ServiceIncluded';
import ServiceExtras from '../../../components/sections/ServiceExtras';
import ServiceFAQ from '../../../components/sections/ServiceFAQ';
import ServiceContact from '../../../components/sections/ServiceContact';
import SchemaScript from '../../../components/sections/SchemaScript';
import {
  generateBreadcrumbSchema,
  getServiceBreadcrumbItems,
} from '../../../lib/seo';

interface ServicePageClientProps {
  service: Service;
  dictionary: Dictionary;
  locale: Locale;
  serviceSchema: any;
}

export default function ServicePageClient({
  service,
  dictionary,
  locale,
  serviceSchema,
}: ServicePageClientProps) {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  // Scroll to top on locale change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [locale]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="overflow-hidden"
    >
      <SchemaScript schema={serviceSchema} id="service-schema" />
      <SchemaScript
        schema={generateBreadcrumbSchema(
          getServiceBreadcrumbItems(locale, service.name[locale], service.slug),
          locale
        )}
        id="breadcrumb-schema"
      />

      {/* Hero Section */}
      <motion.section variants={sectionVariants}>
        <ServiceHero
          dictionary={dictionary}
          service={service}
          onBookNow={() => setIsBookingModalOpen(true)}
          locale={locale}
        />
      </motion.section>

      {/* About Section */}
      <motion.section variants={sectionVariants}>
        <ServiceAbout dictionary={dictionary.service.about} service={service} locale={locale} />
      </motion.section>

      {/* Gallery Section */}
      {service.gallery && service.gallery.length > 0 && (
        <motion.section variants={sectionVariants}>
          <ServiceGallery dictionary={dictionary.service.gallery} galleryImages={service.gallery} locale={locale} />
        </motion.section>
      )}

      {/* Included Section */}
      {service.included && service.included.length > 0 && (
        <motion.section variants={sectionVariants}>
          <ServiceIncluded dictionary={dictionary.service.included} included={service.included} locale={locale} />
        </motion.section>
      )}

      {/* Extras Section */}
      {service.extras && service.extras.length > 0 && (
        <motion.section variants={sectionVariants}>
          <ServiceExtras dictionary={dictionary.service.extras} extras={service.extras} locale={locale} />
        </motion.section>
      )}

      {/* FAQ Section */}
      {service.faq && service.faq.length > 0 && (
        <motion.section variants={sectionVariants}>
          <ServiceFAQ dictionary={dictionary.service.faq} faqItems={service.faq} locale={locale} />
        </motion.section>
      )}

      {/* Contact Section */}
      <motion.section variants={sectionVariants}>
        <ServiceContact
          dictionary={dictionary.service.contact}
          onBookNow={() => setIsBookingModalOpen(true)}
          locale={locale}
          service={service}
          serviceContact={service.contact}
        />
      </motion.section>
    </motion.div>
  );
}

