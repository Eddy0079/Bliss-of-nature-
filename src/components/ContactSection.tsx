import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Clock,
  Instagram,
  Facebook,
  Youtube
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.phone) return;
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello BON Holidays, I would like to inquire about booking a stay or holiday package in Uttarakhand.`
  );

  return (
    <section id="contact-section" className="py-16 sm:py-24 bg-[#F5F7F6] text-[#17231F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-12 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#16745A] tracking-wider uppercase">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Rishikesh Head Office</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#17231F]">
            Contact BON Holidays
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">
            Have questions about Bliss of Nature Resort or need a customized Uttarakhand itinerary? Our local travel experts are ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Information & Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm space-y-6">
              <h3 className="font-display text-2xl font-bold text-[#17231F]">
                Reach Out Directly
              </h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-[#16745A]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">Phone Reservations</span>
                    <a href="tel:+919149074344" className="text-base font-semibold text-[#17231F] hover:text-[#16745A] transition-colors">
                      +91 91490 74344
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">WhatsApp Concierge</span>
                    <a
                      href={`https://wa.me/919149074344?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-semibold text-[#17231F] hover:text-[#16745A] transition-colors flex items-center gap-1.5"
                    >
                      <span>+91 91490 74344</span>
                      <span className="text-[11px] bg-[#25D366]/20 text-[#16745A] font-bold px-1.5 py-0.2 rounded">Chat Now</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[#16745A]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">Email Us</span>
                    <a href="mailto:info@bonholidays.com" className="text-base font-semibold text-[#17231F] hover:text-[#16745A] transition-colors">
                      info@bonholidays.com
                    </a>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[#16745A]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">Office & Resort Reception</span>
                    <p className="text-sm font-semibold text-[#17231F]">
                      Tapovan & Mohan Chatti, Rishikesh, Uttarakhand 249192, India
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#16745A]/10 text-[#16745A] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[#16745A]" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-500 font-medium block">Office Hours</span>
                    <p className="text-sm text-neutral-700">
                      Mon – Sun: 8:00 AM – 9:00 PM IST (Emergency guest support 24/7)
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-neutral-100">
                <span className="text-xs text-neutral-500 font-semibold block mb-2 uppercase tracking-wider">
                  Follow Our Journeys
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#F5F7F6] hover:bg-[#16745A] hover:text-white text-neutral-700 flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61594779811083"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#F5F7F6] hover:bg-[#16745A] hover:text-white text-neutral-700 flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-[#F5F7F6] hover:bg-[#16745A] hover:text-white text-neutral-700 flex items-center justify-center transition-colors"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Google Map Styled Container */}
            <div className="bg-white rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
              <div className="p-4 border-b border-neutral-100 flex items-center justify-between">
                <span className="text-xs font-bold text-[#16745A] uppercase tracking-wider">
                  Location Map · Rishikesh
                </span>
                <span className="text-[11px] text-neutral-500">25 mins from Tapovan</span>
              </div>
              <div className="relative h-48 bg-neutral-200 overflow-hidden">
                <iframe
                  title="BON Holidays Rishikesh Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110543.14936496457!2d78.24357321598285!3d30.108427956426437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39093e0b2d6a5f71%3A0xb363c46e3e5cf7e8!2sRishikesh%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[25%] contrast-110"
                />
              </div>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#16745A]/10 text-[#16745A] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-[#16745A]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#17231F]">
                  Message Received!
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  Thank you, <strong className="text-neutral-900">{formState.name}</strong>. Our Uttarakhand travel concierge will review your inquiry and get back to you via phone or email within 2 business hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Inquiry',
                        message: ''
                      });
                    }}
                    className="text-xs font-semibold text-[#16745A] hover:underline"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="font-display text-2xl font-bold text-[#17231F]">
                    Send Us an Inquiry
                  </h3>
                  <p className="text-xs text-neutral-500">
                    Fill out the form below and we will tailor the perfect retreat or holiday for you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-neutral-700">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Sen"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-neutral-700">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-neutral-700">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-neutral-700">
                      Topic of Interest
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                    >
                      <option value="Bliss of Nature Resort">Bliss of Nature Resort Stay</option>
                      <option value="Bliss of Nature Resort Package">Bliss of Nature Resort Package (3D/2N)</option>
                      <option value="White Water River Rafting">River Rafting & Camping</option>
                      <option value="Corporate / Group Retreat">Corporate / Group Retreat</option>
                      <option value="Customized Trip">Customized Uttarakhand Trip</option>
                      <option value="General Inquiry">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-neutral-700">
                    Your Message & Dates (Optional)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your expected dates, number of guests, or special requirements..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#F5F7F6] border border-neutral-200 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-[#17231F] focus:outline-none focus:ring-2 focus:ring-[#16745A]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#16745A] hover:bg-[#0D5743] active:scale-[0.98] text-white font-semibold py-3 px-6 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#E8A43A]" />
                    <span>Send Inquiry to Concierge</span>
                  </button>
                </div>

                <p className="text-[11px] text-neutral-400 text-center">
                  We respect your privacy. No spam. You will only be contacted regarding your inquiry.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
