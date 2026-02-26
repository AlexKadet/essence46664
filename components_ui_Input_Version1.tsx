import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export function Input({ label, error, className = '', ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-deep-ocean mb-2">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3 border border-clouds rounded bg-ivoire focus:outline-none focus:border-sky focus:ring-1 focus:ring-sky transition-all ${
          error ? 'border-red-300' : ''
        } ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}