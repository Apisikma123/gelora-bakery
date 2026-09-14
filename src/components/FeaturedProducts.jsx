import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import { MessageCircle, Sparkles, Check, ChevronRight } from 'lucide-react';

export default function FeaturedProducts({ onSelectProductForInquiry }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts = activeCategory === "Semua"
    ? siteConfig.products
    : siteConfig.products.filter(item => item.category === activeCategory);

  return (
    <section id="produk" className="py-20 bg-cream-100/60 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-200/80 text-chocolate-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles size={13} className="text-caramel-600" />
            <span>Pilihan Rasa Istimewa</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mb-4">
            Produk Unggulan Gelora Bakery
          </h2>
          <p className="text-chocolate-700 text-base sm:text-lg font-sans">
            Mulai dari roti manis lembut, roti isi padat lezat, butter cake harum khas tradisi, hingga snack renyah dan oleh-oleh untuk buah tangan perjalanan Anda di Kabanjahe.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar">
          {siteConfig.productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-chocolate-900 text-cream-50 shadow-sm'
                  : 'bg-cream-50 text-chocolate-800 hover:bg-cream-200/80 border border-cream-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category & Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-chocolate-900/85 backdrop-blur-sm text-cream-50 text-[11px] font-semibold tracking-wide">
                    {product.category}
                  </span>
                  {product.badge && (
                    <span className="px-2.5 py-1 rounded-md bg-caramel-500/95 backdrop-blur-sm text-cream-50 text-[11px] font-semibold">
                      {product.badge}
                    </span>
                  )}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-chocolate-900 mb-2.5 group-hover:text-caramel-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-chocolate-700 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-cream-200/80">
                  <div className="flex items-center gap-1.5 text-xs text-chocolate-600 mb-4 font-medium">
                    <Check size={14} className="text-caramel-600 flex-shrink-0" />
                    <span>{product.highlight}</span>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs text-chocolate-500 italic">
                      Fresh harian di toko
                    </span>

                    <button
                      onClick={() => onSelectProductForInquiry(product)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-chocolate-900 hover:bg-caramel-600 text-cream-50 text-xs font-semibold transition-colors shadow-sm"
                    >
                      <MessageCircle size={14} />
                      <span>Tanya Produk Ini</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Note on Transparency & Custom Orders */}
        <div className="mt-14 bg-cream-50 p-6 sm:p-8 rounded-2xl border border-cream-200 max-w-4xl mx-auto text-center">
          <h4 className="font-serif text-lg font-bold text-chocolate-900 mb-2">
            Mencari Sajian Khusus untuk Acara atau Pesanan Kotak?
          </h4>
          <p className="text-sm text-chocolate-700 max-w-2xl mx-auto mb-5">
            Kami melayani pesanan snack box, arisan, syukuran, dan paket oleh-oleh khas Kabanjahe dengan isian yang dapat disesuaikan. Hubungi tim kami untuk konsultasi produk hari ini.
          </p>
          <button
            onClick={() => onSelectProductForInquiry({ name: "Paket Acara & Snack Box Custom" })}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-chocolate-900 hover:bg-caramel-600 text-cream-50 text-sm font-semibold transition-colors"
          >
            <span>Konsultasikan Pesanan Acara</span>
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
