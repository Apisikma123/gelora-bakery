import { siteConfig } from '../data/config';
import { Phone, MapPin, Clock, Heart } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-chocolate-950 text-cream-200 border-t border-chocolate-900 pt-16 pb-12 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-chocolate-900/80">
          
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.jpg"
                alt="Gelora Bakery Logo"
                className="w-12 h-12 rounded-full object-cover border border-caramel-500/40"
              />
              <div>
                <span className="font-display text-2xl font-bold text-cream-50 block leading-tight">
                  {siteConfig.brand.name}
                </span>
                <span className="text-xs text-caramel-400 font-medium tracking-wide">
                  {siteConfig.brand.motto}
                </span>
              </div>
            </div>

            <p className="text-sm text-chocolate-300 leading-relaxed max-w-sm mb-6">
              Menghadirkan kehangatan roti lembut, snack gurih, dan oleh-oleh homemade khas Kabanjahe sejak 1975. Dibuat fresh setiap hari dengan bahan pilihan dan cinta rasa tradisi.
            </p>

            <div className="flex items-center gap-3 text-cream-50">
              <a
                href={siteConfig.brand.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-chocolate-900 hover:bg-caramel-600 flex items-center justify-center transition-colors border border-chocolate-800"
                aria-label="Instagram Gelora Bakery"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href={`tel:${siteConfig.brand.phoneRaw}`}
                className="w-9 h-9 rounded-full bg-chocolate-900 hover:bg-caramel-600 flex items-center justify-center transition-colors border border-chocolate-800"
                aria-label="Telepon Toko Gelora Bakery"
              >
                <Phone size={17} />
              </a>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-cream-50 mb-4 tracking-wide">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm text-chocolate-300">
              {siteConfig.navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-caramel-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-cream-50 mb-4 tracking-wide">
              Kategori Produk
            </h4>
            <ul className="space-y-2.5 text-sm text-chocolate-300">
              {siteConfig.productCategories.filter(c => c !== "Semua").map((cat) => (
                <li key={cat}>
                  <a
                    href="#produk"
                    className="hover:text-caramel-400 transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Store Hours (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-cream-50 mb-4 tracking-wide">
              Toko Kabanjahe
            </h4>
            <ul className="space-y-3 text-sm text-chocolate-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-caramel-500 flex-shrink-0 mt-1" />
                <span>
                  {siteConfig.brand.fullAddress}
                  <br />
                  <span className="text-xs text-chocolate-400">({siteConfig.brand.landmark})</span>
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="text-caramel-500 flex-shrink-0" />
                <span>{siteConfig.brand.openingHours}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-caramel-500 flex-shrink-0" />
                <a 
                  href={`tel:${siteConfig.brand.phoneRaw}`} 
                  className="hover:text-cream-50 font-medium"
                >
                  {siteConfig.brand.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <InstagramIcon size={16} className="text-caramel-500 flex-shrink-0" />
                <a
                  href={siteConfig.brand.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream-50 font-medium"
                >
                  {siteConfig.brand.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-chocolate-400 gap-4 text-center sm:text-left">
          <p>
            © {currentYear} {siteConfig.brand.name} Kabanjahe. Hak Cipta Dilindungi.
          </p>
          <p className="flex items-center gap-1">
            <span>Dibuat dengan dedikasi untuk masyarakat Kabanjahe & Tanah Karo</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
