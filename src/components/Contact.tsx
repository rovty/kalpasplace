import { useEffect, useRef, useState } from 'react';
import { Phone, Mail, MapPin, ExternalLink, MessageCircle, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: '', email: '', checkin: '', checkout: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-800 text-sm font-body placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all duration-200 bg-white';

  return (
    <section id="contact" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-teal-600 font-body mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
            Plan Your <span className="italic text-teal-700">Stay</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-500 font-body font-light leading-relaxed">
            Have questions? Ready to book? We'd love to hear from you.
            You can also book directly on Booking.com for instant confirmation.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Left — Contact info */}
          <div className="reveal md:col-span-2 flex flex-col gap-6">
            <div className="bg-teal-800 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/2" />
              <h3 className="font-display text-2xl mb-6 relative z-10">Reach Us</h3>
              <div className="space-y-5 relative z-10">
                <a href="tel:+94776765556" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Phone / WhatsApp</p>
                    <p className="text-white text-sm font-medium">+94 776 765 556</p>
                  </div>
                </a>
                <a href="mailto:hello@kalpasplace.lk" className="flex items-start gap-4 group">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Email</p>
                    <p className="text-white text-sm font-medium">hello@kalpasplace.lk</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-0.5">Address</p>
                    <p className="text-white text-sm font-medium">Kalpas Place, Hiriketiya<br />Dickwella, Sri Lanka</p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-8 pt-6 border-t border-white/15 relative z-10">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-3">
                  <a href="#" className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors" aria-label="Instagram">
                    <Instagram size={16} />
                  </a>
                  <a href="#" className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors" aria-label="Facebook">
                    <Facebook size={16} />
                  </a>
                  <a href="https://wa.me/94776765556" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/15 hover:bg-white/25 flex items-center justify-center transition-colors" aria-label="WhatsApp">
                    <MessageCircle size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Book on Booking.com */}
            <a
              href="https://www.booking.com/hotel/lk/kalpa-place-hiriketiya.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <div>
                <p className="text-xs text-white/70 uppercase tracking-widest mb-1">Instant Confirmation</p>
                <p className="font-display text-lg font-bold">Book on Booking.com</p>
              </div>
              <ExternalLink size={20} className="text-white/70 group-hover:text-white transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
            </a>
          </div>

          {/* Right — Enquiry form */}
          <div className="reveal md:col-span-3">
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center mb-5 text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-3">Message Sent!</h3>
                <p className="text-gray-500 font-body text-base max-w-xs">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2.5 rounded-full border border-teal-600 text-teal-700 text-sm font-medium hover:bg-teal-50 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest font-body mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest font-body mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@email.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest font-body mb-1.5">
                      Check-in Date
                    </label>
                    <input
                      type="date"
                      value={form.checkin}
                      onChange={e => setForm({ ...form, checkin: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest font-body mb-1.5">
                      Check-out Date
                    </label>
                    <input
                      type="date"
                      value={form.checkout}
                      onChange={e => setForm({ ...form, checkout: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-widest font-body mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your stay, any questions, or special requests..."
                    value={form.message}
                    onChange={e => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-teal-700 text-white font-medium text-sm tracking-wide hover:bg-teal-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Send Enquiry
                </button>
                <p className="text-center text-xs text-gray-400 font-body">
                  Prefer instant booking?{' '}
                  <a href="https://www.booking.com/hotel/lk/kalpa-place-hiriketiya.html" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Book on Booking.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
