import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, Wifi, Wind, Bath, Tv, Wine, Utensils, Eye, Maximize2, BedDouble, Users } from 'lucide-react';
import { buildBookingUrl } from '../context/BookingContext';

const featureIcons: Record<string, JSX.Element> = {
  'Private kitchen': <Utensils size={14} />,
  'Private bathroom': <Bath size={14} />,
  'Garden view': <Eye size={14} />,
  'Landmark view': <Eye size={14} />,
  'Air conditioning': <Wind size={14} />,
  'Flat-screen TV': <Tv size={14} />,
  Minibar: <Wine size={14} />,
  'Free WiFi': <Wifi size={14} />,
};

export interface Room {
  number: string;
  type: string;
  size: string;
  bed: string | null;
  occupancy: string | null;
  desc: string;
  images: string[];
  features: string[];
  bookingUrl: string;
  adults: number;
  children: number;
}

const GRID_COLS: Record<number, string> = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

interface RoomCardProps {
  room: Room;
  checkIn: string;
  checkOut: string;
  delay: number;
}

export default function RoomCard({ room, checkIn, checkOut, delay }: RoomCardProps) {
  const [broken, setBroken] = useState<Record<number, boolean>>({});
  const [lightbox, setLightbox] = useState<number | null>(null);

  const visible = room.images.map((_, i) => i).filter(i => !broken[i]);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null);
      if (e.key === 'ArrowRight') {
        setLightbox(prev => {
          if (prev === null) return null;
          const pos = visible.indexOf(prev);
          return visible[(pos + 1) % visible.length];
        });
      }
      if (e.key === 'ArrowLeft') {
        setLightbox(prev => {
          if (prev === null) return null;
          const pos = visible.indexOf(prev);
          return visible[(pos - 1 + visible.length) % visible.length];
        });
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox, visible]);

  const stepLightbox = (dir: 1 | -1) => {
    setLightbox(prev => {
      if (prev === null) return null;
      const pos = visible.indexOf(prev);
      return visible[(pos + dir + visible.length) % visible.length];
    });
  };

  const img = (i: number, className: string) =>
    !broken[i] && (
      <img
        key={room.images[i]}
        src={room.images[i]}
        alt={`Room ${room.number} photo ${i + 1}`}
        width={1200}
        height={800}
        loading="lazy"
        decoding="async"
        onError={() => setBroken(prev => ({ ...prev, [i]: true }))}
        onClick={() => setLightbox(i)}
        className={`${className} object-cover cursor-pointer`}
      />
    );

  return (
    <div
      className="reveal room-card rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative h-60 bg-teal-800">
        {visible.length === 0 && (
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-teal-900" />
        )}

        {visible.length === 1 && (
          <div className="absolute inset-0">{img(visible[0], 'w-full h-full')}</div>
        )}

        {visible.length >= 2 && visible.length < 5 && (
          <div className={`grid gap-0.5 h-full ${GRID_COLS[visible.length]}`}>
            {visible.map(i => (
              <div key={i} className="relative overflow-hidden">
                {img(i, 'w-full h-full')}
              </div>
            ))}
          </div>
        )}

        {visible.length >= 5 && (
          <div className="grid grid-cols-4 grid-rows-2 gap-0.5 h-full">
            <div className="col-span-2 row-span-2 relative overflow-hidden">
              {img(visible[0], 'w-full h-full')}
            </div>
            {visible.slice(1, 5).map(i => (
              <div key={i} className="relative overflow-hidden">
                {img(i, 'w-full h-full')}
              </div>
            ))}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full pointer-events-none">
          Room {room.number}
        </span>
      </div>

      <div className="p-6">
        <h3 className="font-display text-xl text-gray-900 mb-1">{room.type}</h3>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 text-xs font-body mb-3">
          <span className="inline-flex items-center gap-1"><Maximize2 size={13} /> {room.size}</span>
          {room.bed && <span className="inline-flex items-center gap-1"><BedDouble size={13} /> {room.bed}</span>}
          {room.occupancy && <span className="inline-flex items-center gap-1"><Users size={13} /> {room.occupancy}</span>}
        </div>
        <p className="text-gray-500 text-sm font-body font-light leading-relaxed mb-4">
          {room.desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {room.features.map((f, j) => (
            <span
              key={j}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs font-body"
            >
              {featureIcons[f]}
              {f}
            </span>
          ))}
        </div>
        <a
          href={buildBookingUrl(room.bookingUrl, checkIn, checkOut, room.adults, room.children)}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex justify-center items-center px-6 py-2.5 rounded-xl bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-all duration-300"
        >
          Check Availability
        </a>
      </div>

      {lightbox !== null && createPortal(
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
          {visible.length > 1 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={e => { e.stopPropagation(); stepLightbox(-1); }}
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          <img
            src={room.images[lightbox]}
            alt={`Room ${room.number} photo ${lightbox + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
          {visible.length > 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
              onClick={e => { e.stopPropagation(); stepLightbox(1); }}
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>
          )}
          <div className="absolute bottom-4 text-white/50 text-sm font-body">
            {visible.indexOf(lightbox) + 1} / {visible.length}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
