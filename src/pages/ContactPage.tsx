import React, { useState, useEffect } from 'react';
import { PageType, BookingFormData } from '../types';
import { BRAND } from '../data/content';
import { FloralDivider, CornerFlourish } from '../components/FloralMotif';
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  CalendarHeart,
  Users,
  Banknote,
  Copy,
  Check,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
  preselectedStyle?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  preselectedStyle,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    eventType: 'Wedding',
    eventDate: '',
    eventLocation: '',
    guestCount: '200 - 400 Guests',
    budgetRange: 'UGX 5,000,000 – 15,000,000',
    details: preselectedStyle ? `I am interested in styling similar to "${preselectedStyle}". ` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedStyle) {
      setFormData((prev) => ({
        ...prev,
        details: `I am interested in styling similar to "${preselectedStyle}". ${prev.details}`,
      }));
    }
  }, [preselectedStyle]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // WhatsApp formatted string with user details
  const whatsappBookingMessage = encodeURIComponent(
    `Hello Mwanaweika Deco!\nI would like to request event decoration:\n\n` +
      `• Name: ${formData.fullName}\n` +
      `• Phone: ${formData.phone}\n` +
      `• Email: ${formData.email}\n` +
      `• Event: ${formData.eventType}\n` +
      `• Date: ${formData.eventDate || 'To be confirmed'}\n` +
      `• Venue/Location: ${formData.eventLocation || 'Kampala'}\n` +
      `• Guests: ${formData.guestCount}\n` +
      `• Budget: ${formData.budgetRange}\n` +
      `• Details: ${formData.details || 'None'}\n\n` +
      `Looking forward to discussing your styling packages!`
  );

  const whatsappDirectUrl = `https://wa.me/${BRAND.whatsappRaw}?text=${whatsappBookingMessage}`;

  const copyBookingSummary = () => {
    const summary = `Mwanaweika Deco Request: ${formData.fullName} - ${formData.eventType} on ${formData.eventDate} (${formData.guestCount})`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="w-full pt-20">
      {/* =========================================================================
          HERO SECTION — Beautiful image of an elegant decorated event
         ========================================================================= */}
      <section className="relative min-h-[48vh] sm:min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1900&q=80"
            alt="Mwanaweika Deco Contact & Booking in Kampala"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#240A12]/85 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white space-y-4 py-20">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>START YOUR CELEBRATION JOURNEY</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#FAF6F0]">
            “LET'S CREATE <span className="text-[#D4AF37] italic font-light">SOMETHING BEAUTIFUL.”</span>
          </h1>

          <FloralDivider light={true} />

          <p className="text-base sm:text-lg text-[#E8DFD8] max-w-xl mx-auto font-light leading-relaxed">
            “Tell us about your occasion, and our team will get back to you.”
          </p>
        </div>
      </section>

      {/* =========================================================================
          MAIN CONTACT & BOOKING WORKSPACE
         ========================================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF6F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Booking Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-sm shadow-xl border border-[#D4AF37]/40 relative">
                <CornerFlourish position="top-right" />

                {!submitted ? (
                  <>
                    <div className="mb-8">
                      <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8A6321]">
                        RESERVATION & INQUIRY
                      </span>
                      <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#380C17] mt-1">
                        Book Your Event Decoration
                      </h2>
                      <p className="text-xs sm:text-sm text-[#6D5D57] mt-2">
                        Fill out the details below. Our Kampala lead stylist will review your event vision and contact you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name & Phone */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                            Full Name <span className="text-red-700">*</span>
                          </label>
                          <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="e.g. Sarah Namukasa"
                            value={formData.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                            Phone Number <span className="text-red-700">*</span>
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            required
                            placeholder="e.g. +256 700 000 000"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                          />
                        </div>
                      </div>

                      {/* Email & Event Type */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                            Email Address <span className="text-red-700">*</span>
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="e.g. sarah@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                            Event Type <span className="text-red-700">*</span>
                          </label>
                          <select
                            name="eventType"
                            value={formData.eventType}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                          >
                            <option value="Wedding">Wedding</option>
                            <option value="Introduction Ceremony">Introduction Ceremony</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Church Event">Church Event</option>
                            <option value="Bridal Shower">Bridal Shower</option>
                            <option value="Baby Shower">Baby Shower</option>
                            <option value="Corporate Event">Corporate Event</option>
                            <option value="Graduation">Graduation</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Date & Location */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                            Event Date <span className="text-red-700">*</span>
                          </label>
                          <input
                            type="date"
                            name="eventDate"
                            required
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                            Event Location / Venue <span className="text-red-700">*</span>
                          </label>
                          <input
                            type="text"
                            name="eventLocation"
                            required
                            placeholder="e.g. Speke Munyonyo or Mukono"
                            value={formData.eventLocation}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                          />
                        </div>
                      </div>

                      {/* Expected Guests & Budget */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                            Expected Number of Guests
                          </label>
                          <select
                            name="guestCount"
                            value={formData.guestCount}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                          >
                            <option value="Intimate (Under 50 Guests)">Intimate (Under 50 Guests)</option>
                            <option value="50 - 150 Guests">50 - 150 Guests</option>
                            <option value="200 - 400 Guests">200 - 400 Guests</option>
                            <option value="500 - 800 Guests">500 - 800 Guests</option>
                            <option value="1,000+ Guests (Grand Jubilee/Church)">1,000+ Guests (Grand Jubilee/Church)</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                            Estimated Budget
                          </label>
                          <select
                            name="budgetRange"
                            value={formData.budgetRange}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                          >
                            <option value="UGX 2,500,000 – 5,000,000">UGX 2.5M – 5M (Intimate/Birthday)</option>
                            <option value="UGX 5,000,000 – 15,000,000">UGX 5M – 15M (Classic Ceremony)</option>
                            <option value="UGX 15,000,000 – 35,000,000">UGX 15M – 35M (Luxury Wedding/Kwanjula)</option>
                            <option value="UGX 35,000,000+">UGX 35M+ (Imperial Grand Gala)</option>
                            <option value="Flexible / Custom Consultation">Flexible / Custom Consultation</option>
                          </select>
                        </div>
                      </div>

                      {/* Details Textarea */}
                      <div className="space-y-1.5">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-[#380C17]">
                          Tell Us About Your Event
                        </label>
                        <textarea
                          name="details"
                          rows={4}
                          placeholder="Describe your color palette, preferred flowers, ceremony style, special family honors, or any specific ideas you have..."
                          value={formData.details}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-sm text-sm text-[#241A17] focus:outline-none focus:border-[#5B1527] focus:ring-1 focus:ring-[#5B1527]"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        className="w-full py-4 px-6 bg-[#5B1527] hover:bg-[#3E0C1A] text-[#FAF6F0] text-xs sm:text-sm uppercase tracking-[0.2em] font-bold rounded-sm shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                      >
                        <Send className="w-4 h-4 text-[#D4AF37]" />
                        <span>SEND EVENT REQUEST</span>
                      </button>
                    </form>
                  </>
                ) : (
                  /* Submission confirmation view */
                  <div className="py-8 text-center space-y-6">
                    <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-3xl font-bold text-[#380C17]">
                        Thank You, {formData.fullName}!
                      </h3>
                      <p className="text-sm text-[#5D4E49] max-w-md mx-auto">
                        Your event request for a <strong>{formData.eventType}</strong> on{' '}
                        <strong>{formData.eventDate || 'your selected date'}</strong> has been received by our Kampala studio.
                      </p>
                    </div>

                    <div className="p-4 bg-[#F5EDE1] rounded-sm border border-[#D4AF37]/30 text-left text-xs space-y-1.5 max-w-md mx-auto">
                      <p className="font-semibold text-[#380C17] uppercase tracking-wider">
                        Request Summary:
                      </p>
                      <p>• <strong>Location:</strong> {formData.eventLocation}</p>
                      <p>• <strong>Guests:</strong> {formData.guestCount}</p>
                      <p>• <strong>Budget Tier:</strong> {formData.budgetRange}</p>
                      <p>• <strong>Phone:</strong> {formData.phone}</p>
                    </div>

                    {/* Instant WhatsApp dispatch */}
                    <div className="pt-2 space-y-3 max-w-md mx-auto">
                      <a
                        href={whatsappDirectUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-bold rounded-sm shadow transition-all flex items-center justify-center gap-2"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>FORWARD VIA WHATSAPP FOR INSTANT RESPONSE</span>
                      </a>

                      <button
                        onClick={copyBookingSummary}
                        className="w-full py-2.5 px-4 bg-[#FAF6F0] hover:bg-[#EAE2D5] text-[#380C17] border border-[#D4AF37] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2"
                      >
                        {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                        <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY SUMMARY'}</span>
                      </button>

                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-[#8A6321] hover:underline pt-2 block mx-auto"
                      >
                        Edit or submit another request
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              {/* Info Card */}
              <div className="bg-[#240A12] text-white p-8 sm:p-10 rounded-sm shadow-xl border border-[#D4AF37]/30 space-y-8 relative overflow-hidden">
                <CornerFlourish position="top-right" />

                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#F5E6AB] font-semibold">
                    GET IN TOUCH
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-[#FAF6F0] mt-1">
                    MWANAWEIKA DECO
                  </h3>
                  <p className="font-script text-xl text-[#F5E6AB] mt-1">
                    “We Turn Moments Into Beautiful Memories.”
                  </p>
                </div>

                <div className="space-y-5 text-sm text-[#E0D4CB]">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#FAF6F0]">Kampala, Uganda</p>
                      <p className="text-xs text-[#A8988F] mt-0.5">{BRAND.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A8988F] uppercase tracking-wider">Phone</p>
                      <p className="font-bold text-[#FAF6F0]">{BRAND.phone}</p>
                      <p className="text-xs text-[#A8988F]">{BRAND.phoneAlt}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MessageSquare className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A8988F] uppercase tracking-wider">WhatsApp</p>
                      <p className="font-bold text-[#FAF6F0]">{BRAND.whatsapp}</p>
                      <a
                        href={`https://wa.me/${BRAND.whatsappRaw}?text=${encodeURIComponent('Hello Mwanaweika Deco, I would like to discuss decorating my upcoming event.')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-[#25D366] hover:underline"
                      >
                        Click to start chat directly ✦
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A8988F] uppercase tracking-wider">Email</p>
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="font-medium text-[#FAF6F0] hover:text-[#D4AF37] transition-colors"
                      >
                        {BRAND.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#D4AF37]/20 flex items-start gap-3.5">
                    <Clock className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs text-[#A8988F] uppercase tracking-wider">Opening Hours</p>
                      <p className="font-medium text-[#FAF6F0]">{BRAND.hoursWeekday}</p>
                      <p className="text-xs text-[#D4AF37] italic mt-0.5">{BRAND.hoursSunday}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="p-4 bg-white/5 rounded-sm border border-[#D4AF37]/30 text-xs text-[#E8DFD8]">
                    <p className="font-serif italic text-sm text-[#F5E6AB]">
                      “We visit venues across Kampala, Wakiso, Entebbe, and Mukono for in-person site inspections and spatial planning.”
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Promise */}
              <div className="bg-[#F5EDE1] p-6 rounded-sm border border-[#D4AF37]/30 space-y-3">
                <h4 className="font-serif text-lg font-bold text-[#380C17]">
                  What Happens Next?
                </h4>
                <ol className="text-xs sm:text-sm text-[#5D4E49] space-y-2 list-decimal list-inside leading-relaxed">
                  <li>We review your guest count and chosen venue architecture.</li>
                  <li>Our styling director arranges a quick WhatsApp call or in-person design meeting.</li>
                  <li>We send a transparent quote with tailored decor packages and color boards.</li>
                  <li>Your date is locked in our master calendar with dedicated on-site crew.</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
