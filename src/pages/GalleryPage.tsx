import React, { useState } from 'react';
import { PageType, GalleryPhoto } from '../types';
import { GALLERY_PHOTOS } from '../data/content';
import { FloralDivider } from '../components/FloralMotif';
import { LightboxModal } from '../components/LightboxModal';
import { Sparkles, Maximize2, Filter, Heart } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageType) => void;
  onBookStyle?: (styleTitle: string) => void;
  initialPhoto?: GalleryPhoto | null;
  onClearInitialPhoto?: () => void;
}

type GalleryCategory =
  | 'ALL'
  | 'WEDDINGS'
  | 'INTRODUCTIONS'
  | 'BIRTHDAYS'
  | 'CHURCH EVENTS'
  | 'FLORAL DESIGN'
  | 'TABLE SETTINGS'
  | 'STAGES & BACKDROPS'
  | 'VENUE TRANSFORMATIONS';

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onBookStyle,
  initialPhoto,
  onClearInitialPhoto,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('ALL');
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(initialPhoto || null);

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: 'ALL', label: 'ALL PHOTOS' },
    { id: 'WEDDINGS', label: 'WEDDINGS' },
    { id: 'INTRODUCTIONS', label: 'INTRODUCTIONS' },
    { id: 'BIRTHDAYS', label: 'BIRTHDAYS' },
    { id: 'CHURCH EVENTS', label: 'CHURCH EVENTS' },
    { id: 'FLORAL DESIGN', label: 'FLORAL DESIGN' },
    { id: 'TABLE SETTINGS', label: 'TABLE SETTINGS' },
    { id: 'STAGES & BACKDROPS', label: 'STAGES & BACKDROPS' },
    { id: 'VENUE TRANSFORMATIONS', label: 'VENUE TRANSFORMATIONS' },
  ];

  const filteredPhotos =
    selectedCategory === 'ALL'
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((photo) => photo.category === selectedCategory);

  const handleLightboxClose = () => {
    setActivePhoto(null);
    if (onClearInitialPhoto) onClearInitialPhoto();
  };

  const handleNavigateIndex = (index: number) => {
    if (filteredPhotos[index]) {
      setActivePhoto(filteredPhotos[index]);
    }
  };

  const handleBookFromLightbox = (styleName: string) => {
    if (onBookStyle) {
      onBookStyle(styleName);
    }
    setActivePhoto(null);
    onNavigate('contact');
  };

  return (
    <div className="w-full pt-20">
      {/* =========================================================================
          GALLERY HERO — Visual & Atmospheric
         ========================================================================= */}
      <section className="relative min-h-[44vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1900&q=80"
            alt="Mwanaweika Deco gallery hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#200A11]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-3 py-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>EXQUISITE STYLING ARCHIVE</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF6F0]">
            The Grand <span className="text-[#D4AF37] italic font-light">Gallery</span>
          </h1>

          <FloralDivider light={true} />

          <p className="text-sm sm:text-base text-[#E8DFD8] max-w-xl mx-auto font-light leading-relaxed">
            Click any image to view details, zoom, or inquire directly with our Kampala event designers.
          </p>
        </div>
      </section>

      {/* =========================================================================
          CATEGORY FILTER TABS
         ========================================================================= */}
      <section className="py-6 bg-[#F4EDE2] border-b border-[#D4AF37]/20 sticky top-18 z-20 backdrop-blur-md bg-[#F4EDE2]/95 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center flex-wrap gap-2">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 sm:px-4 py-1.5 rounded-xs text-[11px] sm:text-xs tracking-wider uppercase font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#5B1527] text-[#FAF6F0] shadow-sm font-semibold border border-[#5B1527]'
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
          MASONRY-STYLE GALLERY GRID
         ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setActivePhoto(photo)}
                className="break-inside-avoid group relative rounded-sm overflow-hidden bg-neutral-900 border border-[#D4AF37]/30 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Ambient dark gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#200A11] via-[#200A11]/40 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-5 text-white" />

                {/* Hover details */}
                <div className="absolute inset-0 p-5 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold bg-[#5B1527] text-[#F5E6AB] px-2.5 py-1 rounded-xs">
                      {photo.categoryLabel}
                    </span>
                    <Maximize2 className="w-4 h-4 text-[#F5E6AB]" />
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#FAF6F0] leading-snug">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#E0D4CB] line-clamp-2 mt-1">
                      {photo.caption}
                    </p>
                    <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] mt-2 inline-block font-semibold">
                      Click to expand & inquire ✦
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPhotos.length === 0 && (
            <div className="text-center py-20 text-[#6D5D57]">
              <p className="font-serif text-xl">No photos found in this category.</p>
              <button
                onClick={() => setSelectedCategory('ALL')}
                className="mt-4 px-5 py-2 bg-[#5B1527] text-white text-xs uppercase tracking-wider rounded-sm"
              >
                View All Photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================================================
          LIGHTBOX MODAL
         ========================================================================= */}
      <LightboxModal
        photo={activePhoto}
        photosList={filteredPhotos}
        onClose={handleLightboxClose}
        onNavigateIndex={handleNavigateIndex}
        onBookStyle={handleBookFromLightbox}
      />

      {/* =========================================================================
          GALLERY BOTTOM CTA
         ========================================================================= */}
      <section className="py-16 bg-[#F4EDE2] border-t border-[#D4AF37]/20 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-4">
          <p className="font-serif text-2xl sm:text-3xl font-bold text-[#380C17]">
            Inspired by these styling themes?
          </p>
          <p className="text-sm text-[#5D4E49]">
            Let's customize these ideas to your venue, colors, and guest requirements.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3.5 bg-[#5B1527] hover:bg-[#3D0C19] text-[#FAF6F0] text-xs uppercase tracking-[0.2em] font-bold rounded-sm shadow-md transition-all cursor-pointer"
            >
              BOOK YOUR DECORATION
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
