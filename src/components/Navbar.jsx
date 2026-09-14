import React, { useState, useEffect } from 'react';
import { siteConfig, getContactAction } from '../data/config';
import { Menu, X, Phone, MapPin, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Navbar({ onOpenOrderModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contact = getContactAction();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Heritage Notice Bar */}
      <div className="bg-chocolate-950 text-cream-200 text-xs py-2 px-4 border-b border-chocolate-800 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-caramel-500"></span>
            <span>{siteConfig.brand.motto}</span>
            <span className="hidden md:inline text-chocolate-400">•</span>
            <span className="hidden md:inline">{siteConfig.brand.landmark}</span>
          </div>
          <div className="flex items-center gap-4 text-chocolate-200 font-medium">
            <a 
              href={`tel:${siteConfig.brand.phoneRaw}`} 
              className="hover:text-cream-50 transition-colors flex items-center gap-1"
            >
              <Phone size={12} className="text-caramel-500" />
              <span>{siteConfig.brand.phone}</span>
            </a>
            <span>•</span>
            <a 
              href={siteConfig.brand.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-cream-50 transition-colors flex items-center gap-1"
            >
              <InstagramIcon size={12} className="text-caramel-500" />
              <span>{siteConfig.brand.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-cream-50/95 backdrop-blur-md shadow-sm border-b border-cream-200 py-3' 
            : 'bg-cream-50 border-b border-cream-200/70 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/logo.jpg" 
              alt="Gelora Bakery Logo" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-caramel-500/30 group-hover:border-caramel-500 transition-colors shadow-sm"
            />
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl text-chocolate-900 font-bold tracking-tight leading-none group-hover:text-caramel-600 transition-colors">
                {siteConfig.brand.name}
              </span>
              <span className="text-[11px] font-sans text-chocolate-600 tracking-wider uppercase mt-1">
                Kabanjahe • Sejak 1975
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-chocolate-800">
            {siteConfig.navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className="hover:text-caramel-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-caramel-600 hover:after:w-full after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-chocolate-900 hover:bg-caramel-600 text-cream-50 text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              <span>Pesan Sekarang</span>
              <ChevronRight size={16} className="ml-1 opacity-80" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenOrderModal}
              className="px-3 py-1.5 rounded-full bg-chocolate-900 text-cream-50 text-xs font-semibold"
            >
              Pesan
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-chocolate-900 hover:bg-cream-200/50 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-cream-50 border-b border-cream-200 px-4 pt-3 pb-6 animate-fadeIn">
            <div className="flex flex-col space-y-3 pt-2">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-chocolate-800 hover:bg-cream-100 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-cream-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenOrderModal();
                  }}
                  className="w-full py-3 text-center rounded-xl bg-chocolate-900 text-cream-50 font-semibold text-sm shadow-sm"
                >
                  Tanya & Pesan Hari Ini
                </button>
                <div className="flex items-center justify-between text-xs text-chocolate-600 px-1 pt-1">
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-caramel-500" />
                    Jl. Kpt. Bangsi Sembiring No.24
                  </span>
                  <a 
                    href={siteConfig.brand.instagramUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-semibold text-caramel-600 hover:underline flex items-center gap-1"
                  >
                    <InstagramIcon size={14} />
                    {siteConfig.brand.instagramHandle}
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
