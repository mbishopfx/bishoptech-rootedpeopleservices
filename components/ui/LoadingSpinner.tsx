'use client';

import { motion } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner = ({ size = 'md', className = '' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className={`${sizeClasses[size]} border-4 border-sage-200 border-t-sage-600 rounded-full`}
      />
    </div>
  );
};

export const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-sage-50/80 backdrop-blur-md flex items-center justify-center z-50">
      <div className="glass-card p-8">
        <LoadingSpinner size="lg" />
        <p className="text-sage-700 mt-4 text-center">Loading...</p>
      </div>
    </div>
  );
};

