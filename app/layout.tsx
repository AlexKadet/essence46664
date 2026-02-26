import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import '@/styles/globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  weight: ['600', '700'],
});

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Essence Aesthetic Group | Premium Aesthetic Medicine Distribution',
  description:
    'Мультиканальна дистрибуція брендів для естетичної медицини та косметології. Proven Innovation. Protected Reputation.',
  keywords: [
    'aesthetic medicine',
    'cosmetology',
    'distribution',
    'beauty brands',
    'Ukraine',
  ],
  authors: [{ name: 'Essence Aesthetic Group' }],
  openGraph: {
    title: 'Essence Aesthetic Group',
    description:
      'Premium aesthetic medicine and cosmetology distribution partner',
    type: 'website',
    locale: 'uk_UA',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${playfair.variable} ${inter.variable}`}>\n      <body>{children}</body>\n    </html>
  );
}