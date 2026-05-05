import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map(l => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.35 }
    );
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? 'nav-scrolled' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center overflow-hidden transition-all duration-300 ${
            scrolled ? 'border-teal-700' : 'border-white/70'
          }`}>
            <span className={`text-xs font-bold font-display tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-teal-800' : 'text-white'
            }`}>KP</span>
          </div>
          <div>
            <p className={`text-sm font-bold tracking-wide font-display leading-tight transition-colors duration-300 ${
              scrolled ? 'text-teal-900' : 'text-white text-shadow-sm'
            }`}>Kalpa's Place</p>
            <p className={`text-[10px] tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? 'text-teal-600' : 'text-white/80'
            }`}>Hiriketiya Beach</p>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm tracking-wide transition-all duration-200 relative pb-0.5 ${
                  scrolled
                    ? active === link.href.replace('#', '')
                      ? 'text-teal-700 font-medium'
                      : 'text-gray-600 hover:text-teal-700'
                    : active === link.href.replace('#', '')
                    ? 'text-white font-medium'
                    : 'text-white/80 hover:text-white text-shadow-sm'
                } after:absolute after:bottom-0 after:left-0 after:h-px after:transition-all after:duration-300 ${
                  active === link.href.replace('#', '')
                    ? 'after:w-full after:bg-current'
                    : 'after:w-0 hover:after:w-full after:bg-current'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Book now CTA */}
        <a
          href="https://www.booking.com"
          target="_blank"
          rel="noopener noreferrer"
          className={`hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            scrolled
              ? 'bg-teal-700 text-white hover:bg-teal-800 shadow-md hover:shadow-lg'
              : 'bg-white/15 backdrop-blur-sm border border-white/40 text-white hover:bg-white/25'
          }`}
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? 'text-teal-800' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white/97 backdrop-blur-md border-t border-gray-100`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {links.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-sm tracking-wide transition-colors ${
                  active === link.href.replace('#', '')
                    ? 'text-teal-700 font-medium'
                    : 'text-gray-600 hover:text-teal-700'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="inline-flex w-full justify-center px-5 py-2.5 rounded-full bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-colors"
            >
              Book Now on Booking.com
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
