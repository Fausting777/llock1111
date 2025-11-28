import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ShieldCheck } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  onNavigate: (view: PageView) => void;
  currentView: PageView;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Startseite', id: 'home' },
    { label: 'Preise', id: 'pricing' },
    { label: 'Über Uns', id: 'about' },
    { label: 'Kontakt', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    if (id === 'home') {
      onNavigate('home');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'home') {
        onNavigate('home');
        // Wait for navigation to render home before scrolling
        setTimeout(() => {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => handleLinkClick('home')}
          >
            <div className="bg-amber-500/10 p-2.5 rounded-xl border border-amber-500/20 group-hover:bg-amber-500/20 transition-colors">
              <ShieldCheck className="h-6 w-6 text-amber-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white leading-none tracking-tight">RETTER</span>
              <span className="text-xs text-zinc-400 font-medium tracking-[0.2em] uppercase mt-1">Berlin</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-zinc-400 hover:text-white font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:03012345678" 
              className="group flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-zinc-950 px-5 py-2.5 rounded-lg transition-all duration-300 font-bold shadow-lg shadow-amber-900/20"
            >
              <Phone className="h-4 w-4 group-hover:animate-shake" />
              <span>030 123 456 78</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
              aria-label="Menü öffnen"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800 absolute w-full top-full left-0 animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="block w-full text-left px-4 py-3 text-base font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 mt-4 border-t border-zinc-800">
               <a 
                href="tel:03012345678" 
                className="flex w-full items-center justify-center gap-2 bg-amber-500 text-zinc-950 px-4 py-3 rounded-lg font-bold"
              >
                <Phone className="h-5 w-5" />
                Jetzt anrufen
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};