import { Logo } from '../Logo';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="bg-deep-ocean text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Logo />
            <p className="text-sm text-sky mt-4">
              Мультиканальна дистрибуція брендів для естетичної медицини та косметології.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-sm font-light uppercase tracking-wider mb-4">
              Навігація
            </h3>
            <ul className="space-y-2 text-sm text-sky">
              <li><a href="#about" className="hover:text-white transition">Про нас</a></li>
              <li><a href="#divisions" className="hover:text-white transition">Напрямки</a></li>
              <li><a href="#partnership" className="hover:text-white transition">Партнерство</a></li>
              <li><a href="#contacts" className="hover:text-white transition">Контакти</a></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-display text-sm font-light uppercase tracking-wider mb-4">
              Контакти
            </h3>
            <ul className="space-y-3 text-sm text-sky">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Київ, Україна</span>
              </li>
            </ul>
          </div>

          {/* Social / Legal */}
          <div>
            <h3 className="font-display text-sm font-light uppercase tracking-wider mb-4">
              Про бренд
            </h3>
            <p className="text-sm text-sky font-display">Proven Innovation.</p>
            <p className="text-sm text-sky font-display">Protected Reputation.</p>
          </div>
        </div>

        <div className="border-t border-sky/20 pt-8">
          <p className="text-sm text-sky text-center">
            © 2024 Essence Aesthetic Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}