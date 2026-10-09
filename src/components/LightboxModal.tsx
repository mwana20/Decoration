import React, { useEffect } from 'react';
import { GalleryPhoto } from '../types';
import { X, ChevronLeft, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';
import { BRAND } from '../data/content';

interface LightboxModalProps {
  photo: GalleryPhoto | null;
  photosList: GalleryPhoto[];
  onClose: () => void;
  onNavigateIndex: (index: number) => void;
  onBookStyle: (styleName: string) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  photo,
  photosList,
  onClose,
  onNavigateIndex,
  onBookStyle,
}) => {
  useEffect(() => {
    if (!photo) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        const currentIndex = photosList.findIndex((p) => p.id === photo.id);
        if (currentIndex > 0) onNavigateIndex(currentIndex - 1);
        else onNavigateIndex(photosList.length - 1);
      }
      if (e.key === 'ArrowRight') {
        const currentIndex = photosList.findIndex((p) => p.id === photo.id);
        if (currentIndex < photosList.length - 1) onNavigateIndex(currentIndex + 1);
        else onNavigateIndex(0);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [photo, photosList, onClose, onNavigateIndex]);

  if (!photo) return null;

  const currentIndex = photosList.findIndex((p) => p.id === photo.id);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) onNavigateIndex(currentIndex - 1);
    else onNavigateIndex(photosList.length - 1);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < photosList.length - 1) onNavigateIndex(currentIndex + 1);
    else onNavigateIndex(0);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Mwanaweika Deco! I love this decor concept "${photo.title}" (${photo.categoryLabel}) from your gallery. Can you style my upcoming event in Kampala like this?`
    );
    window.open(`https://wa.me/${BRAND.whatsappRaw}?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery preview"
      className="fixed inset-0 z-50 bg-[#16080D]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 p-2.5 rounded-full bg-white/10 hover:bg-[#5B1527] text-white transition-colors cursor-pointer"
        aria-label="Close photo view"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 z-20 p-3 rounded-full bg-white/10 hover:bg-[#5B1527] text-white transition-colors cursor-pointer"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 z-20 p-3 rounded-full bg-white/10 hover:bg-[#5B1527] text-white transition-colors cursor-pointer"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Modal Content Box */}
      <div
        className="relative max-w-5xl w-full max-h-[92vh] flex flex-col lg:flex-row bg-[#FAF6F0] rounded-sm overflow-hidden shadow-2xl border border-[#D4AF37]/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Container */}
        <div className="lg:w-2/3 bg-black flex items-center justify-center relative min-h-[300px] sm:min-h-[420px] max-h-[65vh] lg:max-h-[82vh]">
          <img
            src={photo.imageUrl}
            alt={photo.title}
            className="w-full h-full object-contain max-h-[65vh] lg:max-h-[82vh]"
          />
        </div>

        {/* Details & Actions Sidebar */}
        <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between bg-[#FAF6F0] overflow-y-auto">
          <div>
            <div className="flex items-center justify-between text-xs font-semibold tracking-widest uppercase text-[#8A6321] pb-2 border-b border-[#D4AF37]/20">
              <span>{photo.categoryLabel}</span>
              <span>
                {currentIndex + 1} / {photosList.length}
              </span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#380C17] mt-3 leading-snug">
              {photo.title}
            </h3>

            <p className="text-sm text-[#4A3B36] mt-4 leading-relaxed">
              {photo.caption}
            </p>

            <div className="mt-6 pt-4 border-t border-[#D4AF37]/20">
              <div className="flex items-center gap-2 text-xs text-[#5D4E49]">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>Styled by Mwanaweika Deco in Kampala, Uganda</span>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <button
              onClick={() => {
                onClose();
                onBookStyle(photo.title);
              }}
              className="w-full py-3 px-4 bg-[#5B1527] hover:bg-[#3E0C1A] text-white text-xs tracking-wider uppercase font-semibold rounded-sm shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>INQUIRE ABOUT THIS STYLE</span>
            </button>

            <button
              onClick={handleDirectWhatsApp}
              className="w-full py-2.5 px-4 bg-[#FAF6F0] hover:bg-[#EAE2D5] text-[#240A12] border border-[#D4AF37] text-xs tracking-wider uppercase font-medium rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>SEND VIA WHATSAPP</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
