import React from 'react';
import { PageType, GalleryPhoto } from '../types';
import { SERVICES_LIST, GALLERY_PHOTOS } from '../data/content';
import { FloralDivider, CornerFlourish } from '../components/FloralMotif';
import {
  Sparkles,
  MapPin,
  CalendarHeart,
  ArrowRight,
  Palette,
  Eye,
  Clock,
  Heart,
  CheckCircle2,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onOpenGalleryPhoto: (photo: GalleryPhoto) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenGalleryPhoto }) => {
  // Preview 6 gallery images
  const previewGallery = GALLERY_PHOTOS.slice(0, 6);

  return (
    <div className="w-full">
      {/* =========================================================================
          HERO SECTION — Full-screen cinematic Ugandan luxury wedding/event hero
         ========================================================================= */}
      <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=85"
            alt="Mwanaweika Deco - Professionally decorated luxury wedding venue in Kampala"
            className="w-full h-full object-cover object-center scale-105 animate-pulse duration-[12000ms]"
          />
          {/* Layered cinematic gradient overlays for luxury & readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B10] via-[#1A0B10]/65 to-[#1A0B10]/75" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#1A0B10]/30 to-[#1A0B10]/85" />
        </div>

        {/* Subtle Floating Petals / Particles Graphic Effect */}
        <div className="absolute inset-0 pointer-events-none z-1 overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 rounded-full bg-[#D4AF37] blur-[1px] animate-bounce duration-[4000ms]" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#FAF6F0] blur-[1px] animate-pulse duration-[5000ms]" />
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-[#E2CA91] blur-[1px] animate-bounce duration-[6000ms]" />
          <div className="absolute top-2/3 right-1/5 w-1.5 h-1.5 rounded-full bg-[#D4AF37] blur-[0.5px] animate-pulse duration-[3500ms]" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:py-32">
          {/* Location Indicator & Crest */}
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#FAF6F0]/10 backdrop-blur-md border border-[#D4AF37]/40 text-[#F5E6AB] text-xs uppercase tracking-[0.25em] font-medium mb-6">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Kampala, Uganda</span>
          </div>

          {/* Business Name */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[0.18em] uppercase text-[#FAF6F0] drop-shadow-md">
            MWANAWEIKA <span className="text-[#D4AF37] font-light">DECO</span>
          </h1>

          {/* Slogan */}
          <p className="font-script text-2xl sm:text-4xl md:text-5xl text-[#F5E6AB] mt-3 sm:mt-4 drop-shadow">
            “We Turn Moments Into Beautiful Memories.”
          </p>

          <FloralDivider light={true} className="my-5" />

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-[#FAF6F0]/90 max-w-2xl mx-auto font-light leading-relaxed">
            Elegant decoration and event styling for weddings, introductions, birthdays, church celebrations and unforgettable occasions across Kampala.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 sm:mt-10">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#C8A86B] hover:bg-[#D8BA7D] text-[#240A12] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#FAF6F0]/40"
            >
              <CalendarHeart className="w-4 h-4" />
              <span>BOOK YOUR EVENT</span>
            </button>

            <button
              onClick={() => onNavigate('events')}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#FAF6F0]/10 hover:bg-[#FAF6F0]/20 text-[#FAF6F0] hover:text-[#F5E6AB] border border-[#FAF6F0]/40 hover:border-[#D4AF37] text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold rounded-sm backdrop-blur-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>EXPLORE OUR WORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Subtle Bottom Curve Decorator */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#FAF6F0] to-transparent z-10" />
      </section>

      {/* =========================================================================
          HOME — SHORT INTRODUCTION
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0] relative overflow-hidden">
        {/* Soft background subtle floral aura */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Photography Column with Arch Framing */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative mx-auto max-w-sm sm:max-w-md">
                {/* Decorative border frame behind image */}
                <div className="absolute -inset-3 border border-[#D4AF37]/40 arch-mask -rotate-1 pointer-events-none" />

                {/* Main Image with Arch Top */}
                <div className="relative arch-mask overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80"
                    alt="Mwanaweika Deco ceremony styling craftsmanship"
                    className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-serif italic text-center">
                    Crafting ceremonies with soul & cultural grandeur in Kampala
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-[#5B1527] text-[#FAF6F0] p-4 rounded-sm shadow-xl border border-[#D4AF37]/50 max-w-[170px]">
                  <p className="font-serif text-2xl font-bold text-[#F5E6AB]">500+</p>
                  <p className="text-[11px] uppercase tracking-wider text-[#E8DFD8]">
                    Celebrations Styled Across Uganda
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>ABOUT MWANAWEIKA DECO</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#380C17] leading-tight">
                “YOUR VISION. <span className="text-[#C8A86B] font-light italic">OUR DECOR.”</span>
              </h2>

              <p className="text-base sm:text-lg text-[#4A3B36] leading-relaxed">
                We transform ordinary spaces into beautiful environments designed around your occasion, personality and celebration.
              </p>

              <p className="text-sm sm:text-base text-[#61524D] leading-relaxed">
                Whether you are planning a traditional Ugandan Kwanjula ceremony in Mukono, a lavish royal wedding reception at Munyonyo, an uplifting church milestone, or an intimate birthday dinner, Mwanaweika Deco combines opulent fabrics, fresh florals, and architectural lighting to curate an experience your family and guests will forever treasure.
              </p>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#5B1527] hover:bg-[#400E1B] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] font-semibold rounded-sm shadow-md transition-all cursor-pointer group"
                >
                  <span>MEET MWANAWEIKA DECO</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOME — FEATURED SERVICES (4 large visual cards)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F4EDE2] relative border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
              WHAT WE CREATE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#380C17] mt-2">
              Transforming Every Occasion
            </h2>
            <FloralDivider />
            <p className="text-sm sm:text-base text-[#5D4E49]">
              Every ceremony is treated as an artful masterpiece. Explore our premier decoration specialties.
            </p>
          </div>

          {/* 4 Large Visual Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {SERVICES_LIST.map((service) => (
              <div
                key={service.id}
                onClick={() => onNavigate('services')}
                className="group relative bg-[#FAF6F0] rounded-sm overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#D4AF37]/30 flex flex-col cursor-pointer hover:-translate-y-1.5"
              >
                {/* Image Top */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200A11] via-[#200A11]/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <span className="absolute bottom-3 left-4 text-[10px] font-semibold tracking-widest uppercase text-[#F5E6AB] bg-[#5B1527]/80 px-2.5 py-1 rounded-xs">
                    KAMPALA & BEYOND
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#380C17] group-hover:text-[#8A6321] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5D4E49] mt-3 leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-5 mt-4 border-t border-[#D4AF37]/20 flex items-center justify-between text-xs font-semibold tracking-wider uppercase text-[#5B1527] group-hover:text-[#8A6321]">
                    <span>EXPLORE STYLING</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Services CTA Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent hover:bg-[#5B1527] text-[#5B1527] hover:text-[#FAF6F0] border-2 border-[#5B1527] text-xs uppercase tracking-[0.2em] font-bold rounded-sm transition-all cursor-pointer"
            >
              <span>VIEW ALL SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOME — FEATURED EVENT (Editorial Section)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-sm overflow-hidden bg-[#240A12] text-white shadow-2xl border border-[#D4AF37]/40">
            {/* Background Venue Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
              <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80"
                  alt="Mwanaweika Deco venue styling highlight"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#240A12] hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#240A12] via-transparent to-transparent lg:hidden" />
              </div>

              {/* Editorial Text Block */}
              <div className="lg:col-span-5 p-8 sm:p-12 lg:p-16 flex flex-col justify-center space-y-6 relative z-10">
                <CornerFlourish position="top-right" />

                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>FEATURED VENUE TRANSFORMATION</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#FAF6F0]">
                  “EVERY DETAIL <span className="text-[#D4AF37] italic font-light">MATTERS.”</span>
                </h2>

                <p className="text-sm sm:text-base text-[#DCD1CA] leading-relaxed">
                  “From the entrance to the main stage, tables and floral arrangements, we carefully design every element to create a memorable experience.”
                </p>

                <div className="space-y-2.5 pt-2 text-xs text-[#E8DFD8]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Speke Resort Munyonyo Royal Pavilion</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>3,000+ hand-selected roses & wisteria canopy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                    <span>Architectural amber lighting & custom acrylic tables</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('events')}
                    className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C8A86B] hover:bg-[#D8BA7D] text-[#240A12] text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow transition-all cursor-pointer"
                  >
                    <span>VIEW OUR EVENTS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOME — WHY CHOOSE US (4 elegant benefits with subtle icons)
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#F5EDE1] border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
              OUR COMMITMENT
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#380C17] mt-2">
              Why Choose Mwanaweika Deco
            </h2>
            <FloralDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Benefit 1 */}
            <div className="bg-[#FAF6F0] p-8 rounded-sm border border-[#D4AF37]/30 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <Palette className="w-6 h-6 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#380C17] tracking-wider">
                CREATIVE DESIGN
              </h3>
              <p className="text-xs sm:text-sm text-[#5D4E49] leading-relaxed">
                Unique concepts created around your event, wedding theme, and cultural identity.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-[#FAF6F0] p-8 rounded-sm border border-[#D4AF37]/30 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <Eye className="w-6 h-6 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#380C17] tracking-wider">
                ATTENTION TO DETAIL
              </h3>
              <p className="text-xs sm:text-sm text-[#5D4E49] leading-relaxed">
                Every element is carefully considered—from crystal chargers to delicate floral petals.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-[#FAF6F0] p-8 rounded-sm border border-[#D4AF37]/30 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <Clock className="w-6 h-6 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#380C17] tracking-wider">
                PROFESSIONAL SERVICE
              </h3>
              <p className="text-xs sm:text-sm text-[#5D4E49] leading-relaxed">
                Reliable setup, punctual delivery, and dedicated event-day support across Uganda.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="bg-[#FAF6F0] p-8 rounded-sm border border-[#D4AF37]/30 text-center space-y-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <Heart className="w-6 h-6 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-xl font-bold text-[#380C17] tracking-wider">
                MEMORABLE EXPERIENCES
              </h3>
              <p className="text-xs sm:text-sm text-[#5D4E49] leading-relaxed">
                Beautiful spaces that guests remember, cherish, and photograph for a lifetime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOME — FEATURED GALLERY (Preview of 6 beautiful images)
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
                VISUAL SHOWCASE
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#380C17] mt-1">
                Moments In Pictures
              </h2>
            </div>
            <button
              onClick={() => onNavigate('gallery')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B1527] hover:bg-[#3D0C19] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] font-semibold rounded-sm transition-all cursor-pointer"
            >
              <span>VIEW FULL GALLERY</span>
              <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>

          {/* 6 preview images grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {previewGallery.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onOpenGalleryPhoto(photo)}
                className="group relative h-60 sm:h-72 md:h-80 rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-md cursor-pointer"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#200A11] via-transparent to-transparent opacity-0 group-hover:opacity-90 transition-opacity flex flex-col justify-end p-4 text-white" />
                <div className="absolute bottom-4 left-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all text-white">
                  <span className="text-[10px] uppercase tracking-widest text-[#F5E6AB] font-medium">
                    {photo.categoryLabel}
                  </span>
                  <p className="font-serif text-base font-semibold leading-tight mt-0.5">
                    {photo.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOME — FINAL CTA
         ========================================================================= */}
      <section className="relative py-24 sm:py-32 overflow-hidden">
        {/* Background Wedding Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1800&q=80"
            alt="Mwanaweika Deco event setup"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#240A12]/85 backdrop-blur-[1px]" />
        </div>

        {/* Floating Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
            YOUR CELEBRATION AWAITS
          </span>

          <h2 className="font-serif text-4xl sm:text-6xl font-bold leading-tight">
            “LET'S DECORATE YOUR <span className="text-[#D4AF37] italic font-light">NEXT MOMENT.”</span>
          </h2>

          <FloralDivider light={true} />

          <p className="text-base sm:text-xl text-[#FAF6F0]/90 max-w-xl mx-auto">
            Tell us about your event and let's create something beautiful together.
          </p>

          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-[#C8A86B] hover:bg-[#D8BA7D] text-[#240A12] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold rounded-sm shadow-2xl hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer border border-[#FAF6F0]/40"
            >
              <CalendarHeart className="w-4 h-4" />
              <span>START PLANNING</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
