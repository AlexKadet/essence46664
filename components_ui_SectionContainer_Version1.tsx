import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionContainerProps {
  id?: string;
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionContainer({
  id,
  children,
  dark = false,
  className = '',
}: SectionContainerProps) {
  return (
    <motion.section
      id={id}
      className={`section-spacing ${dark ? 'bg-deep-ocean text-white' : 'bg-cloud-dancer'} ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
}