import { siteConfig } from '../data/config';
import { ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function InstagramFeed() {
  return (
    <section id="galeri" className="py-20 bg-cream-50 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cream-100 border border-cream-200 text-chocolate-800 text-xs font-semibold uppercase tracking-wider mb-3">
              <InstagramIcon size={13} className="text-caramel-600" />
              <span>Galeri Toko & Panggangan Harian</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold">
              Ikuti Kami di Instagram
            </h2>
            <p className="text-chocolate-700 text-base mt-2 font-sans max-w-xl">
              Lihat suasana pemanggangan harian, varian roti yang baru keluar dari oven, dan pemesanan terbaru langsung di{' '}
              <a 
                href={siteConfig.brand.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-caramel-700 font-semibold underline underline-offset-4 hover:text-caramel-600"
              >
                {siteConfig.brand.instagramHandle}
              </a>
            </p>
          </div>

          <a
            href={siteConfig.brand.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cream-100 hover:bg-cream-200 border border-cream-300 text-chocolate-900 text-sm font-semibold transition-colors self-start md:self-auto"
          >
            <InstagramIcon size={18} className="text-caramel-600" />
            <span>Kunjungi {siteConfig.brand.instagramHandle}</span>
            <ExternalLink size={14} className="text-chocolate-500" />
          </a>
        </div>

        {/* 6-Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {siteConfig.instagramGallery.map((post) => (
            <a
              key={post.id}
              href={siteConfig.brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-cream-200 border border-cream-200 shadow-sm block"
            >
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-chocolate-950/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-cream-50">
                <InstagramIcon size={20} className="text-caramel-400 mb-1.5" />
                <p className="text-xs font-serif font-bold line-clamp-1">{post.title}</p>
                <p className="text-[10px] text-cream-200/90 line-clamp-2 mt-0.5">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-8 text-center">
          <p className="text-xs text-chocolate-600 font-sans">
            Tag <span className="font-semibold text-chocolate-900">#GeloraBakery</span> dan <span className="font-semibold text-chocolate-900">{siteConfig.brand.instagramHandle}</span> saat menikmati roti hangat kami di Kabanjahe!
          </p>
        </div>

      </div>
    </section>
  );
}
