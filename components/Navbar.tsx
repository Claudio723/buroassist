"use client";

import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - bodyRect - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
            <span className="text-white font-serif-custom text-2xl font-semibold">b</span>
          </div>
          <div>
            <div className="font-serif-custom text-2xl tracking-tighter text-primary">büroassist</div>
            <div className="text-[10px] text-text-muted -mt-1">KMU Büroexpertise</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <button onClick={() => scrollToSection('leistungen')} className="hover:text-primary transition-colors">Leistungen</button>
          <button onClick={() => scrollToSection('warum')} className="hover:text-primary transition-colors">Warum wir</button>
          <button onClick={() => scrollToSection('ueber-uns')} className="hover:text-primary transition-colors">Über uns</button>
          <button onClick={() => scrollToSection('kontakt')} className="hover:text-primary transition-colors">Kontakt</button>
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="tel:+41441234567" 
            className="hidden md:flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            <Phone className="w-4 h-4" />
            041 123 45 67
          </a>
          <motion.button 
            onClick={() => scrollToSection('kontakt')}
            className="cta-button px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-2xl flex items-center gap-2 hover:bg-primary/90 transition-all active:scale-[0.985]"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.985 }}
          >
            Kostenloses Gespräch
          </motion.button>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden p-2"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t"
          >
            <div className="px-6 py-8 flex flex-col gap-6 text-lg">
              <button onClick={() => scrollToSection('leistungen')} className="text-left">Leistungen</button>
              <button onClick={() => scrollToSection('warum')} className="text-left">Warum wir</button>
              <button onClick={() => scrollToSection('ueber-uns')} className="text-left">Über uns</button>
              <button onClick={() => scrollToSection('kontakt')} className="text-left">Kontakt</button>
              <a href="tel:+41441234567" className="flex items-center gap-2 text-primary">
                <Phone className="w-5 h-5" /> 041 123 45 67
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}