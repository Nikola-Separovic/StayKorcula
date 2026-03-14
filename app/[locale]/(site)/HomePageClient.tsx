'use client';

import { motion } from 'framer-motion';
import type { Dictionary, Locale } from '../lib/i18n/i18n';
import type { Property } from '../data/types';
import type { Service } from '../data/types';
import type { Testimonial } from '../data/testimonials';
import LandingHero from '../components/sections/landing/LandingHero';
import LandingFeaturedProperties from '../components/sections/landing/LandingFeaturedProperties';
import LandingFeaturedServices from '../components/sections/landing/LandingFeaturedServices';
import LandingAbout from '../components/sections/landing/LandingAbout';
import IslandHighlights from '../components/sections/landing/IslandHighlights';
import LandingUSPGrid from '../components/sections/landing/LandingUSPGrid';
import LandingTestimonials from '../components/sections/landing/LandingTestimonials';
import LandingCTA from '../components/sections/landing/LandingCTA';
import LandingContact from '../components/sections/landing/LandingContact';
import SchemaScript from '../components/sections/SchemaScript';

interface HomePageClientProps {
  dictionary: Dictionary;
  locale: Locale;
  properties: Property[];
  services: Service[];
  testimonials: Testimonial[];
  landingSchema: any;
}

export default function HomePageClient({
  dictionary,
  locale,
  properties,
  services,
  testimonials,
  landingSchema,
}: HomePageClientProps) {
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
      <SchemaScript schema={landingSchema} id="landing-schema" />

      {/* Hero Section */}
      <motion.section variants={sectionVariants}>
        <LandingHero dictionary={dictionary.landing.hero} locale={locale} />
      </motion.section>

      {/* Featured Properties */}
      {properties.length > 0 && (
        <motion.section variants={sectionVariants}>
          <LandingFeaturedProperties
            dictionary={dictionary.landing.featuredProperties}
            properties={properties}
            locale={locale}
          />
        </motion.section>
      )}

      {/* Featured Services */}
      {services.length > 0 && (
        <motion.section variants={sectionVariants}>
          <LandingFeaturedServices
            dictionary={{ ...dictionary.landing.featuredServices, services: dictionary.services }}
            services={services}
            locale={locale}
          />
        </motion.section>
      )}

      {/* About Section */}
      <motion.section variants={sectionVariants}>
        <LandingAbout dictionary={dictionary.landing.about} locale={locale} />
      </motion.section>

      {/* Island Highlights */}
      <motion.section variants={sectionVariants}>
        <IslandHighlights dictionary={dictionary.landing.island} locale={locale} />
      </motion.section>

      {/* Why Book With Us */}
      <motion.section variants={sectionVariants}>
        <LandingUSPGrid dictionary={dictionary.landing.usp} locale={locale} />
      </motion.section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <motion.section variants={sectionVariants}>
          <LandingTestimonials
            dictionary={dictionary.landing.testimonials}
            testimonials={testimonials}
            locale={locale}
          />
        </motion.section>
      )}

      {/* CTA Section */}
      <motion.section variants={sectionVariants}>
        <LandingCTA dictionary={dictionary.landing.cta} locale={locale} />
      </motion.section>

      {/* Contact Section */}
      <motion.section variants={sectionVariants}>
        <LandingContact dictionary={dictionary.landing.contact} locale={locale} />
      </motion.section>
    </motion.div>
  );
}

