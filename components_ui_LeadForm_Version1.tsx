'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { leadFormSchema, type LeadFormData, INTEREST_OPTIONS } from '@/lib/validators';
import { Button } from './Button';
import { Input } from './Input';

interface LeadFormProps {
  onSuccess?: () => void;
}

export function LeadForm({ onSuccess }: LeadFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [fallbackEmail, setFallbackEmail] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setIsLoading(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setFallbackEmail(result.fallbackEmail);
        setSubmitError(
          result.error ||
            'Помилка при відправці. Спробуйте пізніше або напишіть на email.'
        );
        return;
      }

      setSubmitSuccess(true);
      reset();
      setTimeout(() => {
        onSuccess?.();
      }, 2000);
    } catch (error) {
      setSubmitError('Помилка мережі. Спробуйте ще раз.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="text-h3 text-deep-ocean mb-2">Дякуємо!</h3>
        <p className="text-gris">Ваша заявка прийнята. Ми контактуємо з вами найближчим часом.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Ім'я"
          placeholder="Ваше ім'я"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <Input
          label="Прізвище"
          placeholder="Ваше прізвище"
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      </div>

      <Input
        label="Email"
        type="email"
        placeholder="your@email.com"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Телефон"
        type="tel"
        placeholder="+380 (98) 123 45 67"
        {...register('phone')}
        error={errors.phone?.message}
      />

      <Input
        label="Компанія"
        placeholder="Назва вашої компанії"
        {...register('company')}
        error={errors.company?.message}
      />

      <div>
        <label className="block text-sm font-medium text-deep-ocean mb-2">
          Напрямок інтересу
        </label>
        <select
          {...register('interest')}
          className="w-full px-4 py-3 border border-clouds rounded bg-ivoire focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky transition-all"
        >
          <option value="">Виберіть опцію</option>
          {Object.entries(INTEREST_OPTIONS).map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {errors.interest && (
          <p className="text-red-500 text-sm mt-1">{errors.interest.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-deep-ocean mb-2">
          Повідомлення (необов'язково)
        </label>
        <textarea
          {...register('message')}
          placeholder="Додайте деталі про вашу заявку..."
          rows={4}
          className="w-full px-4 py-3 border border-clouds rounded bg-ivoire focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky transition-all"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <div className="bg-red-50 border border-red-200 rounded p-4">
          <p className="text-red-800 text-sm mb-3">{submitError}</p>
          {fallbackEmail && (
            <div className="flex gap-2">
              <a
                href={`mailto:${fallbackEmail}`}
                className="flex-1 text-center text-sm font-medium text-red-700 hover:text-red-900 underline"
              >
                Написати на Email
              </a>
              <button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(fallbackEmail);
                  alert('Email скопійовано в буфер обміну');
                }}
                className="flex-1 text-center text-sm font-medium text-red-700 hover:text-red-900 underline"
              >
                Скопіювати Email
              </button>
            </div>
          )}
        </div>
      )}

      <Button
        type="submit"
        isLoading={isLoading}
        className="w-full"
      >
        Залишити заявку
      </Button>
    </form>
  );
}