import React from 'react';
import { siteConfig } from '../data/config';
import { Sparkles, ArrowDown, CheckCircle2, ChevronRight, Clock, MapPin } from 'lucide-react';

export default function Hero({ onOpenOrderModal }) {
  return (
    <section className="relative overflow-hidden bg-cream-50 pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-cream-200/80">
      {/* Subtle decorative background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#3D2318_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-100 border border-cream-200 text-chocolate-800 text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-caramel-500 animate-pulse"></span>
              <span>Bakery & Oleh-Oleh Homemade Kabanjahe</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-chocolate-950 font-bold leading-[1.15] mb-6 text-balance">
              Roti Lembut, Rasa Rumahan yang Selalu Dirindukan.
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-chocolate-700 leading-relaxed max-w-2xl mb-8 font-sans">
              Menyajikan kehangatan aneka roti lembut, snack gurih, dan oleh-oleh homemade khas Kabanjahe. Dibuat fresh setiap hari dengan bahan pilihan dan dedikasi tradisi rasa keluarga.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-chocolate-900 hover:bg-caramel-600 text-cream-50 font-semibold text-base transition-all duration-200 shadow-md hover:shadow-lg active:scale-[0.98] text-center"
              >
                <span>Tanya & Pesan Produk Hari Ini</span>
                <ChevronRight size={18} className="ml-2" />
              </button>

              <a
                href="#produk"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-chocolate-900 font-semibold text-base transition-colors text-center"
              >
                <span>Lihat Produk Kami</span>
                <ArrowDown size={16} className="ml-2 text-chocolate-600" />
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-cream-200/90 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-chocolate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-caramel-600 flex-shrink-0" />
                <span className="font-medium">Resep Tradisi Rumahan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-caramel-600 flex-shrink-0" />
                <span className="font-medium">100% Homemade Tanpa Pengawet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-caramel-600 flex-shrink-0" />
                <span className="font-medium">Fresh Baked Setiap Pagi</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase (Right Column) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-cream-100">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
                  alt="Fresh artisan bread by Gelora Bakery"
                  className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle dark gradient overlay at bottom for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950/80 via-transparent to-transparent"></div>

                {/* Bottom caption in image */}
                <div className="absolute bottom-6 left-6 right-6 text-cream-50">
                  <span className="inline-block text-[11px] uppercase tracking-wider text-caramel-200 font-semibold mb-1">
                    Dapur Gelora Bakery Kabanjahe
                  </span>
                  <p className="font-serif text-lg font-medium leading-snug">
                    Dipanggang hangat setiap pagi dengan bahan murni & resep keluarga.
                  </p>
                </div>
              </div>

              {/* Authentic Floating Logo Stamp Card */}
              <div className="absolute -bottom-6 -left-4 sm:-bottom-8 sm:-left-8 bg-cream-50 p-3 sm:p-4 rounded-2xl shadow-xl border border-cream-200 flex items-center gap-3.5 max-w-[260px] sm:max-w-[280px]">
                <img
                  src="/logo.jpg"
                  alt="Gelora Bakery Vintage Stamp"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-caramel-500/40 shadow-inner flex-shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-display text-sm font-bold text-chocolate-900 leading-tight">
                    {siteConfig.brand.name}
                  </span>
                  <span className="text-[11px] text-chocolate-600 font-sans mt-0.5">
                    Enak, Lezat, Bergizi
                  </span>
                  <span className="text-[10px] text-caramel-600 font-medium">
                    Kabanjahe, Tanah Karo
                  </span>
                </div>
              </div>

              {/* Floating Top Right Tag */}
              <div className="absolute -top-4 -right-4 bg-chocolate-900 text-cream-50 px-4 py-2 rounded-xl shadow-lg text-xs font-semibold flex items-center gap-1.5 border border-chocolate-800">
                <Clock size={14} className="text-caramel-500" />
                <span>Buka Setiap Hari 07.00 - 21.00</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
