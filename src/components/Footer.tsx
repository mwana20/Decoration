import React from 'react';
import { PageType } from '../types';
import { BRAND, SERVICES_LIST } from '../data/content';
import { BrandLogo, FloralDivider } from './FloralMotif';
import { MapPin, Phone, Mail, Clock, MessageSquare, Instagram, Facebook, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageType) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { id: PageType; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services Catalogue' },
    { id: 'events', label: 'Our Events Portfolio' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'contact', label: 'Contact & Booking' },
  ];

  return (
    <footer className="relative bg-[#200A11] text-[#E8DFD8] border-t border-[#D4AF37]/30 pt-16 sm:pt-20 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#5B1527]/25 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#D4AF37]/20">
          {/* Column 1: Brand & Slogan */}
          <div className="lg:col-span-4 space-y-5">
            <BrandLogo variant="light" showSlogan={true} size="lg" onClick={() => handleNav('home')} />
            <p className="text-sm text-[#D1C3B7] leading-relaxed max-w-sm pt-2">
              Transforming wedding venues, cultural introduction ceremonies, milestone birthdays, and church celebrations across Kampala into majestic, timeless memories.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#C8A86B] font-medium pt-1">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              <span>{BRAND.address}</span>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent('Hello Mwanaweika Deco, I would like to discuss decorating my upcoming event.')}`}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-[#FAF6F0]/10 hover:bg-[#25D366] text-[#FAF6F0] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#FAF6F0]/10 hover:bg-[#E1306C] text-[#FAF6F0] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#FAF6F0]/10 hover:bg-[#1877F2] text-[#FAF6F0] hover:text-white flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <div
                title="TikTok @mwanaweikadeco"
                className="w-9 h-9 rounded-full bg-[#FAF6F0]/10 hover:bg-[#000000] text-[#FAF6F0] hover:text-[#00F2FE] flex items-center justify-center transition-all duration-300 border border-[#D4AF37]/30 cursor-pointer font-bold text-xs"
              >
                TT
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-[#FAF6F0] font-semibold border-b border-[#D4AF37]/30 pb-2">
              EXPLORE
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider uppercase">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-[#D1C3B7] hover:text-[#D4AF37] transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-[#FAF6F0] font-semibold border-b border-[#D4AF37]/30 pb-2">
              SERVICES
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1C3B7]">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left flex items-center gap-1.5"
                  >
                    <span className="text-[#C8A86B]">✦</span>
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left flex items-center gap-1.5 text-[#C8A86B]"
                >
                  <span>✦ Bridal & Baby Showers</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-[#D4AF37] transition-colors cursor-pointer text-left flex items-center gap-1.5 text-[#C8A86B]"
                >
                  <span>✦ Corporate Galas & Dinners</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg tracking-wider text-[#FAF6F0] font-semibold border-b border-[#D4AF37]/30 pb-2">
              CONTACT & VISIT
            </h4>
            <div className="space-y-3 text-xs text-[#D1C3B7]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#FAF6F0]">{BRAND.phone}</p>
                  <p className="text-[#9E8E84]">{BRAND.phoneAlt}</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-[#D4AF37]/15">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <p>{BRAND.hoursWeekday}</p>
                  <p className="text-[#C8A86B] italic">{BRAND.hoursSunday}</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full py-2.5 px-4 bg-[#C8A86B] hover:bg-[#D8BA7D] text-[#240A12] text-xs font-semibold tracking-wider uppercase transition-colors rounded-sm"
                >
                  REQUEST CONSULTATION
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E8E84]">
          <div className="flex items-center gap-2">
            <span className="font-serif text-sm tracking-wider text-[#D4AF37]">MWANAWEIKA DECO</span>
            <span>·</span>
            <span>Kampala, Uganda</span>
          </div>

          <div className="flex items-center gap-1 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-[#C8A86B] fill-current" />
            <span>for exquisite African celebrations</span>
          </div>

          <p className="text-[11px]">
            © 2026 Mwanaweika Deco. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
