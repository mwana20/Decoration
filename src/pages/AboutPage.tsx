import React from 'react';
import { PageType } from '../types';
import { FloralDivider, CornerFlourish } from '../components/FloralMotif';
import {
  Sparkles,
  Headphones,
  Palette,
  Wand2,
  CheckCircle,
  ShieldCheck,
  HeartHandshake,
  Star,
  Users2,
  ArrowRight,
} from 'lucide-react';
import { TESTIMONIALS } from '../data/content';

interface AboutPageProps {
  onNavigate: (page: PageType) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full pt-20">
      {/* =========================================================================
          ABOUT HERO — Team preparing an event
         ========================================================================= */}
      <section className="relative min-h-[55vh] sm:min-h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1900&q=80"
            alt="Mwanaweika Deco team preparing an event in Kampala"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#240A12]/80 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 py-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>THE HEART BEHIND MWANAWEIKA DECO</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF6F0]">
            “WE CREATE BEAUTIFUL <span className="text-[#D4AF37] italic font-light">EXPERIENCES.”</span>
          </h1>

          <FloralDivider light={true} />

          <p className="text-base sm:text-lg text-[#E8DFD8] max-w-2xl mx-auto font-light leading-relaxed">
            Crafting soul-stirring event styling rooted in Ugandan warmth, cultural authenticity, and contemporary luxury.
          </p>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY — Authentic Ugandan Business Story
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Story Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
                OUR HERITAGE & PASSION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#380C17] leading-tight">
                Born in Kampala to Honor Life's Precious Milestones
              </h2>
              <p className="text-base text-[#4A3B36] leading-relaxed">
                Mwanaweika Deco was created to help individuals, families, churches and organizations transform important occasions into memorable experiences through creative decoration and professional event styling.
              </p>
              <p className="text-sm sm:text-base text-[#5D4E49] leading-relaxed">
                In Uganda, a celebration is never merely a gathering—it is a sacred milestone of union, honour, praise, and family joy. Whether it is welcoming in-laws during a Kwanjula in Mukono, celebrating holy matrimony in Kampala's serene garden cathedrals, marking a 50th jubilee, or hosting a dignified church convention, every space deserves to reflect that deep significance.
              </p>
              <p className="text-sm sm:text-base text-[#5D4E49] leading-relaxed">
                Starting from small family setups, our Kampala-based studio has grown into a trusted styling collective known for bespoke floral arches, pristine draping, custom furniture, and seamless on-the-day execution. We bring your dreams into breathtaking physical reality.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-[#D4AF37]/20 text-center">
                <div className="p-3 bg-[#F2EAE0] rounded-sm">
                  <p className="font-serif text-2xl font-bold text-[#380C17]">500+</p>
                  <p className="text-[11px] uppercase tracking-wider text-[#7A6B66]">Events Styled</p>
                </div>
                <div className="p-3 bg-[#F2EAE0] rounded-sm">
                  <p className="font-serif text-2xl font-bold text-[#380C17]">8+ Years</p>
                  <p className="text-[11px] uppercase tracking-wider text-[#7A6B66]">Experience in Uganda</p>
                </div>
                <div className="p-3 bg-[#F2EAE0] rounded-sm">
                  <p className="font-serif text-2xl font-bold text-[#380C17]">100%</p>
                  <p className="text-[11px] uppercase tracking-wider text-[#7A6B66]">Client Devotion</p>
                </div>
              </div>
            </div>

            {/* Visual Portrait */}
            <div className="lg:col-span-5 relative">
              <CornerFlourish position="top-right" />
              <div className="arch-mask overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=900&q=80"
                  alt="Floral styling art at Mwanaweika Deco"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#240A12] text-[#F5E6AB] p-4 rounded-sm shadow-lg border border-[#D4AF37]/40 max-w-[220px]">
                <p className="font-serif italic text-sm">
                  “We weave every flower with passion and prayer for your special day.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR APPROACH — 3 Sections with photographs beside each
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#F5EDE1] border-y border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
              OUR CREATIVE PROCESS
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#380C17] mt-2">
              How We Bring Your Vision To Life
            </h2>
            <FloralDivider />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {/* Step 1: LISTEN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="relative rounded-sm overflow-hidden shadow-xl border border-[#D4AF37]/30 h-72 sm:h-84">
                <img
                  src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=900&q=80"
                  alt="Consultation and listening to the client"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#5B1527] text-white px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-xs">
                  PHASE 01
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5B1527] text-[#FAF6F0] flex items-center justify-center font-serif font-bold text-lg">
                    1
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#380C17]">LISTEN</h3>
                </div>
                <p className="text-base text-[#4A3B36] leading-relaxed">
                  We first understand the client's vision, occasion and expectations.
                </p>
                <p className="text-sm text-[#5D4E49] leading-relaxed">
                  Every family and event has its own personality. We take time to learn your color preferences, guest count, cultural traditions (such as specific clans or family honors), and budget parameters. No detail is too small.
                </p>
              </div>
            </div>

            {/* Step 2: DESIGN (Flipped layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="order-2 md:order-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8A86B] text-[#240A12] flex items-center justify-center font-serif font-bold text-lg">
                    2
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#380C17]">DESIGN</h3>
                </div>
                <p className="text-base text-[#4A3B36] leading-relaxed">
                  We develop a decoration concept that matches the event.
                </p>
                <p className="text-sm text-[#5D4E49] leading-relaxed">
                  Our creative directors build mood boards, custom stage blueprints, floral palettes, and lighting plans. We present clear styling options so you know exactly how the entrance, main stage, high table, and guest areas will feel.
                </p>
              </div>
              <div className="order-1 md:order-2 relative rounded-sm overflow-hidden shadow-xl border border-[#D4AF37]/30 h-72 sm:h-84">
                <img
                  src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80"
                  alt="Floral concept design and development"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#C8A86B] text-[#240A12] px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-xs">
                  PHASE 02
                </span>
              </div>
            </div>

            {/* Step 3: TRANSFORM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-14 items-center">
              <div className="relative rounded-sm overflow-hidden shadow-xl border border-[#D4AF37]/30 h-72 sm:h-84">
                <img
                  src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80"
                  alt="Venue transformation on event day"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-[#5B1527] text-white px-3 py-1 text-xs uppercase tracking-widest font-semibold rounded-xs">
                  PHASE 03
                </span>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#5B1527] text-[#FAF6F0] flex items-center justify-center font-serif font-bold text-lg">
                    3
                  </div>
                  <h3 className="font-serif text-3xl font-bold text-[#380C17]">TRANSFORM</h3>
                </div>
                <p className="text-base text-[#4A3B36] leading-relaxed">
                  Our team turns the venue into a beautiful celebration space.
                </p>
                <p className="text-sm text-[#5D4E49] leading-relaxed">
                  Our dedicated setup crew arrives well in advance to dress tents, construct custom stages, arrange fresh blooms, set table centerpieces, and test ambient lighting. When you and your guests arrive, you step into pure wonder.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR VALUES
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#FAF6F0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
              WHAT WE STAND FOR
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#380C17] mt-2">
              Our Core Values
            </h2>
            <FloralDivider />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Value 1 */}
            <div className="p-6 bg-white rounded-sm border border-[#D4AF37]/30 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <Palette className="w-5 h-5 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#380C17]">Creativity</h3>
              <p className="text-xs text-[#5D4E49] leading-relaxed">
                Fresh, distinct decor designs that avoid cookie-cutter copies.
              </p>
            </div>

            {/* Value 2 */}
            <div className="p-6 bg-white rounded-sm border border-[#D4AF37]/30 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <ShieldCheck className="w-5 h-5 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#380C17]">Professionalism</h3>
              <p className="text-xs text-[#5D4E49] leading-relaxed">
                Clear communication, transparent contracts, and respectful conduct.
              </p>
            </div>

            {/* Value 3 */}
            <div className="p-6 bg-white rounded-sm border border-[#D4AF37]/30 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <CheckCircle className="w-5 h-5 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#380C17]">Reliability</h3>
              <p className="text-xs text-[#5D4E49] leading-relaxed">
                We setup early and stand by you throughout the celebration.
              </p>
            </div>

            {/* Value 4 */}
            <div className="p-6 bg-white rounded-sm border border-[#D4AF37]/30 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <Sparkles className="w-5 h-5 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#380C17]">Attention to Detail</h3>
              <p className="text-xs text-[#5D4E49] leading-relaxed">
                Perfect folds, flawless centerpieces, and pristine tablecloths.
              </p>
            </div>

            {/* Value 5 */}
            <div className="p-6 bg-white rounded-sm border border-[#D4AF37]/30 text-center space-y-3 shadow-xs hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#5B1527]/10 flex items-center justify-center text-[#5B1527]">
                <HeartHandshake className="w-5 h-5 text-[#C8A86B]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#380C17]">Customer Satisfaction</h3>
              <p className="text-xs text-[#5D4E49] leading-relaxed">
                Your happiness and your guests' smiles are our ultimate reward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT TESTIMONIALS SNIPPET
         ========================================================================= */}
      <section className="py-16 bg-[#F4EDE2] border-t border-[#D4AF37]/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8A6321]">
              WHAT OUR CLIENTS SAY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#380C17] mt-1">
              Trusted by Families & Organizations Across Kampala
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#FAF6F0] p-6 rounded-sm border border-[#D4AF37]/30 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-[#C8A86B]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-[#4A3B36] italic leading-relaxed">
                    “{t.quote}”
                  </p>
                </div>
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-[#D4AF37]/20">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-[#D4AF37]"
                  />
                  <div>
                    <p className="font-serif font-bold text-sm text-[#380C17]">{t.name}</p>
                    <p className="text-[11px] text-[#7A6B66]">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          ABOUT CTA
         ========================================================================= */}
      <section className="py-20 sm:py-24 bg-[#240A12] text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
            READY TO CELEBRATE?
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF6F0]">
            “HAVE AN EVENT IN MIND?”
          </h2>
          <FloralDivider light={true} />
          <p className="text-sm sm:text-base text-[#DCD1CA] max-w-lg mx-auto leading-relaxed">
            Let's sit down, discuss your colors, venue options, and bring the beauty of your story to life.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#C8A86B] hover:bg-[#D8BA7D] text-[#240A12] text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <span>TALK TO OUR TEAM</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
