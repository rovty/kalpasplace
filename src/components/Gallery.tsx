import { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

const images = [
  {
    url: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Hiriketiya beach aerial view',
    span: 'col-span-2 row-span-2',
  },
  {
    url: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Surfer on wave',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Tropical palm trees beach',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Beach coffee relaxation',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/1078983/pexels-photo-1078983.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Tropical resort pool',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Tropical bungalow',
    span: '',
  },
  {
    url: 'https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Ocean waves',
    span: '',
  },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') setLightbox(prev => prev !== null ? (prev + 1) % images.length : null);
      if (e.key === 'ArrowLeft') setLightbox(prev => prev !== null ? (prev - 1 + images.length) % images.length : null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <section id="gallery" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-14">
          <p className="text-xs tracking-[0.25em] uppercase text-teal-600 font-body mb-3">
            Photo Gallery
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900">
            Life at <span className="italic text-teal-700">Kalpa's Place</span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm font-body">
            Click any photo to view full size
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(i)}
              className={`${img.span} overflow-hidden rounded-2xl group relative focus:outline-none focus:ring-2 focus:ring-teal-500`}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover slide-img group-hover:brightness-95 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ImageIcon size={18} className="text-white" />
                </div>
              </div>
            </button>
          ))}
        </div>


      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={e => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>
          <img
            src={images[lightbox].url.replace('w=900', 'w=1600').replace('w=600', 'w=1200')}
            alt={images[lightbox].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={e => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>
          <div className="absolute bottom-4 text-white/50 text-sm font-body">
            {lightbox + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
