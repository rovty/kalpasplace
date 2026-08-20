import { useEffect, useRef } from 'react';
import { Waves, Palmtree, Sunset, TreePine, Wine, Ship } from 'lucide-react';

const experiences = [
  {
    icon: <Waves size={26} />,
    title: 'Hiriketiya Beach',
    desc: 'Surfing, swimming, relaxing and beach cafés - right on your doorstep.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: <Palmtree size={26} />,
    title: 'Blue Beach Island',
    desc: 'A beautiful small island with clear water, great for swimming and photos.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: <Sunset size={26} />,
    title: 'Dikwella Beach',
    desc: 'A quieter beach for relaxing and watching the sunset.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: <TreePine size={26} />,
    title: 'Jungle Beach',
    desc: 'A hidden beach tucked between rocks and jungle - peaceful, scenic and perfect for a swim.',
    color: 'bg-emerald-50 text-emerald-700',
  },
  {
    icon: <Wine size={26} />,
    title: 'Smoke & Bitters',
    desc: 'Famous cocktail bar and smokehouse, perfect for an evening experience.',
    color: 'bg-rose-50 text-rose-700',
  },
  {
    icon: <Ship size={26} />,
    title: 'Whale Watching in Mirissa',
    desc: 'A popular day trip for seeing whales and dolphins.',
    color: 'bg-green-50 text-green-700',
  },
];

export default function Experience() {
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
    <section id="experience" ref={sectionRef} className="py-24 md:py-32 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-teal-600 font-body mb-3">
            Explore the Area
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
            Discover What's Around <span className="italic text-teal-700">Hiriketiya</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 font-body font-light text-base leading-relaxed">
            From golden beaches and ancient temples to whale watching and sunset cocktails - there's plenty to see and do nearby.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="reveal amenity-card bg-white rounded-2xl p-7 border border-gray-100 shadow-sm"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className={`w-12 h-12 rounded-xl ${exp.color} flex items-center justify-center mb-5`}>
                {exp.icon}
              </div>
              <h3 className="font-display text-lg text-gray-900 mb-3">{exp.title}</h3>
              <p className="text-gray-500 text-sm font-body font-light leading-relaxed">{exp.desc}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
