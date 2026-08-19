import { useEffect, useRef } from 'react';
import { Wifi, Wind, Bath, Eye } from 'lucide-react';

const rooms = [
  {
    name: 'Ocean Breeze Room',
    type: 'Standard',
    desc: 'A bright and comfortable room with a relaxed tropical feel. A good choice for couples or solo travellers looking for an easy base in Hiriketiya.',
    price: 'From $45 / night',
    img: '/images/bedroom.jpg',
    features: ['Sea view', 'AC', 'En-suite bath', 'Free Wi-Fi'],
    badge: null,
  },
  {
    name: 'Surf Suite',
    type: 'Suite',
    desc: 'Our most spacious stay, made for slow mornings and relaxed evenings. Settle in after a day at the beach and enjoy your own space to unwind.',
    price: 'From $85 / night',
    img: '/images/hotel-room.jpg',
    features: ['Panoramic view', 'King bed', 'Open shower', 'Deck'],
    badge: 'Most Popular',
  },
  {
    name: 'Garden Bungalow',
    type: 'Bungalow',
    desc: 'A private little space surrounded by greenery, ideal if you prefer a quieter stay. The extra space also makes it a comfortable option for longer visits.',
    price: 'From $65 / night',
    img: '/images/tropical-bungalow.jpg',
    features: ['Private garden', 'Kitchenette', 'Outdoor seating', 'Long stay deals'],
    badge: 'Best for Nomads',
  },
  {
    name: 'Dormitory Pod',
    type: 'Shared',
    desc: 'A simple, comfortable option for solo travellers who want to meet people while keeping their own private sleeping space.',
    price: 'From $18 / night',
    img: '/images/suite.jpg',
    features: ['Private pods', 'Lockers', 'Social lounge', 'Budget-friendly'],
    badge: null,
  },
];

const featureIcons: Record<string, JSX.Element> = {
  'Sea view': <Eye size={14} />,
  'Panoramic view': <Eye size={14} />,
  AC: <Wind size={14} />,
  'En-suite bath': <Bath size={14} />,
  'Open shower': <Bath size={14} />,
  'Free Wi-Fi': <Wifi size={14} />,
};

export default function Rooms() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="rooms" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-teal-600 font-body mb-3">
            Where You'll Rest
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
            Rooms & <span className="italic text-teal-700">Suites</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-500 font-body font-light text-base leading-relaxed">
            Choose the space that suits your stay - from a simple room for a few nights to a private bungalow for a little more space and quiet. Whatever you choose, Hiriketiya is right outside.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {rooms.map((room, i) => (
            <div
              key={i}
              className="reveal room-card rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="relative overflow-hidden h-60">
                {/* Image placeholder */}
                <img
                  src={room.img}
                  alt={room.name}
                  className="w-full h-full object-cover slide-img"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {room.badge && (
                  <span className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                    {room.badge}
                  </span>
                )}
                <span className="absolute top-4 left-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                  {room.type}
                </span>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-xl text-gray-900">{room.name}</h3>
                  <p className="text-teal-700 font-body font-medium text-sm whitespace-nowrap ml-4 mt-1">
                    {room.price}
                  </p>
                </div>
                <p className="text-gray-500 text-sm font-body font-light leading-relaxed mb-4">
                  {room.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {room.features.map((f, j) => (
                    <span
                      key={j}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-body"
                    >
                      {featureIcons[f]}
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href="https://www.booking.com/hotel/lk/kalpa-place-hiriketiya.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center px-6 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-all duration-300"
                >
                  Reserve this Room
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
