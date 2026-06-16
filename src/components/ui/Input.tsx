import { InputHTMLAttributes } from 'react';
import { cn } from '../../utils/helpers';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'filled';
}

export function Input({
  label,
  error,
  icon,
  variant = 'default',
  className,
  ...props
}: InputProps) {
  const variantClass = {
    default: 'bg-white border-2 border-gray-200 focus:border-primary',
    filled: 'bg-gray-100 border-none focus:bg-gray-200',
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-secondary mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          className={cn(
            'w-full px-4 py-2.5 rounded-input outline-none transition-all duration-200 text-secondary',
            variantClass[variant],
            error && 'border-danger focus:border-danger',
            icon && 'pl-10',
            className
          )}
          {...props}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
      {error && <p className="text-sm text-danger mt-1">{error}</p>}
    </div>
  );
}
