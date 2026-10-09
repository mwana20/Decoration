import React, { useState, useEffect } from 'react';
import { PageType, GalleryPhoto } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { OurEventsPage } from './pages/OurEventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [selectedStyleForBooking, setSelectedStyleForBooking] = useState<string>('');
  const [selectedGalleryPhoto, setSelectedGalleryPhoto] = useState<GalleryPhoto | null>(null);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: PageType) => {
    setCurrentPage(page);
  };

  const handleOpenGalleryPhoto = (photo: GalleryPhoto) => {
    setSelectedGalleryPhoto(photo);
    setCurrentPage('gallery');
  };

  const handleBookStyle = (styleName: string) => {
    setSelectedStyleForBooking(styleName);
    setCurrentPage('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF6F0] text-[#241A17] font-sans selection:bg-[#5B1527] selection:text-[#FAF6F0]">
      {/* Sticky Luxury Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenGalleryPhoto={handleOpenGalleryPhoto}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            onNavigate={handleNavigate}
            onSelectServiceToBook={handleBookStyle}
          />
        )}

        {currentPage === 'events' && (
          <OurEventsPage
            onNavigate={handleNavigate}
            onBookProjectStyle={handleBookStyle}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            onNavigate={handleNavigate}
            onBookStyle={handleBookStyle}
            initialPhoto={selectedGalleryPhoto}
            onClearInitialPhoto={() => setSelectedGalleryPhoto(null)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            preselectedStyle={selectedStyleForBooking}
          />
        )}
      </main>

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating />

      {/* Dark Luxury Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
