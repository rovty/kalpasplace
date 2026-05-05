import { useEffect, useRef } from 'react';
import { Waves, Coffee, Laptop, Sun } from 'lucide-react';

const highlights = [
  {
    icon: <Waves size={22} />,
    title: "World-Class Surf",
    desc: "One of Sri Lanka's best surf spots — ideal for beginners and experienced surfers alike.",
  },
  {
    icon: <Coffee size={22} />,
    title: "Slow & Soulful",
    desc: "Great coffee, morning yoga, peaceful vibes. No wild party scene — just pure relaxation.",
  },
  {
    icon: <Laptop size={22} />,
    title: "Digital Nomad Ready",
    desc: "Fast Wi-Fi and a co-working setup make it easy to stay weeks or even months.",
  },
  {
    icon: <Sun size={22} />,
    title: "Year-Round Sun",
    desc: "Sri Lanka's south coast enjoys warm tropical weather with stunning golden sunsets.",
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
              Hiriketiya is one of Sri Lanka's most beloved beach towns — and Kalpa's Place sits right at
              its heart. This charming horseshoe bay on the island's south coast has captured the hearts
              of surfers, slow travelers, and digital nomads from across the world.
            </p>
            <p className="text-gray-600 font-body font-light leading-relaxed mb-8 text-base">
              With its relaxed pace, great coffee culture, morning yoga sessions, and consistent surf breaks,
              Hiriketiya offers something truly rare: a place where time slows down and life feels beautifully simple.
              Whether you stay for a weekend or a month, Kalpa's Place will feel like home.
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
                src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tropical beach palm trees"
                className="w-full h-full object-cover slide-img"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Surfer on wave"
                className="w-full h-full object-cover slide-img"
              />
            </div>
            <div className="overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800"
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
