'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const Card = ({ children, className = '', hover = true, delay = 0 }: CardProps) => {
  const hoverClass = hover ? 'glass-container-hover' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`glass-card ${hoverClass} ${className}`}
    >
      {children}
    </motion.div>
  );
};

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

export const GlassCard = ({ children, className = '', padding = 'md' }: GlassCardProps) => {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-12',
  };
  
  return (
    <div className={`glass-container ${paddingClasses[padding]} ${className}`}>
      {children}
    </div>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  features?: string[];
  className?: string;
  delay?: number;
}

export const ServiceCard = ({
  title,
  description,
  icon,
  features = [],
  className = '',
  delay = 0,
}: ServiceCardProps) => {
  return (
    <Card hover delay={delay} className={`p-6 ${className}`}>
      {icon && (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="mb-4 text-sage-600"
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-xl font-bold text-sage-800 mb-3">{title}</h3>
      <p className="text-sage-700 mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: delay + 0.3 + index * 0.1 }}
              className="text-sm text-sage-600 flex items-start"
            >
              <span className="text-sage-500 mr-2">•</span>
              {feature}
            </motion.li>
          ))}
        </ul>
      )}
    </Card>
  );
};

