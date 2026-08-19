import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const slides = [
  {
    url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Hiriketiya Beach sunrise',
  },
  {
    url: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Tropical beach Sri Lanka',
  },
  {
    url: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Beach waves surfing',
  },
  {
    url: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Tropical resort palm trees',
  },
];

export default function Hero() {
  const currentRef = useRef(0);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    slidesRef.current[currentRef.current]?.classList.remove('opacity-100');
    slidesRef.current[currentRef.current]?.classList.add('opacity-0');
    currentRef.current = idx;
    slidesRef.current[idx]?.classList.remove('opacity-0');
    slidesRef.current[idx]?.classList.add('opacity-100');
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      const next = (currentRef.current + 1) % slides.length;
      goTo(next);
    }, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[600px] overflow-hidden">
      {/* Slide backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={i}
          ref={el => { if (el) slidesRef.current[i] = el; }}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1200 ${
            i === 0 ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.url})` }}
          aria-label={slide.alt}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 hero-gradient" />

      {/* Animated wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden pointer-events-none">
        <svg
          className="wave-animate absolute bottom-0"
          style={{ width: '200%', height: '100%' }}
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,0 1440,40 L1440,80 L0,80 Z"
            fill="white"
            fillOpacity="0.12"
          />
          <path
            d="M0,55 C240,10 480,80 720,55 C960,30 1200,80 1440,55 L1440,80 L0,80 Z"
            fill="white"
            fillOpacity="0.08"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <p className="fade-in-up fade-in-up-delay-1 text-xs md:text-sm tracking-[0.25em] uppercase text-white/80 mb-4 font-body text-shadow-sm">
          Hiriketiya Beach · Sri Lanka
        </p>
        <h1 className="fade-in-up fade-in-up-delay-2 text-5xl md:text-7xl lg:text-8xl font-display text-white text-shadow leading-tight mb-6">
          Kalpa's<br />
          <span className="italic font-normal">Place</span>
        </h1>
        <p className="fade-in-up fade-in-up-delay-3 max-w-xl text-base md:text-lg text-white/85 font-body font-light leading-relaxed text-shadow-sm mb-10">
          A boutique beach retreat where the surf meets slow living —
          your home away from home on Sri Lanka's south coast.
        </p>
        <div className="fade-in-up fade-in-up-delay-4 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://www.booking.com/hotel/lk/kalpa-place-hiriketiya.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pulse px-8 py-3.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book Your Stay
          </a>
          <a
            href="#about"
            className="px-8 py-3.5 rounded-full border border-white/50 text-white hover:bg-white/15 font-medium tracking-wide transition-all duration-300 backdrop-blur-sm"
          >
            Explore
          </a>
        </div>

        {/* Dot indicators */}
        <div className="absolute bottom-14 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (intervalRef.current) clearInterval(intervalRef.current);
                goTo(i);
                intervalRef.current = setInterval(() => {
                  const next = (currentRef.current + 1) % slides.length;
                  goTo(next);
                }, 5000);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === 0 ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors float-anim"
        aria-label="Scroll down"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
