'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { ReactNode } from 'react';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'left',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseClasses = 'font-medium rounded-glass transition-all duration-300 inline-flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'glass-button',
    secondary: 'bg-tan-500/80 backdrop-blur-md text-white hover:bg-tan-600/90 shadow-glass hover:shadow-glass-hover border border-white/30',
    outline: 'bg-white/20 backdrop-blur-md text-sage-700 hover:bg-white/30 border-2 border-sage-400 hover:border-sage-500',
    ghost: 'bg-transparent hover:bg-white/20 text-sage-700 hover:text-sage-800',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="w-5 h-5" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="w-5 h-5" />}
    </motion.button>
  );
};

