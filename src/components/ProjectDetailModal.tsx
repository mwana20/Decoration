import React, { useEffect } from 'react';
import { EventProject } from '../types';
import { X, MapPin, Users, Palette, CalendarHeart, Sparkles } from 'lucide-react';
import { FloralDivider } from './FloralMotif';

interface ProjectDetailModalProps {
  project: EventProject | null;
  onClose: () => void;
  onBookEventStyle: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onBookEventStyle,
}) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Event styling case study"
      className="fixed inset-0 z-50 bg-[#14060B]/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FAF6F0] rounded-sm overflow-hidden shadow-2xl border border-[#D4AF37]/40 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 hover:bg-[#5B1527] text-white transition-colors cursor-pointer"
          aria-label="Close project view"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Photo Banner */}
        <div className="relative h-64 sm:h-96 w-full overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#200A11] via-[#200A11]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
              {project.categoryLabel}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold mt-1 text-[#FAF6F0]">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-[#E0D4CB] mt-2">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                {project.venueName}, {project.location}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-[#D4AF37]" />
                {project.guestCount}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-10 space-y-8">
          {/* Color Palette & Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#F2EAE0] rounded-sm border border-[#D4AF37]/30">
            <div className="flex items-center gap-2">
              <Palette className="w-4 h-4 text-[#8A6321]" />
              <span className="text-xs font-semibold tracking-wider uppercase text-[#380C17]">
                Styling Color Harmony:
              </span>
            </div>
            <div className="flex items-center gap-2">
              {project.palette.map((color, idx) => (
                <div key={idx} className="flex items-center gap-1">
                  <span
                    className="w-5 h-5 rounded-full border border-black/20 shadow-xs"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Full Story */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl font-bold text-[#380C17]">The Design Concept</h3>
            <p className="text-sm sm:text-base text-[#4A3B36] leading-relaxed">
              {project.fullStory}
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#380C17] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              Signature Styling Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.stylingHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="p-3 bg-white/70 rounded-sm border-l-2 border-[#5B1527] text-xs sm:text-sm text-[#380C17]"
                >
                  {hl}
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Snapshots */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="space-y-3">
              <h4 className="font-serif text-lg font-semibold text-[#380C17]">Event Gallery</h4>
              <div className="grid grid-cols-3 gap-3">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="h-28 sm:h-36 rounded-sm overflow-hidden border border-[#D4AF37]/20">
                    <img
                      src={img}
                      alt={`${project.title} detail ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <FloralDivider />

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div>
              <p className="font-serif text-lg text-[#380C17] font-bold">
                Want a similar aesthetic for your event?
              </p>
              <p className="text-xs text-[#7A6B66]">
                We personalize every element to your guest count and venue.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onBookEventStyle(project.title);
              }}
              className="w-full sm:w-auto py-3 px-6 bg-[#5B1527] hover:bg-[#3D0C19] text-[#FAF6F0] text-xs uppercase tracking-widest font-semibold rounded-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <CalendarHeart className="w-4 h-4 text-[#D4AF37]" />
              <span>REQUEST THIS STYLING</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
