import React, { useState } from 'react';
import { siteConfig } from '../data/config';
import { MessageCircle, Check, ChevronRight } from 'lucide-react';

export default function FeaturedProducts({ onSelectProductForInquiry }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filteredProducts = activeCategory === "Semua"
    ? siteConfig.products
    : siteConfig.products.filter(item => item.category === activeCategory);

  return (
    <section id="produk" className="py-20 bg-cream-100/50 border-b border-cream-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-sm font-semibold text-caramel-700 mb-2 tracking-normal">
            Pilihan Rasa Istimewa
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mb-4">
            Produk Unggulan Gelora Bakery
          </h2>
          <p className="text-chocolate-700 text-base leading-relaxed font-sans">
            Mulai dari roti manis lembut, roti isi padat lezat, butter cake harum, hingga snack renyah dan oleh-oleh khas Kabanjahe.
          </p>
        </div>

        {/* Category Tabs: clean minimal pill buttons */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-10 gap-2 no-scrollbar">
          {siteConfig.productCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-chocolate-900 text-white shadow-sm'
                  : 'bg-cream-50 text-chocolate-800 hover:bg-cream-200 border border-cream-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: single level container, no card inside card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-cream-300 flex flex-col justify-between hover:border-caramel-500/70 transition-colors"
            >
              <div>
                {/* Image Container: clean still image, no cheesy scale animation */}
                <div className="relative aspect-[4/3] overflow-hidden bg-cream-200">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Category & Badge with verified AAA contrast */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded-md bg-chocolate-950 text-white text-xs font-semibold">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="px-2.5 py-1 rounded-md bg-caramel-800 text-white text-xs font-semibold">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-chocolate-950 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-chocolate-700 leading-relaxed mb-4 font-sans">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Card Footer: clean divider */}
              <div className="px-6 pb-6 pt-3 border-t border-cream-200">
                <div className="flex items-center gap-1.5 text-xs text-chocolate-800 mb-4 font-medium">
                  <Check size={14} className="text-caramel-700 flex-shrink-0" />
                  <span>{product.highlight}</span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-chocolate-600 font-medium">
                    Fresh di toko hari ini
                  </span>

                  <button
                    onClick={() => onSelectProductForInquiry(product)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-chocolate-900 hover:bg-caramel-700 text-cream-50 text-xs font-semibold transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>Tanya Produk Ini</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Custom Orders: clean editorial callout without nested card boxes */}
        <div className="mt-16 pt-10 border-t border-cream-300 text-center max-w-xl mx-auto">
          <h3 className="font-serif text-xl font-bold text-chocolate-950 mb-2">
            Mencari Sajian Khusus untuk Acara atau Pesanan Kotak?
          </h3>
          <p className="text-sm text-chocolate-700 leading-relaxed mb-5 font-sans">
            Kami melayani pesanan snack box, arisan, syukuran, dan paket oleh-oleh khas Kabanjahe dengan isian yang dapat disesuaikan.
          </p>
          <button
            onClick={() => onSelectProductForInquiry({ name: "Paket Acara & Snack Box Custom" })}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-chocolate-900 hover:bg-caramel-700 text-cream-50 text-xs font-semibold transition-colors shadow-sm"
          >
            <span>Konsultasikan Pesanan Acara</span>
            <ChevronRight size={15} />
          </button>
        </div>

      </div>
    </section>
  );
}
