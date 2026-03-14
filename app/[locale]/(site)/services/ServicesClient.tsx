'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, MapPin } from 'lucide-react';
import type { Service } from '../../data/services';
import type { Dictionary, Locale } from '../../lib/i18n/i18n';
import SectionWrapper from '../../components/ui/SectionWrapper';
import SectionHeader from '../../components/ui/SectionHeader';
import Button from '../../components/ui/Button';

interface ServicesClientProps {
  services: Service[];
  dictionary: Dictionary;
  locale: Locale;
}

export default function ServicesClient({
  services,
  dictionary,
  locale,
}: ServicesClientProps) {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const getCategoryLabel = (category: Service['category']) => {
    return dictionary.services.category[category] || category;
  };

  const formatPrice = (service: Service) => {
    if (!service.price) {
      return dictionary.services.contactForPrice;
    }

    const { from, currency, unit } = service.price;
    if (!from) {
      return dictionary.services.contactForPrice;
    }

    const unitLabel = unit ? dictionary.services[unit] || unit : '';
    return `${dictionary.services.from} ${from} ${currency}${unitLabel ? ` ${dictionary.services.per} ${unitLabel}` : ''}`;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="min-h-screen"
    >
            <SectionWrapper id="services" background="gray">
        <SectionHeader
          title={dictionary.services.title}
          subtitle={dictionary.services.subtitle}
        />

        {services.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-gray-600 text-lg">{dictionary.services.noResults}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.slug}
                variants={itemVariants}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 card-hover overflow-hidden flex flex-col"
              >
                <Link href={`/${locale}/services/${service.slug}`} className="block flex-1 flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 w-full">
                    {service.heroImage ? (
                      <Image
                        src={service.heroImage}
                        alt={service.name[locale]}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-coastal-400 to-coastal-600 flex items-center justify-center">
                        {service.icon && (
                          <span className="text-6xl">{service.icon}</span>
                        )}
                      </div>
                    )}
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-coastal-600 text-xs font-semibold px-3 py-1 rounded-full">
                        {getCategoryLabel(service.category)}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
                      {service.name[locale]}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {service.shortDescription[locale]}
                    </p>

                    {/* Service Details */}
                    <div className="space-y-2 mb-4">
                      {service.price && (
                        <div className="flex items-center text-coastal-600 text-sm font-semibold">
                          <span>{formatPrice(service)}</span>
                        </div>
                      )}
                      {service.duration && (
                        <div className="flex items-center text-gray-500 text-xs">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{service.duration[locale]}</span>
                        </div>
                      )}
                      {service.capacity && (
                        <div className="flex items-center text-gray-500 text-xs">
                          <Users className="w-4 h-4 mr-2" />
                          <span>
                            {service.capacity.min && service.capacity.max
                              ? `${service.capacity.min}-${service.capacity.max} ${service.capacity.unit === 'people' ? (locale === 'hr' ? 'osoba' : 'people') : service.capacity.unit}`
                              : service.capacity.max
                              ? `Do ${service.capacity.max} ${service.capacity.unit === 'people' ? (locale === 'hr' ? 'osoba' : 'people') : service.capacity.unit}`
                              : ''}
                          </span>
                        </div>
                      )}
                      {service.bookingRequired && (
                        <div className="flex items-center text-amber-600 text-xs">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{dictionary.services.bookingRequired}</span>
                        </div>
                      )}
                    </div>

                    <Button className="w-full mt-auto" variant="secondary">
                      {dictionary.services.viewDetails}
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </SectionWrapper>
    </motion.div>
  );
}

