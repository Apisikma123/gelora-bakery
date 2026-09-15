import React from 'react';
import { siteConfig } from '../data/config';
import { MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-20 border-b border-cream-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side (Left Column) */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Clean Framed Photo */}
              <div className="rounded-2xl overflow-hidden border border-cream-300 shadow-sm bg-chocolate-950">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80"
                  alt="Dapur panggangan Gelora Bakery Kabanjahe"
                  className="w-full h-[380px] object-cover"
                />
              </div>

              {/* Clean Brand Caption (no nested card) */}
              <div className="mt-4 flex items-center gap-3.5 px-1">
                <img
                  src="/logo.jpg"
                  alt="Gelora Bakery"
                  className="w-12 h-12 rounded-full object-cover border border-caramel-600 flex-shrink-0"
                />
                <div>
                  <p className="font-serif font-bold text-sm text-chocolate-950">
                    {siteConfig.brand.name} • Kabanjahe
                  </p>
                  <p className="text-xs text-chocolate-700 font-sans">
                    {siteConfig.brand.motto} — {siteConfig.brand.landmark}
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Side (Right Column) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <p className="text-sm font-semibold text-caramel-700 mb-2">
              Kisah & Dedikasi Kami
            </p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mb-6 leading-tight">
              Menjaga Kehangatan Dapur Rumahan di Kabanjahe
            </h2>

            <div className="space-y-4 text-chocolate-700 text-base leading-relaxed font-sans max-w-xl">
              <p>
                Perjalanan <strong className="text-chocolate-950 font-semibold">{siteConfig.brand.name}</strong> berakar dari niat sederhana: menghadirkan roti yang benar-benar lembut, bergizi, dan beraroma khas untuk masyarakat Kabanjahe dan sekitarnya.
              </p>
              <p>
                Hadir di <strong className="text-chocolate-950 font-semibold">{siteConfig.brand.fullAddress}</strong>, kami telah menjadi bagian dari memori rasa banyak keluarga di Tanah Karo—menemani sarapan pagi, sajian pesta, hingga buah tangan bagi pelancong.
              </p>
              <p>
                Bagi kami, memanggang roti bukan sekadar memproduksi dalam jumlah massal, melainkan merawat resep rumahan (homemade) di setiap loyang panggangan. Kami mempertahankan bahan-bahan berkualitas tanpa mengambil jalan pintas pengawet berlebihan.
              </p>
            </div>

            {/* Quick Metrics: clean divider layout, zero nested cards */}
            <div className="mt-8 pt-6 border-t border-cream-300 grid grid-cols-3 gap-6 max-w-xl">
              <div>
                <span className="font-display text-2xl sm:text-3xl text-caramel-800 font-bold block">Fresh</span>
                <span className="text-xs text-chocolate-700 font-medium">Dipanggang Harian</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl text-caramel-800 font-bold block">100%</span>
                <span className="text-xs text-chocolate-700 font-medium">Resep Homemade</span>
              </div>
              <div>
                <span className="font-display text-2xl sm:text-3xl text-caramel-800 font-bold block">Kabanjahe</span>
                <span className="text-xs text-chocolate-700 font-medium">Bakery Lokal</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
