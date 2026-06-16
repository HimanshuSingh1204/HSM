import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../utils/helpers';

interface CardProps {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  hover?: boolean;
  variant?: 'default' | 'elevated' | 'outlined';
}

export function Card({
  className,
  children,
  onClick,
  hover = true,
  variant = 'default',
}: CardProps) {
  const variantClass = {
    default: 'bg-card-bg border border-gray-200',
    elevated: 'bg-card-bg shadow-lg',
    outlined: 'bg-transparent border-2 border-primary',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px rgba(0,0,0,0.1)' } : {}}
      onClick={onClick}
      className={cn(
        'rounded-card p-1 p-4 transition-all duration-300',
        variantClass[variant],
        hover && 'cursor-pointer',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
