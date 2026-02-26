'use client';

import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';
import { FloatingImage } from '../ui/FloatingImage';
import { CheckCircle2 } from 'lucide-react';

export function LogisticsSection() {
  const benefits = [
    'GDP-сертифікований склад (для медичного сегменту)',
    'Контроль зберігання і температурного режиму',
    'Повна простежуваність партій',
    'Регуляторна відповідність (EU/UA)',
  ];

  return (
    <SectionContainer id="logistics" dark>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <FloatingImage
            src="/images/logistics-warehouse.jpg"
            alt="Modern warehouse facility"
            caption="State-of-the-art Logistics"
            className="h-96 md:h-[500px] filter brightness-90"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-h2 text-white mb-8">Логістика & Якість</h2>

          <p className="text-body-lg text-sky mb-8">
            Ми гарантуємо найвищі стандарти зберігання, обробки та доставки продукції.
            Кожна партія контролюється на кожному етапі ланцюга поставок.
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CheckCircle2 size={24} className="text-sky flex-shrink-0 mt-1" />
                <p className="text-body text-white">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}