import { ReactNode } from 'react';
import { cn } from '../../utils/helpers';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'secondary';
  className?: string;
}

export function Badge({ children, variant = 'primary', className }: BadgeProps) {
  const variantClass = {
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-amber-100 text-amber-800',
    danger: 'bg-red-100 text-red-800',
    secondary: 'bg-gray-100 text-gray-800',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium',
        variantClass[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
