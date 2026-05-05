import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import DroneVideo from './components/DroneVideo';
import Rooms from './components/Rooms';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <Hero />
      <About />
      <DroneVideo />
      <Rooms />
      <Experience />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
    </div>
  );
}
