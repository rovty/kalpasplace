import { useEffect, useRef } from 'react';
import { Waves, Coffee, Dumbbell, Utensils, Bike, Camera } from 'lucide-react';

const experiences = [
  {
    icon: <Waves size={26} />,
    title: 'Surf Every Morning',
    desc: "Hiriketiya's horseshoe bay produces consistent, beginner-friendly waves. Board rentals and lessons are available at the beach.",
    color: 'bg-blue-50 text-blue-700',
  },
  {
    icon: <Coffee size={26} />,
    title: 'Coffee & Co-Working',
    desc: 'Start your day at one of the charming beach cafés or use our in-house workspace with fast fiber internet.',
    color: 'bg-amber-50 text-amber-700',
  },
  {
    icon: <Dumbbell size={26} />,
    title: 'Yoga & Wellness',
    desc: 'Join sunrise yoga sessions on the terrace or visit one of the nearby studios offering daily classes and retreats.',
    color: 'bg-green-50 text-green-700',
  },
  {
    icon: <Utensils size={26} />,
    title: 'Sri Lankan Cuisine',
    desc: 'Savour authentic rice and curry, fresh seafood, tropical fruits, and the finest Ceylon tea steps from our door.',
    color: 'bg-orange-50 text-orange-700',
  },
  {
    icon: <Bike size={26} />,
    title: 'Explore the Coast',
    desc: 'Rent a bike or scooter and discover nearby beaches like Tangalle and Dickwella, ancient temples, and jungle waterfalls.',
    color: 'bg-teal-50 text-teal-700',
  },
  {
    icon: <Camera size={26} />,
    title: 'Golden Hour',
    desc: "Sri Lanka's south coast serves up breathtaking sunsets every evening — grab a coconut and watch the sky turn orange.",
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
            The <span className="italic text-teal-700">Experience</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 font-body font-light text-base leading-relaxed">
            Hiriketiya isn't just a beach — it's a lifestyle. Here's what a typical day at Kalpa's Place could look like.
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

        {/* Quote */}
        <div className="reveal mt-16 bg-teal-800 rounded-3xl px-8 py-12 md:py-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-4 left-8 text-white font-display text-[180px] leading-none select-none">"</div>
          </div>
          <blockquote className="relative z-10 text-white/90 font-display italic text-2xl md:text-3xl leading-relaxed max-w-3xl mx-auto">
            "This place is fantastic for many reasons — one of Sri Lanka's best surf spots, ideal for those
            who enjoy a slower pace, great coffee, yoga, and morning surf sessions."
          </blockquote>
          <p className="mt-6 text-teal-300 text-sm font-body tracking-widest uppercase">
            — Travel Guide to Sri Lanka
          </p>
        </div>
      </div>
    </section>
  );
}
