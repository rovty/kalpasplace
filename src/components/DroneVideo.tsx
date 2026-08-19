import { useEffect, useRef } from 'react';

export default function DroneVideo() {
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
    <section ref={sectionRef} className="py-20 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <p className="text-xs tracking-[0.25em] uppercase text-teal-600 font-body mb-3">
            Aerial View
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900">
            See Hiriketiya<br />
            <span className="italic text-teal-700">From Above</span>
          </h2>
        </div>

        <div className="reveal">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/xGaLg2VuIxk?autoplay=0&rel=0&modestbranding=1"
              title="Hiriketiya Drone Footage"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

        {/* Stats bar */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-px mt-12 bg-gray-200 rounded-2xl overflow-hidden shadow-sm">
          {[
            { label: 'Steps to Beach', value: '< 2 min' },
            { label: 'Surf Season', value: 'Year Round' },
            { label: 'Check-in', value: '2:00 PM' },
            { label: 'Check-out', value: '11:00 AM' },
          ].map((stat, i) => (
            <div key={i} className="bg-white px-6 py-6 text-center">
              <p className="font-display text-2xl md:text-3xl text-teal-800 font-bold mb-1">{stat.value}</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-body">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
