import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded transition-all duration-600 disabled:opacity-50 disabled:cursor-not-allowed font-medium',
  {
    variants: {
      variant: {
        primary:
          'bg-deep-ocean text-white hover:bg-opacity-90 active:scale-95',
        secondary:
          'border border-deep-ocean text-deep-ocean hover:bg-deep-ocean hover:text-white',
        tertiary:
          'text-deep-ocean hover:text-opacity-70',
        ghost:
          'text-gris hover:text-deep-ocean',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({
  variant,
  size,
  isLoading,
  children,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({ variant, size })}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="inline-block animate-spin mr-2">⏳</span>
          Завантаження...
        </>
      ) : (
        children
      )}
    </button>
  );
}