import React from 'react';
import { siteConfig } from '../data/config';
import { HeartHandshake, Sparkles, MapPin, Award, CheckCircle } from 'lucide-react';

export default function Advantages() {
  const icons = {
    "lembut-nikmat": <Sparkles className="w-8 h-8 text-caramel-600" />,
    "homemade": <HeartHandshake className="w-8 h-8 text-caramel-600" />,
    "lokal-kabanjahe": <MapPin className="w-8 h-8 text-caramel-600" />,
  };

  return (
    <section id="keunggulan" className="py-20 bg-cream-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-caramel-600 bg-caramel-50 px-3.5 py-1.5 rounded-full border border-caramel-200">
            Cita Rasa Terpercaya Sejak 1975
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mt-4 mb-4">
            Mengapa Memilih Gelora Bakery?
          </h2>
          <p className="text-chocolate-700 text-base sm:text-lg font-sans">
            Kami menjaga dedikasi sederhana: memanggang roti dengan kelembutan sejati, bahan berkualitas, dan cinta rasa rumahan yang tak pernah berubah.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteConfig.advantages.map((adv, index) => (
            <div
              key={adv.id}
              className="bg-cream-100/70 rounded-3xl p-8 border border-cream-200 hover:border-caramel-500/50 hover:bg-cream-100 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-cream-50 border border-cream-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {icons[adv.id] || <Award className="w-8 h-8 text-caramel-600" />}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cream-50 text-chocolate-800 border border-cream-200">
                    {adv.badge}
                  </span>
                </div>

                <span className="text-xs font-semibold text-caramel-700 uppercase tracking-wider block mb-1">
                  {adv.tagline}
                </span>

                <h3 className="font-serif text-2xl font-bold text-chocolate-900 mb-4 group-hover:text-caramel-700 transition-colors">
                  {adv.title}
                </h3>

                <p className="text-chocolate-700 text-sm leading-relaxed mb-6 font-sans">
                  {adv.description}
                </p>
              </div>

              <div className="pt-4 border-t border-cream-200/80 flex items-center gap-2 text-xs font-semibold text-chocolate-800">
                <CheckCircle size={14} className="text-caramel-600" />
                <span>Kualitas konsisten setiap hari</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
