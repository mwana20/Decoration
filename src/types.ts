export type PageType = 'home' | 'about' | 'services' | 'events' | 'gallery' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  idealFor: string;
  culturalNote?: string;
}

export interface EventProject {
  id: string;
  title: string;
  category: 'WEDDINGS' | 'INTRODUCTIONS' | 'BIRTHDAYS' | 'CHURCH EVENTS' | 'CORPORATE' | 'OTHER';
  categoryLabel: string;
  location: string;
  venueName: string;
  guestCount: string;
  palette: string[];
  shortDesc: string;
  fullStory: string;
  heroImage: string;
  galleryImages: string[];
  stylingHighlights: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'WEDDINGS' | 'INTRODUCTIONS' | 'BIRTHDAYS' | 'CHURCH EVENTS' | 'FLORAL DESIGN' | 'TABLE SETTINGS' | 'STAGES & BACKDROPS' | 'VENUE TRANSFORMATIONS';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  orientation?: 'portrait' | 'landscape' | 'square';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  eventLocation: string;
  guestCount: string;
  budgetRange: string;
  details: string;
}
