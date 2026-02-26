'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';
import { FloatingImage } from '../ui/FloatingImage';
import { DIVISIONS } from '@/lib/constants';

export function DivisionsSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <SectionContainer id="divisions">
      <motion.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-h2 text-deep-ocean mb-4">Наші напрямки</h2>
        <p className="text-body-lg text-gris max-w-2xl mx-auto">
          П'ять ключових дивізій, які забезпечують комплексну підтримку партнерів на всіх етапах.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {DIVISIONS.map((division, index) => (
          <motion.div
            key={division.id}
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-ivoire rounded-lg p-6 h-full flex flex-col cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() =>
                setExpandedId(expandedId === division.id ? null : division.id)
              }
              whileHover={{ y: -4 }}
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{division.icon}</div>

              {/* Title */}
              <h3 className="text-h3 text-deep-ocean mb-2">{division.title}</h3>

              {/* Subtitle */}
              <p className="text-sm text-sky font-medium mb-4">{division.subtitle}</p>

              {/* Description */}
              <p className="text-body text-gris mb-6 flex-grow">
                {division.description}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {division.bullets.map((bullet, i) => (
                  <li key={i} className="text-sm text-deep-ocean flex items-start gap-2">
                    <span className="text-sky font-bold">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Expandable Image */}
              {expandedId === division.id && (
                <motion.div
                  className="mt-6 pt-6 border-t border-clouds"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <FloatingImage
                    src={division.image.src}
                    alt={division.image.alt}
                    caption={division.image.caption}
                    className="h-40"
                  />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}