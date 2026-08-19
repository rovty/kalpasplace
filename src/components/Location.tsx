import { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section ref={sectionRef} className="py-24 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <div className="reveal">
            <p className="text-xs tracking-[0.25em] uppercase text-teal-600 font-body mb-3">
              Find Us
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight mb-6">
              Stay Close to <span className="italic text-teal-700">Hiriketiya</span>
            </h2>
            <p className="text-gray-600 font-body font-light leading-relaxed mb-8">
              The beach, cafés and restaurants are all close by, while the rest of Sri Lanka's south coast is easy to explore from Hiriketiya.
            </p>

            <div className="flex items-start gap-3 mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <MapPin size={20} className="text-teal-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-display text-gray-900 font-bold text-base mb-0.5">Kalpa's Place</p>
                <p className="text-gray-500 text-sm font-body">Hiriketiya Beach, Dickwella,<br />Southern Province, Sri Lanka</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="reveal">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4143.906948309596!2d80.70037297518267!3d5.963010294021696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae1366c1ca3cfa7%3A0xe54cafe25725cea9!2sKalpa%20Place!5e1!3m2!1sen!2slk!4v1787110011185!5m2!1sen!2slk"
                title="Kalpa's Place Location"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
