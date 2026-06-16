import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
  size?: 'sm' | 'md' | 'lg';
  footer?: React.ReactNode;
}

export function Modal({ isOpen, title, children, onClose, size = 'md', footer }: ModalProps) {
  if (!isOpen) return null;

  const sizeClass = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-card shadow-xl w-full mx-4 ${sizeClass[size]}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-secondary">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-secondary transition-colors"
          >
            ✕
          </button>
        </div>
        <div className="p-6">{children}</div>
        {footer && (
          <div className="border-t border-gray-200 p-6 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
