/**
 * GELORA BAKERY - BRAND & PRODUCT CONFIGURATION
 * 
 * Modul terpusat (Single Source of Truth).
 * Mudah dikustomisasi untuk bisnis lain hanya dengan mengganti variabel di bawah.
 */

export const siteConfig = {
  brand: {
    name: "Gelora Bakery",
    motto: "Enak, Lezat, Bergizi",
    tagline: "Roti Lembut, Rasa Rumahan yang Selalu Dirindukan.",
    subtext: "Menyajikan kehangatan aneka roti lembut, snack gurih, dan oleh-oleh homemade khas Kabanjahe. Dibuat fresh setiap hari dengan bahan pilihan dan dedikasi tradisi rasa keluarga.",
    locationCity: "Kabanjahe",
    fullAddress: "Jl. Kpt. Bangsi Sembiring No.24, Kabanjahe",
    landmark: "Dekat Tugu Bambu Runcing / Apotik Bethesda",
    area: "Kabupaten Karo, Sumatera Utara",
    phone: "(0628) 22974",
    phoneRaw: "062822974",
    // WhatsApp: Kosongkan string ("") jika belum ada.
    // Jika kosong, sistem otomatis mengalihkan CTA order/tanya ke Instagram DM.
    whatsapp: "", 
    instagramHandle: "@gelorabakery.id",
    instagramUrl: "https://www.instagram.com/gelorabakery.id/",
    instagramDmUrl: "https://ig.me/m/gelorabakery.id",
    openingHours: "Senin – Minggu: 07.00 – 21.00 WIB",
    mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.316886475753!2d98.4908!3d3.1783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwMTAnNDEuOSJOIDk4wrAyOScyNi45IkU!5e0!3m2!1sid!2sid!4v1680000000000!5m2!1sid!2sid",
    mapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Jl.+Kpt.+Bangsi+Sembiring+No.24+Kabanjahe",
  },

  navLinks: [
    { label: "Produk Unggulan", href: "#produk" },
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Tentang Kami", href: "#tentang" },
    { label: "Instagram", href: "#galeri" },
    { label: "Lokasi & Kontak", href: "#lokasi" },
  ],

  // 3 Pilar Keunggulan Utama Gelora Bakery
  advantages: [
    {
      id: "lembut-nikmat",
      title: "Roti Lembut & Nikmat",
      tagline: "Tekstur Empuk & Berserat Halus",
      description: "Dibuat dengan teknik fermentasi alami dan mentega pilihan yang menghasilkan tekstur lembut istimewa, aroma harum yang memikat, dan rasa nikmat di setiap gigitan.",
      badge: "Fresh Everyday",
    },
    {
      id: "homemade",
      title: "100% Homemade",
      tagline: "Sentuhan Resep Dapur Rumahan",
      description: "Diolah dalam batch harian terkontrol di dapur kami sendiri. Kami menjaga kemurnian resep klasik tanpa campuran pengawet berlebihan demi kehangatan rasa sejati.",
      badge: "Resep Tradisi",
    },
    {
      id: "lokal-kabanjahe",
      title: "Bakery Lokal Kabanjahe",
      tagline: "Tumbuh Bersama Warga Karo",
      description: "Hadir melayani masyarakat di pusat Kabanjahe. Menjadi pilihan sarapan keluarga, sajian acara, hingga buah tangan terpercaya bagi yang berkunjung ke Tanah Karo.",
      badge: "Lokal Kabanjahe",
    },
  ],

  // Kategori Produk
  productCategories: [
    "Semua",
    "Roti Manis",
    "Roti Isi",
    "Butter Cake",
    "Snack",
    "Oleh-Oleh",
  ],

  // Daftar Produk Unggulan (Jujur, deskriptif, tanpa harga palsu)
  products: [
    {
      id: "roti-sobek-butter",
      name: "Roti Sobek Butter Klasik",
      category: "Roti Manis",
      badge: "Favorit Keluarga",
      description: "Roti sobek empuk berserat lembut dengan pulasan mentega gurih manis yang meleleh di mulut. Cocok untuk teman sarapan dan kopi pagi.",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=800&q=80",
      highlight: "Tekstur super lembut tahan seharian",
    },
    {
      id: "roti-sisir-mentega",
      name: "Roti Sisir Mentega Gula",
      category: "Roti Manis",
      badge: "Resep Kuno",
      description: "Roti sisir legendaris dengan olesan butter harum dan taburan gula pasir halus khas cita rasa toko roti tempo dulu.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80",
      highlight: "Rasa manis gurih seimbang",
    },
    {
      id: "roti-kismis-spesial",
      name: "Roti Kismis Manis",
      category: "Roti Manis",
      badge: "Signature",
      description: "Roti manis lembut berpadu dengan limpahan kismis pilihan yang asam manis segar di setiap irisannya.",
      image: "/roti-kismis.jpg",
      highlight: "Kismis manis alami berkualitas",
    },
    {
      id: "roti-cokelat-lumer",
      name: "Roti Cokelat Lumer",
      category: "Roti Isi",
      badge: "Best Seller",
      description: "Roti isi selai cokelat pekat racikan dapur Gelora yang melimpah dan lumer saat dinikmati selagi hangat.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80",
      highlight: "Isian cokelat kaya & tidak enek",
    },
    {
      id: "roti-daging-gurih",
      name: "Roti Isi Daging Spesial",
      category: "Roti Isi",
      badge: "Gurih Mantap",
      description: "Roti hangat dengan isian tumisan daging cincang bumbu rempah gurih manis yang meresap sempurna.",
      image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=800&q=80",
      highlight: "Isian padat bumbu rempah aromatik",
    },
    {
      id: "roti-keju-parut",
      name: "Roti Keju Cheddar Lembut",
      category: "Roti Isi",
      badge: "Pilihan Favorit",
      description: "Perpaduan adonan roti lembut dengan isian krim keju dan taburan keju cheddar parut melimpah di atasnya.",
      image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=800&q=80",
      highlight: "Keju cheddar gurih berlimpah",
    },
    {
      id: "butter-cake-tradisi",
      name: "Classic Butter Cake Tradisi",
      category: "Butter Cake",
      badge: "Resep Klasik",
      description: "Kue mentega legendaris dengan aroma wangi butter asli yang semerbak, tekstur padat lembut, dan rasa manis legit yang elegan.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
      highlight: "Menggunakan mentega berkualitas tinggi",
    },
    {
      id: "marble-cake-cokelat",
      name: "Marble Butter Cake Cokelat",
      category: "Butter Cake",
      badge: "Kue Meja Tamu",
      description: "Perpaduan adonan mentega harum dan pola pusaran cokelat klasik. Sangat cocok disajikan untuk jamuan tamu keluarga di Kabanjahe.",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c13136?auto=format&fit=crop&w=800&q=80",
      highlight: "Motif marmer cantik & moist",
    },
    {
      id: "pastel-goreng-renyah",
      name: "Pastel Renyah Isi Ragout Telur",
      category: "Snack",
      badge: "Snack Gurih",
      description: "Kulit pastel berlapis yang renyah gurih, diisi sayuran segar, ayam cincang, dan potongan telur rebus yang lezat.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
      highlight: "Kulit garing renyah tidak berminyak",
    },
    {
      id: "risoles-ragout-ayam",
      name: "Risoles Ragout Ayam Daging",
      category: "Snack",
      badge: "Hangat & Creamy",
      description: "Risoles berlapis tepung roti renyah keemasan dengan isian adonan ragout ayam lembut yang creamy dan gurih rempah.",
      image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80",
      highlight: "Isian creamy lumer di mulut",
    },
    {
      id: "bolu-gulung-khas",
      name: "Bolu Gulung Lembut Kabanjahe",
      category: "Oleh-Oleh",
      badge: "Buah Tangan",
      description: "Bolu gulung berpori halus dengan isian selai moka atau keju spesial. Teksturnya lumer dan menjadi oleh-oleh wajib khas Kabanjahe.",
      image: "/bolu-gulung.jpg",
      highlight: "Kemasan rapi siap dibawa perjalanan",
    },
    {
      id: "hampers-gelora-box",
      name: "Paket Oleh-Oleh Kotak Gelora",
      category: "Oleh-Oleh",
      badge: "Paket Lengkap",
      description: "Paket kombinasi aneka roti, kue kering, dan cake pilihan yang dikemas dalam kotak higienis cantik, siap untuk bingkisan keluarga.",
      image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
      highlight: "Bisa custom isian sesuai kebutuhan",
    },
  ],

  // Galeri Instagram @gelorabakery.id
  instagramGallery: [
    {
      id: "ig-1",
      title: "Fresh Baked Morning Batch",
      caption: "Aroma roti panggang pagi di Jl. Kpt. Bangsi Sembiring No.24.",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ig-2",
      title: "Tekstur Lembut Roti Sobek",
      caption: "Cita rasa rumahan yang selalu dirindukan warga Kabanjahe.",
      image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ig-3",
      title: "Golden Butter Cake Tradisi",
      caption: "Dipanggang perlahan dengan mentega pilihan tanpa bahan pengawet buatan.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ig-4",
      title: "Snack & Kudapan Hangat",
      caption: "Pastel dan risoles gurih siap menemani acara keluarga.",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ig-5",
      title: "Roti Isi Cokelat Melimpah",
      caption: "Camilan manis favorit anak-anak dan keluarga sepulang sekolah.",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "ig-6",
      title: "Oleh-Oleh Khas Tanah Karo",
      caption: "Bawakan kehangatan roti Gelora Bakery untuk keluarga tercinta.",
      image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?auto=format&fit=crop&w=600&q=80",
    },
  ],
};

/**
 * Helper untuk menentukan link & label aksi kontak.
 * Jika WhatsApp belum ada/kosong, otomatis fallback ke Instagram DM.
 */
export function getContactAction(customMessage = "") {
  const { whatsapp, instagramUrl, instagramHandle } = siteConfig.brand;

  if (whatsapp && whatsapp.trim() !== "") {
    const cleanNumber = whatsapp.replace(/[^0-9]/g, "");
    const formattedNumber = cleanNumber.startsWith("0") ? "62" + cleanNumber.slice(1) : cleanNumber;
    const encodedMessage = encodeURIComponent(
      customMessage || "Halo Gelora Bakery Kabanjahe, saya ingin menanyakan ketersediaan produk roti hari ini."
    );
    return {
      type: "whatsapp",
      label: "Chat WhatsApp",
      shortLabel: "WhatsApp",
      url: `https://wa.me/${formattedNumber}?text=${encodedMessage}`,
      target: "_blank",
      rel: "noopener noreferrer",
      detail: `+${formattedNumber}`,
    };
  }

  // Fallback ke Instagram
  const profileUrl = siteConfig.brand.instagramUrl || `https://www.instagram.com/${instagramHandle.replace('@', '')}/`;
  const dmUrl = siteConfig.brand.instagramDmUrl || `https://ig.me/m/${instagramHandle.replace('@', '')}`;
  return {
    type: "instagram",
    label: `Buka Instagram (${instagramHandle})`,
    shortLabel: "Instagram",
    url: profileUrl,
    dmUrl: dmUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    detail: instagramHandle,
  };
}
