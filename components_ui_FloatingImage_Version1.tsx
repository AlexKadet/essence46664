'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface FloatingImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export function FloatingImage({
  src,
  alt,
  caption,
  className = '',
}: FloatingImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { margin: '100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-lg ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.div
        animate={isInView ? { y: [-2, 4, -2] } : {}}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Image
          src={src}
          alt={alt}
          width={600}
          height={400}
          className="w-full h-auto object-cover"
          priority={false}
        />
      </motion.div>

      {caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/40 to-transparent p-4">
          <p className="text-white text-sm">{caption}</p>
        </div>
      )}
    </motion.div>
  );
}