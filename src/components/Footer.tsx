import { Waves, Instagram, Facebook, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-white">
      {/* CTA band */}
      <div className="bg-teal-700 py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4">
            Ready to Feel the <span className="italic">Hiriketiya Magic?</span>
          </h2>
          <p className="text-teal-100 font-body font-light mb-8 max-w-xl mx-auto leading-relaxed">
            Surf in the morning, sip coffee watching the waves, fall asleep to the sound of the ocean.
            Your dream stay in Sri Lanka is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-teal-800 font-medium text-sm hover:bg-teal-50 transition-all duration-300 shadow-lg"
            >
              <ExternalLink size={15} />
              Book on Booking.com
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/40 text-white text-sm font-medium hover:bg-white/10 transition-all duration-300"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Footer content */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full border-2 border-teal-500 flex items-center justify-center">
                <span className="text-xs font-bold font-display text-teal-400">KP</span>
              </div>
              <div>
                <p className="font-display text-white font-bold">Kalpa's Place</p>
                <p className="text-teal-500 text-[11px] tracking-widest uppercase">Hiriketiya Beach, Sri Lanka</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-body font-light leading-relaxed max-w-xs">
              A boutique beach retreat beside one of Sri Lanka's finest surf spots.
              Perfect for surfers, nomads, and slow travelers seeking sun, soul, and simplicity.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-700/40 flex items-center justify-center transition-colors text-gray-400 hover:text-white" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-700/40 flex items-center justify-center transition-colors text-gray-400 hover:text-white" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href="https://wa.me/94XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-white/5 hover:bg-teal-700/40 flex items-center justify-center transition-colors text-gray-400 hover:text-white" aria-label="WhatsApp">
                <MessageCircle size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display text-sm text-white mb-4 uppercase tracking-widest">Explore</h4>
            <ul className="space-y-2.5">
              {[
                ['About Us', '#about'],
                ['Rooms & Suites', '#rooms'],
                ['Experiences', '#experience'],
                ['Photo Gallery', '#gallery'],
                ['Contact Us', '#contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <a href={href} className="text-gray-400 text-sm font-body hover:text-teal-400 transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-sm text-white mb-4 uppercase tracking-widest">Info</h4>
            <ul className="space-y-2.5 text-gray-400 text-sm font-body">
              <li>
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-0.5">Check-in</span>
                2:00 PM
              </li>
              <li>
                <span className="text-gray-500 text-xs uppercase tracking-widest block mb-0.5">Check-out</span>
                11:00 AM
              </li>
              <li className="pt-1">
                <a href="mailto:hello@kalpasplace.lk" className="hover:text-teal-400 transition-colors">
                  hello@kalpasplace.lk
                </a>
              </li>
              <li>
                <a href="tel:+94XXXXXXXXX" className="hover:text-teal-400 transition-colors">
                  +94 XX XXX XXXX
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={13} /> Book on Booking.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-gray-500 text-sm font-body">
            <Waves size={14} className="text-teal-600" />
            <span>© {year} Kalpa's Place. All rights reserved.</span>
          </div>
          <p className="text-gray-600 text-xs font-body">
            Hiriketiya Beach, Dickwella, Southern Province, Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
}
