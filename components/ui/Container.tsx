'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container = ({ children, className = '', size = 'xl' }: ContainerProps) => {
  const sizeClasses = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };
  
  return (
    <div className={`${sizeClasses[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'transparent' | 'gradient' | 'glass';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Section = ({
  children,
  className = '',
  id,
  background = 'transparent',
  padding = 'lg',
}: SectionProps) => {
  const bgClasses = {
    transparent: '',
    gradient: 'section-gradient',
    glass: 'glass-container',
  };
  
  const paddingClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-24',
    xl: 'py-20 md:py-32',
  };
  
  return (
    <section id={id} className={`${bgClasses[background]} ${paddingClasses[padding]} ${className}`}>
      {children}
    </section>
  );
};

interface AnimatedSectionProps extends SectionProps {
  delay?: number;
}

export const AnimatedSection = ({
  children,
  delay = 0,
  ...props
}: AnimatedSectionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay }}
    >
      <Section {...props}>{children}</Section>
    </motion.div>
  );
};

