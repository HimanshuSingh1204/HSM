import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: ReactNode;
  trend?: {
    direction: 'up' | 'down';
    percentage: number;
  };
  backgroundColor?: string;
  textColor?: string;
}

export function StatCard({
  label,
  value,
  icon,
  trend,
  backgroundColor = 'bg-blue-50',
  textColor = 'text-primary',
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${backgroundColor} rounded-card p-6 flex items-start justify-between border border-gray-200`}
    >
      <div className="flex-1">
        <p className="text-gray-600 text-sm font-medium mb-2">{label}</p>
        <p className={`text-3xl font-bold ${textColor} mb-2`}>{value}</p>
        {trend && (
          <span className={`text-sm font-semibold ${trend.direction === 'up' ? 'text-success' : 'text-danger'}`}>
            {trend.direction === 'up' ? '↑' : '↓'} {trend.percentage}%
          </span>
        )}
      </div>
      <div className={`text-4xl opacity-20 ${textColor}`}>
        {icon}
      </div>
    </motion.div>
  );
}
