import { useEffect, useRef } from 'react';
import { Coffee, Beer, Cookie } from 'lucide-react';

const breakfastOptions = [
  {
    number: '01',
    name: 'Western Breakfast',
    items: ['Toast', 'Scrambled eggs or fried eggs', 'Sausages', 'Jam and butter', 'Tea, coffee or fresh juice'],
  },
  {
    number: '02',
    name: 'Sri Lankan Breakfast',
    items: ['String hoppers or bread', 'Dhal curry or potato curry', 'Pol sambol', 'Fish curry or chicken curry', 'Tea, coffee or fresh juice'],
  },
];

const minibarCategories = [
  {
    name: 'Sip',
    icon: <Beer size={16} />,
    items: ['Water', 'Beer', 'Coca-Cola', 'Lemonade', 'Sprite'],
  },
  {
    name: 'Snack',
    icon: <Cookie size={16} />,
    items: ['Chips', 'Tipi Tip', 'Nuts'],
  },
];

export default function Dining() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="dining" ref={sectionRef} className="py-24 md:py-32 bg-[#f7f5f0]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="reveal text-center mb-16">
          <p className="text-xs tracking-[0.25em] uppercase text-teal-600 font-body mb-3">
            Included With Your Stay
          </p>
          <h2 className="text-4xl md:text-5xl font-display text-gray-900 leading-tight">
            Breakfast & <span className="italic text-teal-700">Minibar</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-gray-500 font-body font-light text-base leading-relaxed">
            Start your day with a breakfast made to order, and keep your room stocked with drinks and snacks from the minibar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Breakfast */}
          <div className="reveal bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                <Coffee size={22} />
              </div>
              <h3 className="font-display text-2xl text-gray-900">Breakfast Menu</h3>
            </div>
            <p className="text-gray-500 text-sm font-body font-light mb-6">
              Please choose either a Western or Sri Lankan breakfast.
            </p>

            <div className="space-y-6">
              {breakfastOptions.map(option => (
                <div key={option.number}>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-xs font-body font-medium text-teal-700 bg-teal-50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {option.number}
                    </span>
                    <h4 className="font-display text-base text-gray-900">{option.name}</h4>
                  </div>
                  <ul className="pl-8 space-y-1">
                    {option.items.map(item => (
                      <li key={item} className="text-gray-500 text-sm font-body font-light leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Minibar */}
          <div className="reveal bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center flex-shrink-0">
                <Beer size={22} />
              </div>
              <h3 className="font-display text-2xl text-gray-900">Minibar</h3>
            </div>
            <p className="text-gray-500 text-sm font-body font-light mb-6">
              Enjoy a selection of local snacks, drinks and other treats in your room.
            </p>

            <div className="space-y-6">
              {minibarCategories.map(category => (
                <div key={category.name}>
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <span className="text-teal-700 bg-teal-50 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {category.icon}
                    </span>
                    <h4 className="font-display text-base text-gray-900">{category.name}</h4>
                  </div>
                  <div className="pl-8 flex flex-wrap gap-2">
                    {category.items.map(item => (
                      <span
                        key={item}
                        className="text-gray-600 text-sm font-body font-light px-3 py-1 rounded-full bg-gray-50 border border-gray-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
