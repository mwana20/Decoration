import { ServiceItem, EventProject, GalleryPhoto } from '../types';

export const BRAND = {
  name: "MWANAWEIKA DECO",
  tagline: "We Turn Moments Into Beautiful Memories.",
  location: "Kampala, Uganda",
  phone: "+256 700 000 000",
  phoneAlt: "+256 772 123 456",
  whatsapp: "+256 700 000 000",
  whatsappRaw: "256700000000",
  email: "hello@mwanaweikadeco.com",
  instagram: "@mwanaweika_deco",
  facebook: "Mwanaweika Deco Kampala",
  tiktok: "@mwanaweikadeco",
  hoursWeekday: "Monday – Saturday: 8:00 AM – 6:00 PM",
  hoursSunday: "Sunday: By Appointment",
  address: "Plot 14, Ntinda - Bukoto Road, Kampala, Uganda",
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "weddings",
    title: "WEDDING DECORATION",
    shortDesc: "Romantic and elegant wedding décor designed around your dream celebration.",
    fullDesc: "From grand cathedrals and serene garden lawns to 5-star hotel ballrooms across Kampala, we curate bespoke wedding atmospheres that take your breath away. Our team handles every design layer from grand entrance tunnels to the high table, ensuring every photo and moment feels magical.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Ceremony & Church altar styling",
      "Grand Reception stage & high table design",
      "Fresh floral arches & hanging chandeliers",
      "Table styling, charger plates & custom linens",
      "Luxury Chiavari & Dior chair dressing",
      "Entrance tunnels & photo moment zones",
      "Custom printed dancefloor wraps & backdrops",
      "Architectural mood & fairy uplighting"
    ],
    idealFor: "Couples looking for a regal, unforgettable wedding celebration across Uganda."
  },
  {
    id: "introductions",
    title: "INTRODUCTION CEREMONIES",
    shortDesc: "Beautiful traditional and contemporary styling for meaningful family celebrations.",
    fullDesc: "We honor Ugandan cultural heritage (Kwanjula, Kuhingira, and Gusaba) with exquisite traditional and contemporary styling. We weave rich cultural motifs, royal calabash accents, traditional basketry, and gold draping with lush tropical floral artistry to create an imperial reception for the groom's and bride's families.",
    image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80",
    culturalNote: "Tailored for Kwanjula, Kuhingira, and traditional engagement ceremonies across Buganda, Ankole, Tooro, Busoga, and beyond.",
    features: [
      "Traditional bridal & groom family seating",
      "Imperial Kwanjula stage with cultural backdrops",
      "Traditional calabash, gourd & basketry accents",
      "Grand gateway entrance with royal archways",
      "Lush tropical & imported floral installations",
      "Custom tent draping & shade structures",
      "Oluwalo / gift presentation focal area",
      "Gold and earth-toned ambient lighting"
    ],
    idealFor: "Families hosting authentic, prestigious Kwanjula and Kuhingira cultural celebrations."
  },
  {
    id: "birthdays",
    title: "BIRTHDAY DECORATION",
    shortDesc: "Creative decoration for birthdays of every age and milestone.",
    fullDesc: "Whether it is a chic 1st birthday wonderland, a dazzling sweet 16, a glamorous 30th celebration, or a golden 60th jubilee, we bring your personality to life with vibrant backdrops, organic balloon artistry, and show-stopping dessert tables.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Custom personalized name backdrops & neon signage",
      "Luxury organic balloon styling & garland cascades",
      "Cake table styling & champagne tower setups",
      "Intimate dining tablescapes & floral centerpieces",
      "Instagram-worthy selfie photo booths",
      "Themed party props & color-coordinated accents",
      "Outdoor garden party tents & lounge furniture"
    ],
    idealFor: "Milestone birthdays, children's celebrations, and chic private dinner parties."
  },
  {
    id: "church-events",
    title: "CHURCH EVENTS",
    shortDesc: "Elegant and respectful décor for church celebrations and special programs.",
    fullDesc: "We bring dignity, beauty, and spiritual reverence to church sanctuaries and outdoor grounds. Designed with modesty, poise, and grandeur, our setups create an uplifting sacred environment for thanksgiving, ordination, and choir celebrations.",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Altar & pulpit floral arrangements",
      "Church anniversary celebrations",
      "Clergy & VIP seating stage decor",
      "National conferences & ministry conventions",
      "Women's & youth ministry special programs",
      "Thanksgiving services & harvest feasts",
      "Aisle runner styling & pew flower bows",
      "Respectful, reverent color harmonies"
    ],
    idealFor: "Pastoral anniversaries, diocesan celebrations, crusades, and church weddings."
  }
];

export const OTHER_SERVICES = [
  {
    title: "Bridal Showers",
    desc: "Intimate and photogenic boho, pastel, or glamorous themes for the bride-to-be and her circle.",
    icon: "Heart",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Baby Showers",
    desc: "Dreamy cloud, safari, floral, and royal prince/princess themes welcoming your new blessing.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Engagements & Proposals",
    desc: "Candlelit romantic trails, 'Marry Me' light-up letters, and breathtaking surprise scenery.",
    icon: "Ring",
    image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Graduation Parties",
    desc: "Proud celebrations with celebratory photo booths, school/college colors, and festive dining decor.",
    icon: "GraduationCap",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Corporate Events & Galas",
    desc: "Brand-aligned corporate banquets, awards nights, annual meetings, and executive product launches.",
    icon: "Building2",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Anniversary Celebrations",
    desc: "Honoring enduring love with silver, gold, and ruby styled romantic banquets and floral displays.",
    icon: "CalendarHeart",
    image: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Private Parties",
    desc: "Bespoke dinner parties, cocktail evenings, and family reunions tailored to your distinct taste.",
    icon: "GlassWater",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Product Launches",
    desc: "High-impact visual staging designed to amplify brand prestige and create viral media coverage.",
    icon: "Award",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
  }
];

export const EVENT_PROJECTS: EventProject[] = [
  {
    id: "kampala-royal-wedding",
    title: "Elegant Kampala Wedding",
    category: "WEDDINGS",
    categoryLabel: "Wedding Reception",
    location: "Kampala",
    venueName: "Speke Resort Munyonyo Ballroom",
    guestCount: "500 Guests",
    palette: ["#FAF6F0", "#D4AF37", "#5E1428", "#380C17"],
    shortDesc: "A majestic ivory and soft gold ballroom styling featuring cascading white wisteria, crystal candelabras, and an elevated bridal stage.",
    fullStory: "For this grand union, the couple envisioned an ethereal palace atmosphere inside Munyonyo's grand pavilion. Mwanaweika Deco transformed the space with custom 6-meter ivory fabric draping, warm ambient uplighting, an elaborate floral arch walkway, and 50 banquet tables adorned with high-stem orchid arrangements.",
    heroImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1000&q=80"
    ],
    stylingHighlights: [
      "Elevated 24ft bridal stage with sculpted champagne velvet backing",
      "Over 3,000 fresh white roses and imported hydrangeas",
      "Custom acrylic high table with internal golden fairy illumination",
      "Bespoke floral entrance archway welcoming guests"
    ]
  },
  {
    id: "traditional-mukono-kwanjula",
    title: "Traditional Introduction Ceremony",
    category: "INTRODUCTIONS",
    categoryLabel: "Kwanjula Ceremony",
    location: "Mukono",
    venueName: "Private Family Estate, Mukono",
    guestCount: "400 Guests",
    palette: ["#8B4513", "#D4AF37", "#FAF6F0", "#3E2723"],
    shortDesc: "An authentic, royal Kwanjula celebration balancing Buganda cultural heritage with modern luxury floral architecture.",
    fullStory: "A deeply sentimental introduction ceremony celebrating family honor and ancestral heritage. Mwanaweika Deco designed an imperial gazebo for the in-laws, woven barkcloth and gold fabric banners, traditional polished gourds with fresh orchids, and an opulent central walkway for the bride's dramatic entrance.",
    heroImage: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80"
    ],
    stylingHighlights: [
      "Traditional royal in-laws tent styled with golden velvet seating",
      "Custom stage backdrop blending African textures with cream roses",
      "Grand entry walkway lined with hand-woven earthen vases",
      "Gift presentation altar honoring family traditions"
    ]
  },
  {
    id: "kampala-30th-birthday",
    title: "30th Birthday Celebration",
    category: "BIRTHDAYS",
    categoryLabel: "Milestone Birthday",
    location: "Kampala",
    venueName: "Kololo Terrace Rooftop",
    guestCount: "80 Guests",
    palette: ["#1A1615", "#D4AF37", "#5E1428", "#F3E5D0"],
    shortDesc: "A glamorous rooftop soirée featuring an emerald and metallic gold balloon arch, neon typography, and chic lounge seating.",
    fullStory: "Marking three decades in style, this intimate rooftop party welcomed friends to an atmospheric twilight setting overlooking Kampala's hills. We deployed organic balloon installations, customized neon light signs, glowing low cocktail tables, and a showstopper dessert display.",
    heroImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80"
    ],
    stylingHighlights: [
      "Dynamic 12-foot organic balloon cascade with chrome gold spheres",
      "Custom illuminated acrylic number '30' photo centerpiece",
      "Burgundy and champagne velvet lounge clusters",
      "Tiered cake showcase with floating crystal candles"
    ]
  },
  {
    id: "church-anniversary-kampala",
    title: "Church Anniversary Celebration",
    category: "CHURCH EVENTS",
    categoryLabel: "Church Anniversary",
    location: "Kampala",
    venueName: "Miracle Centre Grounds, Rubaga",
    guestCount: "1,200 Guests",
    palette: ["#FAF6F0", "#5E1428", "#D4AF37", "#4A148C"],
    shortDesc: "Dignified, grand celebration styling honoring 25 years of ministry with reverent white draping and majestic altar floral crowns.",
    fullStory: "A milestone ministry jubilee requiring decor that commands respect while uplifting worshippers. Our styling transformed the sanctuary with royal purple and gold sashes, pristine white draped backdrops, majestic choir risers, and cascading pulpit floral arrangements.",
    heroImage: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1000&q=80"
    ],
    stylingHighlights: [
      "Stunning 18ft sanctuary backdrop with layered gold trim",
      "Fresh lilies, white hydrangeas, and eucalyptus altar crowns",
      "Dignified VIP clergy seating with burgundy velvet throws",
      "Outdoor jubilee welcome arches and memorial photo walkway"
    ]
  },
  {
    id: "luxury-bridal-shower-kampala",
    title: "Luxury Bridal Shower",
    category: "OTHER",
    categoryLabel: "Bridal Shower",
    location: "Kampala",
    venueName: "Lake Victoria Serena Golf Resort, Kigo",
    guestCount: "45 Guests",
    palette: ["#F9F1F0", "#E8B4B8", "#D4AF37", "#67595E"],
    shortDesc: "An enchanting lakeside garden bridal shower bathed in blush pink florals, champagne flutes, and delicate bohemian lace.",
    fullStory: "Set against the panoramic vistas of Lake Victoria in Kigo, this high-society bridal shower celebrated the bride with romantic floral arbors, personalized linen napkins, a mimosa bar styling, and flower-filled picnic low tables.",
    heroImage: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80"
    ],
    stylingHighlights: [
      "Custom arched 'Future Mrs.' backdrop with blush and ivory roses",
      "Low wooden picnic tables with embroidered floor cushions",
      "Crystal champagne glasses with edible gold leaf garnish station",
      "Personalized photo wall with polaroid keepsakes"
    ]
  },
  {
    id: "corporate-gala-kampala",
    title: "Corporate Celebration",
    category: "CORPORATE",
    categoryLabel: "Corporate Gala & Awards",
    location: "Kampala",
    venueName: "Kampala Serena Hotel Katonga Hall",
    guestCount: "350 Guests",
    palette: ["#0F172A", "#D4AF37", "#FAF6F0", "#1E293B"],
    shortDesc: "Prestigious black-tie corporate anniversary gala featuring sleek metallic stage architecture and branded executive tables.",
    fullStory: "Commissioned by one of Uganda's leading financial institutions, Mwanaweika Deco delivered an impeccable executive dining experience. We integrated brand elements into subtle gold centerpiece motifs, pin-spot lighting on awards tables, and an imposing stage that reflected leadership and success.",
    heroImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
    ],
    stylingHighlights: [
      "Architectural geometric stage with integrated LED edge lighting",
      "Custom branded matte-black and gold acrylic centerpieces",
      "Executive stage podium dressed in fresh white calla lilies",
      "Red carpet arrival with media step-and-repeat backdrop"
    ]
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: "gal-1",
    title: "Imperial Grand Wedding Stage",
    category: "STAGES & BACKDROPS",
    categoryLabel: "Stage & Backdrop",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    caption: "Layered chiffon, ivory floral arches, and chandelier accents at Munyonyo Commonwealth Resort.",
    orientation: "landscape"
  },
  {
    id: "gal-2",
    title: "Traditional Kwanjula Family Pavilion",
    category: "INTRODUCTIONS",
    categoryLabel: "Introduction Ceremony",
    imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80",
    caption: "Cultural Buganda introduction decor styled with royal golden thrones and indigenous floral vessels.",
    orientation: "landscape"
  },
  {
    id: "gal-3",
    title: "Luxury Banquet Tablescape",
    category: "TABLE SETTINGS",
    categoryLabel: "Table Styling",
    imageUrl: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=80",
    caption: "Gold-rimmed charger plates, crystal stemware, and floating taper candles for an evening wedding.",
    orientation: "portrait"
  },
  {
    id: "gal-4",
    title: "Ethereal Floral Archway",
    category: "FLORAL DESIGN",
    categoryLabel: "Floral Design",
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80",
    caption: "Abundant white garden roses, eucalyptus leaves, and baby's breath greeting ceremony guests.",
    orientation: "portrait"
  },
  {
    id: "gal-5",
    title: "Milestone Birthday Balloon Art",
    category: "BIRTHDAYS",
    categoryLabel: "Birthday Styling",
    imageUrl: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80",
    caption: "Organic metallic gold and deep burgundy balloon installation with personalized neon glow.",
    orientation: "landscape"
  },
  {
    id: "gal-6",
    title: "Sacred Altar Sanctuary Floral Crown",
    category: "CHURCH EVENTS",
    categoryLabel: "Church Events",
    imageUrl: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80",
    caption: "Pure white lilies and gentle purple drapes honoring a 25th pastoral anniversary.",
    orientation: "landscape"
  },
  {
    id: "gal-7",
    title: "Serene Garden Ceremony Seating",
    category: "VENUE TRANSFORMATIONS",
    categoryLabel: "Venue Transformation",
    imageUrl: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
    caption: "Lush green lawn in Entebbe converted into a romantic ceremony setting with Chiavari chairs.",
    orientation: "portrait"
  },
  {
    id: "gal-8",
    title: "Boho Chic Lakeside Bridal Shower",
    category: "WEDDINGS",
    categoryLabel: "Wedding / Shower",
    imageUrl: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1000&q=80",
    caption: "Lake Victoria resort styling with blush velvet cushions and artisanal dry grass arrangements.",
    orientation: "landscape"
  },
  {
    id: "gal-9",
    title: "Golden Centerpiece Candle Architecture",
    category: "TABLE SETTINGS",
    categoryLabel: "Table Styling",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80",
    caption: "Height and romance: Multi-tiered candelabras illuminating evening dining tables.",
    orientation: "portrait"
  },
  {
    id: "gal-10",
    title: "Cultural Calabash & Tropical Flora",
    category: "INTRODUCTIONS",
    categoryLabel: "Introduction Ceremony",
    imageUrl: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1000&q=80",
    caption: "Handcrafted Ugandan royal calabashes complemented by exotic orchids and monstera foliage.",
    orientation: "square"
  },
  {
    id: "gal-11",
    title: "Luminous Wedding Reception Dancefloor",
    category: "VENUE TRANSFORMATIONS",
    categoryLabel: "Venue Transformation",
    imageUrl: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1000&q=80",
    caption: "Custom monogrammed white dancefloor surrounded by amber mood lights and hanging floral halos.",
    orientation: "landscape"
  },
  {
    id: "gal-12",
    title: "Artisanal Wedding Cake Pavilion",
    category: "STAGES & BACKDROPS",
    categoryLabel: "Stage & Backdrop",
    imageUrl: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1000&q=80",
    caption: "Dedicated 5-tier wedding cake gazebo draped with white chiffon and cascading garden florals.",
    orientation: "portrait"
  },
  {
    id: "gal-13",
    title: "Celebration Floral Cascades",
    category: "FLORAL DESIGN",
    categoryLabel: "Floral Design",
    imageUrl: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1000&q=80",
    caption: "Lush hanging runners cascading over the head table creating a fragrant botanical canopy.",
    orientation: "landscape"
  },
  {
    id: "gal-14",
    title: "Pastel Sweet 16 Birthday Backdrop",
    category: "BIRTHDAYS",
    categoryLabel: "Birthday Styling",
    imageUrl: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1000&q=80",
    caption: "Soft lilac and blush balloons with shimmer shimmer panels for an unforgettable photo corner.",
    orientation: "square"
  },
  {
    id: "gal-15",
    title: "Church Ordination Stage Dressing",
    category: "CHURCH EVENTS",
    categoryLabel: "Church Events",
    imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80",
    caption: "Reverent stage setup with gold-framed podiums and fresh floral pedestals.",
    orientation: "landscape"
  },
  {
    id: "gal-16",
    title: "Romantic Candlelit Table Runner",
    category: "TABLE SETTINGS",
    categoryLabel: "Table Styling",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1000&q=80",
    caption: "Intimate dinner setting with warm champagne runners and vintage amber glassware.",
    orientation: "portrait"
  },
  {
    id: "gal-17",
    title: "Outdoor Marquee Luxury Draping",
    category: "VENUE TRANSFORMATIONS",
    categoryLabel: "Venue Transformation",
    imageUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
    caption: "High-peak dome marquee transformed with silk ceiling liners and crystal chandelier centerpieces.",
    orientation: "landscape"
  },
  {
    id: "gal-18",
    title: "Bride & Groom High Table Throne",
    category: "STAGES & BACKDROPS",
    categoryLabel: "Stage & Backdrop",
    imageUrl: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1200&q=80",
    caption: "Royal ivory velvet couple's lounge with 24k gold-accented carved framework.",
    orientation: "landscape"
  },
  {
    id: "gal-19",
    title: "Grand Entrance Floral Tunnel",
    category: "FLORAL DESIGN",
    categoryLabel: "Floral Design",
    imageUrl: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=1000&q=80",
    caption: "An immersive 15-meter arched pathway welcoming guests into a dream wedding hall.",
    orientation: "portrait"
  },
  {
    id: "gal-20",
    title: "Traditional Kuhingira Cultural Seating",
    category: "INTRODUCTIONS",
    categoryLabel: "Introduction Ceremony",
    imageUrl: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1000&q=80",
    caption: "Ankole traditional ceremony arrangement with royal milk pots (ebyanzi) and warm golden textures.",
    orientation: "landscape"
  }
];

export const TESTIMONIALS = [
  {
    name: "Dr. Trevor & Flavia Kigozi",
    role: "Wedding at Munyonyo",
    quote: "Mwanaweika Deco turned our wedding hall into an absolute paradise! Our guests are still talking about the floral arch and high table six months later.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Hon. Sarah Nabakooza",
    role: "Daughter's Kwanjula in Mukono",
    quote: "They understood our cultural pride so deeply. The blend of traditional Buganda elements with pure luxury made our family stand tall in joy.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    name: "Pastor David Ssenyonga",
    role: "20th Anniversary Church Celebration",
    quote: "Dignified, prompt, and spiritually uplifting. Their decor brought honor to God's sanctuary. We couldn't have chosen better partners in Kampala.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  }
];
