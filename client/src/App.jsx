import { useState } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const rooms = [
  {
    id: 1,
    name: "Deluxe Garden View",
    type: "Deluxe",
    price: 850000,
    size: 28,
    capacity: 2,
    bed: "King Bed",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
    amenities: ["WiFi", "AC", "TV", "Mini Bar", "Balkon"],
    rating: 4.7,
    reviews: 128,
    available: true,
  },
  {
    id: 2,
    name: "Superior Pool View",
    type: "Superior",
    price: 1200000,
    size: 35,
    capacity: 2,
    bed: "Queen Bed",
    img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    amenities: ["WiFi", "AC", "TV", "Bathtub", "Mini Bar", "Balkon"],
    rating: 4.8,
    reviews: 94,
    available: true,
  },
  {
    id: 3,
    name: "Junior Suite",
    type: "Suite",
    price: 1850000,
    size: 50,
    capacity: 3,
    bed: "King Bed + Sofa",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    amenities: ["WiFi", "AC", "Smart TV", "Jacuzzi", "Mini Bar", "Ruang Tamu"],
    rating: 4.9,
    reviews: 67,
    available: true,
  },
  {
    id: 4,
    name: "Presidential Suite",
    type: "Presidential",
    price: 3500000,
    size: 90,
    capacity: 4,
    bed: "2 King Bed",
    img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    amenities: ["WiFi", "AC", "Smart TV", "Private Pool", "Butler", "Dapur"],
    rating: 5.0,
    reviews: 32,
    available: false,
  },
  {
    id: 5,
    name: "Standard Twin",
    type: "Standard",
    price: 550000,
    size: 22,
    capacity: 2,
    bed: "Twin Bed",
    img: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80",
    amenities: ["WiFi", "AC", "TV"],
    rating: 4.5,
    reviews: 210,
    available: true,
  },
  {
    id: 6,
    name: "Family Room",
    type: "Family",
    price: 1500000,
    size: 60,
    capacity: 5,
    bed: "1 King + 2 Single",
    img: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800&q=80",
    amenities: ["WiFi", "AC", "TV", "Mini Bar", "Sofa Bed"],
    rating: 4.6,
    reviews: 85,
    available: true,
  },
];

const facilities = [
  {
    icon: "🏊", label: "Infinity Pool",
    desc: "Kolam renang tak terbatas dengan pemandangan taman tropis yang memukau.",
    photos: [
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?w=900&q=80",
      "https://images.unsplash.com/photo-1572331165267-854da2b021cd?w=900&q=80",
      "https://images.unsplash.com/photo-1562778612-e1e0cda9915c?w=900&q=80",
      "https://images.unsplash.com/photo-1530053969600-caed2596d242?w=900&q=80",
    ],
  },
  {
    icon: "🍽️", label: "Restaurant",
    desc: "Sajian kuliner kelas dunia dengan cita rasa lokal yang otentik.",
    photos: [
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
      "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=900&q=80",
    ],
  },
  {
    icon: "💆", label: "Spa & Wellness",
    desc: "Nikmati perawatan tubuh tradisional Jawa untuk ketenangan jiwa dan raga.",
    photos: [
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=900&q=80",
      "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=900&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=900&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&q=80",
    ],
  },
  {
    icon: "🏋️", label: "Fitness Center",
    desc: "Peralatan gym modern dengan pemandangan taman yang menyegarkan.",
    photos: [
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80",
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=900&q=80",
      "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=900&q=80",
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900&q=80",
    ],
  },
  {
    icon: "🅿️", label: "Free Parking",
    desc: "Area parkir luas dan aman tersedia gratis untuk seluruh tamu hotel.",
    photos: [
      "https://images.unsplash.com/photo-1573348722427-f1d6819fdf98?w=900&q=80",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=900&q=80",
      "https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=900&q=80",
      "https://images.unsplash.com/photo-1611288875785-5de31bed9285?w=900&q=80",
    ],
  },
  {
    icon: "🌿", label: "Garden Lounge",
    desc: "Area bersantai di tengah taman hijau yang asri dan menenangkan.",
    photos: [
      "https://images.unsplash.com/photo-1585543805890-6051f7829f98?w=900&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=900&q=80",
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=900&q=80",
    ],
  },
];

const typeBadgeColors = {
  Standard:    "bg-gray-500",
  Deluxe:      "bg-emerald-600",
  Superior:    "bg-blue-600",
  Suite:       "bg-violet-600",
  Presidential:"bg-amber-700",
  Family:      "bg-pink-600",
};

function formatRupiah(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

function diffDays(a, b) {
  if (!a || !b) return 1;
  const d = Math.round((new Date(b) - new Date(a)) / 86400000);
  return d > 0 ? d : 1;
}

// ── NAVBAR ────────────────────────────────────────────────────────────────────
function Navbar({ page, setPage }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { key: "home", label: "Beranda" },
    { key: "rooms", label: "Kamar" },
    { key: "facilities", label: "Fasilitas" },
  ];
  return (
    <nav className="sticky top-0 z-50 flex items-center gap-6 px-6 py-4
                    bg-[#0F0E0B]/90 backdrop-blur-lg border-b border-[#C9A84C]/15">
      {/* Brand */}
      <button onClick={() => setPage("home")}
        className="flex items-center gap-2 font-display text-xl text-[#F5F0E8] shrink-0">
        <span className="text-[#C9A84C]">✦</span>
        3Second<b className="text-[#C9A84C]">Hotel</b>
      </button>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-1 flex-1">
        {navItems.map(({ key, label }) => (
          <li key={key}>
            <button onClick={() => setPage(key)}
              className={`px-4 py-2 rounded-lg text-sm transition-all
                ${page === key
                  ? "text-[#C9A84C] bg-[#C9A84C]/10"
                  : "text-[#A09880] hover:text-[#C9A84C] hover:bg-[#C9A84C]/8"}`}>
              {label}
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => setPage("rooms")}
        className="hidden md:block shrink-0 bg-[#C9A84C] text-[#0F0E0B] font-bold
                   text-sm px-5 py-2 rounded-lg hover:bg-[#E8C97A] transition-all">
        Pesan Sekarang
      </button>

      {/* Hamburger */}
      <button onClick={() => setOpen(!open)}
        className="md:hidden ml-auto text-[#F5F0E8] text-xl">
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[#1A1915] border-b border-[#C9A84C]/15
                        flex flex-col p-4 gap-1">
          {navItems.map(({ key, label }) => (
            <button key={key} onClick={() => { setPage(key); setOpen(false); }}
              className={`text-left px-4 py-2 rounded-lg text-sm transition-all
                ${page === key ? "text-[#C9A84C]" : "text-[#A09880]"}`}>
              {label}
            </button>
          ))}
          <button onClick={() => { setPage("rooms"); setOpen(false); }}
            className="mt-2 bg-[#C9A84C] text-[#0F0E0B] font-bold text-sm px-4 py-2 rounded-lg">
            Pesan Sekarang
          </button>
        </div>
      )}
    </nav>
  );
}

// ── HERO ──────────────────────────────────────────────────────────────────────
function Hero({ setPage }) {
  const [search, setSearch] = useState({ checkin: "", checkout: "", guests: 1 });
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center
                        text-center px-4 py-20"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E0B]/55 to-[#0F0E0B]/80" />

      <div className="relative z-10 max-w-2xl mx-auto">
        <span className="inline-block text-[#C9A84C] text-xs tracking-widest uppercase
                         border border-[#C9A84C]/30 px-5 py-1.5 rounded-full mb-6">
          ✦ Bintang 5 di Jantung Yogyakarta
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight text-[#F5F0E8] mb-5">
          Rasakan Ketenangan<br />
          <span className="text-[#C9A84C] italic">Sesungguhnya</span>
        </h1>
        <p className="text-[#A09880] text-base md:text-lg leading-relaxed mb-10">
          Pengalaman menginap mewah yang memadukan keindahan budaya Jawa dengan kenyamanan modern.
        </p>

        {/* Search bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center
                        bg-white/8 backdrop-blur-xl border border-[#C9A84C]/25
                        rounded-2xl p-2 gap-0">
          {[
            { label: "Check-In", type: "date", key: "checkin" },
            { label: "Check-Out", type: "date", key: "checkout" },
          ].map(({ label, type, key }, i) => (
            <div key={key} className="flex flex-col gap-1 px-4 py-2 flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-widest text-[#C9A84C] font-semibold">{label}</span>
              <input type={type} value={search[key]}
                onChange={(e) => setSearch({ ...search, [key]: e.target.value })}
                className="bg-transparent border-none outline-none text-[#F5F0E8] text-sm" />
              {i < 1 && <div className="md:hidden h-px bg-[#C9A84C]/20 mt-2" />}
            </div>
          ))}
          <div className="hidden md:block w-px h-10 bg-[#C9A84C]/20" />
          <div className="flex flex-col gap-1 px-4 py-2 flex-1 min-w-0">
            <span className="text-[10px] uppercase tracking-widest text-[#C9A84C] font-semibold">Tamu</span>
            <select value={search.guests}
              onChange={(e) => setSearch({ ...search, guests: e.target.value })}
              className="bg-transparent border-none outline-none text-[#F5F0E8] text-sm">
              {[1,2,3,4,5].map(n => <option key={n} value={n} className="bg-[#1A1915]">{n} Tamu</option>)}
            </select>
          </div>
          <button onClick={() => setPage("rooms")}
            className="bg-[#C9A84C] text-[#0F0E0B] font-bold px-6 py-3 rounded-xl
                       hover:bg-[#E8C97A] transition-all text-sm whitespace-nowrap">
            Cari Kamar
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 flex items-center gap-8 mt-12">
        {[["150+", "Kamar Mewah"], ["4.9★", "Rating Tamu"], ["12+", "Tahun Pengalaman"]].map(([val, lbl], i) => (
          <div key={lbl} className="flex items-center gap-8">
            <div className="flex flex-col items-center">
              <b className="font-display text-2xl text-[#C9A84C]">{val}</b>
              <span className="text-xs text-[#A09880]">{lbl}</span>
            </div>
            {i < 2 && <div className="w-px h-10 bg-[#C9A84C]/25" />}
          </div>
        ))}
      </div>
    </section>
  );
}

// ── ROOM CARD ─────────────────────────────────────────────────────────────────
function RoomCard({ room, onBook }) {
  return (
    <div className={`bg-[#1A1915] rounded-xl border border-white/6 overflow-hidden
                     flex flex-col transition-all duration-300 hover:-translate-y-1
                     hover:border-[#C9A84C]/25 hover:shadow-2xl
                     ${!room.available ? "opacity-60" : ""}`}>
      <div className="relative h-48 overflow-hidden">
        <img src={room.img} alt={room.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          loading="lazy" />
        <span className={`absolute top-3 left-3 text-white text-[11px] font-bold
                          uppercase tracking-wide px-3 py-1 rounded-full
                          ${typeBadgeColors[room.type]}`}>
          {room.type}
        </span>
        {!room.available && (
          <div className="absolute inset-0 bg-black/55 flex items-center justify-center
                          text-white font-bold tracking-wide">
            Tidak Tersedia
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-[#F5F0E8] font-semibold text-base leading-tight">{room.name}</h3>
          <span className="text-[#C9A84C] text-sm shrink-0">
            ⭐ {room.rating} <span className="text-[#A09880]">({room.reviews})</span>
          </span>
        </div>

        <div className="flex flex-wrap gap-3 text-[#A09880] text-xs">
          <span>📐 {room.size} m²</span>
          <span>👤 Maks {room.capacity}</span>
          <span>🛏️ {room.bed}</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {room.amenities.slice(0, 4).map(a => (
            <span key={a} className="text-[#A09880] text-xs bg-white/5 border border-white/8
                                     px-2 py-0.5 rounded-md">{a}</span>
          ))}
          {room.amenities.length > 4 && (
            <span className="text-[#C9A84C] text-xs border border-[#C9A84C]/30 px-2 py-0.5 rounded-md">
              +{room.amenities.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex items-baseline gap-1">
            <span className="text-[#C9A84C] font-bold text-lg">{formatRupiah(room.price)}</span>
            <span className="text-[#A09880] text-xs">/malam</span>
          </div>
          <button onClick={() => onBook(room)} disabled={!room.available}
            className={`font-bold text-sm px-5 py-2 rounded-lg transition-all
              ${room.available
                ? "bg-[#C9A84C] text-[#0F0E0B] hover:bg-[#E8C97A] hover:scale-105"
                : "bg-white/10 text-[#A09880] cursor-not-allowed"}`}>
            {room.available ? "Pesan" : "Penuh"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── ROOMS PAGE ────────────────────────────────────────────────────────────────
function RoomsPage({ onBook }) {
  const [filter, setFilter] = useState("Semua");
  const [sort, setSort] = useState("default");
  const types = ["Semua", ...Object.keys(typeBadgeColors)];

  let filtered = filter === "Semua" ? rooms : rooms.filter(r => r.type === filter);
  if (sort === "asc")    filtered = [...filtered].sort((a, b) => a.price - b.price);
  if (sort === "desc")   filtered = [...filtered].sort((a, b) => b.price - a.price);
  if (sort === "rating") filtered = [...filtered].sort((a, b) => b.rating - a.rating);

  return (
    <section className="px-6 py-12 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display text-4xl text-[#F5F0E8] mb-2">Pilih Kamar Anda</h2>
        <p className="text-[#A09880]">Temukan kamar yang sempurna untuk liburan atau perjalanan bisnis Anda</p>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {types.map(t => (
            <button key={t} onClick={() => setFilter(t)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all
                ${filter === t
                  ? "bg-[#C9A84C] border-[#C9A84C] text-[#0F0E0B] font-semibold"
                  : "border-white/10 text-[#A09880] hover:border-[#C9A84C] hover:text-[#C9A84C]"}`}>
              {t}
            </button>
          ))}
        </div>
        <select value={sort} onChange={e => setSort(e.target.value)}
          className="bg-white/5 border border-white/10 text-[#F5F0E8] text-sm
                     px-4 py-2 rounded-lg outline-none">
          <option value="default" className="bg-[#1A1915]">Urutan Default</option>
          <option value="asc"     className="bg-[#1A1915]">Harga Terendah</option>
          <option value="desc"    className="bg-[#1A1915]">Harga Tertinggi</option>
          <option value="rating"  className="bg-[#1A1915]">Rating Tertinggi</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(r => <RoomCard key={r.id} room={r} onBook={onBook} />)}
      </div>
    </section>
  );
}

// ── FACILITIES PAGE ───────────────────────────────────────────────────────────
function FacilitiesPage() {
  return (
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-display text-4xl text-[#F5F0E8] mb-2">Fasilitas Hotel</h2>
        <p className="text-[#A09880]">Nikmati berbagai fasilitas premium yang kami sediakan untuk kenyamanan Anda</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
        {facilities.map(f => (
          <div key={f.label}
            className="bg-[#1A1915] border border-[#C9A84C]/12 rounded-xl p-8 text-center
                       transition-all hover:-translate-y-1 hover:border-[#C9A84C]">
            <div className="text-4xl mb-3">{f.icon}</div>
            <h4 className="text-[#F5F0E8] text-sm font-medium">{f.label}</h4>
          </div>
        ))}
      </div>
      <div className="bg-[#1A1915] border border-[#C9A84C]/15 rounded-xl p-8 text-center">
        <h3 className="font-display text-2xl text-[#C9A84C] mb-2">Butuh Bantuan?</h3>
        <p className="text-[#A09880] mb-6">Tim kami siap membantu Anda 24/7</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#F5F0E8]">
          <span>📞 +62 274-123-4567</span>
          <span>✉️ info@3second Hotel.com</span>
          <span>📍 Jl. Malioboro No. 1, Yogyakarta</span>
        </div>
      </div>
    </section>
  );
}

// ── BOOKING MODAL ─────────────────────────────────────────────────────────────
function BookingModal({ room, onClose, onConfirm }) {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    checkin: today, checkout: "", guests: 1, notes: "",
  });
  const [errors, setErrors] = useState({});

  const nights = diffDays(form.checkin, form.checkout);
  const subtotal = room.price * nights;
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Nama wajib diisi";
    if (!form.email.includes("@")) e.email = "Email tidak valid";
    if (form.phone.length < 9) e.phone = "Nomor HP tidak valid";
    if (!form.checkout) e.checkout = "Tanggal checkout wajib diisi";
    else if (form.checkout <= form.checkin) e.checkout = "Checkout harus setelah check-in";
    return e;
  }

  function handleSubmit() {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    onConfirm({ ...form, room, nights, total });
  }

  const inputCls = "w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 " +
    "text-[#F5F0E8] text-sm outline-none focus:border-[#C9A84C] transition-colors";
  const labelCls = "text-[10px] uppercase tracking-widest text-[#A09880] font-semibold";

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md
                    flex items-center justify-center p-4 overflow-y-auto"
      onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="bg-[#1A1915] border border-[#C9A84C]/20 rounded-2xl
                      flex flex-col md:flex-row w-full max-w-3xl max-h-[90vh]
                      overflow-hidden relative">

        <button onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10
                     text-[#F5F0E8] hover:bg-white/20 transition-all text-sm">✕</button>

        {/* Left */}
        <div className="md:w-72 shrink-0 bg-[#252420] flex flex-col overflow-y-auto">
          <img src={room.img} alt={room.name} className="w-full h-44 object-cover" />
          <div className="p-5 flex-1">
            <span className={`text-white text-[10px] font-bold uppercase tracking-wide
                              px-2.5 py-1 rounded-full ${typeBadgeColors[room.type]}`}>
              {room.type}
            </span>
            <h3 className="text-[#F5F0E8] font-semibold mt-2 mb-1">{room.name}</h3>
            <p className="text-[#A09880] text-xs mb-3">
              🛏️ {room.bed} &nbsp;|&nbsp; 📐 {room.size} m² &nbsp;|&nbsp; 👤 Maks {room.capacity}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {room.amenities.map(a => (
                <span key={a} className="text-[#A09880] text-[11px] bg-white/5
                                         border border-white/8 px-2 py-0.5 rounded-md">{a}</span>
              ))}
            </div>
          </div>
          {/* Price summary */}
          <div className="p-5 border-t border-white/6 flex flex-col gap-2">
            <div className="flex justify-between text-sm text-[#A09880]">
              <span>{formatRupiah(room.price)} × {nights} malam</span>
              <span>{formatRupiah(subtotal)}</span>
            </div>
            <div className="flex justify-between text-xs text-[#A09880]">
              <span>Pajak & Layanan (10%)</span>
              <span>{formatRupiah(tax)}</span>
            </div>
            <div className="flex justify-between font-bold text-[#C9A84C] pt-2
                            border-t border-[#C9A84C]/20">
              <span>Total</span>
              <span>{formatRupiah(total)}</span>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4">
          <h2 className="font-display text-2xl text-[#C9A84C]">Detail Pemesanan</h2>

          {[
            { label: "Nama Lengkap", key: "name", type: "text", placeholder: "John Doe" },
            { label: "Email", key: "email", type: "email", placeholder: "john@email.com" },
            { label: "No. Handphone", key: "phone", type: "text", placeholder: "08xxxxxxxxxx" },
          ].map(({ label, key, type, placeholder }) => (
            <div key={key} className="flex flex-col gap-1">
              <label className={labelCls}>{label}</label>
              <input type={type} placeholder={placeholder} value={form[key]}
                onChange={e => setForm({ ...form, [key]: e.target.value })}
                className={inputCls} />
              {errors[key] && <span className="text-red-400 text-xs">{errors[key]}</span>}
            </div>
          ))}

          <div className="flex gap-3">
            {[
              { label: "Check-In", key: "checkin", min: today },
              { label: "Check-Out", key: "checkout", min: form.checkin || today },
            ].map(({ label, key, min }) => (
              <div key={key} className="flex-1 flex flex-col gap-1">
                <label className={labelCls}>{label}</label>
                <input type="date" min={min} value={form[key]}
                  onChange={e => setForm({ ...form, [key]: e.target.value })}
                  className={inputCls} />
                {errors[key] && <span className="text-red-400 text-xs">{errors[key]}</span>}
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-1">
            <label className={labelCls}>Jumlah Tamu</label>
            <select value={form.guests} onChange={e => setForm({ ...form, guests: e.target.value })}
              className={inputCls}>
              {Array.from({ length: room.capacity }, (_, i) => i + 1).map(n => (
                <option key={n} value={n} className="bg-[#1A1915]">{n} Tamu</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className={labelCls}>Catatan Khusus (opsional)</label>
            <textarea rows={3} placeholder="Permintaan khusus, alergi, dll..."
              value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })}
              className={inputCls + " resize-none"} />
          </div>

          <button onClick={handleSubmit}
            className="mt-auto w-full bg-[#C9A84C] text-[#0F0E0B] font-bold py-3
                       rounded-xl hover:bg-[#E8C97A] transition-all">
            Konfirmasi Pemesanan
          </button>
        </div>
      </div>
    </div>
  );
}

// ── SUCCESS MODAL ─────────────────────────────────────────────────────────────
function SuccessModal({ booking, onClose }) {
  const code = "NS" + Math.random().toString(36).substring(2, 8).toUpperCase();
  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md
                    flex items-center justify-center p-4">
      <div className="bg-[#1A1915] border border-[#C9A84C]/25 rounded-2xl
                      p-8 max-w-md w-full text-center flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#C9A84C] to-[#E8C97A]
                        flex items-center justify-center text-[#0F0E0B] text-2xl font-bold">✓</div>
        <h2 className="font-display text-3xl text-[#F5F0E8]">Pemesanan Berhasil!</h2>
        <p className="text-[#A09880] text-sm">
          Terima kasih, <b className="text-[#F5F0E8]">{booking.form.name}</b>. Pemesanan Anda telah dikonfirmasi.
        </p>

        <div className="bg-[#C9A84C]/8 border border-[#C9A84C]/25 rounded-xl px-8 py-4">
          <p className="text-[10px] uppercase tracking-widest text-[#A09880] mb-1">Kode Booking</p>
          <p className="font-display text-2xl text-[#C9A84C] tracking-widest">{code}</p>
        </div>

        <div className="w-full flex flex-col gap-2">
          {[
            ["Kamar", booking.room.name],
            ["Check-In", booking.form.checkin],
            ["Check-Out", booking.form.checkout],
            ["Durasi", `${booking.nights} malam`],
            ["Total", formatRupiah(booking.total)],
          ].map(([k, v]) => (
            <div key={k} className="flex justify-between text-sm border-b border-white/5 pb-2">
              <span className="text-[#A09880]">{k}</span>
              <b className="text-[#F5F0E8]">{v}</b>
            </div>
          ))}
        </div>

        <p className="text-xs text-[#A09880]">
          Detail dikirim ke <b className="text-[#F5F0E8]">{booking.form.email}</b>
        </p>
        <button onClick={onClose}
          className="w-full bg-[#C9A84C] text-[#0F0E0B] font-bold py-3 rounded-xl
                     hover:bg-[#E8C97A] transition-all">
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}

// ── FACILITY GALLERY MODAL ────────────────────────────────────────────────────
function FacilityGalleryModal({ facility, onClose }) {
  const [active, setActive] = useState(0);
  return (
    <div
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#1A1915] border border-[#C9A84C]/20 rounded-2xl w-full max-w-3xl overflow-hidden relative">
        <button onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40
                     text-white hover:bg-black/60 transition-all text-sm">✕</button>

        {/* Main photo */}
        <div className="relative h-72 md:h-96 overflow-hidden bg-black">
          <img
            key={active}
            src={facility.photos[active]}
            alt={facility.label}
            className="w-full h-full object-cover"
          />
          <button
            onClick={() => setActive(i => (i - 1 + facility.photos.length) % facility.photos.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                       bg-black/50 text-white hover:bg-black/70 transition-all text-lg">‹</button>
          <button
            onClick={() => setActive(i => (i + 1) % facility.photos.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                       bg-black/50 text-white hover:bg-black/70 transition-all text-lg">›</button>
          <span className="absolute bottom-3 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded-full">
            {active + 1} / {facility.photos.length}
          </span>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-2 p-4 bg-[#252420]">
          {facility.photos.map((photo, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`flex-1 h-16 rounded-lg overflow-hidden border-2 transition-all
                ${active === i ? "border-[#C9A84C]" : "border-transparent opacity-50 hover:opacity-80"}`}>
              <img src={photo} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="px-6 py-5">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{facility.icon}</span>
            <h3 className="font-display text-2xl text-[#C9A84C]">{facility.label}</h3>
          </div>
          <p className="text-[#A09880] text-sm leading-relaxed">{facility.desc}</p>
        </div>
      </div>
    </div>
  );
}

// ── APP ───────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  const [bookingRoom, setBookingRoom] = useState(null);
  const [successBooking, setSuccessBooking] = useState(null);
  const [activeFacility, setActiveFacility] = useState(null);

  function handleConfirm(data) {
    const { room, nights, total, ...form } = data;
    setBookingRoom(null);
    setSuccessBooking({ room, nights, total, form });
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0F0E0B]">
      <Navbar page={page} setPage={setPage} />

      <main className="flex-1">
        {page === "home" && (
          <>
            <Hero setPage={setPage} />

            {/* Facilities strip */}
            <section className="py-10 px-6 bg-[#1A1915] border-y border-[#C9A84C]/10 text-center">
              <h3 className="font-display text-2xl text-[#C9A84C] mb-2">Fasilitas Unggulan</h3>
              <p className="text-[#A09880] text-xs mb-6">Klik untuk melihat foto fasilitas</p>
              <div className="flex flex-wrap justify-center gap-4">
                {facilities.map(f => (
                  <button key={f.label} onClick={() => setActiveFacility(f)}
                    className="flex flex-col items-center gap-2 px-6 py-4 min-w-[100px]
                               bg-[#C9A84C]/6 border border-[#C9A84C]/12 rounded-xl cursor-pointer
                               hover:bg-[#C9A84C]/18 hover:border-[#C9A84C]/40 hover:-translate-y-1
                               transition-all group">
                    <span className="text-2xl group-hover:scale-110 transition-transform">{f.icon}</span>
                    <p className="text-[#A09880] text-xs group-hover:text-[#C9A84C] transition-colors">{f.label}</p>
                    <span className="text-[9px] text-[#C9A84C]/50 group-hover:text-[#C9A84C]/80 transition-colors">
                      Lihat Foto →
                    </span>
                  </button>
                ))}
              </div>
            </section>

            {/* Featured rooms */}
            <section className="px-6 py-12 max-w-7xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-4xl text-[#F5F0E8] mb-2">Kamar Pilihan</h2>
                <p className="text-[#A09880]">Pilihan terbaik untuk pengalaman menginap yang tak terlupakan</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.slice(0, 3).map(r => <RoomCard key={r.id} room={r} onBook={setBookingRoom} />)}
              </div>
              <div className="text-center mt-8">
                <button onClick={() => setPage("rooms")}
                  className="border border-[#C9A84C] text-[#C9A84C] px-8 py-3 rounded-xl
                             font-semibold hover:bg-[#C9A84C] hover:text-[#0F0E0B] transition-all">
                  Lihat Semua Kamar →
                </button>
              </div>
            </section>
          </>
        )}
        {page === "rooms"      && <RoomsPage onBook={setBookingRoom} />}
        {page === "facilities" && <FacilitiesPage />}
      </main>

      <footer className="bg-[#0F0E0B] border-t border-[#C9A84C]/10 py-6 text-center flex flex-col items-center gap-2">
        <div className="flex items-center gap-2 font-display text-lg text-[#F5F0E8]">
          <span className="text-[#C9A84C]">✦</span>
          3Second<b className="text-[#C9A84C]">Hotel</b>
        </div>
        <p className="text-xs text-[#A09880]">© 2025 3Second. All rights reserved.</p>
        <p className="text-xs text-[#A09880]">Jl. Malioboro No. 1, Yogyakarta 55213</p>
      </footer>

      {activeFacility && (
        <FacilityGalleryModal facility={activeFacility} onClose={() => setActiveFacility(null)} />
      )}
      {bookingRoom && (
        <BookingModal room={bookingRoom} onClose={() => setBookingRoom(null)} onConfirm={handleConfirm} />
      )}
      {successBooking && (
        <SuccessModal booking={successBooking}
          onClose={() => { setSuccessBooking(null); setPage("home"); }} />
      )}
    </div>
  );
}