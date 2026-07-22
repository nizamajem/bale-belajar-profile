"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ClipboardCheck,
  Clock3,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  LineChart,
  MessageCircle,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const workflow = [
  ["Cek ringan", "Siswa mengerjakan asesmen singkat yang nyaman di HP dan mudah dipahami."],
  ["Baca pola", "BaleBelajar mengubah jawaban menjadi peta kompetensi yang rapi."],
  ["Pilih fokus", "Guru langsung tahu materi, siswa, dan kelas mana yang perlu dibantu dulu."],
  ["Aksi kelas", "Kelompok remedial dan pengayaan tersusun berdasarkan kebutuhan nyata."],
  ["Ukur dampak", "Sekolah punya bahan evaluasi yang jelas untuk keputusan berikutnya."],
];

const trustItems = [
  "Pilot mulai dari 1 kelas",
  "Dashboard guru yang siap dipakai",
  "Data kompetensi, bukan cuma nilai",
  "Laporan ramah guru dan orang tua",
];

const problemCards = [
  "Nilai akhir sering datang tanpa petunjuk jelas tentang materi yang harus dibantu.",
  "Guru perlu membaca pola satu kelas tanpa tenggelam di spreadsheet dan rekap manual.",
  "Siswa butuh arahan yang terasa personal, bukan cuma angka yang membuat bingung.",
  "Program remedial lebih kuat ketika dimulai dari data kebutuhan yang nyata.",
];

const benefitCards = [
  {
    icon: GraduationCap,
    title: "Untuk Siswa",
    text: "Hasil belajar terasa lebih positif: siswa tahu yang sudah dikuasai dan langkah latihan berikutnya.",
    tone: "bg-[#eff6ff] text-[#2563eb]",
  },
  {
    icon: UsersRound,
    title: "Untuk Guru",
    text: "Heatmap, siswa prioritas, dan kelompok tindak lanjut muncul dalam satu tampilan yang mudah dieksekusi.",
    tone: "bg-[#f0fdf4] text-[#16a34a]",
  },
  {
    icon: School,
    title: "Untuk Sekolah",
    text: "Punya data awal yang lebih kredibel untuk evaluasi program, diskusi guru, dan komunikasi orang tua.",
    tone: "bg-[#fff7ed] text-[#c2410c]",
  },
];

const faqs = [
  [
    "Apakah sekolah harus mengganti sistem yang sudah berjalan?",
    "Tidak. BaleBelajar bisa dicoba dari satu kelas dan satu asesmen diagnostik tanpa mengganggu sistem akademik sekolah.",
  ],
  [
    "Berapa lama pilot bisa dijalankan?",
    "Pilot awal dibuat ringkas: tentukan kelas, jalankan asesmen, baca dashboard, lalu evaluasi hasilnya bersama tim sekolah.",
  ],
  [
    "Apa yang diterima guru setelah asesmen?",
    "Guru mendapat ringkasan skor, peta kompetensi, siswa prioritas, dan rekomendasi tindak lanjut untuk remedial atau pengayaan.",
  ],
  [
    "Apakah hasilnya mudah dipahami orang tua?",
    "Ya. Bahasa laporan dibuat positif dan praktis agar orang tua memahami posisi belajar anak tanpa istilah teknis yang berlebihan.",
  ],
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <MetricsBand />
      <TrustStrip />
      <Problems />
      <Workflow />
      <Benefits />
      <DashboardSection />
      <PilotPackage />
      <FAQSection />
      <PilotSection />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="surface-grid relative min-h-[calc(100vh-76px)] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.98)_0%,rgba(237,250,255,0.96)_40%,rgba(239,253,245,0.98)_100%)]" />
      <div className="absolute inset-x-0 top-0 h-24 bg-white/78" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.86))]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-7 sm:px-6 md:pt-8 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex max-w-full items-start gap-2 rounded-full border border-[#bfdbfe] bg-white/94 px-3 py-2 text-left text-xs font-black leading-5 text-[#1d4ed8] shadow-sm sm:items-center sm:px-4 sm:text-sm"
            initial={{ opacity: 0, y: 14 }}
          >
            <Sparkles className="shrink-0" size={17} />
            <span className="min-w-0">Asesmen diagnostik yang ringan untuk siswa, tajam untuk keputusan sekolah.</span>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-balance-soft font-heading font-black leading-[1.04] text-[#172033]"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.06 }}
          >
            Bikin data belajar jadi langkah kelas yang jelas.
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-5 max-w-3xl text-base font-semibold leading-7 text-slate-600 sm:text-lg sm:leading-8"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.12 }}
          >
            BaleBelajar membantu guru menemukan kemampuan siswa, membaca pola
            kesulitan kelas, dan menyusun remedial yang lebih tepat tanpa rekap
            manual yang melelahkan.
          </motion.p>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 flex flex-col justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.18 }}
          >
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#22c55e] px-6 py-4 font-heading font-black text-white shadow-[0_8px_0_#129447] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href="/pilot"
            >
              Coba Pilot Gratis
              <ArrowRight size={19} />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border-2 border-slate-200 bg-white px-6 py-4 font-heading font-black text-slate-700 shadow-[0_8px_0_#d8e2ef] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href="#dashboard"
            >
              Intip Dashboard Guru
            </a>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-7 grid max-w-2xl grid-cols-1 gap-2 min-[380px]:grid-cols-3 sm:gap-3"
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.24 }}
          >
            {[
              ["1", "kelas untuk mulai"],
              ["3", "prioritas belajar"],
              ["7", "hari evaluasi awal"],
            ].map(([value, label]) => (
              <div className="rounded-[8px] border border-white bg-white/82 p-3 shadow-sm backdrop-blur" key={label}>
                <p className="font-heading text-xl font-black text-[#172033] sm:text-2xl">{value}</p>
                <p className="text-xs font-black uppercase text-slate-500">{label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            animate={{ opacity: 1 }}
            className="mt-8 flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0 }}
            transition={{ delay: 0.26 }}
          >
            {["Tanpa ganti sistem sekolah", "Bahasa laporan ramah", "Cocok untuk pilot cepat"].map(
              (item) => (
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-white/88 px-4 py-2 text-sm font-black text-slate-600 shadow-sm"
                  key={item}
                >
                  <Check className="text-[#22c55e]" size={16} />
                  {item}
                </span>
              ),
            )}
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="relative mx-auto mt-10 w-full max-w-6xl min-w-0"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ delay: 0.16 }}
        >
          <MascotOrbit />
          <HeroMockup />
        </motion.div>
      </div>
    </section>
  );
}

function Navbar() {
  const mobileLinks = [
    ["Cara Kerja", "#cara-kerja"],
    ["Manfaat", "#manfaat"],
    ["Dashboard", "#dashboard"],
    ["FAQ", "#faq"],
    ["Tentang", "/tentang"],
    ["Kontak", "/kontak"],
  ];

  return (
    <header className="sticky top-0 z-40 max-w-full border-b border-slate-200 bg-white/88 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link className="flex shrink-0 items-center gap-3" href="/">
          <span className="grid size-11 place-items-center rounded-[8px] bg-[#22c55e] text-white shadow-[0_6px_0_#129447]">
            <BookOpen size={24} strokeWidth={3} />
          </span>
          <span className="font-heading text-lg font-black sm:text-xl">BaleBelajar</span>
        </Link>
        <div className="hidden items-center gap-4 text-xs font-black text-slate-600 md:flex lg:gap-6 lg:text-sm">
          <Link href="/">Beranda</Link>
          <a className="whitespace-nowrap" href="#cara-kerja">Cara Kerja</a>
          <a href="#manfaat">Manfaat</a>
          <a href="#dashboard">Dashboard</a>
          <a href="#faq">FAQ</a>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <Link
            className="hidden rounded-[8px] bg-[#22c55e] px-4 py-3 font-heading text-sm font-black text-white shadow-[0_5px_0_#129447] sm:inline-flex"
            href="/pilot"
          >
            Coba Pilot
          </Link>
          <Link
            className="rounded-[8px] bg-[#22c55e] px-3 py-3 font-heading text-xs font-black text-white shadow-[0_5px_0_#129447] sm:hidden"
            href="/pilot"
          >
            Pilot
          </Link>
          <a
            className="rounded-[8px] border-2 border-slate-200 bg-white px-3 py-3 font-heading text-xs font-black text-slate-700 shadow-[0_5px_0_#d8e2ef] sm:px-4 sm:text-sm"
            href={`${appUrl}/login`}
          >
            Masuk Platform
          </a>
        </div>
      </nav>
      <div className="border-t border-slate-100 px-4 py-2 md:hidden">
        <div className="hide-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto">
          {mobileLinks.map(([label, href]) =>
            href.startsWith("/") ? (
              <Link
                className="shrink-0 rounded-full bg-[#f8fafc] px-4 py-2 text-xs font-black text-slate-600"
                href={href}
                key={href}
              >
                {label}
              </Link>
            ) : (
              <a
                className="shrink-0 rounded-full bg-[#f8fafc] px-4 py-2 text-xs font-black text-slate-600"
                href={href}
                key={href}
              >
                {label}
              </a>
            ),
          )}
        </div>
      </div>
    </header>
  );
}

function MascotOrbit() {
  return (
    <div className="pointer-events-none absolute -left-2 -top-6 z-10 hidden lg:block">
      <div className="bob-tilt rounded-[8px] bg-[#22c55e] p-4 shadow-[0_12px_0_#129447]">
        <div className="relative size-24 rounded-[8px] bg-white">
          <div className="blink-soft absolute left-6 top-8 size-4 rounded-full bg-[#172033]" />
          <div className="blink-soft absolute right-6 top-8 size-4 rounded-full bg-[#172033]" />
          <div className="absolute left-1/2 top-14 h-4 w-10 -translate-x-1/2 rounded-b-full border-b-[6px] border-[#172033]" />
          <BookOpen className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#22c55e]" size={24} />
        </div>
      </div>
    </div>
  );
}

function HeroMockup() {
  const heatmap = [92, 76, 58, 84, 88, 62, 54, 78, 95, 86, 80, 68];

  return (
    <div className="float-soft relative mx-auto w-full overflow-hidden rounded-[8px] border border-slate-200 bg-white p-2 shadow-[0_26px_80px_rgba(23,32,51,0.18)] sm:p-4">
      <div className="card-rise absolute right-4 top-16 hidden rounded-[8px] bg-white px-4 py-3 shadow-xl md:block">
        <p className="text-xs font-black uppercase text-slate-400">Saran otomatis</p>
        <p className="font-heading text-lg font-black text-[#22c55e]">Mulai dari Pecahan</p>
      </div>
      <div className="card-rise absolute bottom-4 left-5 hidden rounded-[8px] bg-[#172033] px-4 py-3 text-white shadow-xl md:block [animation-delay:0.8s]">
        <p className="text-xs font-black uppercase text-[#f9c74f]">Bale Buddy bilang</p>
        <p className="font-heading text-lg font-black">Kelas siap ditindak</p>
      </div>

      <div className="rounded-[8px] bg-[#f8fafc] p-3 sm:p-5">
        <div className="mb-5 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
          <div>
            <p className="text-sm font-black uppercase text-[#2563eb]">BaleBelajar Pilot Center</p>
            <h2 className="font-heading text-xl font-black sm:text-2xl">Kelas VI A Matematika</h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="w-fit rounded-full bg-[#dcfce7] px-3 py-1 text-sm font-black text-[#166534]">
              82% selesai
            </span>
            <span className="w-fit rounded-full bg-[#fff7ed] px-3 py-1 text-sm font-black text-[#c2410c]">
              18 butuh latihan
            </span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[8px] bg-white p-3 shadow-sm">
            <div className="min-w-0 overflow-hidden">
              <div className="w-full">
                <div className="mb-3 grid grid-cols-[56px_repeat(4,minmax(0,1fr))] gap-1 text-[10px] font-black text-slate-400 min-[390px]:grid-cols-[64px_repeat(4,minmax(0,1fr))] min-[390px]:gap-2 min-[390px]:text-xs">
                  <span>Siswa</span>
                  <span>Pecahan</span>
                  <span>Perband.</span>
                  <span>Data</span>
                  <span>Bangun</span>
                </div>
                <div className="grid grid-cols-[56px_repeat(4,minmax(0,1fr))] gap-1 min-[390px]:grid-cols-[64px_repeat(4,minmax(0,1fr))] min-[390px]:gap-2">
                  {["Aulia", "Bima", "Citra"].map((name, row) => (
                    <div className="contents" key={name}>
                      <div className="truncate rounded-[8px] bg-[#f8fafc] px-1.5 py-3 text-[11px] font-black min-[390px]:px-2 min-[390px]:text-xs">{name}</div>
                      {heatmap.slice(row * 4, row * 4 + 4).map((score, index) => (
                        <motion.div
                          className={[
                            "rounded-[8px] px-1 py-3 text-center font-heading text-sm font-black text-white shadow-sm min-[390px]:px-2",
                            score >= 80 && "bg-[#22c55e]",
                            score >= 60 && score < 80 && "bg-[#f9c74f] text-[#172033]",
                            score < 60 && "bg-[#ff6b6b]",
                          ]
                            .filter(Boolean)
                            .join(" ")}
                          initial={{ opacity: 0, scale: 0.86 }}
                          key={`${name}-${index}`}
                          transition={{ delay: (row * 4 + index) * 0.035 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                        >
                          {score}
                        </motion.div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            {[
              ["Prioritas minggu ini", "Pecahan dan soal cerita", "#2563eb"],
              ["Kelompok remedial", "3 kelompok belajar", "#22c55e"],
              ["Pesan untuk orang tua", "Bahasa positif siap dibagikan", "#ff8a00"],
            ].map(([label, value, color]) => (
              <div className="rounded-[8px] bg-white p-3 shadow-sm" key={label}>
                <span className="mb-2 block size-3 rounded-full" style={{ backgroundColor: color }} />
                <p className="font-heading font-black leading-6">{value}</p>
                <p className="text-xs font-bold text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-[8px] bg-[#172033] p-4 text-white">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-heading font-black">Rencana 7 hari</p>
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-[#f9c74f]">Siap dieksekusi</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {["Latihan fokus", "Remedial kecil", "Ukur ulang"].map((item, index) => (
              <div className="rounded-[8px] bg-white/10 p-3" key={item}>
                <span className="grid size-8 place-items-center rounded-[8px] bg-[#22c55e] font-heading font-black shadow-[0_4px_0_#129447]">
                  {index + 1}
                </span>
                <p className="mt-3 text-sm font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TrustStrip() {
  return (
    <section className="bg-[#172033] px-4 py-4 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3 md:justify-between">
        {trustItems.map((item) => (
          <div className="inline-flex items-center gap-2 text-sm font-black text-slate-200" key={item}>
            <ShieldCheck className="text-[#22c55e]" size={18} />
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function MetricsBand() {
  return (
    <section className="border-y border-slate-200 bg-white/80 py-5 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {[
          ["1 kelas", "mulai pilot kecil", ShieldCheck],
          ["3 fokus", "rekomendasi belajar", Target],
          ["7 hari", "evaluasi awal", LineChart],
        ].map(([value, label, Icon]) => (
          <motion.div
            className="rounded-[8px] bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            key={label as string}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Icon className="mb-3 text-[#2563eb]" size={24} />
            <p className="font-heading text-3xl font-black text-[#172033]">
              {value as string}
            </p>
            <p className="mt-1 font-bold text-slate-500">{label as string}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Problems() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#ff8a00]">
            Kenapa ini penting
          </p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Nilai saja belum cukup untuk menentukan bantuan belajar.
          </h2>
          <p className="mt-4 font-semibold leading-8 text-slate-600">
            Sekolah butuh peta yang lebih detail: kompetensi apa yang sudah
            kuat, bagian mana yang tertinggal, dan intervensi apa yang paling
            masuk akal untuk dimulai.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {problemCards.map((item, index) => (
            <motion.div
              className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 12 }}
              key={item}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Check className="mb-3 text-[#22c55e]" size={22} />
              <p className="font-bold leading-7 text-slate-600">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section
      className="relative overflow-hidden bg-[#172033] px-4 py-14 text-white sm:px-6 lg:px-8"
      id="cara-kerja"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-white/20" />
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase text-[#f9c74f]">Cara kerja</p>
        <h2 className="section-title text-balance-soft font-heading mt-2 max-w-3xl font-black">
          Dari cek kemampuan sampai aksi kelas, alurnya dibuat ringan.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {workflow.map(([title, text], index) => (
            <motion.div
              className="relative rounded-[8px] bg-white/10 p-5"
              initial={{ opacity: 0, y: 14 }}
              key={title}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.14)" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="grid size-10 place-items-center rounded-[8px] bg-[#22c55e] font-heading font-black shadow-[0_5px_0_#129447]">
                {index + 1}
              </span>
              <p className="font-heading mt-5 text-xl font-black">{title}</p>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="manfaat">
      <div className="mb-7 max-w-3xl">
        <p className="text-sm font-black uppercase text-[#2563eb]">Manfaat</p>
        <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
          Lebih cepat untuk guru, lebih ramah untuk siswa, lebih jelas untuk sekolah.
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefitCards.map((item, index) => (
          <motion.article
            className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 14 }}
            key={item.title}
            transition={{ delay: index * 0.06 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className={`grid size-12 place-items-center rounded-[8px] ${item.tone}`}>
              <item.icon size={26} />
            </span>
            <h3 className="font-heading mt-5 text-2xl font-black">{item.title}</h3>
            <p className="mt-3 font-semibold leading-7 text-slate-600">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function DashboardSection() {
  return (
    <section
      className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8"
      id="dashboard"
    >
      <div>
        <p className="text-sm font-black uppercase text-[#22c55e]">
          Intip dashboard
        </p>
        <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
          Guru tidak perlu menebak harus mulai dari mana.
        </h2>
        <p className="mt-4 font-semibold leading-8 text-slate-600">
          Dashboard menampilkan prioritas belajar, siswa yang perlu dukungan,
          dan kelompok tindak lanjut dalam bahasa yang praktis untuk dipakai di kelas.
        </p>
      </div>
      <DashboardPreview />
    </section>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-[8px] border border-slate-200 bg-white p-3 shadow-xl sm:p-5">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          [Target, "3", "prioritas belajar", "#2563eb"],
          [BarChart3, "76", "rata-rata kelas", "#22c55e"],
          [ClipboardCheck, "18", "perlu latihan", "#ff6b6b"],
        ].map(([Icon, value, label, color], index) => (
          <motion.div
            className="rounded-[8px] bg-[#f8fafc] p-4"
            initial={{ opacity: 0, y: 12 }}
            key={label as string}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Icon style={{ color: color as string }} size={24} />
            <p className="font-heading mt-3 text-3xl font-black">
              {value as string}
            </p>
            <p className="text-sm font-bold text-slate-500">{label as string}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-4 rounded-[8px] bg-[#172033] p-4 text-white sm:p-5">
        <HeartHandshake className="text-[#f9c74f]" size={28} />
        <h3 className="font-heading mt-4 text-2xl font-black">
          Kelompok belajar berbasis kebutuhan
        </h3>
        <p className="mt-2 font-semibold leading-7 text-slate-300">
          Siswa dengan pola kesulitan serupa dapat dikelompokkan lebih cepat,
          sehingga tindak lanjut kelas tidak lagi bergantung pada perkiraan.
        </p>
        <div className="mt-5 space-y-3">
          {[
            ["Perbandingan", "8 siswa", "72%"],
            ["Soal cerita", "6 siswa", "58%"],
            ["Pengayaan", "12 siswa", "91%"],
          ].map(([label, value, width]) => (
            <div key={label}>
              <div className="mb-2 flex justify-between gap-3 text-sm font-black">
                <span>{label}</span>
                <span className="shrink-0">{value}</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/12">
                <div
                  className="meter-sweep progress-grow h-full rounded-full bg-[#22c55e]"
                  style={{ "--target-width": width } as React.CSSProperties}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PilotPackage() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#2563eb]">Paket pilot</p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Coba kecil dulu, lihat dampaknya dengan jelas.
          </h2>
          <p className="mt-4 font-semibold leading-8 text-slate-600">
            Pilot dibuat supaya sekolah bisa merasakan alurnya tanpa komitmen
            besar di awal. Mulai dari satu kelas, baca hasilnya, lalu putuskan
            langkah berikutnya dengan data.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [Clock3, "Setup cepat", "Mulai dari satu kelas, satu mapel, dan asesmen diagnostik yang relevan."],
            [Target, "Fokus yang jelas", "Guru melihat materi yang paling perlu dilatih lebih dulu."],
            [UsersRound, "Kelompok belajar", "Siswa dengan kebutuhan serupa lebih mudah ditangani bersama."],
            [TrendingUp, "Evaluasi rapi", "Sekolah punya data awal untuk menentukan kelanjutan program."],
          ].map(([Icon, title, text], index) => (
            <motion.div
              className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 12 }}
              key={title as string}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Icon className="text-[#2563eb]" size={24} />
              <h3 className="font-heading mt-4 text-xl font-black">{title as string}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{text as string}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8" id="faq">
      <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#ff8a00]">Pertanyaan umum</p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Sebelum mulai, ini yang biasanya ditanyakan sekolah.
          </h2>
          <p className="mt-4 font-semibold leading-8 text-slate-600">
            Pilot dirancang jelas, terukur, dan tidak rumit agar tim sekolah
            bisa fokus pada manfaatnya, bukan kerepotan teknisnya.
          </p>
        </div>
        <div className="grid gap-3">
          {faqs.map(([question, answer], index) => (
            <motion.article
              className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 12 }}
              key={question}
              transition={{ delay: index * 0.04 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex gap-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-[#eff6ff] text-[#2563eb]">
                  <HelpCircle size={21} />
                </span>
                <div className="min-w-0">
                  <h3 className="font-heading text-lg font-black text-[#172033]">
                    {question}
                  </h3>
                  <p className="mt-2 font-semibold leading-7 text-slate-600">
                    {answer}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PilotSection() {
  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[8px] bg-[#22c55e] text-white shadow-[0_10px_0_#129447] lg:grid-cols-[1fr_0.8fr]">
        <div className="p-7 sm:p-9">
          <h2 className="font-heading text-3xl font-black sm:text-4xl">
            Siap melihat kelas Anda dari sudut pandang yang lebih jelas?
          </h2>
          <p className="mt-3 max-w-2xl font-bold leading-7 text-white/88">
            Ajukan pilot satu kelas. Kami bantu siapkan asesmen, baca hasil,
            dan ubah datanya menjadi langkah belajar yang bisa langsung dicoba.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-white px-5 py-4 font-heading font-black text-[#15803d] shadow-[0_6px_0_#bbf7d0]"
            href="/pilot"
          >
            Mulai Pilot Gratis
            <ArrowRight size={19} />
          </Link>
        </div>
        <div className="hidden bg-white/14 p-7 lg:block">
          <div className="rounded-[8px] bg-white p-5 text-[#172033]">
            <MessageCircle className="text-[#22c55e]" size={28} />
            <p className="font-heading mt-4 text-2xl font-black">
              Dari diskusi kebutuhan sampai evaluasi hasil, kami dampingi.
            </p>
            <p className="mt-2 font-semibold leading-7 text-slate-600">
              Mulai dari kebutuhan sekolah, kelas pilot, asesmen pertama,
              sampai ringkasan tindak lanjut yang siap dibahas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-xl font-black">BaleBelajar</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            Platform asesmen diagnostik yang membantu sekolah memahami siswa
            lebih cepat, lebih ramah, dan lebih berbasis data.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-500">
          <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
          <Link href="/ketentuan-penggunaan">Ketentuan</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
      </div>
    </footer>
  );
}
