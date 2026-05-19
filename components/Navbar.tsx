"use client";

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/#leistungen', label: 'Leistungen' },
    { href: '/#ueber-uns', label: 'Über uns' },
    { href: '/#kontakt', label: 'Kontakt' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-serif-custom text-2xl font-semibold">b</span>
          </div>
          <div>
            <div className="font-serif-custom text-2xl tracking-tighter text-primary">büroassist</div>
            <div className="text-[10px] text-text-muted -mt-1">KMU Büroexpertise</div>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className="hover:text-primary transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+41798404449" 
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Phone className="w-4 h-4" />
            079 840 44 49
          </a>
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.985 }}
          >
            <Link
              href="/#kontakt"
              className="cta-button px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-2xl flex items-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.985]"
            >
              Kostenloses Gespräch
            </Link>
          </motion.div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              {navLinks.map(link => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-left"
                >
                  {link.label}
                </Link>
              ))}
              <a href="tel:+41798404449" className="flex items-center gap-2 text-primary" onClick={() => setIsOpen(false)}>
                <Phone className="w-5 h-5" /> 079 840 44 49
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
