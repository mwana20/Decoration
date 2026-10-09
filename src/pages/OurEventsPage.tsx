import React, { useState } from 'react';
import { PageType, EventProject } from '../types';
import { EVENT_PROJECTS } from '../data/content';
import { FloralDivider } from '../components/FloralMotif';
import { ProjectDetailModal } from '../components/ProjectDetailModal';
import { Sparkles, MapPin, Eye, ArrowRight, CalendarHeart } from 'lucide-react';

interface OurEventsPageProps {
  onNavigate: (page: PageType) => void;
  onBookProjectStyle?: (styleTitle: string) => void;
}

type CategoryFilter = 'ALL' | 'WEDDINGS' | 'INTRODUCTIONS' | 'BIRTHDAYS' | 'CHURCH EVENTS' | 'CORPORATE' | 'OTHER';

export const OurEventsPage: React.FC<OurEventsPageProps> = ({
  onNavigate,
  onBookProjectStyle,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('ALL');
  const [activeProject, setActiveProject] = useState<EventProject | null>(null);

  const categories: { id: CategoryFilter; label: string }[] = [
    { id: 'ALL', label: 'ALL EVENTS' },
    { id: 'WEDDINGS', label: 'WEDDINGS' },
    { id: 'INTRODUCTIONS', label: 'INTRODUCTIONS' },
    { id: 'BIRTHDAYS', label: 'BIRTHDAYS' },
    { id: 'CHURCH EVENTS', label: 'CHURCH EVENTS' },
    { id: 'CORPORATE', label: 'CORPORATE' },
    { id: 'OTHER', label: 'OTHER' },
  ];

  const filteredProjects =
    selectedCategory === 'ALL'
      ? EVENT_PROJECTS
      : EVENT_PROJECTS.filter((proj) => proj.category === selectedCategory);

  const handleBookStyle = (name: string) => {
    setActiveProject(null);
    if (onBookProjectStyle) {
      onBookProjectStyle(name);
    }
    onNavigate('contact');
  };

  return (
    <div className="w-full pt-20">
      {/* =========================================================================
          OUR EVENTS HERO
         ========================================================================= */}
      <section className="relative min-h-[50vh] sm:min-h-[58vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1900&q=80"
            alt="Mwanaweika Deco portfolio events in Uganda"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#240A12]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 py-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>OUR PORTFOLIO OF CELEBRATIONS</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF6F0]">
            Our Celebrated <span className="text-[#D4AF37] italic font-light">Events</span>
          </h1>

          <FloralDivider light={true} />

          <p className="text-base sm:text-lg text-[#E8DFD8] max-w-2xl mx-auto font-light leading-relaxed">
            Real ceremonies, genuine family stories, and iconic venue transformations styled by Mwanaweika Deco across Kampala, Mukono, and beyond.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CATEGORY FILTER NAVIGATION
         ========================================================================= */}
      <section className="py-8 bg-[#F4EDE2] border-b border-[#D4AF37]/20 sticky top-18 z-20 backdrop-blur-md bg-[#F4EDE2]/95 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2 rounded-xs text-xs tracking-wider uppercase font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#5B1527] text-white shadow-md font-semibold border border-[#5B1527]'
                      : 'bg-[#FAF6F0] text-[#4A3B36] hover:bg-[#EAE2D5] border border-[#D4AF37]/30'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PROJECT CARDS GRID
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group bg-white rounded-sm overflow-hidden border border-[#D4AF37]/30 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col cursor-pointer hover:-translate-y-2"
              >
                {/* Large Project Image */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#200A11] via-[#200A11]/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-[#5B1527]/90 text-[#F5E6AB] px-3 py-1 rounded-xs border border-[#D4AF37]/30">
                      {project.categoryLabel}
                    </span>
                    <span className="flex items-center gap-1 text-xs bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded-xs">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
                      {project.location}
                    </span>
                  </div>

                  {/* Hover Overlay "VIEW EVENT" */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-[2px]">
                    <div className="px-5 py-2.5 bg-[#FAF6F0] text-[#380C17] text-xs uppercase tracking-[0.2em] font-bold rounded-xs shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4 text-[#C8A86B]" />
                      <span>VIEW EVENT</span>
                    </div>
                  </div>
                </div>

                {/* Project Info Block */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#380C17] group-hover:text-[#8A6321] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-[#8A7973] font-medium mt-1">
                      Venue: {project.venueName} · {project.guestCount}
                    </p>
                    <p className="text-xs sm:text-sm text-[#5D4E49] leading-relaxed mt-3">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Card Footer */}
                  <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#5B1527] group-hover:text-[#8A6321] flex items-center gap-1">
                      <span>EXPLORE FULL STORY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>

                    {/* Palette preview dots */}
                    <div className="flex items-center gap-1">
                      {project.palette.slice(0, 3).map((col, cIdx) => (
                        <span
                          key={cIdx}
                          className="w-3.5 h-3.5 rounded-full border border-black/10 shadow-2xs"
                          style={{ backgroundColor: col }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          EVENT DETAIL MODAL
         ========================================================================= */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onBookEventStyle={handleBookStyle}
      />

      {/* =========================================================================
          PORTFOLIO INVITATION CTA
         ========================================================================= */}
      <section className="py-20 bg-[#240A12] text-white text-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#FAF6F0]">
            Ready to Create Your Own Masterpiece?
          </h2>
          <FloralDivider light={true} />
          <p className="text-sm sm:text-base text-[#DCD1CA] leading-relaxed">
            Let our Kampala design team translate your dreams into a signature celebration that will be remembered for decades.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#C8A86B] hover:bg-[#D8BA7D] text-[#240A12] text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl transition-all cursor-pointer inline-flex items-center gap-2"
            >
              <CalendarHeart className="w-4 h-4" />
              <span>BOOK YOUR EVENT</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
