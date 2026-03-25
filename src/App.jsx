import React, { useState, useEffect } from "react";
import {
  Droplets,
  Sofa,
  Waves,
  Sparkles,
  PhoneCall,
  MapPin,
  ShieldCheck,
  Star,
  Quote,
  Menu,
  ChevronRight,
  ChevronDown,
  Wind,
  Sparkle,
  Package,
} from "lucide-react";

// ÖRNEK: 90 + numara (boşluksuz). Kendi numaranla değiştir.
const whatsappNumber = "905555555555";
const pricePerM2 = 35;

const navItems = [
  { label: "Hizmetler", href: "#services" },
  { label: "Fiyatlar", href: "#pricing" },
  { label: "S.S.S", href: "#faq" },
  { label: "İletişim", href: "#contact" },
];

const services = [
  {
    icon: Droplets,
    title: "Halı Yıkama",
    description:
      "Derinlemesine temizlik, antibakteriyel yıkama ve modern makinelerle profesyonel bakım.",
    badge: "En çok tercih edilen",
  },
  {
    icon: Sofa,
    title: "Koltuk Yıkama",
    description:
      "Leke ve kötü kokulara son veren, kumaşa zarar vermeyen koltuk yıkama hizmeti.",
    badge: "Ev & Ofis",
  },
  {
    icon: Waves,
    title: "Perde Yıkama",
    description:
      "Stor, zebra ve tül perdeleriniz için hassas, iz bırakmayan perde yıkama.",
    badge: "Hassas temizlik",
  },
];

const testimonials = [
  {
    name: "Mehmet Y.",
    location: "Şanlıurfa / Haliliye",
    comment:
      "Yıllardır çıkmayan lekeler bir yıkamada gitti. Halılar mis gibi kokuyor, kesinlikle tavsiye ederim.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ayşe K.",
    location: "Şanlıurfa / Eyyübiye",
    comment:
      "Koltuklarım yeni alınmış gibi oldu. Hem güler yüzlü hem de çok düzenli çalışıyorlar.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Mustafa Y.",
    location: "Şanlıurfa / Karaköprü",
    comment:
      "Zamanında teslimat ve temiz işçilik. Her sene düzenli olarak Fırat Halı Yıkama'yı tercih ediyorum.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Fatma Ş.",
    location: "Şanlıurfa / Haliliye",
    comment:
      "Perdelerim çok hassastı ama hiç zarar görmeden tertemiz geldi. Çok memnun kaldım!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Ali R.",
    location: "Şanlıurfa / Eyyübiye",
    comment:
      "Fiyatları çok uygun, hizmet kalitesi mükemmel. Artık sadece Fırat Halı Yıkama'yı tercih ediyorum.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
];

// Özel Logo Component - SVG ile halı silüeti ve su dalgaları
const Logo = ({ className = "" }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Arka plan - yumuşak gradient */}
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="waterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#1e40af" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Su dalgaları - halının arkasından akan */}
      <g opacity="0.7">
        <path
          d="M 20 85 Q 30 75, 40 80 T 60 75 T 80 80 T 100 75"
          stroke="url(#waterGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 15 95 Q 25 85, 35 90 T 55 85 T 75 90 T 95 85"
          stroke="url(#waterGradient)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 25 105 Q 35 95, 45 100 T 65 95 T 85 100 T 105 95"
          stroke="url(#waterGradient)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Halı silüeti - stylize edilmiş, modern ama klasik */}
      <rect
        x="25"
        y="30"
        width="70"
        height="50"
        rx="4"
        ry="4"
        fill="url(#logoGradient)"
        stroke="#ffffff"
        strokeWidth="2"
      />
      {/* Halı deseni - iç çizgiler */}
      <rect
        x="30"
        y="35"
        width="60"
        height="40"
        rx="2"
        ry="2"
        fill="none"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeOpacity="0.3"
      />
      {/* Halı kenar detayları */}
      <line
        x1="25"
        y1="30"
        x2="95"
        y2="30"
        stroke="#ffffff"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <line
        x1="25"
        y1="80"
        x2="95"
        y2="80"
        stroke="#ffffff"
        strokeWidth="2"
        strokeOpacity="0.5"
      />

      {/* Üst köşede parıltı ikonu */}
      <g transform="translate(85, 15)">
        <circle cx="0" cy="0" r="8" fill="#ffffff" opacity="0.9" />
        <circle cx="0" cy="0" r="5" fill="#fbbf24" opacity="0.8" />
        {/* Parıltı ışınları */}
        <line
          x1="0"
          y1="-12"
          x2="0"
          y2="-8"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="0"
          y1="8"
          x2="0"
          y2="12"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="-12"
          y1="0"
          x2="-8"
          y2="0"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="0"
          x2="12"
          y2="0"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
};

function App() {
  const [m2, setM2] = useState("");
  const [openFaq, setOpenFaq] = useState(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const parsed = parseFloat(String(m2).replace(",", "."));
  const isValid = !Number.isNaN(parsed) && parsed > 0;
  const total = isValid ? parsed * pricePerM2 : 0;

  const faqs = [
    {
      question: "Halılar kaç günde teslim edilir?",
      answer: "Şanlıurfa geneline 48 saat içinde teslimat garantisi veriyoruz.",
    },
    {
      question: "Ücretsiz servis var mı?",
      answer: "Evet, Haliliye, Karaköprü ve Eyyübiye bölgelerine ücretsiz servisimiz mevcuttur.",
    },
    {
      question: "Leke çıkarma garantiniz var mı?",
      answer: "En zorlu lekeler için profesyonel solüsyonlar kullanıyoruz, %99 başarı sağlıyoruz.",
    },
  ];

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Merhaba, Fırat Halı Yıkama hakkında bilgi ve fiyat almak istiyorum."
    );
    const url = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  // Auto-play testimonial slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-water-pattern bg-gradient-to-b from-sky-50 via-blue-50/30 to-slate-50 text-slate-900">
      {/* Navbar */}
      <header className="sticky top-0 z-20 glass border-b border-white/20 shadow-modern">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Özel Logo SVG */}
            <div className="flex h-12 w-12 items-center justify-center sm:h-16 sm:w-16">
              <Logo className="h-full w-full" />
            </div>
            <div className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold tracking-tight text-slate-900 sm:text-base">
                Fırat Halı Yıkama
              </span>
              <span className="text-[11px] text-sky-700">
                Şanlıurfa • Profesyonel Temizlik
              </span>
            </div>
          </div>

          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-sky-600"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md shadow-sky-500/40 transition hover:bg-sky-700"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              Hemen Ara
            </button>
          </div>

          <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-1.5 text-slate-700 shadow-sm md:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 sm:pt-10 lg:px-8">
        {/* Hero */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center md:gap-14 lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50/80 px-3 py-1 text-[11px] font-medium text-sky-700 shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5" />
              24 Saatte Teslim • Hijyen Garantili • Ücretsiz Servis
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Halılarınızda <span className="handwritten-underline">İlk Günkü Temizlik</span> ve <span className="handwritten-underline-turquoise">Bahar Ferahlığı</span>!
            </h1>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-700 sm:text-base">
              Peygamberler Şehri Şanlıurfa'nın temizlikteki kaliteli yüzü
              olarak, yılların tecrübesini modern makinelerle birleştirdik.
              Fırat'ın bereketiyle yıkanan halılarınızı, Karaköprü'den
              Eyyübiye'ye kadar her kapıdan alıp, tertemiz ve mis kokulu bir
              şekilde geri teslim ediyoruz. Bizim için sadece temizlik değil,
              komşuluk hakkı ve güven her şeyden önce gelir.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-400/50 transition hover:bg-emerald-600"
              >
                <WhatsAppIcon />
                WhatsApp'tan Fiyat Al
                <ChevronRight className="h-4 w-4" />
              </button>
              <div className="flex items-center gap-3 text-xs text-slate-600 sm:text-sm">
                <div className="flex -space-x-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-gradient-to-br from-sky-400 to-sky-600 text-[11px] font-semibold text-white shadow-md">
                    FH
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-gradient-to-br from-sky-400 to-sky-600 text-[11px] font-semibold text-white shadow-md">
                    FH
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-gradient-to-br from-sky-400 to-sky-600 text-[11px] font-semibold text-white shadow-md">
                    FH
                  </div>
                </div>
                <span className="max-w-[160px]">
                  Şanlıurfa'da yüzlerce mutlu müşteriye güven veren hizmet.
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-slate-600 sm:text-sm">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-amber-400" />
                <span>
                  Google yorumlarında{" "}
                  <span className="font-semibold text-slate-800">4.9 / 5</span>{" "}
                  memnuniyet
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-sky-500" />
                <span>Şanlıurfa geneli ücretsiz servis</span>
              </div>
            </div>
          </div>

          {/* Hero kart / fiyat hesaplama */}
          <div>
            <div className="relative rounded-3xl bg-gradient-to-br from-sky-500 via-sky-600 to-slate-900 p-[1px] shadow-xl shadow-sky-500/40">
              <div className="relative h-full rounded-[22px] bg-gradient-to-br from-slate-900 via-slate-950 to-sky-900 px-6 py-7 sm:px-7 sm:py-8">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-sky-400/20 blur-3xl" />
                <div className="absolute -left-16 bottom-10 h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl" />

                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-sky-300">
                      Profesyonel Halı Bakımı
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white sm:text-base">
                      Derinlemesine Temizlik & Antibakteriyel Yıkama
                    </p>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-400/30 backdrop-blur">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 text-[11px] text-slate-200/90 sm:text-xs">
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
                    <p className="text-[10px] text-slate-400">Köpüklü Yıkama</p>
                    <p className="mt-1 text-xs font-medium text-slate-100">
                      Anti-alerjik
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
                    <p className="text-[10px] text-slate-400">Kurulama</p>
                    <p className="mt-1 text-xs font-medium text-slate-100">
                      Tam kurutma
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-700/60 bg-slate-900/40 p-3">
                    <p className="text-[10px] text-slate-400">Teslimat</p>
                    <p className="mt-1 text-xs font-medium text-slate-100">
                      Kapıdan alım
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur-md">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-medium text-sky-200">
                        Hızlı Fiyat Hesaplama
                      </p>
                      <p className="mt-1 text-xs text-slate-200/80">
                        Metrekareyi girin, tahmini halı yıkama ücretinizi
                        görün.
                      </p>
                    </div>
                    <Droplets className="h-5 w-5 text-sky-300" />
                  </div>

                  <div className="mt-4 space-y-3">
                    <div>
                      <label className="flex items-center justify-between text-[11px] text-slate-300/90">
                        <span>Toplam Halı Alanı (m²)</span>
                        <span className="text-[10px] text-sky-200">
                          {pricePerM2} TL / m²
                        </span>
                      </label>
                      <input
                        type="number"
                        min="0"
                        inputMode="decimal"
                        value={m2}
                        onChange={(e) => setM2(e.target.value)}
                        placeholder="Örn: 12"
                        className="mt-1 w-full rounded-xl border border-slate-600/80 bg-slate-900/60 px-3 py-2 text-sm text-slate-50 outline-none transition placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-500"
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300/90">Tahmini Tutar</span>
                      <span className="text-sm font-semibold text-emerald-300">
                        {isValid ? `${total.toFixed(0)} TL` : "0 TL"}
                      </span>
                    </div>

                    <p className="text-[10px] text-slate-400">
                      * Bu fiyat tahmini olup halının türü ve yoğunluğuna göre
                      değişiklik gösterebilir. Kesin fiyat için WhatsApp'tan
                      yazabilirsiniz.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hizmetler */}
        <section id="services" className="mt-16 sm:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Profesyonel <span className="handwritten-underline-turquoise">Temizlik Hizmetlerimiz</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Halı, koltuk ve perde temizliğinde hijyen ve güveni ön planda
                tutarak, evinizde ve iş yerinizde ferah bir ortam sağlıyoruz.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden glass rounded-2xl border border-white/30 p-5 shadow-modern transition-all duration-300 hover:-translate-y-2 hover:shadow-modern-lg hover:border-white/50"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 shadow-inner">
                  <service.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {service.description}
                    </p>
                  </div>
                  {service.badge && (
                    <span className="rounded-full bg-sky-50 px-2 py-1 text-[10px] font-medium text-sky-700">
                      {service.badge}
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-500">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                  <span>Antibakteriyel ürünler • Profesyonel ekipman</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Önce / Sonra - Başarılarımız */}
        <section
          id="results"
          className="mt-16 glass rounded-3xl border border-white/30 p-6 shadow-modern sm:mt-20 sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                <span className="handwritten-underline">Başarılarımız</span> · Önce & Sonra
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Fırat Halı Yıkama olarak, inatçı lekeleri ve derin kirleri
                görünür şekilde ortadan kaldırıyoruz. Aşağıda, gerçek
                müşterilerimizden bazı örnek sonuçları görebilirsiniz.
              </p>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Çay Lekesi Çıkarma",
                description:
                  "Açık renk halı üzerindeki yoğun çay lekeleri tamamen temizlenmiştir.",
                badge: "Salon Halısı",
              },
              {
                title: "Günlük Kir & Toz",
                description:
                  "Uzun süre temizlenmeyen halıdan çıkan kir ve toz tamamen arındırılmıştır.",
                badge: "Yoğun Kullanım Alanı",
              },
              {
                title: "Çocuk Odası Lekeleri",
                description:
                  "Oyun sırasında oluşan çeşitli lekeler ve izler giderilmiştir.",
                badge: "Çocuk Odası",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/80 shadow-sm shadow-slate-200"
              >
                <div className="border-b border-slate-200/80 bg-slate-100/60 px-4 py-3">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[11px] text-slate-500">
                        {item.badge}
                      </p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-sky-100 text-sky-600">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-0 border-b border-slate-200 bg-white">
                  {/* Önce */}
                  <div className="relative flex aspect-[4/3] items-center justify-center border-r border-slate-200 bg-slate-200">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-0ef3c08c0632?auto=format&fit=crop&w=900&q=80"
                      alt="Kirli halı - önce"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/60 via-slate-900/20 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-black/65 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-100">
                      Önce
                    </span>
                  </div>
                  {/* Sonra */}
                  <div className="relative flex aspect-[4/3] items-center justify-center bg-slate-100">
                    <img
                      src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=900&q=80"
                      alt="Temiz halı - sonra"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/30 via-sky-400/10 to-transparent" />
                    <span className="absolute left-3 top-3 rounded-full bg-emerald-500/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                      Sonra
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col justify-between gap-3 px-4 py-4 text-xs text-slate-600">
                  <p>{item.description}</p>
                  <div className="flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                      <span>Profesyonel halı yıkama işlemi uygulanmıştır.</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 text-[11px] text-slate-500 sm:text-xs">
            * Görseller temsili olup, siz gerçek önce/sonra fotoğraflarınızı bu
            alana kolayca ekleyebilirsiniz.
          </p>
        </section>

        {/* Nasıl Yıkıyoruz? - Süreç Bölümü */}
        <section
          id="process"
          className="mt-16 sm:mt-20"
        >
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Süreç
            </p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              <span className="handwritten-underline-turquoise">Nasıl Yıkıyoruz?</span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Profesyonel ekibimiz ve modern makinelerimizle halılarınıza en iyi bakımı sağlıyoruz.
            </p>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* 1. Toz Alma */}
            <div className="group relative overflow-hidden glass rounded-2xl border border-white/30 p-6 shadow-modern transition-all duration-300 hover:-translate-y-2 hover:shadow-modern-lg hover:border-white/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700 transition group-hover:from-sky-100 group-hover:to-sky-200 group-hover:text-sky-700">
                <Wind className="h-7 w-7" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-sky-600">Adım 1</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Toz Alma</h3>
              <p className="mt-2 text-sm text-slate-600">
                Özel vakum makineleriyle derinlemesine temizlik. Toz, kum ve kirlerin tamamen çıkarılması.
              </p>
            </div>

            {/* 2. Otomatik Yıkama */}
            <div className="group relative overflow-hidden glass rounded-2xl border border-white/30 p-6 shadow-modern transition-all duration-300 hover:-translate-y-2 hover:shadow-modern-lg hover:border-white/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 text-sky-700 transition group-hover:from-sky-200 group-hover:to-sky-300">
                <Droplets className="h-7 w-7" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-sky-600">Adım 2</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Otomatik Yıkama</h3>
              <p className="mt-2 text-sm text-slate-600">
                Antibakteriyel şampuanlar ve 12 fırçalı sistem ile profesyonel yıkama işlemi.
              </p>
            </div>

            {/* 3. Kapalı Kurutma */}
            <div className="group relative overflow-hidden glass rounded-2xl border border-white/30 p-6 shadow-modern transition-all duration-300 hover:-translate-y-2 hover:shadow-modern-lg hover:border-white/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100 to-amber-200 text-amber-700 transition group-hover:from-amber-200 group-hover:to-amber-300">
                <Sparkles className="h-7 w-7" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-sky-600">Adım 3</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Kapalı Kurutma</h3>
              <p className="mt-2 text-sm text-slate-600">
                Güneş görmeyen, nem alma cihazlı odalarda kontrollü kurutma. Renk solması riski yok.
              </p>
            </div>

            {/* 4. Paketleme & Parfüm */}
            <div className="group relative overflow-hidden glass rounded-2xl border border-white/30 p-6 shadow-modern transition-all duration-300 hover:-translate-y-2 hover:shadow-modern-lg hover:border-white/50">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-700 transition group-hover:from-emerald-200 group-hover:to-emerald-300">
                <Package className="h-7 w-7" />
              </div>
              <div className="mb-2 flex items-center gap-2">
                <span className="text-xs font-semibold text-sky-600">Adım 4</span>
              </div>
              <h3 className="text-base font-semibold text-slate-900">Paketleme & Parfüm</h3>
              <p className="mt-2 text-sm text-slate-600">
                Leke kontrolü, parfümlendirme ve hijyenik poşetleme. Yeni gibi paketlenmiş teslimat.
              </p>
            </div>
          </div>
        </section>

        {/* Fiyatlar */}
        <section
          id="pricing"
          className="mt-16 rounded-3xl bg-gradient-to-r from-sky-50 via-sky-100/80 to-slate-50 p-6 shadow-inner sm:mt-20 sm:p-8"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Şeffaf ve <span className="handwritten-underline">Uygun Fiyat</span> Politikası
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-700">
                Fiyatlarımız, halınızın metrekaresine ve yoğunluğuna göre
                belirlenir. Halı başına değil, metrekare üzerinden adil
                fiyatlandırma yapıyoruz.
              </p>

              <div className="mt-4 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                <div className="rounded-2xl border border-sky-100 bg-white/80 p-4 text-xs sm:text-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700">
                    Halı Yıkama
                  </p>
                  <p className="mt-2 text-lg font-bold text-slate-900">
                    {pricePerM2} TL{" "}
                    <span className="text-xs font-normal text-slate-600">
                      / m²&apos;den başlayan fiyatlarla
                    </span>
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs text-slate-600">
                    <li>• Derinlemesine köpüklü yıkama</li>
                    <li>• Anti-alerjik ve antibakteriyel ürünler</li>
                    <li>• Ücretsiz alım & teslimat</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 text-xs sm:text-sm">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-700">
                    Ek Hizmetler
                  </p>
                  <ul className="mt-2 space-y-1.5 text-xs text-slate-600">
                    <li>• Koltuk yıkama: Adet ve kumaş türüne göre fiyatlandırma</li>
                    <li>• Perde yıkama: Tür ve ölçülere göre özel fiyat</li>
                    <li>• Toplu yıkamalarda özel indirimler</li>
                  </ul>
                  <p className="mt-3 text-[11px] text-slate-500">
                    Detaylı fiyat için WhatsApp üzerinden fotoğraf
                    gönderebilirsiniz.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-sky-200/70 bg-white shadow-sm shadow-sky-100">
              <div className="border-b border-slate-100 px-5 py-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-700">
                  Hızlı Hesaplama
                </p>
                <p className="mt-1 text-xs text-slate-600">
                  Tahmini halı yıkama fiyatınızı aşağıdan hesaplayabilirsiniz.
                </p>
              </div>
              <div className="px-5 py-4 text-sm">
                <div className="flex items-center justify-between text-xs text-slate-600">
                  <span>Toplam Halı Alanı</span>
                  <span className="font-medium text-slate-800">
                    {isValid ? `${parsed.toFixed(1)} m²` : "-"}
                  </span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-600">
                  <span>Birim Fiyat</span>
                  <span className="font-medium text-slate-800">
                    {pricePerM2} TL / m²
                  </span>
                </div>
                <div className="mt-4 rounded-xl bg-slate-900 px-4 py-3 text-xs text-slate-200">
                  <div className="flex items-center justify-between">
                    <span>Tahmini Toplam Ücret</span>
                    <span className="text-lg font-bold text-emerald-300">
                      {isValid ? `${total.toFixed(0)} TL` : "0 TL"}
                    </span>
                  </div>
                  <p className="mt-1 text-[11px] text-slate-400">
                    Fiyat; halınızın durumu ve yoğunluğuna göre değişebilir. Net
                    fiyat için ücretsiz keşif.
                  </p>
                </div>
                <button
                  onClick={handleWhatsAppClick}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-400/50 transition hover:bg-emerald-600"
                >
                  <WhatsAppIcon />
                  Hesabı WhatsApp ile Gönder
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Yorumlar - Slider */}
        <section id="comments" className="mt-16 sm:mt-20">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Müşterilerimiz <span className="handwritten-underline">Ne Diyor?</span>
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Hizmet kalitemizi en iyi anlatan şey, bizimle çalışan
                müşterilerimizin yorumlarıdır. Siz de gönül rahatlığıyla
                halılarınızı bize emanet edebilirsiniz.
              </p>
            </div>
          </div>

          <div className="relative mt-8 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentTestimonial * 100}%)`,
              }}
            >
              {testimonials.map((t, index) => (
                <div
                  key={index}
                  className="min-w-full flex-shrink-0 px-2 sm:px-3"
                >
                  <figure className="group relative h-full overflow-hidden glass rounded-2xl border border-white/30 p-6 shadow-modern transition-all duration-300 hover:-translate-y-1 hover:shadow-modern-lg">
                    <Quote className="absolute -right-2 -top-2 h-12 w-12 rotate-6 text-sky-100/50" />
                    <div className="flex items-start gap-4">
                      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-white/50 shadow-md">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <figcaption className="text-base font-bold text-slate-900">
                              {t.name}
                            </figcaption>
                            <p className="mt-1 text-xs text-slate-500">{t.location}</p>
                          </div>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: t.rating || 5 }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                            ))}
                          </div>
                        </div>
                        <blockquote className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
                          "{t.comment}"
                        </blockquote>
                      </div>
                    </div>
                  </figure>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentTestimonial === index
                      ? "w-8 bg-sky-600"
                      : "w-2 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() =>
                setCurrentTestimonial(
                  currentTestimonial === 0
                    ? testimonials.length - 1
                    : currentTestimonial - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full glass border border-white/30 p-2 shadow-modern transition-all hover:scale-110 hover:shadow-modern-lg"
              aria-label="Previous testimonial"
            >
              <ChevronRight className="h-5 w-5 rotate-180 text-slate-700" />
            </button>
            <button
              onClick={() =>
                setCurrentTestimonial(
                  currentTestimonial === testimonials.length - 1
                    ? 0
                    : currentTestimonial + 1
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full glass border border-white/30 p-2 shadow-modern transition-all hover:scale-110 hover:shadow-modern-lg"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5 text-slate-700" />
            </button>
          </div>
        </section>

        {/* Sıkça Sorulan Sorular */}
        <section
          id="faq"
          className="mt-16 sm:mt-20"
        >
          <div className="text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-600">
              Sorular & Cevaplar
            </p>
            <h2 className="mt-2 text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
              <span className="handwritten-underline-turquoise">Sıkça Sorulan Sorular</span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm text-slate-600">
              Merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden glass rounded-xl border border-white/30 shadow-modern transition-all duration-300 hover:-translate-y-1 hover:shadow-modern-lg hover:border-white/50"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-white/30"
                >
                  <span className="flex-1 font-semibold text-slate-900 sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all ${
                    openFaq === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="border-t border-slate-100 bg-slate-50/50 p-5">
                    <p className="text-sm leading-relaxed text-slate-700">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* İletişim */}
        <section
          id="contact"
          className="mt-16 grid gap-8 rounded-3xl bg-slate-900 px-6 py-8 text-slate-100 sm:mt-20 sm:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] sm:px-8"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300">
              İletişim
            </p>
            <h2 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
              Hemen Ulaşın, Halılarınızı Kapınızdan Alalım
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Telefon ya da WhatsApp üzerinden bize ulaştığınızda, en kısa süre
              içerisinde servis planlaması yapıyor ve halılarınızı kapınızdan
              teslim alıyoruz.
            </p>

            <div className="mt-5 grid gap-4 text-sm sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-sky-500/20 text-sky-300">
                  <PhoneCall className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-100">
                    Telefon & WhatsApp
                  </p>
                  <p className="mt-1 text-sm font-medium text-white">
                    0555 555 55 55
                  </p>
                  <p className="text-xs text-slate-400">
                    09:00 - 22:00 arası kesintisiz destek
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-100">
                    Adres
                  </p>
                  <p className="mt-1 text-sm text-slate-200">
                    Şanlıurfa Merkez ve Tüm İlçelere Servis
                  </p>
                  <p className="text-xs text-slate-400">
                    Detaylı adres bilgisi için arayabilirsiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-sky-700/50 bg-slate-950/40 p-4 text-xs text-slate-200 shadow-lg shadow-sky-900/40 sm:p-5">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-sky-300">
              Neden Fırat Halı Yıkama?
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-[2px] h-4 w-4 text-emerald-400" />
                <span>
                  <span className="font-medium">Hijyen garantisi:</span> Anti
                  alerjik ve antibakteriyel temizlik ürünleri kullanıyoruz.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Droplets className="mt-[2px] h-4 w-4 text-sky-300" />
                <span>
                  <span className="font-medium">Modern makineler:</span>{" "}
                  Derinlemesine yıkama ve tam kurutma.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="mt-[2px] h-4 w-4 text-amber-300" />
                <span>
                  <span className="font-medium">Güven veren hizmet:</span>{" "}
                  Zamanında teslimat, güler yüzlü ekip.
                </span>
              </li>
            </ul>

            <button
              onClick={handleWhatsAppClick}
              className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/50 transition hover:bg-emerald-600"
            >
              <WhatsAppIcon />
              WhatsApp ile İletişime Geç
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-300">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sol Taraf - Logo ve Tanıtım */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center sm:h-14 sm:w-14">
                  <Logo className="h-full w-full" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">
                    Fırat Halı Yıkama
                  </h3>
                  <p className="text-xs text-slate-400">Şanlıurfa</p>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                Şanlıurfa'nın güvenilir halı yıkama hizmeti. Profesyonel ekibimiz ve modern makinelerimizle halılarınıza en iyi bakımı sağlıyoruz.
              </p>
              {/* Sosyal Medya İkonları */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition hover:bg-sky-600 hover:text-white"
                  aria-label="Facebook"
                >
                  <Star className="h-4 w-4 text-sky-300" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition hover:bg-sky-600 hover:text-white"
                  aria-label="Instagram"
                >
                  <Sparkles className="h-4 w-4 text-amber-300" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition hover:bg-sky-600 hover:text-white"
                  aria-label="Twitter"
                >
                  <Wind className="h-4 w-4 text-emerald-300" />
                </a>
              </div>
            </div>

            {/* Orta Taraf - Adres */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-white">Adres</h4>
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
                <p className="text-sm leading-relaxed text-slate-400">
                  İMAM BAKIR MAH. 706 SK. C BLOK NO: 15 CD<br />
                  HALİLİYE / ŞANLIURFA
                </p>
              </div>
            </div>

            {/* Sağ Taraf - Harita ve Telefon */}
            <div className="space-y-4">
              <h4 className="text-base font-semibold text-white">İletişim</h4>
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 h-5 w-5 flex-shrink-0 text-sky-400" />
                <a
                  href="tel:05555555555"
                  className="text-sm font-medium text-white transition hover:text-sky-400"
                >
                  0555 555 55 55
                </a>
              </div>
              {/* Google Maps Placeholder */}
              <div className="mt-4 overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
                <div className="relative aspect-video w-full">
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
                    <div className="text-center">
                      <MapPin className="mx-auto h-8 w-8 text-slate-600" />
                      <p className="mt-2 text-xs text-slate-500">
                        Google Maps Haritası
                      </p>
                      <p className="mt-1 text-[10px] text-slate-600">
                        Harita buraya eklenecek
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alt Çizgi - Copyright */}
          <div className="mt-8 border-t border-slate-800 pt-6 text-center">
            <p className="text-xs text-slate-500">
              © 2026 Fırat Halı Yıkama - Tüm Hakları Saklıdır
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp & Call Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <button
            onClick={handleWhatsAppClick}
            className="group relative mx-auto flex w-full max-w-md items-center justify-center gap-3 glass rounded-2xl border border-white/30 bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4 shadow-modern-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(16,185,129,0.5)] sm:gap-4"
          >
            {/* Ping Animation */}
            <div className="absolute inset-0 animate-ping-slow rounded-2xl bg-emerald-400 opacity-20" />
            
            <div className="relative flex items-center gap-3">
              <div className="relative">
                <WhatsAppIcon />
                <div className="absolute -right-1 -top-1 h-3 w-3 animate-ping rounded-full bg-white" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white sm:text-base">
                  Fiyat Almak İçin Tıkla
                </p>
                <p className="text-xs text-emerald-50/90 sm:text-sm">
                  Hemen WhatsApp'tan yazın
                </p>
              </div>
              <ChevronRight className="h-5 w-5 text-white transition-transform group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className="h-4 w-4 fill-white"
    >
      <path d="M16.01 4.002c-6.627 0-12 5.373-12 12 0 2.116.552 4.083 1.52 5.8L4 28l6.39-1.49a11.93 11.93 0 0 0 5.62 1.43h.001c6.627 0 12-5.373 12-12s-5.373-11.998-12-11.998zm0 2.133c5.445 0 9.867 4.421 9.867 9.865 0 5.445-4.422 9.867-9.867 9.867a9.82 9.82 0 0 1-4.992-1.378l-.357-.211-3.79.885.806-3.696-.232-.38a9.81 9.81 0 0 1-1.502-5.087c0-5.444 4.422-9.865 9.867-9.865zm-2.632 3.2c-.24-.005-.496.002-.77.007-.248.004-.516.053-.786.36-.27.307-1.035 1.01-1.035 2.463 0 1.453 1.06 2.855 1.208 3.053.149.198 2.08 3.32 5.14 4.515 2.54 1.004 3.06.804 3.61.755.55-.05 1.78-.727 2.03-1.43.25-.703.25-1.304.175-1.43-.074-.124-.27-.198-.57-.347-.3-.149-1.78-.877-2.056-.977-.275-.1-.475-.149-.675.15-.2.298-.775.977-.95 1.177-.175.199-.35.224-.649.075-.3-.149-1.266-.467-2.41-1.489-.89-.793-1.49-1.771-1.665-2.07-.175-.298-.019-.459.131-.607.135-.134.3-.348.449-.522.149-.174.199-.298.299-.497.1-.199.05-.373-.025-.522-.075-.149-.663-1.644-.932-2.246-.245-.546-.5-.558-.74-.563z" />
    </svg>
  );
}

export default App;


