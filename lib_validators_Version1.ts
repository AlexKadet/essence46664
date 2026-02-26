import { z } from 'zod';

export const leadFormSchema = z.object({
  firstName: z.string().min(2, 'Мінімум 2 символи').max(50),
  lastName: z.string().min(2, 'Мінімум 2 символи').max(50),
  email: z.string().email('Невірна email адреса'),
  phone: z.string().regex(/^\+?[0-9\s\-\(\)]{10,}$/, 'Невірний номер телефону'),
  company: z.string().min(2, 'Назва компанії').max(100),
  interest: z.enum(['brands', 'professionals', 'retail', 'education'], {
    errorMap: () => ({ message: 'Виберіть напрямок інтересу' }),
  }),
  message: z.string().min(10, 'Мінімум 10 символів').max(1000).optional(),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

export const INTEREST_OPTIONS = {
  brands: 'Для брендів',
  professionals: 'Для професіоналів',
  retail: 'Retail & e-commerce',
  education: 'Освіта',
};