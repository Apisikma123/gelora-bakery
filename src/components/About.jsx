import React from 'react';
import { siteConfig } from '../data/config';
import { Award, Clock, Heart, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="tentang" className="py-20 bg-cream-100/50 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side (Left Column) */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=80"
                  alt="Dapur panggangan Gelora Bakery"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              {/* Offset Stamp Box with Real Logo */}
              <div className="absolute -top-6 -right-4 sm:-top-8 sm:-right-8 bg-cream-50 p-4 rounded-2xl shadow-xl border border-cream-200 max-w-[220px] text-center">
                <img
                  src="/logo.jpg"
                  alt="Gelora Bakery Badge"
                  className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-caramel-500/40 mb-2 shadow-sm"
                />
                <p className="font-serif font-bold text-xs text-chocolate-900 leading-tight">
                  Enak, Lezat, Bergizi
                </p>
                <p className="text-[10px] text-caramel-700 font-sans mt-0.5">
                  Sejak Tahun 1975
                </p>
              </div>

              {/* Address Highlight Card */}
              <div className="mt-4 bg-cream-50 p-4 rounded-2xl border border-cream-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-caramel-600" />
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-chocolate-900">{siteConfig.brand.fullAddress}</p>
                  <p className="text-chocolate-600">{siteConfig.brand.landmark}</p>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Side (Right Column) */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-200/80 text-chocolate-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Award size={14} className="text-caramel-600" />
              <span>Warisan Rasa Kabanjahe</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mb-6 leading-tight">
              Menjaga Kehangatan Dapur Rumahan Selama Puluhan Tahun
            </h2>

            <div className="space-y-4 text-chocolate-700 text-base leading-relaxed font-sans">
              <p>
                Perjalanan <strong className="text-chocolate-900 font-semibold">{siteConfig.brand.name}</strong> berakar dari niat sederhana: menghadirkan roti yang benar-benar lembut, bergizi, dan beraroma khas untuk masyarakat Kabanjahe dan sekitarnya.
              </p>
              <p>
                Berdiri di <strong className="text-chocolate-900 font-semibold">{siteConfig.brand.fullAddress}</strong> sejak tahun <strong>{siteConfig.brand.foundedYear}</strong>, kami telah menjadi bagian dari memori rasa banyak keluarga di Tanah Karo—menemani sarapan pagi dengan teh hangat, sajian pesta adat, hingga oleh-oleh berharga bagi pelancong.
              </p>
              <p>
                Bagi kami, memanggang roti bukan sekadar memproduksi dalam jumlah massal, melainkan merawat resep rumahan (homemade) di setiap loyang panggangan. Kami mempertahankan bahan-bahan berkualitas tanpa mengambil jalan pintas pengawet berlebihan, agar setiap suapan selalu menghadirkan rasa yang akrab dan dirindukan.
              </p>
            </div>

            {/* Quick Stats / Anchors */}
            <div className="mt-8 pt-6 border-t border-cream-200 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                <span className="font-display text-2xl sm:text-3xl text-caramel-700 font-bold block">1975</span>
                <span className="text-xs text-chocolate-600 font-medium">Tahun Berdiri</span>
              </div>
              <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                <span className="font-display text-2xl sm:text-3xl text-caramel-700 font-bold block">100%</span>
                <span className="text-xs text-chocolate-600 font-medium">Resep Homemade</span>
              </div>
              <div className="p-3 bg-cream-50 rounded-xl border border-cream-200">
                <span className="font-display text-2xl sm:text-3xl text-caramel-700 font-bold block">Kabanjahe</span>
                <span className="text-xs text-chocolate-600 font-medium">Pusat Tradisi</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
