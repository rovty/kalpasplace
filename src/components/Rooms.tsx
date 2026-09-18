import { useEffect, useRef } from 'react';
import { useBooking } from '../context/BookingContext';
import RoomCard, { Room } from './RoomCard';

const IMAGES_PER_ROOM = 5;

function roomImages(folder: string): string[] {
  return Array.from({ length: IMAGES_PER_ROOM }, (_, i) => `/images/${folder}/${String(i + 1).padStart(2, '0')}.jpg`);
}

const rooms: Room[] = [
  {
    number: '101',
    type: 'Deluxe Double Room (2 Adults + 1 Child)',
    size: '24 m²',
    bed: '1 king bed',
    occupancy: '2 Adults + 1 Child',
    desc: 'A private bathroom with a bath, shower and bidet, plus a fully equipped kitchen with a fridge, microwave and toaster. Air conditioned, with a flat-screen TV, minibar and garden views.',
    images: roomImages('room-101'),
    features: ['Private kitchen', 'Private bathroom', 'Garden view', 'Air conditioning', 'Flat-screen TV', 'Minibar', 'Free WiFi'],
    bookingUrl: 'https://www.booking.com/hotel/lk/kalpa-place-hiriketiya.html?label=gen173nr-10CAsohQFCFmthbHBhLXBsYWNlLWhpcmlrZXRpeWFIM1gEaIUBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALCjKrVBsACAdICJGJmYTE2ODAzLTY4ZmMtNGI3ZS04NGY2LTgwODJmMDcxMDRiMNgCAeACAQ&sid=38aa337cab3ed10078eb446dbb07d3fb&keep_landing=1&sb_price_type=total&type=total&force_referer=#RD258616001',
    adults: 2,
    children: 1,
  },
  {
    number: '102',
    type: 'Deluxe Triple Room',
    size: '26 m²',
    bed: '1 twin bed & 1 king bed',
    occupancy: null,
    desc: 'A private bathroom with a bath, shower and bidet, plus a fully equipped kitchen with a fridge, microwave and toaster. Air conditioned, with a flat-screen TV, minibar and garden views.',
    images: roomImages('room-102'),
    features: ['Private kitchen', 'Private bathroom', 'Garden view', 'Air conditioning', 'Flat-screen TV', 'Minibar', 'Free WiFi'],
    bookingUrl: 'https://www.booking.com/hotel/lk/kalpa-place-hiriketiya.html?label=gen173nr-10CAsohQFCFmthbHBhLXBsYWNlLWhpcmlrZXRpeWFIM1gEaIUBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALCjKrVBsACAdICJGJmYTE2ODAzLTY4ZmMtNGI3ZS04NGY2LTgwODJmMDcxMDRiMNgCAeACAQ&sid=38aa337cab3ed10078eb446dbb07d3fb&keep_landing=1&sb_price_type=total&type=total&force_referer=#RD258616002',
    adults: 3,
    children: 0,
  },
  {
    number: '103',
    type: 'Deluxe Double Room',
    size: '28 m²',
    bed: null,
    occupancy: null,
    desc: 'A private bathroom with a bath, shower and bidet, plus a fully equipped kitchen with a fridge, microwave and toaster. Air conditioned, with a flat-screen TV, minibar, a seating area and garden and landmark views.',
    images: roomImages('room-103'),
    features: ['Private kitchen', 'Private bathroom', 'Garden view', 'Landmark view', 'Air conditioning', 'Flat-screen TV', 'Minibar', 'Free WiFi'],
    bookingUrl: 'https://www.booking.com/hotel/lk/kalpa-place-hiriketiya.html?label=gen173nr-10CAsohQFCFmthbHBhLXBsYWNlLWhpcmlrZXRpeWFIM1gEaIUBiAEBmAEzuAEXyAEM2AED6AEB-AEBiAIBqAIBuALCjKrVBsACAdICJGJmYTE2ODAzLTY4ZmMtNGI3ZS04NGY2LTgwODJmMDcxMDRiMNgCAeACAQ&sid=38aa337cab3ed10078eb446dbb07d3fb&keep_landing=1&sb_price_type=total&type=total&force_referer=#RD258616003',
    adults: 2,
    children: 0,
  },
];

export default function Rooms() {
  const sectionRef = useRef<HTMLElement>(null);
  const { checkIn, checkOut, setCheckIn, setCheckOut, minCheckIn } = useBooking();

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
    <section id="rooms" ref={sectionRef} className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
            Rooms & <span className="italic text-teal-700">Suites</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-500 font-body font-light text-base leading-relaxed">
            Three deluxe rooms, each with a private kitchen and bathroom, air conditioning and garden views - simple, comfortable spaces to come back to after a day in Hiriketiya.
          </p>
        </div>

        <div className="reveal max-w-xl mx-auto mb-12 grid grid-cols-2 gap-4">
          <label className="flex flex-col text-sm font-body text-gray-600">
            Check-in
            <input
              type="date"
              value={checkIn}
              min={minCheckIn}
              onChange={e => setCheckIn(e.target.value)}
              className="mt-1 rounded-xl border border-gray-200 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </label>
          <label className="flex flex-col text-sm font-body text-gray-600">
            Check-out
            <input
              type="date"
              value={checkOut}
              min={new Date(new Date(checkIn).getTime() + 86400000).toISOString().split('T')[0]}
              onChange={e => setCheckOut(e.target.value)}
              className="mt-1 rounded-xl border border-gray-200 px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </label>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {rooms.map((room, i) => (
            <RoomCard key={room.number} room={room} checkIn={checkIn} checkOut={checkOut} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
