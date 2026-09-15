import React from 'react';
import { siteConfig } from '../data/config';
import { ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramFeed() {
  return (
    <section id="galeri" className="py-20 bg-cream-50 border-b border-cream-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-caramel-700 mb-2">
              Dokumentasi Harian
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mb-3">
              Ikuti Kami di Instagram
            </h2>
            <p className="text-chocolate-700 text-base font-sans leading-relaxed">
              Lihat panggangan pagi, varian roti yang baru keluar dari oven, dan pemesanan terbaru langsung di{' '}
              <a 
                href={siteConfig.brand.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-caramel-800 font-semibold underline underline-offset-4 hover:text-caramel-900"
              >
                {siteConfig.brand.instagramHandle}
              </a>.
            </p>
          </div>

          <a
            href={siteConfig.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-chocolate-950 text-xs font-semibold transition-colors self-start md:self-auto shadow-sm"
          >
            <InstagramIcon size={16} className="text-caramel-700" />
            <span>Kunjungi {siteConfig.brand.instagramHandle}</span>
            <ExternalLink size={13} className="text-chocolate-600" />
          </a>
        </div>

        {/* 6-Photo Grid: clean still image, subtle overlay without scaling */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {siteConfig.instagramGallery.map((post) => (
            <a
              key={post.id}
              href={siteConfig.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden bg-cream-200 border border-cream-300 block"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay on hover: subtle opacity tint */}
              <div className="absolute inset-0 bg-chocolate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3.5 text-white">
                <InstagramIcon size={16} className="text-caramel-400 mb-1" />
                <p className="text-xs font-serif font-bold line-clamp-1">{post.title}</p>
                <p className="text-xs text-cream-200 line-clamp-2 mt-0.5 leading-snug">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Callout: constrained to max-w-md */}
        <div className="mt-8 text-center max-w-md mx-auto">
          <p className="text-xs text-chocolate-700 font-sans leading-relaxed">
            Tag <span className="font-semibold text-chocolate-950">#GeloraBakery</span> dan <span className="font-semibold text-chocolate-950">{siteConfig.brand.instagramHandle}</span> saat menikmati roti hangat kami di Kabanjahe!
          </p>
        </div>

      </div>
    </section>
  );
}
