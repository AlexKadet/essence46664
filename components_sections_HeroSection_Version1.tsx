'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { FloatingImage } from '../ui/FloatingImage';
import { SectionContainer } from '../ui/SectionContainer';

interface HeroSectionProps {
  onLeadClick: () => void;
}

export function HeroSection({ onLeadClick }: HeroSectionProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <SectionContainer className="pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Announcement Pill */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-ivoire rounded-full mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="w-2 h-2 bg-sky rounded-full animate-pulse" />
            <span className="text-sm text-deep-ocean font-medium">
              Aesthetic Distribution Group • Ukraine / EU
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-h1 text-deep-ocean mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Essence <br /> Aesthetic Group
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-body-lg text-gris mb-8 max-w-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Мультиканальна дистрибуція брендів для естетичної медицини та косметології.
          </motion.p>

          {/* Slogan */}
          <motion.div
            className="mb-12 pb-8 border-b border-clouds"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-small-caps text-deep-ocean">
              Proven Innovation. Protected Reputation.
            </p>
          </motion.div>

          {/* Segment Buttons */}
          <motion.div
            className="grid grid-cols-2 gap-3 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              onClick={() => scrollToSection('divisions')}
              className="px-4 py-3 border border-deep-ocean text-deep-ocean rounded text-sm font-medium hover:bg-deep-ocean hover:text-white transition-all"
            >
              Для брендів
            </button>
            <button
              onClick={() => scrollToSection('divisions')}
              className="px-4 py-3 border border-deep-ocean text-deep-ocean rounded text-sm font-medium hover:bg-deep-ocean hover:text-white transition-all"
            >
              Для професіоналів
            </button>
            <button
              onClick={() => scrollToSection('divisions')}
              className="px-4 py-3 border border-deep-ocean text-deep-ocean rounded text-sm font-medium hover:bg-deep-ocean hover:text-white transition-all"
            >
              Retail & e-commerce
            </button>
            <button
              onClick={() => scrollToSection('divisions')}
              className="px-4 py-3 border border-deep-ocean text-deep-ocean rounded text-sm font-medium hover:bg-deep-ocean hover:text-white transition-all"
            >
              Освіта
            </button>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button size="lg" onClick={onLeadClick}>
              Залишити заявку
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection('partnership')}
            >
              Презентація
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FloatingImage
            src="/images/hero-clinic.jpg"
            alt="Modern aesthetic clinic interior"
            caption="Premium medical environment"
            className="h-96 md:h-[500px]"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="flex justify-center mt-16"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} className="text-sky" />
      </motion.div>
    </SectionContainer>
  );
}