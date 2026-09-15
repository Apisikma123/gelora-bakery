import React from 'react';
import { siteConfig } from '../data/config';
import { MapPin, Clock, Phone, Navigation, Compass, Landmark, Building2, Car } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 border-b border-cream-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-xl mx-auto text-center mb-16">
          <p className="text-sm font-semibold text-caramel-700 mb-2">
            Lokasi & Jam Buka
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mb-4">
            Singgah di Gelora Bakery
          </h2>
          <p className="text-chocolate-700 text-base font-sans leading-relaxed">
            Mudah ditemukan di jantung kota Kabanjahe, dekat dengan Tugu Bambu Runcing dan Apotik Bethesda.
          </p>
        </div>

        {/* 2-Column Location Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* Information Card (Left Column) */}
          <div className="lg:col-span-5 bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-300 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-chocolate-950 mb-6">
                Informasi Toko
              </h3>

              <div className="divide-y divide-cream-200 text-chocolate-900">
                {/* Alamat */}
                <div className="py-4 first:pt-0 flex items-start gap-3.5">
                  <MapPin size={20} className="text-caramel-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-caramel-800 uppercase tracking-wider mb-1">
                      Alamat Lengkap
                    </h4>
                    <p className="text-base font-semibold text-chocolate-950">
                      {siteConfig.brand.fullAddress}
                    </p>
                    <p className="text-xs text-chocolate-700 mt-0.5 font-medium">
                      Patokan: {siteConfig.brand.landmark}
                    </p>
                    <p className="text-xs text-chocolate-600">
                      {siteConfig.brand.area}
                    </p>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="py-4 flex items-start gap-3.5">
                  <Clock size={20} className="text-caramel-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-caramel-800 uppercase tracking-wider mb-1">
                      Jam Buka
                    </h4>
                    <p className="text-base font-semibold text-chocolate-950">
                      {siteConfig.brand.openingHours}
                    </p>
                    <p className="text-xs text-chocolate-600 mt-0.5">
                      Buka setiap hari melayani sarapan & oleh-oleh
                    </p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="py-4 flex items-start gap-3.5">
                  <Phone size={20} className="text-caramel-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-caramel-800 uppercase tracking-wider mb-1">
                      Telepon Toko
                    </h4>
                    <a
                      href={`tel:${siteConfig.brand.phoneRaw}`}
                      className="text-base font-bold text-chocolate-950 hover:text-caramel-700 transition-colors block"
                    >
                      {siteConfig.brand.phone}
                    </a>
                    <p className="text-xs text-chocolate-600 mt-0.5">
                      Hubungi langsung untuk konfirmasi pesanan harian
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="py-4 last:pb-0 flex items-start gap-3.5">
                  <InstagramIcon size={20} className="text-caramel-700 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-caramel-800 uppercase tracking-wider mb-1">
                      Instagram Resmi
                    </h4>
                    <div className="flex items-center gap-2">
                      <a
                        href={siteConfig.brand.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-chocolate-950 hover:text-caramel-700 transition-colors"
                      >
                        {siteConfig.brand.instagramHandle}
                      </a>
                      <a
                        href={siteConfig.brand.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold bg-caramel-100 text-caramel-800 px-2.5 py-0.5 rounded-md hover:bg-caramel-200 transition-colors"
                      >
                        Buka DM
                      </a>
                    </div>
                    <p className="text-xs text-chocolate-600 mt-0.5">
                      Direct Message langsung & update produk harian
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="mt-8 pt-6 border-t border-cream-200 flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.brand.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-chocolate-900 hover:bg-caramel-700 text-cream-50 text-xs font-semibold transition-colors shadow-sm text-center"
              >
                <Navigation size={15} />
                <span>Petunjuk Arah Google Maps</span>
              </a>

              <a
                href={`tel:${siteConfig.brand.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-chocolate-950 text-xs font-semibold transition-colors text-center"
              >
                <Phone size={15} className="text-caramel-700" />
                <span>Telepon</span>
              </a>
            </div>

          </div>

          {/* Map & Landmark Card (Right Column) - Clean, single container */}
          <div className="lg:col-span-7 bg-cream-50 rounded-2xl overflow-hidden border border-cream-300 shadow-sm flex flex-col">
            
            {/* Landmark Header */}
            <div className="bg-chocolate-950 text-cream-50 p-5 sm:p-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Compass size={20} className="text-caramel-400" />
                <div>
                  <h3 className="font-serif text-lg font-bold text-white">Panduan Patokan Menuju Lokasi</h3>
                  <p className="text-xs text-cream-300">Pusat Kota Kabanjahe</p>
                </div>
              </div>
            </div>

            {/* Landmark Guidance Points: clean dividers, no nested cards */}
            <div className="p-5 sm:p-6 border-b border-cream-300 grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs text-chocolate-800">
              <div>
                <div className="flex items-center gap-1.5 mb-1 text-chocolate-950 font-bold">
                  <Landmark size={14} className="text-caramel-700 flex-shrink-0" />
                  <span>Tugu Bambu Runcing</span>
                </div>
                <p className="text-chocolate-700 leading-relaxed font-sans">
                  Sangat dekat di ruas Jl. Kpt. Bangsi Sembiring
                </p>
                <span className="text-xs text-caramel-800 font-semibold block mt-1">Patokan Utama</span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1 text-chocolate-950 font-bold">
                  <Building2 size={14} className="text-caramel-700 flex-shrink-0" />
                  <span>Apotik Bethesda</span>
                </div>
                <p className="text-chocolate-700 leading-relaxed font-sans">
                  Tepat bersebelahan di sekitar area apotik
                </p>
                <span className="text-xs text-caramel-800 font-semibold block mt-1">Area Toko</span>
              </div>

              <div>
                <div className="flex items-center gap-1.5 mb-1 text-chocolate-950 font-bold">
                  <Car size={14} className="text-caramel-700 flex-shrink-0" />
                  <span>Akses & Parkir</span>
                </div>
                <p className="text-chocolate-700 leading-relaxed font-sans">
                  Jalan utama mudah dijangkau kendaraan
                </p>
                <span className="text-xs text-caramel-800 font-semibold block mt-1">Pusat Kabanjahe</span>
              </div>
            </div>

            {/* Interactive Clean Map Embed */}
            <div className="relative flex-1 min-h-[340px] bg-cream-200">
              <iframe
                title="Peta Lokasi Gelora Bakery Kabanjahe"
                src="https://maps.google.com/maps?q=Jl.+Kpt.+Bangsi+Sembiring+No.24,+Kabanjahe,+Sumatera+Utara&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full min-h-[340px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
