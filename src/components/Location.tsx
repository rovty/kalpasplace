import { useEffect, useRef } from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

const nearbyPlaces = [
  { name: 'Tangalle Town', distance: '12 km', time: '20 min' },
  { name: 'Dickwella Beach', distance: '8 km', time: '15 min' },
  { name: 'Weligama Bay', distance: '34 km', time: '45 min' },
  { name: 'Matara Fort', distance: '24 km', time: '35 min' },
  { name: 'Galle Fort', distance: '90 km', time: '2 hrs' },
  { name: 'Colombo Airport', distance: '235 km', time: '3.5 hrs' },
];

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
              Perfect <span className="italic text-teal-700">Location</span>
            </h2>
            <p className="text-gray-600 font-body font-light leading-relaxed mb-8">
              Kalpa's Place is nestled right beside Hiriketiya Beach on Sri Lanka's south coast —
              just steps from the waves, surrounded by coconut palms and the warm Indian Ocean breeze.
            </p>

            <div className="flex items-start gap-3 mb-6 p-4 bg-white rounded-2xl shadow-sm border border-gray-100">
              <MapPin size={20} className="text-teal-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-display text-gray-900 font-bold text-base mb-0.5">Kalpa's Place</p>
                <p className="text-gray-500 text-sm font-body">Hiriketiya Beach, Dickwella,<br />Southern Province, Sri Lanka</p>
              </div>
            </div>

            <h3 className="font-display text-lg text-gray-900 mb-4">Distances from Nearby Towns</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nearbyPlaces.map((place, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
                  <div className="flex items-center gap-2">
                    <Navigation size={13} className="text-teal-500" />
                    <span className="text-sm text-gray-700 font-body">{place.name}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <span>{place.distance}</span>
                    <span>·</span>
                    <Clock size={11} />
                    <span>{place.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map placeholder */}
          <div className="reveal">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-teal-900/5 aspect-[4/3] relative">
              {/* Placeholder for Google Maps embed */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-blue-50 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-teal-700/10 flex items-center justify-center mb-4">
                  <MapPin size={28} className="text-teal-700" />
                </div>
                <p className="font-display text-lg text-teal-900 mb-1">Hiriketiya Beach</p>
                <p className="text-gray-500 text-sm font-body mb-6">6.0076° N, 80.6052° E</p>
                <a
                  href="https://maps.google.com/?q=Hiriketiya+Beach+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-full bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-colors shadow-md"
                >
                  Open in Google Maps
                </a>
                <p className="mt-8 text-gray-300 text-xs font-body italic">
                  Map embed — add your Google Maps iframe here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
