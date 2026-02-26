'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Logo } from '../Logo';
import { Button } from './Button';

interface HeaderProps {
  onLeadClick: () => void;
}

export function Header({ onLeadClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Про нас', href: '#about' },
    { label: 'Напрямки', href: '#divisions' },
    { label: 'Логістика', href: '#logistics' },
    { label: 'Партнерство', href: '#partnership' },
    { label: 'Контакти', href: '#contacts' },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cloud-dancer/80 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container flex items-center justify-between h-20">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-deep-ocean hover:text-opacity-70 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <Button
          size="sm"
          onClick={onLeadClick}
          className="hidden md:inline-flex"
        >
          Запит партнерства
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-deep-ocean" />
          ) : (
            <Menu className="text-deep-ocean" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          className="md:hidden bg-cloud-dancer border-t border-clouds"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-sm font-medium text-deep-ocean hover:text-opacity-70"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              onClick={() => {
                onLeadClick();
                setIsOpen(false);
              }}
              className="w-full mt-4"
              size="sm"
            >
              Запит партнерства
            </Button>
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}