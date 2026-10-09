import React from 'react';
import { PageType } from '../types';
import { SERVICES_LIST, OTHER_SERVICES } from '../data/content';
import { FloralDivider, CornerFlourish } from '../components/FloralMotif';
import {
  Sparkles,
  CheckCircle2,
  CalendarHeart,
  ArrowRight,
  Heart,
  HelpCircle,
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageType) => void;
  onSelectServiceToBook?: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onSelectServiceToBook,
}) => {
  const handleBookService = (title: string) => {
    if (onSelectServiceToBook) {
      onSelectServiceToBook(title);
    }
    onNavigate('contact');
  };

  return (
    <div className="w-full pt-20">
      {/* =========================================================================
          SERVICES HERO
         ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1900&q=80"
            alt="Mwanaweika Deco Services Catalogue Kampala"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#240A12]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 py-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>BESPOKE CEREMONY STYLING CATALOGUE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF6F0]">
            Our Decoration <span className="text-[#D4AF37] italic font-light">Services</span>
          </h1>

          <FloralDivider light={true} />

          <p className="text-base sm:text-lg text-[#E8DFD8] max-w-2xl mx-auto font-light leading-relaxed">
            From imperial Ugandan wedding stages to reverent church anniversaries and whimsical milestone birthdays, explore what we create across Kampala.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CORE MAJOR SERVICES (Large visual sections with detailed breakdown)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0] space-y-24 sm:space-y-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {SERVICES_LIST.map((service, index) => {
            const isFlipped = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Photography Column */}
                <div
                  className={`lg:col-span-6 relative ${
                    isFlipped ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <CornerFlourish position={isFlipped ? 'top-right' : 'top-left'} />
                  <div className="relative rounded-sm overflow-hidden shadow-2xl border-2 border-[#D4AF37]/40 bg-white">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#200A11]/70 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 text-white">
                      <span className="text-[10px] uppercase tracking-widest text-[#F5E6AB] font-semibold">
                        {service.idealFor}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Service Details Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isFlipped ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
                      SERVICE 0{index + 1}
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#380C17]">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-base text-[#4A3B36] font-medium leading-relaxed">
                    {service.shortDesc}
                  </p>

                  <p className="text-sm sm:text-base text-[#5D4E49] leading-relaxed">
                    {service.fullDesc}
                  </p>

                  {service.culturalNote && (
                    <div className="p-4 bg-[#F5EDE1] border-l-2 border-[#C8A86B] rounded-xs text-xs sm:text-sm text-[#4A3B36] italic">
                      {service.culturalNote}
                    </div>
                  )}

                  {/* Included Highlights */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs uppercase tracking-widest font-bold text-[#380C17]">
                      WHAT'S INCLUDED:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#4A3B36]">
                          <CheckCircle2 className="w-4 h-4 text-[#C8A86B] shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="pt-4 flex items-center gap-4">
                    <button
                      onClick={() => handleBookService(service.title)}
                      className="px-6 py-3 bg-[#5B1527] hover:bg-[#3D0C19] text-[#FAF6F0] text-xs uppercase tracking-[0.18em] font-semibold rounded-sm shadow transition-all flex items-center gap-2 cursor-pointer"
                    >
                      <CalendarHeart className="w-4 h-4 text-[#D4AF37]" />
                      <span>BOOK THIS SERVICE</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          OTHER EVENTS CATALOGUE
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4EDE2] border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
              COMPLETE EVENT SPECTRUM
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#380C17] mt-2">
              Other Celebrations We Style
            </h2>
            <FloralDivider />
            <p className="text-sm sm:text-base text-[#5D4E49]">
              Every special occasion deserves an atmosphere of elegance, warmth, and visual prestige.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {OTHER_SERVICES.map((item, idx) => (
              <div
                key={idx}
                className="group bg-[#FAF6F0] rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-serif font-bold text-[#F5E6AB]">
                    {item.title}
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <p className="text-xs sm:text-sm text-[#5D4E49] leading-relaxed">
                    {item.desc}
                  </p>
                  <button
                    onClick={() => handleBookService(item.title)}
                    className="mt-4 pt-3 border-t border-[#D4AF37]/20 text-[11px] uppercase tracking-wider font-semibold text-[#5B1527] group-hover:text-[#8A6321] flex items-center justify-between cursor-pointer"
                  >
                    <span>INQUIRE NOW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          DON'T SEE YOUR EVENT? — CTA BANNER
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#240A12] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-[#FAF6F0]/10 flex items-center justify-center text-[#D4AF37]">
            <HelpCircle className="w-7 h-7" />
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF6F0]">
            “DON'T SEE YOUR EVENT?”
          </h2>

          <FloralDivider light={true} />

          <p className="text-base sm:text-lg text-[#DCD1CA] leading-relaxed">
            “Every celebration is different. Tell us what you're planning and we'll help bring your idea to life.”
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#C8A86B] hover:bg-[#D8BA7D] text-[#240A12] text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>DISCUSS YOUR EVENT</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
