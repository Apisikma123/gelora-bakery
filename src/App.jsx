import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Advantages from './components/Advantages';
import About from './components/About';
import InstagramFeed from './components/InstagramFeed';
import LocationSection from './components/LocationSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import { getContactAction, siteConfig } from './data/config';
import { MessageSquare, Phone } from 'lucide-react';
import { InstagramIcon } from './components/Icons';

export default function App() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const contact = getContactAction();

  const handleOpenOrderModal = (product = null) => {
    setSelectedProduct(product);
    setOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setOrderModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-cream-50 text-chocolate-900 font-sans selection:bg-caramel-200 selection:text-chocolate-900">
      {/* 1. Navbar + CTA "Pesan Sekarang" */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal(null)} />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero onOpenOrderModal={() => handleOpenOrderModal(null)} />

        {/* 3. Produk Unggulan (Roti Manis, Roti Isi, Butter Cake, Snack, Oleh-Oleh) */}
        <FeaturedProducts onSelectProductForInquiry={handleOpenOrderModal} />

        {/* 4. Keunggulan (Roti lembut & nikmat, Homemade, Bakery lokal Kabanjahe) */}
        <Advantages />

        {/* 5. Tentang Gelora Bakery (Sejak 1975) */}
        <About />

        {/* 6. Instagram Gallery + Link @gelorabakery.id */}
        <InstagramFeed />

        {/* 7. Lokasi: Jl. Kpt. Bangsi Sembiring No.24, Kabanjahe */}
        <LocationSection />

        {/* 8. CTA Akhir "Tanya Produk Hari Ini" */}
        <FinalCTA onOpenOrderModal={() => handleOpenOrderModal(null)} />
      </main>

      {/* 9. Footer */}
      <Footer />

      {/* Interactive Order & Contact Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={handleCloseOrderModal}
        selectedProduct={selectedProduct}
      />

      {/* Sticky Mobile Quick Chat Button (Always accessible on smartphone) */}
      <aside aria-label="Aksi Cepat Kontak" className="fixed bottom-5 right-5 z-30 lg:hidden">
        <button
          onClick={() => handleOpenOrderModal(null)}
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-chocolate-950 text-cream-50 shadow-xl border border-caramel-500/40 active:scale-95 transition-transform"
          aria-label="Tanya Produk Hari Ini"
        >
          {contact.type === 'whatsapp' ? (
            <MessageSquare size={18} className="text-caramel-400" />
          ) : (
            <InstagramIcon size={18} className="text-caramel-400" />
          )}
          <span className="text-xs font-bold font-sans">
            Tanya Produk
          </span>
        </button>
      </aside>
    </div>
  );
}
