import React from 'react';
import { siteConfig } from '../data/config';
import { ArrowDown, CheckCircle2, ChevronRight, Clock } from 'lucide-react';

export default function Hero({ onOpenOrderModal }) {
  return (
    <section className="relative pt-10 pb-16 lg:pt-20 lg:pb-24 border-b border-cream-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Text Content (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Direct statement instead of AI pill eyebrow */}
            <p className="text-sm font-semibold text-caramel-700 mb-3 tracking-normal">
              Bakery & Oleh-Oleh Homemade Kabanjahe
            </p>

            {/* Main Headline with editorial serif accent */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-chocolate-950 font-bold leading-[1.12] mb-6 text-balance">
              Roti Lembut, Rasa Rumahan yang Selalu <span className="font-serif italic font-normal text-caramel-700">Dirindukan.</span>
            </h1>

            {/* Subtext: measure constrained to max-w-xl (~65ch) */}
            <p className="text-base sm:text-lg text-chocolate-700 leading-relaxed max-w-xl mb-8 font-sans">
              Menyajikan kehangatan aneka roti lembut, snack gurih, dan oleh-oleh homemade khas Kabanjahe. Dibuat fresh setiap hari dengan bahan pilihan dan dedikasi rasa keluarga.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl bg-chocolate-900 hover:bg-caramel-700 text-cream-50 font-semibold text-base transition-colors shadow-sm active:scale-[0.99] text-center"
              >
                <span>Tanya & Pesan Hari Ini</span>
                <ChevronRight size={18} className="ml-2 opacity-90" />
              </button>

              <a
                href="#produk"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-chocolate-900 font-semibold text-base transition-colors text-center"
              >
                <span>Lihat Pilihan Produk</span>
                <ArrowDown size={16} className="ml-2 text-chocolate-700" />
              </a>
            </div>

            {/* Trust Highlights: clean editorial list, no nested boxes */}
            <div className="pt-6 border-t border-cream-300/80 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-chocolate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-caramel-700 flex-shrink-0" />
                <span className="font-medium">Resep Tradisi Rumahan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-caramel-700 flex-shrink-0" />
                <span className="font-medium">100% Homemade Tanpa Pengawet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-caramel-700 flex-shrink-0" />
                <span className="font-medium">Fresh Baked Setiap Pagi</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase (Right Column) - Clean, still, no scale transform */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Photo Frame with high-contrast text */}
              <div className="relative rounded-2xl overflow-hidden border border-cream-300 bg-chocolate-950 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85"
                  alt="Roti artisan hangat Gelora Bakery Kabanjahe"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                
                {/* Solid dark gradient overlay for strict WCAG AAA contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate-950 via-chocolate-950/40 to-transparent"></div>

                {/* Bottom caption with verified contrast */}
                <div className="absolute bottom-6 left-6 right-6 text-cream-50">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-xs text-caramel-300 font-semibold tracking-wider uppercase">
                      Dapur Gelora • Kabanjahe
                    </span>
                    <span className="text-cream-400 text-xs">•</span>
                    <span className="text-xs text-cream-200">07.00 – 21.00 WIB</span>
                  </div>
                  <p className="font-serif text-lg font-medium text-white leading-snug">
                    Dipanggang hangat setiap pagi dengan bahan murni & resep keluarga.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
