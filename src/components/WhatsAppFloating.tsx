import React, { useState } from 'react';
import { BRAND } from '../data/content';
import { MessageSquare, X } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hello Mwanaweika Deco, I would like to discuss decorating my upcoming event.'
  );
  const whatsappUrl = `https://wa.me/${BRAND.whatsappRaw}?text=${defaultMessage}`;

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-end gap-3 select-none">
      {/* Tooltip / Prompt bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-[#FAF6F0] text-[#240A12] py-2 px-3.5 rounded-full shadow-lg border border-[#D4AF37]/50 text-xs font-medium animate-bounce duration-1000">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
          <span>Chat with our styling team on WhatsApp</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-[#8A6321] hover:text-[#380C17] ml-1 p-0.5"
            aria-label="Dismiss chat hint"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Mwanaweika Deco on WhatsApp"
        className="group relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-[#FAF6F0]/80 hover:ring-[#D4AF37]"
      >
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#D4AF37] rounded-full border-2 border-white" />
        <MessageSquare className="w-7 h-7 group-hover:rotate-6 transition-transform" />
      </a>
    </aside>
  );
};
