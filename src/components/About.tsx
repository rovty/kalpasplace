import { useEffect, useRef } from 'react';
import { Waves, Coffee, Laptop, Sun } from 'lucide-react';

const highlights = [
  {
    icon: <Waves size={22} />,
    title: "Surf Nearby",
    desc: "Hiriketiya's bay is a great place to get in the water, whether you're picking up a board for the first time or already love to surf.",
  },
  {
    icon: <Coffee size={22} />,
    title: "Easy Days",
    desc: "Good coffee, beach walks, long lunches and plenty of time to slow down.",
  },
  {
    icon: <Laptop size={22} />,
    title: "Stay a Little Longer",
    desc: "With Wi-Fi and a comfortable place to work, you don't have to rush your stay.",
  },
  {
    icon: <Sun size={22} />,
    title: "Life by the Coast",
    desc: "Warm days, tropical surroundings and the beach close by make it easy to settle into the south coast lifestyle.",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <p className="text-xs tracking-[0.25em] uppercase text-teal-600 font-body mb-4">
              About the Place
            </p>
            <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight mb-6">
              Wake Up to the<br />
              <span className="italic text-teal-700">Sound of Waves</span>
            </h2>
            <p className="text-gray-600 font-body font-light leading-relaxed mb-5 text-base">
              Hiriketiya is the kind of place where days are easy to fill. Start with a morning swim or surf, grab a coffee, spend the afternoon exploring the coast, and come back when the sun starts to set.
            </p>
            <p className="text-gray-600 font-body font-light leading-relaxed mb-8 text-base">
              Kalpa's Place gives you a comfortable base to enjoy it all. We're close to the beach, surrounded by the cafés, restaurants and relaxed atmosphere that make Hiriketiya special.
            </p>
            <a
              href="#rooms"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              See Our Rooms
            </a>
          </div>

          {/* Image collage */}
          <div className="reveal grid grid-cols-2 gap-3 h-[480px]">
            <div className="overflow-hidden rounded-2xl row-span-2">
              <img
                src="/images/tropical-palms.jpg"
                alt="Tropical beach palm trees"
                className="w-full h-full object-cover slide-img"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/surfer.jpg"
                alt="Surfer on wave"
                className="w-full h-full object-cover slide-img"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/beach-coffee.jpg"
                alt="Beach coffee and relaxation"
                className="w-full h-full object-cover slide-img"
              />
            </div>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="reveal amenity-card p-6 rounded-2xl bg-gray-50 border border-gray-100"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="font-display text-base font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-body leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
