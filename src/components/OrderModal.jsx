import React, { useState } from 'react';
import { siteConfig, getContactAction } from '../data/config';
import { X, Phone, MessageSquare, Copy, Check, ExternalLink, MapPin } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function OrderModal({ isOpen, onClose, selectedProduct }) {
  if (!isOpen) return null;

  const [copied, setCopied] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState(
    selectedProduct ? `Tanya produk: ${selectedProduct.name}` : "Tanya ketersediaan roti fresh hari ini"
  );

  const contact = getContactAction(selectedTopic);

  const handleCopyText = () => {
    const textToCopy = `Halo Gelora Bakery Kabanjahe, saya ingin ${selectedTopic.toLowerCase()}. Apakah masih tersedia?`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-chocolate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-cream-50 w-full max-w-lg rounded-3xl shadow-2xl border border-cream-200 overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-chocolate-950 text-cream-50 p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Gelora Bakery"
              className="w-10 h-10 rounded-full object-cover border border-caramel-500"
            />
            <div>
              <h3 className="font-serif text-lg font-bold">Pesan / Tanya Produk</h3>
              <p className="text-xs text-caramel-400">Gelora Bakery Kabanjahe</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-chocolate-900 hover:bg-chocolate-800 text-cream-200 flex items-center justify-center transition-colors"
            aria-label="Tutup modal"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Selected Product Context if any */}
          {selectedProduct && (
            <div className="bg-cream-100 p-3.5 rounded-xl border border-cream-200 flex items-center gap-3">
              {selectedProduct.image && (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-12 h-12 rounded-lg object-cover"
                />
              )}
              <div className="text-xs">
                <span className="text-caramel-700 font-semibold uppercase tracking-wider block text-[10px]">
                  Produk Terpilih
                </span>
                <p className="font-serif text-sm font-bold text-chocolate-900">
                  {selectedProduct.name}
                </p>
              </div>
            </div>
          )}

          {/* Quick Topic Selector */}
          <div>
            <label className="block text-xs font-semibold text-chocolate-800 uppercase tracking-wider mb-2">
              Keperluan Anda:
            </label>
            <div className="grid grid-cols-1 gap-2">
              {[
                "Tanya ketersediaan roti fresh hari ini",
                "Pesan snack box untuk acara / arisan",
                "Pesan paket oleh-oleh khas Kabanjahe",
                "Tanya varian butter cake tradisi",
              ].map((topic) => (
                <button
                  key={topic}
                  type="button"
                  onClick={() => setSelectedTopic(topic)}
                  className={`text-left text-xs px-3.5 py-2.5 rounded-xl border transition-all ${
                    selectedTopic === topic
                      ? 'bg-chocolate-900 text-cream-50 border-chocolate-900 font-medium'
                      : 'bg-cream-100/60 text-chocolate-800 border-cream-200 hover:bg-cream-100'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>

          {/* Primary Action Button (Dynamic WhatsApp or Instagram) */}
          <div className="space-y-3">
            <a
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-caramel-600 hover:bg-caramel-500 text-cream-50 font-semibold text-sm transition-all shadow-md text-center"
            >
              {contact.type === 'whatsapp' ? (
                <>
                  <MessageSquare size={18} />
                  <span>Kirim Pesan via WhatsApp</span>
                </>
              ) : (
                <>
                  <InstagramIcon size={18} />
                  <span>Kirim DM Instagram ({siteConfig.brand.instagramHandle})</span>
                </>
              )}
              <ExternalLink size={15} />
            </a>

            {/* Direct Phone Call Alternative */}
            <a
              href={`tel:${siteConfig.brand.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-chocolate-900 font-semibold text-sm transition-colors text-center"
            >
              <Phone size={16} className="text-caramel-600" />
              <span>Telepon Toko: {siteConfig.brand.phone}</span>
            </a>
          </div>

          {/* Copy Message Helper */}
          <div className="p-3 bg-cream-100 rounded-xl border border-cream-200 flex items-center justify-between text-xs text-chocolate-700">
            <span className="truncate pr-2 italic">
              "Halo Gelora Bakery, saya ingin {selectedTopic.toLowerCase()}..."
            </span>
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1 text-xs font-semibold text-caramel-700 hover:text-caramel-600 flex-shrink-0"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              <span>{copied ? 'Tersalin' : 'Salin Teks'}</span>
            </button>
          </div>

          {/* Location Reminder */}
          <div className="text-[11px] text-chocolate-600 flex items-center gap-1.5 pt-2 border-t border-cream-200">
            <MapPin size={13} className="text-caramel-600 flex-shrink-0" />
            <span>{siteConfig.brand.fullAddress} ({siteConfig.brand.landmark})</span>
          </div>

        </div>
      </div>
    </div>
  );
}
