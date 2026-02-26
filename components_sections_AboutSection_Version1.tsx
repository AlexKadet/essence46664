'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';
import { FloatingImage } from '../ui/FloatingImage';

export function AboutSection() {
  const features = [
    'Професійна дистрибуція (B2B)',
    'Роздрібний напрям (B2C, e-commerce, retail)',
    'Освітня платформа',
    'Маркетингова підтримка брендів',
  ];

  return (
    <SectionContainer id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingImage
            src="/images/about-team.jpg"
            alt="Professional team in modern office"
            caption="Our Expert Team"
            className="h-96 md:h-[500px]"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 text-deep-ocean mb-8">Хто ми</h2>

          <p className="text-body-lg text-gris mb-8">
            Essence Aesthetic Group — це лідер в мультиканальній дистрибуції преміум-брендів
            для естетичної медицини та косметології. Ми поєднуємо професійний підхід,
            сучасні технології та глибоке розуміння ринку.
          </p>

          <div className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-8 h-8 rounded-full bg-sky/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="w-2 h-2 bg-sky rounded-full" />
                </div>
                <p className="text-body text-deep-ocean font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-body text-gris italic">
            Ми визначаємо стандарти якості, надійності та інновацій у нашій індустрії.
          </p>
        </motion.div>
      </div>
    </SectionContainer>
  );
}