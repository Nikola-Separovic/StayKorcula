'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Bed, Bath } from 'lucide-react';
import Icon from '../../components/ui/Icon';
import type { Property } from '../../data/types';
import type { Locale } from '../../lib/i18n/i18n';
import SectionWrapper from '../../components/ui/SectionWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';

interface AccommodationsClientProps {
  properties: Property[];
  dictionary: any;
  locale: Locale;
}

export default function AccommodationsClient({
  properties,
  dictionary,
  locale,
}: AccommodationsClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
      <SectionWrapper>
        <motion.div
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            {dictionary.accommodations.title}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {dictionary.accommodations.subtitle}
          </p>
        </motion.div>

        {properties.length === 0 ? (
          <motion.div
            variants={itemVariants}
            className="text-center py-16"
          >
            <p className="text-gray-600 text-lg">
              {dictionary.accommodations.noResults}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => {
              const maxGuests = property.capacity?.people || 0;
              const totalRooms = property.capacity?.bedrooms || 0;
              const totalBathrooms = property.capacity?.bathrooms || 0;

              return (
                <motion.div
                  key={property.slug}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden group"
                >
                  {/* Property Image */}
                  <Link href={`/${locale}/accommodations/${property.slug}`}>
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={property.heroImage}
                        alt={typeof property.name === 'string' ? property.name : property.name[locale]}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Location Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5">
                          <Icon name="map-pin" size="sm" className="text-coastal-600" />
                          <span className="text-sm font-medium text-gray-900">
                            {property.location[locale]}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>

                  {/* Property Content */}
                  <div className="p-6">
                    <Link href={`/${locale}/accommodations/${property.slug}`}>
                      <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3 hover:text-coastal-600 transition-colors duration-200">
                        {typeof property.name === 'string' ? property.name : property.name[locale]}
                      </h2>
                    </Link>
                    
                    <p className="text-gray-600 mb-6 line-clamp-2">
                      {property.shortDescription[locale]}
                    </p>

                    {/* Property Stats */}
                    <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-gray-200">
                      <div className="flex flex-col items-center text-center">
                        <Users className="w-5 h-5 text-coastal-600 mb-1" />
                        <span className="text-sm font-semibold text-gray-900">{maxGuests}</span>
                        <span className="text-xs text-gray-600">
                          {locale === 'hr' ? 'gostiju' : 'guests'}
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Bed className="w-5 h-5 text-coastal-600 mb-1" />
                        <span className="text-sm font-semibold text-gray-900">{totalRooms}</span>
                        <span className="text-xs text-gray-600">
                          {locale === 'hr' ? 'soba' : 'rooms'}
                        </span>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <Bath className="w-5 h-5 text-coastal-600 mb-1" />
                        <span className="text-sm font-semibold text-gray-900">{totalBathrooms}</span>
                        <span className="text-xs text-gray-600">
                          {locale === 'hr' ? 'kup.' : 'baths'}
                        </span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link href={`/${locale}/accommodations/${property.slug}`}>
                      <Button className="w-full" variant="primary">
                        {dictionary.accommodations.viewDetails}
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </SectionWrapper>
    </motion.div>
  );
}

