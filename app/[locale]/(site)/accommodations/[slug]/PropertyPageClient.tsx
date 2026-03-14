'use client';

import { motion } from 'framer-motion';
import type { Property } from '../../../data/types';
import type { Locale } from '../../../lib/i18n/i18n';
import Hero from '../../../components/sections/Hero';
import USPGrid from '../../../components/sections/USPGrid';
import About from '../../../components/sections/About';
import Gallery from '../../../components/sections/Gallery';
import Amenities from '../../../components/sections/Amenities';
import Location from '../../../components/sections/Location';
import Reviews from '../../../components/sections/Reviews';
import FAQ from '../../../components/sections/FAQ';
import Contact from '../../../components/sections/Contact';
import SchemaScript from '../../../components/sections/SchemaScript';
import { generatePropertySchema } from '../../../lib/schema/property';
import {
  generateBreadcrumbSchema,
  getPropertyBreadcrumbItems,
} from '../../../lib/seo';

import type { Dictionary } from '../../../lib/i18n/dict';

type PropertyPageDictionary = Pick<
  Dictionary,
  'contact' | 'hero' | 'usps' | 'about' | 'gallery' | 'amenities' | 'location' | 'reviews' | 'faq'
>;

interface PropertyPageClientProps {
  property: Property;
  dictionary: PropertyPageDictionary;
  locale: Locale;
}

export default function PropertyPageClient({
  property,
  dictionary,
  locale,
}: PropertyPageClientProps) {
  // Resolve property-specific overrides for location
  const locationDict = {
    ...dictionary.location,
    subtitle: property.content?.location?.subtitle?.[locale] ?? dictionary.location.subtitle,
    fromSplit: property.content?.location?.fromSplit?.[locale] ?? dictionary.location.fromSplit,
    fromDubrovnik: property.content?.location?.fromDubrovnik?.[locale] ?? dictionary.location.fromDubrovnik,
    localTransport: property.content?.location?.localTransport?.[locale] ?? dictionary.location.localTransport,
    nearby: property.content?.location?.nearby
      ? property.content.location.nearby.map((n) => n[locale])
      : dictionary.location.nearby,
  };

  // Resolve property-specific overrides for about
  const aboutSubtitle = property.content?.about?.subtitle?.[locale] ?? dictionary.about.subtitle;

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
      {/* Hero Section */}
      <motion.section variants={sectionVariants}>
        <Hero
          headline={typeof property.name === 'string' ? property.name : property.name[locale]}
          subheadline={property.shortDescription[locale]}
          heroImage={property.mainImage || property.heroImage}
          dictionary={dictionary.hero}
        />
      </motion.section>

      {/* USPs Section */}
      {property.usps && property.usps.length > 0 && (
        <motion.section variants={sectionVariants}>
          <USPGrid
            usps={property.usps.map((u) => (typeof u === 'string' ? u : u.key))}
            dictionary={dictionary.usps}
          />
        </motion.section>
      )}

      {/* About Section */}
      <motion.section variants={sectionVariants}>
        <About
          title={dictionary.about.title.replace('Villa Aquamare', typeof property.name === 'string' ? property.name : property.name[locale])}
          subtitle={aboutSubtitle}
          description={property.description[locale]}
          location={property.location[locale]}
          image={property.mainImage || property.heroImage}
          dictionary={dictionary.about}
          stats={{
            rooms: property.capacity.bedrooms,
            people: property.capacity.people.toString(),
          }}
        />
      </motion.section>

      {/* Gallery Section */}
      {property.gallery && property.gallery.length > 0 && (
        <motion.section variants={sectionVariants}>
          <Gallery
            images={property.gallery}
            title={dictionary.gallery.title}
            subtitle={dictionary.gallery.subtitle}
            locale={locale}
            dictionary={dictionary.gallery}
          />
        </motion.section>
      )}

      {/* Amenities Section */}
      {property.amenities && property.amenities.length > 0 && (
        <motion.section variants={sectionVariants}>
          <Amenities
            amenities={property.amenities}
            additionalServices={property.additionalServices}
            locale={locale}
            dictionary={dictionary.amenities}
          />
        </motion.section>
      )}

      {/* Location Section */}
      <motion.section variants={sectionVariants}>
        <Location
          property={property}
          locale={locale}
          dictionary={locationDict}
        />
      </motion.section>

      {/* Reviews Section */}
      {property.reviews && property.reviews.length > 0 && (
        <motion.section variants={sectionVariants}>
          <Reviews
            reviews={property.reviews}
            locale={locale}
            dictionary={dictionary.reviews}
          />
        </motion.section>
      )}

      {/* FAQ Section */}
      {property.faq && property.faq.length > 0 && (
        <motion.section variants={sectionVariants}>
          <FAQ
            faq={property.faq}
            locale={locale}
            dictionary={dictionary.faq}
          />
        </motion.section>
      )}

      {/* Contact Section */}
      <motion.section variants={sectionVariants}>
        <Contact
          property={property}
          locale={locale}
          dictionary={dictionary.contact}
        />
      </motion.section>

      {/* Structured Data: LodgingBusiness + BreadcrumbList */}
      <SchemaScript schema={generatePropertySchema(property, locale)} id="property-schema" />
      <SchemaScript
        schema={generateBreadcrumbSchema(
          getPropertyBreadcrumbItems(
            locale,
            typeof property.name === 'string' ? property.name : property.name[locale],
            property.slug
          ),
          locale
        )}
        id="breadcrumb-schema"
      />
    </motion.div>
  );
}

