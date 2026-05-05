import { useEffect, useRef } from 'react';
import { Video, Play } from 'lucide-react';

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
          {/* Video placeholder — replace src with your drone video file */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl video-placeholder aspect-video">
            {/* Once you have a video, replace this with:
                <video src="/drone-footage.mp4" autoPlay muted loop playsInline className="w-full h-full object-cover" />
            */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
              <div className="w-20 h-20 rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 hover:bg-white/20 transition-colors cursor-pointer group">
                <Play size={28} className="ml-1 group-hover:scale-110 transition-transform" fill="white" />
              </div>
              <div className="flex items-center gap-2 mb-3">
                <Video size={16} className="text-white/60" />
                <p className="text-sm tracking-widest uppercase text-white/60 font-body">
                  Drone Video Placeholder
                </p>
              </div>
              <p className="text-white/40 text-xs font-body">
                Replace with your aerial footage of Hiriketiya
              </p>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 text-white/10 font-display text-6xl select-none">
                6°
              </div>
              <div className="absolute bottom-8 right-8 text-white/10 font-display text-6xl select-none">
                N
              </div>

              {/* Coordinate overlay */}
              <div className="absolute bottom-6 left-6 text-white/50 text-xs font-body tracking-wider">
                6.0°N, 80.6°E · Hiriketiya, Sri Lanka
              </div>
            </div>

            {/* Ambient glow circles */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-400/10 blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-emerald-300/10 blur-3xl pointer-events-none" />
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
