import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  showSlogan?: boolean;
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const BrandLogo: React.FC<LogoProps> = ({
  variant = 'dark',
  showSlogan = true,
  size = 'md',
  onClick,
}) => {
  const isLight = variant === 'light';

  const logoClasses = {
    sm: 'text-lg',
    md: 'text-xl sm:text-2xl',
    lg: 'text-2xl sm:text-3xl lg:text-4xl',
  };

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9 sm:w-10 sm:h-10',
    lg: 'w-12 h-12 sm:w-14 sm:h-14',
  };

  return (
    <div
      onClick={onClick}
      className={`group flex items-center gap-3 select-none ${onClick ? 'cursor-pointer' : ''}`}
    >
      {/* Floral Emblem / Monogram Icon */}
      <div className={`relative ${iconSizes[size]} shrink-0 flex items-center justify-center`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full text-[#C8A86B] group-hover:scale-105 transition-transform duration-500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Laurel Ring */}
          <circle
            cx="50"
            cy="50"
            r="44"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 3"
            opacity="0.8"
          />
          <circle
            cx="50"
            cy="50"
            r="38"
            stroke="currentColor"
            strokeWidth="0.8"
            opacity="0.4"
          />
          {/* Stylized African Floral Petals / Royal Crown Motif */}
          <path
            d="M50 15 C45 28 40 38 50 48 C60 38 55 28 50 15 Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M50 85 C45 72 40 62 50 52 C60 62 55 72 50 85 Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M15 50 C28 45 38 40 48 50 C38 60 28 55 15 50 Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M85 50 C72 45 62 40 52 50 C62 60 72 55 85 50 Z"
            fill="currentColor"
            opacity="0.9"
          />
          {/* Diagonal Petal Accents */}
          <path
            d="M26 26 C36 33 40 40 47 47 C40 40 33 36 26 26 Z"
            fill="currentColor"
            opacity="0.75"
          />
          <path
            d="M74 26 C64 33 60 40 53 47 C60 40 67 36 74 26 Z"
            fill="currentColor"
            opacity="0.75"
          />
          <path
            d="M26 74 C36 67 40 60 47 53 C40 60 33 64 26 74 Z"
            fill="currentColor"
            opacity="0.75"
          />
          <path
            d="M74 74 C64 67 60 60 53 53 C60 60 67 64 74 74 Z"
            fill="currentColor"
            opacity="0.75"
          />
          {/* Core Gem / Seed of Celebration */}
          <circle cx="50" cy="50" r="4.5" fill={isLight ? '#FAF6F0' : '#5B1527'} stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Typography Block */}
      <div className="flex flex-col">
        <span
          className={`font-serif tracking-[0.2em] font-semibold uppercase transition-colors duration-300 leading-tight ${
            logoClasses[size]
          } ${isLight ? 'text-[#FAF6F0]' : 'text-[#380C17]'}`}
        >
          MWANAWEIKA <span className="text-[#C8A86B] font-light">DECO</span>
        </span>
        {showSlogan && (
          <span
            className={`font-script text-xs sm:text-sm tracking-wide mt-0.5 transition-colors duration-300 ${
              isLight ? 'text-[#E2CA91]' : 'text-[#8A6321]'
            }`}
          >
            “We Turn Moments Into Beautiful Memories.”
          </span>
        )}
      </div>
    </div>
  );
};

export const FloralDivider: React.FC<{ className?: string; light?: boolean }> = ({
  className = '',
  light = false,
}) => {
  const color = light ? '#E2CA91' : '#C8A86B';
  return (
    <div className={`flex items-center justify-center gap-3 my-6 ${className}`}>
      <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C8A86B] to-[#C8A86B] opacity-60" />
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 opacity-90"
        fill="none"
        stroke={color}
        strokeWidth="1.5"
      >
        <path d="M12 2C9 6 6 9 6 12C6 15 9 18 12 22C15 18 18 15 18 12C18 9 15 6 12 2Z" />
        <circle cx="12" cy="12" r="2" fill={color} />
      </svg>
      <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C8A86B] to-[#C8A86B] opacity-60" />
    </div>
  );
};

export const CornerFlourish: React.FC<{
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
}> = ({ position = 'top-left', className = '' }) => {
  const positionStyles = {
    'top-left': 'top-3 left-3',
    'top-right': 'top-3 right-3 rotate-90',
    'bottom-left': 'bottom-3 left-3 -rotate-90',
    'bottom-right': 'bottom-3 right-3 rotate-180',
  };

  return (
    <div className={`absolute ${positionStyles[position]} pointer-events-none ${className}`}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-[#C8A86B]/40">
        <path d="M0 32V8C0 3.58172 3.58172 0 8 0H32" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2.5" fill="currentColor" />
      </svg>
    </div>
  );
};
