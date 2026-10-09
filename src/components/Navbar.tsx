import React, { useState, useEffect } from 'react';
import { PageType } from '../types';
import { BrandLogo } from './FloralMotif';
import { Menu, X, Phone, CalendarHeart, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'services', label: 'SERVICES' },
    { id: 'events', label: 'OUR EVENTS' },
    { id: 'gallery', label: 'GALLERY' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When on home page at top, show subtle transparent light header; when scrolled or on other pages, solid luxury ivory/burgundy bar
  const isTransparent = !isScrolled && currentPage === 'home';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isTransparent
            ? 'bg-gradient-to-b from-[#1A0E13]/85 via-[#1A0E13]/40 to-transparent py-4 sm:py-5 text-white'
            : 'bg-[#FAF6F0]/95 backdrop-blur-md shadow-sm border-b border-[#D4AF37]/20 py-3 sm:py-4 text-[#261C19]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo */}
            <BrandLogo
              variant={isTransparent ? 'light' : 'dark'}
              showSlogan={true}
              size="md"
              onClick={() => handleNavClick('home')}
            />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`relative py-1 text-xs tracking-[0.2em] font-medium transition-all duration-300 ${
                      isTransparent
                        ? isActive
                          ? 'text-[#F5E6AB] font-semibold'
                          : 'text-[#FAF6F0]/85 hover:text-[#F5E6AB]'
                        : isActive
                        ? 'text-[#5B1527] font-semibold'
                        : 'text-[#4A3B36] hover:text-[#5B1527]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full transition-all duration-300 ${
                          isTransparent ? 'bg-[#D4AF37]' : 'bg-[#5B1527]'
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              {/* Desktop Booking CTA */}
              <button
                onClick={() => handleNavClick('contact')}
                className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.16em] uppercase font-semibold transition-all duration-300 rounded-sm shadow-sm cursor-pointer ${
                  isTransparent
                    ? 'bg-[#C8A86B] hover:bg-[#D8BA7D] text-[#26151B] border border-[#F5E6AB]/60 hover:shadow-md'
                    : 'bg-[#5B1527] hover:bg-[#440F1D] text-[#FAF6F0] border border-[#5B1527] hover:shadow-md'
                }`}
              >
                <CalendarHeart className="w-3.5 h-3.5" />
                <span>BOOK YOUR EVENT</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`lg:hidden p-2 rounded-sm transition-colors cursor-pointer ${
                  isTransparent
                    ? 'text-white hover:bg-white/10'
                    : 'text-[#380C17] hover:bg-[#5B1527]/10'
                }`}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-[#FAF6F0] shadow-2xl z-50 flex flex-col justify-between p-6 overflow-y-auto border-l border-[#D4AF37]/30">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#D4AF37]/20">
                <BrandLogo
                  variant="dark"
                  showSlogan={false}
                  size="sm"
                  onClick={() => handleNavClick('home')}
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded text-[#380C17] hover:bg-[#380C17]/10"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav links list */}
              <nav className="flex flex-col gap-2 mt-6">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`flex items-center justify-between px-4 py-3 rounded text-left text-sm tracking-[0.15em] font-medium transition-colors ${
                        isActive
                          ? 'bg-[#5B1527] text-[#FAF6F0] font-semibold'
                          : 'text-[#380C17] hover:bg-[#5B1527]/5'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <Sparkles className="w-4 h-4 text-[#D4AF37]" />}
                    </button>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-[#D4AF37]/20">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#5B1527] text-white text-xs tracking-[0.16em] uppercase font-semibold rounded shadow hover:bg-[#440F1D] transition-colors"
                >
                  <CalendarHeart className="w-4 h-4 text-[#D4AF37]" />
                  <span>BOOK YOUR EVENT</span>
                </button>
              </div>
            </div>

            {/* Mobile Contact Quick Bar */}
            <div className="mt-8 pt-6 border-t border-[#D4AF37]/20 text-xs text-[#5D4E49] space-y-2">
              <p className="font-serif italic text-sm text-[#380C17]">Kampala, Uganda</p>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C8A86B]" />
                <span>+256 700 000 000</span>
              </div>
              <p className="text-[11px] text-[#7A6B66]">Mon – Sat: 8:00 AM – 6:00 PM</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
