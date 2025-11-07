'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  gradient?: boolean;
  centered?: boolean;
  animate?: boolean;
}

export const Heading = ({
  children,
  level = 1,
  className = '',
  gradient = false,
  centered = false,
  animate = true,
}: HeadingProps) => {
  const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
  
  const baseClasses = {
    1: 'text-4xl md:text-5xl lg:text-6xl font-bold',
    2: 'text-3xl md:text-4xl lg:text-5xl font-bold',
    3: 'text-2xl md:text-3xl lg:text-4xl font-semibold',
    4: 'text-xl md:text-2xl lg:text-3xl font-semibold',
    5: 'text-lg md:text-xl lg:text-2xl font-medium',
    6: 'text-base md:text-lg lg:text-xl font-medium',
  };
  
  const textClass = gradient ? 'text-gradient' : 'text-sage-900';
  const alignClass = centered ? 'text-center' : '';
  
  const content = (
    <Tag className={`${baseClasses[level]} ${textClass} ${alignClass} ${className}`}>
      {children}
    </Tag>
  );
  
  if (!animate) return content;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
};

interface SubheadingProps {
  children: ReactNode;
  className?: string;
  centered?: boolean;
}

export const Subheading = ({ children, className = '', centered = false }: SubheadingProps) => {
  const alignClass = centered ? 'text-center' : '';
  
  return (
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={`text-lg md:text-xl text-sage-700 ${alignClass} ${className}`}
    >
      {children}
    </motion.p>
  );
};

