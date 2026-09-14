import React, { useState, useEffect } from 'react';
import { siteConfig, getContactAction } from '../data/config';
import { X, Phone, MessageSquare, Copy, Check, ExternalLink, MapPin, Sparkles, Send } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function OrderModal({ isOpen, onClose, selectedProduct }) {
  if (!isOpen) return null;

  // Template pesan lengkap & profesional
  const getInitialMessage = () => {
    if (selectedProduct) {
      return `Halo Gelora Bakery Kabanjahe! Saya ingin memesan ${selectedProduct.name}${selectedProduct.category ? ` (${selectedProduct.category})` : ''}. Apakah stok fresh hari ini masih tersedia di toko Jl. Kpt. Bangsi Sembiring No.24? Boleh info ketersediaan dan cara pemesanannya ya. Terima kasih!`;
    }
    return `Halo Gelora Bakery Kabanjahe! Saya ingin menanyakan varian roti fresh dan batch panggangan yang masih tersedia untuk hari ini di toko Jl. Kpt. Bangsi Sembiring No.24. Apakah masih ada stok untuk dibeli hari ini? Terima kasih!`;
  };

  const [messageText, setMessageText] = useState(getInitialMessage());
  const [copied, setCopied] = useState(false);
  const [activeTemplateKey, setActiveTemplateKey] = useState(selectedProduct ? 'custom' : 'fresh');

  useEffect(() => {
    setMessageText(getInitialMessage());
    setActiveTemplateKey(selectedProduct ? 'custom' : 'fresh');
    setCopied(false);
  }, [selectedProduct]);

  const contact = getContactAction(messageText);

  const templates = [
    {
      key: 'fresh',
      label: 'Roti Fresh Hari Ini',
      text: 'Halo Gelora Bakery Kabanjahe! Saya ingin menanyakan varian roti fresh dan batch panggangan yang masih tersedia untuk hari ini di toko Jl. Kpt. Bangsi Sembiring No.24. Apakah masih ada stok untuk dibeli hari ini? Terima kasih!',
    },
    {
      key: 'snack-box',
      label: 'Snack Box Acara / Arisan',
      text: 'Halo Gelora Bakery Kabanjahe! Saya ingin memesan paket snack box / aneka kue untuk acara keluarga/kantor di Kabanjahe. Boleh minta info rekomendasi menu isian, minimal pemesanan, dan estimasi waktu persiapannya? Terima kasih!',
    },
    {
      key: 'oleh-oleh',
      label: 'Paket Oleh-Oleh Kabanjahe',
      text: 'Halo Gelora Bakery Kabanjahe! Saya ingin memesan paket kotak oleh-oleh khas Kabanjahe (bolu gulung / butter cake / roti manis) untuk buah tangan perjalanan. Apakah bisa disiapkan dalam kotak rapi dan aman untuk dibawa perjalanan? Terima kasih!',
    },
    {
      key: 'butter-cake',
      label: 'Butter Cake Tradisi 1975',
      text: 'Halo Gelora Bakery Kabanjahe! Saya tertarik memesan Classic Butter Cake Tradisi resep asli 1975. Apakah hari ini tersedia loyang fresh atau bisa dipesan untuk diambil kapan? Terima kasih!',
    },
  ];

  const handleSelectTemplate = (tpl) => {
    setActiveTemplateKey(tpl.key);
    setMessageText(tpl.text);
    setCopied(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendToDm = () => {
    // 1. Otomatis copy isi pesan ke clipboard
    navigator.clipboard.writeText(messageText);
    setCopied(true);
    
    // 2. Buka Direct Message Instagram secara otomatis
    window.open(contact.url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-chocolate-950/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-cream-50 w-full max-w-lg rounded-3xl shadow-2xl border border-cream-200 overflow-hidden relative max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-chocolate-950 text-cream-50 p-5 sm:p-6 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Gelora Bakery"
              className="w-10 h-10 rounded-full object-cover border border-caramel-500"
            />
            <div>
              <h3 className="font-serif text-lg font-bold">Konsultasi & Pesan Cepat</h3>
              <p className="text-xs text-caramel-400">Direct Chat {siteConfig.brand.instagramHandle}</p>
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

        {/* Modal Body (Scrollable) */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto">
          
          {/* Selected Product Banner if clicked from product card */}
          {selectedProduct && (
            <div className="bg-cream-100 p-3 rounded-2xl border border-cream-200 flex items-center gap-3">
              {selectedProduct.image && (
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-12 h-12 rounded-xl object-cover border border-cream-300 flex-shrink-0"
                />
              )}
              <div className="text-xs">
                <span className="text-caramel-700 font-semibold uppercase tracking-wider block text-[10px]">
                  Produk Terpilih
                </span>
                <p className="font-serif text-sm font-bold text-chocolate-900">
                  {selectedProduct.name}
                </p>
                <p className="text-chocolate-600 text-[11px]">{selectedProduct.category}</p>
              </div>
            </div>
          )}

          {/* Preset Template Selector */}
          <div>
            <label className="block text-xs font-bold text-chocolate-900 uppercase tracking-wider mb-2">
              Pilih Topik Pertanyaan:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {templates.map((tpl) => (
                <button
                  key={tpl.key}
                  type="button"
                  onClick={() => handleSelectTemplate(tpl)}
                  className={`text-left text-xs px-3 py-2 rounded-xl border transition-all ${
                    activeTemplateKey === tpl.key
                      ? 'bg-chocolate-900 text-cream-50 border-chocolate-900 font-semibold shadow-sm'
                      : 'bg-cream-100/70 text-chocolate-800 border-cream-200 hover:bg-cream-200'
                  }`}
                >
                  {tpl.label}
                </button>
              ))}
            </div>
          </div>

          {/* Full Message Textarea (Editable & Viewable) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-chocolate-900 uppercase tracking-wider">
                Isi Pesan Lengkap Siap Kirim:
              </label>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1 text-xs text-caramel-700 font-semibold hover:text-caramel-800"
              >
                {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                <span>{copied ? 'Tersalin!' : 'Salin Pesan'}</span>
              </button>
            </div>
            
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              rows={4}
              className="w-full text-xs p-3 rounded-xl border border-cream-300 bg-white text-chocolate-900 focus:outline-none focus:ring-2 focus:ring-caramel-500/50 leading-relaxed font-sans resize-none"
              placeholder="Tulis pesan Anda di sini..."
            />
            
            {copied && (
              <p className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1 animate-fadeIn">
                <Check size={13} />
                <span>Teks pesan otomatis disalin ke clipboard! Siap di-paste di chat.</span>
              </p>
            )}
          </div>

          {/* Primary Action Button: Auto-Copy & Open Direct DM */}
          <div className="space-y-2.5 pt-1">
            <button
              onClick={handleSendToDm}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-caramel-600 hover:bg-caramel-500 text-cream-50 font-semibold text-sm transition-all shadow-md active:scale-[0.99] text-center"
            >
              {contact.type === 'whatsapp' ? (
                <>
                  <MessageSquare size={18} />
                  <span>Kirim Pesan WhatsApp Sekarang</span>
                </>
              ) : (
                <>
                  <InstagramIcon size={18} />
                  <span>Kirim DM Instagram (Auto-Copy & Buka Chat)</span>
                </>
              )}
              <Send size={15} className="ml-1" />
            </button>

            {/* Direct Phone Call Option */}
            <a
              href={`tel:${siteConfig.brand.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-chocolate-900 font-semibold text-xs transition-colors text-center"
            >
              <Phone size={15} className="text-caramel-600" />
              <span>Hubungi Telepon Toko: {siteConfig.brand.phone}</span>
            </a>
          </div>

          {/* Instructions note */}
          <div className="bg-cream-100/70 p-3 rounded-xl border border-cream-200 text-[11px] text-chocolate-600 leading-normal">
            <p className="font-semibold text-chocolate-900 mb-0.5">Cara Kerja Chat:</p>
            <p>Saat tombol diklik, pesan di atas otomatis disalin dan layar chat Instagram <span className="font-semibold text-chocolate-900">{siteConfig.brand.instagramHandle}</span> langsung terbuka. Cukup tekan <strong>Paste (Tempel)</strong> lalu kirim!</p>
          </div>

          {/* Store Location Footer Note */}
          <div className="text-[11px] text-chocolate-600 flex items-center gap-1.5 pt-2 border-t border-cream-200">
            <MapPin size={13} className="text-caramel-600 flex-shrink-0" />
            <span>{siteConfig.brand.fullAddress} ({siteConfig.brand.landmark})</span>
          </div>

        </div>
      </div>
    </div>
  );
}
