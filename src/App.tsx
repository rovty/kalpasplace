import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DroneVideo from './components/DroneVideo';
import Rooms from './components/Rooms';
import Dining from './components/Dining';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileBookingBar from './components/MobileBookingBar';

export default function App() {
  return (
    <BookingProvider>
      <div className="font-body pb-[76px] md:pb-0">
        <Navbar />
        <Hero />
        <Rooms />
        <Dining />
        <About />
        <DroneVideo />
        <Experience />
        <Gallery />
        <Location />
        <Contact />
        <Footer />
        <MobileBookingBar />
      </div>
    </BookingProvider>
  );
}
