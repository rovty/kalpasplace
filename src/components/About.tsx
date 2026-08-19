import { useEffect, useRef } from 'react';

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
              A Stay in the Heart of<br />
              <span className="italic text-teal-700">Hiriketiya</span>
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
              Explore Our Rooms
            </a>
          </div>

          {/* Image collage */}
          <div className="reveal grid grid-cols-2 gap-3 h-[480px]">
            <div className="overflow-hidden rounded-2xl row-span-2">
              <img
                src="/images/gallery-2.jpg"
                alt="Tropical beach palm trees"
                className="w-full h-full object-cover slide-img"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/gallery-1.jpg"
                alt="Surfer on wave"
                className="w-full h-full object-cover slide-img"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/gallery-3.jpg"
                alt="Beach coffee and relaxation"
                className="w-full h-full object-cover slide-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
