import { createContext, useContext, useState, ReactNode } from 'react';

export const GENERAL_BOOKING_URL = 'https://www.booking.com/hotel/lk/kalpa-place-hiriketiya.html';

export function toISODate(date: Date): string {
  return date.toISOString().split('T')[0];
}

function addDays(date: Date, days: number): Date {
  const next = new Date(date);
  next.setDate(next.getDate() + days);
  return next;
}

export function buildBookingUrl(
  baseUrl: string,
  checkIn: string,
  checkOut: string,
  adults = 2,
  children = 0
): string {
  const url = new URL(baseUrl);
  url.searchParams.set('checkin', checkIn);
  url.searchParams.set('checkout', checkOut);
  url.searchParams.set('group_adults', String(adults));
  url.searchParams.set('group_children', String(children));
  url.searchParams.set('no_rooms', '1');
  return url.toString();
}

interface BookingContextValue {
  checkIn: string;
  checkOut: string;
  setCheckIn: (value: string) => void;
  setCheckOut: (value: string) => void;
  minCheckIn: string;
}

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const today = new Date();
  const [checkIn, setCheckInState] = useState(toISODate(addDays(today, 1)));
  const [checkOut, setCheckOut] = useState(toISODate(addDays(today, 2)));

  const setCheckIn = (value: string) => {
    setCheckInState(value);
    if (value >= checkOut) {
      setCheckOut(toISODate(addDays(new Date(value), 1)));
    }
  };

  return (
    <BookingContext.Provider value={{ checkIn, checkOut, setCheckIn, setCheckOut, minCheckIn: toISODate(today) }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within a BookingProvider');
  return ctx;
}
