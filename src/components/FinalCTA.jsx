import React from 'react';
import { siteConfig, getContactAction } from '../data/config';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function FinalCTA({ onOpenOrderModal }) {
  const contact = getContactAction();

  return (
    <section className="py-20 bg-cream-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Clean surface without hairline border + 50px blur shadow */}
        <div className="bg-chocolate-950 text-cream-50 rounded-2xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          
          <div className="relative z-10 max-w-xl mx-auto text-center">
            
            {/* Stamp Logo */}
            <div className="inline-block mb-5">
              <img
                src="/logo.jpg"
                alt="Gelora Bakery"
                className="w-20 h-20 mx-auto rounded-full object-cover border border-caramel-500 shadow-sm"
              />
            </div>

            {/* Headline */}
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white leading-tight">
              Tanya Produk Hari Ini
            </h2>

            {/* Subtext with measure <75ch */}
            <p className="text-base sm:text-lg text-cream-200 leading-relaxed mb-8 font-sans">
              Ingin memesan roti untuk sarapan keluarga, paket snack box acara di Kabanjahe, atau oleh-oleh perjalanan? Silakan hubungi kami langsung.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <button
                onClick={onOpenOrderModal}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-caramel-700 hover:bg-caramel-600 text-white font-semibold text-sm transition-colors text-center"
              >
                {contact.type === 'whatsapp' ? (
                  <>
                    <MessageSquare size={16} />
                    <span>Chat WhatsApp Kami</span>
                  </>
                ) : (
                  <>
                    <InstagramIcon size={16} />
                    <span>Tanya via Instagram ({siteConfig.brand.instagramHandle})</span>
                  </>
                )}
                <ArrowRight size={15} />
              </button>

              <a
                href={`tel:${siteConfig.brand.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-chocolate-900 hover:bg-chocolate-800 border border-chocolate-800 text-cream-100 font-semibold text-sm transition-colors text-center"
              >
                <Phone size={16} className="text-caramel-400" />
                <span>Telepon: {siteConfig.brand.phone}</span>
              </a>
            </div>

            {/* Location Note with measure <75ch */}
            <p className="mt-8 text-xs text-chocolate-400 max-w-sm mx-auto leading-normal">
              {siteConfig.brand.fullAddress}
              <br />
              {siteConfig.brand.landmark}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
