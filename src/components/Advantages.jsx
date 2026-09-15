import React from 'react';
import { siteConfig } from '../data/config';
import { HeartHandshake, Sparkles, MapPin, Check } from 'lucide-react';

export default function Advantages() {
  const icons = {
    "lembut-nikmat": <Sparkles className="w-6 h-6 text-caramel-700" />,
    "homemade": <HeartHandshake className="w-6 h-6 text-caramel-700" />,
    "lokal-kabanjahe": <MapPin className="w-6 h-6 text-caramel-700" />,
  };

  return (
    <section id="keunggulan" className="py-20 bg-cream-50 border-b border-cream-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header without AI pill eyebrow */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-caramel-700 mb-2">
            Komitmen Kualitas Kami
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mb-4">
            Mengapa Memilih Gelora Bakery?
          </h2>
          <p className="text-chocolate-700 text-base leading-relaxed font-sans">
            Kami menjaga dedikasi sederhana: memanggang roti dengan kelembutan sejati, bahan berkualitas, dan cinta rasa rumahan yang tak pernah berubah.
          </p>
        </div>

        {/* 3 Pillars: Clean editorial column layout, zero nested cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {siteConfig.advantages.map((adv) => (
            <div
              key={adv.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-cream-100/60 border border-cream-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="text-caramel-700">
                    {icons[adv.id]}
                  </div>
                  <span className="text-xs font-semibold text-caramel-800 tracking-wider uppercase">
                    {adv.badge}
                  </span>
                </div>

                <p className="text-xs font-semibold text-caramel-800 mb-1">
                  {adv.tagline}
                </p>

                <h3 className="font-serif text-2xl font-bold text-chocolate-950 mb-3">
                  {adv.title}
                </h3>

                <p className="text-chocolate-700 text-sm leading-relaxed font-sans">
                  {adv.description}
                </p>
              </div>

              <div className="pt-5 mt-6 border-t border-cream-300/80 flex items-center gap-2 text-xs font-medium text-chocolate-800">
                <Check size={14} className="text-caramel-700 flex-shrink-0" />
                <span>Kualitas terjaga setiap hari</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
