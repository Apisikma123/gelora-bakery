import { siteConfig } from '../data/config';
import { MapPin, Clock, Phone, Navigation, Compass, Landmark, Building2, Car } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function LocationSection() {
  return (
    <section id="lokasi" className="py-20 bg-cream-100/60 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-caramel-600 bg-cream-200/80 px-3.5 py-1.5 rounded-full">
            Lokasi & Jam Operasional
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-950 font-bold mt-4 mb-4">
            Singgah di Gelora Bakery
          </h2>
          <p className="text-chocolate-700 text-base sm:text-lg font-sans">
            Mudah ditemukan di jantung kota Kabanjahe, dekat dengan Tugu Bambu Runcing dan Apotik Bethesda.
          </p>
        </div>

        {/* 2-Column Location Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Information Card (Left Column) */}
          <div className="lg:col-span-5 bg-cream-50 rounded-3xl p-8 sm:p-10 border border-cream-200 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl font-bold text-chocolate-900 mb-6">
                Informasi Toko
              </h3>

              <div className="space-y-6">
                {/* Alamat */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0 text-caramel-600 mt-1">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-caramel-700 uppercase tracking-wider mb-1">
                      Alamat Lengkap
                    </h4>
                    <p className="text-base font-semibold text-chocolate-900">
                      {siteConfig.brand.fullAddress}
                    </p>
                    <p className="text-xs text-chocolate-600 mt-1 font-medium bg-cream-200/60 px-2.5 py-1 rounded-md inline-block">
                      Patokan: {siteConfig.brand.landmark}
                    </p>
                    <p className="text-xs text-chocolate-500 mt-1">
                      {siteConfig.brand.area}
                    </p>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0 text-caramel-600 mt-1">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-caramel-700 uppercase tracking-wider mb-1">
                      Jam Buka
                    </h4>
                    <p className="text-base font-semibold text-chocolate-900">
                      {siteConfig.brand.openingHours}
                    </p>
                    <p className="text-xs text-chocolate-600 mt-0.5">
                      Buka setiap hari melayani sarapan & oleh-oleh
                    </p>
                  </div>
                </div>

                {/* Telepon */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0 text-caramel-600 mt-1">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-caramel-700 uppercase tracking-wider mb-1">
                      Telepon Toko
                    </h4>
                    <a
                      href={`tel:${siteConfig.brand.phoneRaw}`}
                      className="text-base font-bold text-chocolate-900 hover:text-caramel-600 transition-colors block"
                    >
                      {siteConfig.brand.phone}
                    </a>
                    <p className="text-xs text-chocolate-600 mt-0.5">
                      Hubungi langsung untuk konfirmasi pesanan harian
                    </p>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cream-200 flex items-center justify-center flex-shrink-0 text-caramel-600 mt-1">
                    <InstagramIcon size={22} />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-caramel-700 uppercase tracking-wider mb-1">
                      Instagram Resmi
                    </h4>
                    <div className="flex items-center gap-2">
                      <a
                        href={siteConfig.brand.instagramDmUrl || `https://ig.me/m/${siteConfig.brand.instagramHandle.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-chocolate-900 hover:text-caramel-600 transition-colors"
                      >
                        {siteConfig.brand.instagramHandle}
                      </a>
                      <a
                        href={siteConfig.brand.instagramDmUrl || `https://ig.me/m/${siteConfig.brand.instagramHandle.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-semibold bg-caramel-100 text-caramel-700 px-2 py-0.5 rounded-md hover:bg-caramel-200 transition-colors"
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
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-chocolate-900 hover:bg-caramel-600 text-cream-50 text-sm font-semibold transition-colors shadow-sm text-center"
              >
                <Navigation size={16} />
                <span>Petunjuk Arah Google Maps</span>
              </a>

              <a
                href={`tel:${siteConfig.brand.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cream-100 hover:bg-cream-200 border border-cream-300 text-chocolate-900 text-sm font-semibold transition-colors text-center"
              >
                <Phone size={16} className="text-caramel-600" />
                <span>Telepon</span>
              </a>
            </div>

          </div>

          {/* Map & Landmark Card (Right Column) */}
          <div className="lg:col-span-7 bg-cream-50 rounded-3xl overflow-hidden border border-cream-200 shadow-sm flex flex-col">
            
            {/* Visual Landmark Banner */}
            <div className="bg-chocolate-900 text-cream-50 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-caramel-600/30 flex items-center justify-center text-caramel-400">
                  <Compass size={22} />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold">Panduan Patokan Menuju Lokasi</h4>
                  <p className="text-xs text-cream-200">Kabanjahe, Pusat Kota</p>
                </div>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-caramel-600 text-cream-50">
                Pusat Kabanjahe
              </span>
            </div>

            {/* Landmark Guidance Points */}
            <div className="p-6 bg-cream-100/70 border-b border-cream-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-chocolate-800">
              <div className="p-3.5 bg-cream-50 rounded-xl border border-cream-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-chocolate-900 font-bold">
                    <Landmark size={15} className="text-caramel-600 flex-shrink-0" />
                    <span>Tugu Bambu Runcing</span>
                  </div>
                  <p className="text-chocolate-600 leading-relaxed">Berada sangat dekat di ruas Jl. Kpt. Bangsi Sembiring</p>
                </div>
                <span className="text-[10px] text-caramel-700 font-semibold uppercase tracking-wider mt-2.5">Patokan Utama</span>
              </div>
              <div className="p-3.5 bg-cream-50 rounded-xl border border-cream-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-chocolate-900 font-bold">
                    <Building2 size={15} className="text-caramel-600 flex-shrink-0" />
                    <span>Apotik Bethesda</span>
                  </div>
                  <p className="text-chocolate-600 leading-relaxed">Posisi toko tepat bersebelahan di sekitar area apotik</p>
                </div>
                <span className="text-[10px] text-caramel-700 font-semibold uppercase tracking-wider mt-2.5">Area Toko</span>
              </div>
              <div className="p-3.5 bg-cream-50 rounded-xl border border-cream-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5 text-chocolate-900 font-bold">
                    <Car size={15} className="text-caramel-600 flex-shrink-0" />
                    <span>Akses & Parkir</span>
                  </div>
                  <p className="text-chocolate-600 leading-relaxed">Akses jalan utama yang mudah dijangkau kendaraan</p>
                </div>
                <span className="text-[10px] text-caramel-700 font-semibold uppercase tracking-wider mt-2.5">Pusat Kabanjahe</span>
              </div>
            </div>

            {/* Interactive Clean Map Embed (Clean, no overlapping overlays) */}
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
