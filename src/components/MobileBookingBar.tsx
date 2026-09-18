import { MessageCircle } from 'lucide-react';
import { useBooking, buildBookingUrl, GENERAL_BOOKING_URL } from '../context/BookingContext';

export default function MobileBookingBar() {
  const { checkIn, checkOut } = useBooking();

  return (
    <div
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-4 pt-3 flex items-center gap-3"
      style={{ paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom))' }}
    >
      <a
        href="https://wa.me/94776765556"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-green-50 text-green-600 border border-green-200"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href={buildBookingUrl(GENERAL_BOOKING_URL, checkIn, checkOut)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center px-6 py-3 rounded-full bg-teal-700 text-white text-sm font-semibold shadow-md active:bg-teal-800 transition-colors"
      >
        Book Now
      </a>
    </div>
  );
}
