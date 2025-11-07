'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MAIN_NAV_LINKS } from '@/lib/types';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20">
      {/* Main Footer */}
      <div className="section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="/images/logo.png"
                    alt="Rooted People Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-lg font-bold text-sage-800">
                  Rooted People Services
                </span>
              </div>
              <p className="text-sage-600 text-sm">
                Building compliant, people-first workplaces that scale with confidence.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="text-sage-800 font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {MAIN_NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sage-600 hover:text-sage-800 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="text-sage-800 font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-sage-600">
                <li>HR Audits & Compliance</li>
                <li>Retainer HR Services</li>
                <li>Employee Handbooks</li>
                <li>Fractional HR Director</li>
                <li>Training & Workshops</li>
                <li>HR Strategy</li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h4 className="text-sage-800 font-semibold mb-4">Contact</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:contact@rootedpeopleservices.com"
                    className="flex items-center gap-2 text-sage-600 hover:text-sage-800 text-sm transition-colors group"
                  >
                    <Mail size={16} className="text-sage-500 group-hover:text-sage-700" />
                    <span>Email Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 text-sage-600 hover:text-sage-800 text-sm transition-colors group"
                  >
                    <Phone size={16} className="text-sage-500 group-hover:text-sage-700" />
                    <span>Call Us</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/jessika-hanger-1a5b9011a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sage-600 hover:text-sage-800 text-sm transition-colors group"
                  >
                    <Linkedin size={16} className="text-sage-500 group-hover:text-sage-700" />
                    <span>Connect on LinkedIn</span>
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="glass-container border-t border-sage-200/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sage-600 text-sm">
              © {currentYear} Rooted People Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-sage-600 hover:text-sage-800 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sage-600 hover:text-sage-800 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

