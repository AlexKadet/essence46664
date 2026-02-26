'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';
import { FloatingImage } from '../ui/FloatingImage';
import { Button } from '../ui/Button';
import { PARTNERSHIP_BENEFITS } from '@/lib/constants';

interface PartnershipSectionProps {
  onLeadClick: () => void;
}

export function PartnershipSection({ onLeadClick }: PartnershipSectionProps) {
  return (
    <SectionContainer id="partnership">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1