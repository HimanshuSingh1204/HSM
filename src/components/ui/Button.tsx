import { ReactNode, ButtonHTMLAttributes } from 'react';
import { cn } from '../../utils/helpers';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClass = 'font-semibold rounded-btn transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer';

  const variantClass = {
    primary: 'bg-primary text-white hover:bg-blue-700 active:scale-95',
    secondary: 'bg-secondary text-white hover:bg-opacity-90 active:scale-95',
    danger: 'bg-danger text-white hover:bg-red-700 active:scale-95',
    success: 'bg-success text-white hover:bg-green-700 active:scale-95',
    outline: 'border-2 border-primary text-primary hover:bg-blue-50 active:scale-95',
  };

  const sizeClass = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: isLoading || disabled ? 1 : 1.02 }}
      whileTap={{ scale: isLoading || disabled ? 1 : 0.98 }}
      disabled={isLoading || disabled}
      className={cn(
        baseClass,
        variantClass[variant],
        sizeClass[size],
        (isLoading || disabled) && 'opacity-60 cursor-not-allowed',
        className
      )}
      {...(props as any)}
    >
      {isLoading && (
        <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {children}
    </motion.button>
  );
}
