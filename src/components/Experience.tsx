import { useEffect, useRef } from 'react';
import { Waves, Coffee, Dumbbell, Utensils, Bike, Camera } from 'lucide-react';

const experiences = [
  {
    icon: <Waves size={26} />,
    title: 'Surf Every Morning',
    desc: 'Head down to the bay for an early surf, or simply grab a coffee and watch the waves from the beach.',
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: <Coffee size={26} />,
    title: 'Coffee & Co-Working',
    desc: 'Hiriketiya has plenty of places for a good coffee and a few hours of work when you need to stay connected.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: <Dumbbell size={26} />,
    title: 'Yoga & Wellness',
    desc: 'Start the morning with a yoga session or take some time to slow down and reset.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: <Utensils size={26} />,
    title: 'Sri Lankan Food',
    desc: 'Try rice and curry, fresh seafood, tropical fruit and plenty of good Ceylon tea at the restaurants around Hiriketiya.',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    icon: <Bike size={26} />,
    title: 'Explore the Coast',
    desc: "Rent a scooter and explore the beaches, small towns and quieter corners of Sri Lanka's south coast.",
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: <Camera size={26} />,
    title: 'Sunset',
    desc: 'When the day starts to cool down, head to the beach and watch the sky change over the bay.',
    color: 'bg-rose-50 text-rose-700',
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
            Life at Hiriketiya
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
            Things to Do Around <span className="italic text-teal-700">Hiriketiya</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 font-body font-light text-base leading-relaxed">
            There's plenty to do around the bay, but there's no need to plan every minute. Surf, eat well, explore the coast or simply take the afternoon slow.
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
