import { siteConfig, getContactAction } from '../data/config';
import { Phone, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function FinalCTA({ onOpenOrderModal }) {
  const contact = getContactAction();

  return (
    <section className="py-20 bg-cream-50 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-chocolate-950 text-cream-50 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl border border-chocolate-800">
          
          {/* Subtle background ornament */}
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-caramel-600/10 blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            
            {/* Stamp Logo */}
            <div className="inline-block mb-6">
              <img
                src="/logo.jpg"
                alt="Gelora Bakery"
                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full object-cover border-2 border-caramel-500 shadow-md"
              />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-chocolate-900 border border-chocolate-800 text-caramel-400 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles size={13} />
              <span>Dibuat Fresh Setiap Pagi</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-cream-50 leading-tight">
              Tanya Produk Hari Ini
            </h2>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-cream-200/90 leading-relaxed mb-10 font-sans max-w-2xl mx-auto">
              Ingin memesan roti untuk sarapan keluarga, paket snack box acara di Kabanjahe, atau oleh-oleh khas perjalanan Tanah Karo? Silakan hubungi kami untuk mengetahui ketersediaan batch roti hari ini.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-caramel-600 hover:bg-caramel-500 text-cream-50 font-semibold text-base transition-all duration-200 shadow-lg active:scale-98 text-center"
              >
                {contact.type === 'whatsapp' ? (
                  <>
                    <MessageSquare size={18} />
                    <span>Chat WhatsApp Kami</span>
                  </>
                ) : (
                  <>
                    <InstagramIcon size={18} />
                    <span>Tanya via Instagram ({siteConfig.brand.instagramHandle})</span>
                  </>
                )}
                <ArrowRight size={16} />
              </button>

              <a
                href={`tel:${siteConfig.brand.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-chocolate-900 hover:bg-chocolate-800 border border-chocolate-700 text-cream-100 font-semibold text-base transition-colors text-center"
              >
                <Phone size={18} className="text-caramel-400" />
                <span>Telepon: {siteConfig.brand.phone}</span>
              </a>
            </div>

            {/* Transparent Note */}
            <p className="mt-8 text-xs text-chocolate-400">
              {siteConfig.brand.fullAddress} • {siteConfig.brand.landmark}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
