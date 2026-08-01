"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
  Check,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Compass,
  Download,
  Eye,
  FileSearch,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  History,
  Languages,
  LineChart,
  Lock,
  Medal,
  MessageCircle,
  PawPrint,
  Puzzle,
  Scale,
  Search,
  School,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  UsersRound,
} from "lucide-react";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";
const showLegacySections = false;

const workflow = [
  ["Tanya impian", "Detektif, dokter hewan, duta bahasa, atau jalur lain — siswa pilih sendiri."],
  ["Buka peta", "BaleBelajar baca fondasi yang sudah kuat dan yang masih bolong."],
  ["Racik jalur", "Kurikulum kecil tersusun dari dasar, bukan daftar acak."],
  ["Jalankan misi", "Misi harian yang nyambung sama cita-citanya."],
  ["Lihat tumbuh", "Progresnya lebih hidup dari sekadar nilai akhir."],
];

const trustItems = [
  "Tiap pelajaran dirancang punya alasan",
  "Cita-cita diubah jadi peta belajar, bukan slogan",
  "Mulai dari fondasi paling dasar, bukan loncat",
  "Progres bisa diceritakan ke guru dan orang tua, bukan cuma angka",
];

const problemCards = [
  "“Ini belajar buat apa?” — lalu penasaran itu hilang.",
  "Pelajaran berdiri sendiri, padahal cita-cita butuh semuanya sekaligus.",
  "Personalisasi itu berat kalau dibuat manual dari nol.",
  "Orang tua cuma dapat angka, bukan cerita progres.",
];

const benefitCards = [
  {
    icon: GraduationCap,
    title: "Untuk Siswa",
    text: "Belajar terasa seperti buka level baru menuju impiannya.",
    tone: "bg-[#FFF3E0] text-[#0E3A5F]",
  },
  {
    icon: UsersRound,
    title: "Untuk Guru",
    text: "Fondasi yang perlu diperkuat dan misi siap pakai — langsung kelihatan.",
    tone: "bg-[#f0fdf4] text-[#16a34a]",
  },
  {
    icon: School,
    title: "Untuk Sekolah",
    text: "Peta talenta yang lebih hidup buat program akademik dan orang tua.",
    tone: "bg-[#fff7ed] text-[#c2410c]",
  },
];

const careerTracks = [
  {
    icon: Search,
    title: "BaleDetective",
    text: "Baca petunjuk, susun bukti, pakai logika dan sains sederhana.",
    locked: false,
  },
  {
    icon: PawPrint,
    title: "BaleVet",
    text: "Rawat hewan sambil belajar sains, empati, dan data kesehatan.",
    locked: true,
  },
  {
    icon: Languages,
    title: "BaleLanguage",
    text: "Belajar bahasa, budaya, komunikasi, dan percaya diri.",
    locked: true,
  },
  {
    icon: Brain,
    title: "BaleCode",
    text: "Latih logika, pola, problem solving, dan proyek aplikasi kecil.",
    locked: true,
  },
  {
    icon: HeartHandshake,
    title: "BaleMed",
    text: "Kenali tubuh manusia, hidup sehat, dan keputusan berbasis bukti.",
    locked: true,
  },
  {
    icon: Compass,
    title: "BaleBuild",
    text: "Latih imajinasi ruang, desain, matematika visual, dan presentasi.",
    locked: true,
  },
  {
    icon: Target,
    title: "BaleBiz",
    text: "Cari masalah, buat solusi, hitung biaya, dan jual ide.",
    locked: true,
  },
  {
    icon: Sparkles,
    title: "BaleCreator",
    text: "Bangun ide, naskah, visual, storytelling, dan etika digital.",
    locked: true,
  },
  {
    icon: GraduationCap,
    title: "BaleTeach",
    text: "Latih cara menjelaskan, membantu teman, dan memimpin belajar.",
    locked: true,
  },
];

const curiosityCards = [
  ["Pilih Kelas", "Ada 9 kelas cita-cita yang bisa dicoba."],
  ["Buka Misi", "Pelajaran jadi tantangan kecil yang punya tujuan."],
  ["Lihat Hasil", "Kemampuan anak terlihat, bukan cuma nilai akhir."],
];

const caseEvidence = [
  ["Jadwal ruangan", "kuat"],
  ["Log login komputer", "kuat"],
  ["Pernyataan 4 siswa", "sedang"],
  ["Riwayat perubahan file", "kuat"],
  ["Foto ruangan", "lemah"],
  ["Pesan grup", "sedang"],
];

const detectiveSkills = [
  { icon: Eye, label: "Observasi" },
  { icon: Brain, label: "Penalaran Logis" },
  { icon: Puzzle, label: "Memori Kerja" },
  { icon: History, label: "Kronologi" },
  { icon: FileSearch, label: "Evaluasi Sumber" },
  { icon: Scale, label: "Etika" },
];

const faqs = [
  [
    "Apakah BaleBelajar hanya untuk satu pelajaran?",
    "Tidak. Untuk awal, kelas Detektif dibuka dulu sebagai contoh. Kelas lain akan dibuka bertahap.",
  ],
  [
    "Kalau anak memilih cita-cita tertentu, apa yang terjadi?",
    "Anak akan mendapat misi belajar yang sesuai dengan kelas pilihannya. Misinya pendek dan dimulai dari dasar.",
  ],
  [
    "Apakah sekolah harus mengganti kurikulum?",
    "Tidak. BaleBelajar jadi lapisan pendamping di atas kurikulum yang sudah ada.",
  ],
  [
    "Apa yang dilihat guru dan orang tua?",
    "Guru dan orang tua bisa melihat anak sudah kuat di bagian apa, perlu latihan apa, dan sertifikat apa yang didapat.",
  ],
  [
    "Kenapa sekolah perlu menggunakan BaleBelajar?",
    "Sekolah bisa mencoba dari satu kelas dulu. Setelah itu baru melihat apakah cocok untuk dipakai lebih luas.",
  ],
];

const valueCards = [
  ["Untuk Kepala Sekolah", "Bukti progres yang gampang dijelaskan ke orang tua dan rapat.", School],
  ["Untuk Guru", "Rekomendasi misi siap pakai, tanpa merancang dari nol.", GraduationCap],
  ["Untuk Siswa", "Belajar terasa personal, bukan daftar tugas tanpa ujung.", Sparkles],
  ["Untuk Orang Tua", "Ringkasan manusiawi: anak tumbuh ke arah apa, dan caranya mendukung.", HeartHandshake],
];

const premiumReasons = [
  ["Lebih dari LMS", "Bukan tempat unggah materi — kami baca arah belajar siswa."],
  ["Lebih dari nilai", "Nilai akhir saja tidak cukup. Sekolah butuh mastery dan tindak lanjut."],
  ["Lebih dari game", "Game cuma pintu masuk. Di baliknya ada peta kemampuan nyata."],
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <SeoJsonLd />
      <Navbar />
      <SimpleHero />
      <CareerBlueprint />
      <CertificateSection />
      <FAQSection />
      <PilotSection />
      <Footer />
      {showLegacySections ? (
        <>
          <Hero />
          <MetricsBand />
          <TrustStrip />
          <CuriosityLoop />
          <DetectiveShowcase />
          <Problems />
          <Workflow />
          <Benefits />
          <DashboardSection />
          <PremiumValue />
          <PilotPackage />
          <PricingSignal />
        </>
      ) : null}
    </main>
  );
}

function SimpleHero() {
  return (
    <section className="surface-grid relative overflow-hidden bg-[#f7fbff]">
      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 text-center sm:px-6 lg:px-8">
        <motion.div animate={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 14 }}>
          <div className="mx-auto mb-6 grid size-32 place-items-center rounded-[8px] bg-[#22c55e] shadow-[0_10px_0_#129447] sm:size-40">
            <div className="relative size-24 rounded-[8px] bg-white sm:size-28">
              <div className="absolute left-6 top-8 size-4 rounded-full bg-[#172033] sm:left-7" />
              <div className="absolute right-6 top-8 size-4 rounded-full bg-[#172033] sm:right-7" />
              <div className="absolute left-1/2 top-14 h-4 w-10 -translate-x-1/2 rounded-b-full border-b-[6px] border-[#172033]" />
              <BookOpen className="absolute bottom-3 left-1/2 -translate-x-1/2 text-[#22c55e]" size={28} />
            </div>
          </div>

          <p className="text-sm font-black uppercase text-[#0E3A5F]">BaleBelajar</p>
          <h1 className="hero-title text-balance-soft font-heading mx-auto mt-3 max-w-4xl font-black leading-[1.04] text-[#172033]">
            Belajar jadi lebih seru saat anak tahu tujuannya.
          </h1>
          <p className="mx-auto mt-4 max-w-xl font-bold leading-7 text-slate-500">
            Anak memilih kelas cita-cita, mengerjakan misi pendek, lalu mendapat sertifikat.
          </p>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#22c55e] px-6 py-4 font-heading font-black text-white shadow-[0_8px_0_#129447] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href="/pilot"
            >
              Coba Pilot Sekolah
              <ArrowRight size={19} />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border-2 border-slate-200 bg-white px-6 py-4 font-heading font-black text-slate-700 shadow-[0_8px_0_#d8e2ef] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href={`${appUrl}/student/login`}
            >
              Masuk Platform
            </a>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4 text-xs font-bold text-slate-500">
            <Link className="hover:text-[#0E3A5F]" href="/kebijakan-privasi">
              Kebijakan Privasi
            </Link>
            <Link className="hover:text-[#0E3A5F]" href="/ketentuan-penggunaan">
              Ketentuan Penggunaan
            </Link>
          </div>
        </motion.div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-10 grid max-w-6xl gap-3 sm:grid-cols-3 lg:grid-cols-5"
          initial={{ opacity: 0, y: 16 }}
          transition={{ delay: 0.12 }}
        >
          {heroCareerCards.map((career) => (
            <article className="overflow-hidden rounded-[8px] border border-slate-200 bg-white text-left shadow-sm" key={career.title}>
              <div className="p-4 text-white" style={{ background: career.gradient }}>
                <career.icon size={23} />
                <p className="font-heading mt-3 text-base font-black">{career.title}</p>
                <p className="mt-1 text-xs font-bold leading-5 text-white/78">{career.tagline}</p>
              </div>
              <div className="p-3">
                <span
                  className={[
                    "inline-flex w-full items-center justify-center rounded-[8px] px-3 py-2 text-xs font-black",
                    career.locked ? "bg-slate-100 text-slate-400" : "bg-[#dcfce7] text-[#166534]",
                  ].join(" ")}
                >
                  {career.locked ? "Segera dibuka" : "Aktif"}
                </span>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
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
            className="mb-5 inline-flex max-w-full items-start gap-2 rounded-full border border-[#F1D8B4] bg-white/94 px-3 py-2 text-left text-xs font-black leading-5 text-[#0E3A5F] shadow-sm sm:items-center sm:px-4 sm:text-sm"
            initial={{ opacity: 0, y: 14 }}
          >
            <Sparkles className="shrink-0" size={17} />
            <span className="min-w-0">Pertanyaan yang paling sering kami dengar dari siswa SMP-SMA</span>
          </motion.div>

          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="hero-title text-balance-soft font-heading font-black leading-[1.04] text-[#172033]"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.06 }}
          >
            &ldquo;Buat apa sih aku belajar ini?&rdquo;
          </motion.h1>

          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-4 max-w-xl text-sm font-bold leading-6 text-slate-500 sm:text-base"
            initial={{ opacity: 0, y: 18 }}
            transition={{ delay: 0.12 }}
          >
            Siswa pilih cita-citanya dulu. BaleBelajar ubah jadi misi belajar
            harian yang punya alasan — guru tetap pantau progresnya.
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
              Ajukan Pilot Sekolah
              <ArrowRight size={19} />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border-2 border-slate-200 bg-white px-6 py-4 font-heading font-black text-slate-700 shadow-[0_8px_0_#d8e2ef] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href="#kasus"
            >
              Coba Kasus Aslinya
            </a>
          </motion.div>

          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-7 grid max-w-2xl grid-cols-1 gap-2 min-[380px]:grid-cols-3 sm:gap-3"
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.24 }}
          >
            {[
              ["3 menit", "siswa merasakan misi pertama"],
              ["5 fondasi", "terbaca lintas pelajaran"],
              ["1 dashboard", "untuk tindak lanjut sekolah"],
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
            {["Bikin siswa penasaran duluan", "Progresnya gampang diceritakan ke orang tua", "Didesain buat HP siswa, bukan cuma laptop guru"].map(
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
    ["Kelas", "#akademi"],
    ["Sertifikat", "#sertifikat"],
    ["FAQ", "#faq"],
    ["Tentang", "/tentang"],
    ["Kontak", "/kontak"],
    ["Privasi", "/kebijakan-privasi"],
    ["Ketentuan", "/ketentuan-penggunaan"],
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
          <a className="whitespace-nowrap" href="#akademi">Kelas</a>
          <a href="#sertifikat">Sertifikat</a>
          <a href="#faq">FAQ</a>
          <Link href="/tentang">Tentang</Link>
          <Link href="/kontak">Kontak</Link>
          <Link href="/kebijakan-privasi">Privasi</Link>
          <Link href="/ketentuan-penggunaan">Ketentuan</Link>
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

const heroCareerCards = [
  {
    icon: Search,
    title: "BaleDetective",
    tagline: "Amati petunjuk, uji bukti, pecahkan misteri.",
    gradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
    locked: false,
  },
  {
    icon: PawPrint,
    title: "BaleVet",
    tagline: "Sains hewan, empati, dan data kesehatan.",
    gradient: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
    locked: true,
  },
  {
    icon: Languages,
    title: "BaleLanguage",
    tagline: "Bahasa, budaya, dan komunikasi.",
    gradient: "linear-gradient(135deg, #db2777 0%, #9d174d 100%)",
    locked: true,
  },
  {
    icon: Brain,
    title: "BaleCode",
    tagline: "Logika, pola, dan aplikasi kecil.",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1e40af 100%)",
    locked: true,
  },
  {
    icon: HeartHandshake,
    title: "BaleMed",
    tagline: "Tubuh manusia dan hidup sehat.",
    gradient: "linear-gradient(135deg, #0891b2 0%, #155e75 100%)",
    locked: true,
  },
  {
    icon: Compass,
    title: "BaleBuild",
    tagline: "Ruang, desain, dan matematika visual.",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
    locked: true,
  },
  {
    icon: Target,
    title: "BaleBiz",
    tagline: "Masalah, solusi, biaya, dan ide.",
    gradient: "linear-gradient(135deg, #ea580c 0%, #9a3412 100%)",
    locked: true,
  },
  {
    icon: Sparkles,
    title: "BaleCreator",
    tagline: "Ide, naskah, visual, dan etika digital.",
    gradient: "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)",
    locked: true,
  },
  {
    icon: GraduationCap,
    title: "BaleTeach",
    tagline: "Menjelaskan, membantu, dan memimpin belajar.",
    gradient: "linear-gradient(135deg, #16a34a 0%, #166534 100%)",
    locked: true,
  },
];

function HeroMockup() {
  return (
    <div className="float-soft relative mx-auto w-full overflow-hidden rounded-[8px] border border-slate-200 bg-white p-2 shadow-[0_26px_80px_rgba(23,32,51,0.18)] sm:p-4">
      <div className="card-rise sparkle-pop absolute right-4 top-16 hidden rounded-[8px] bg-white px-4 py-3 shadow-xl md:block">
        <p className="text-xs font-black uppercase text-slate-400">Tampilan siswa</p>
        <p className="font-heading text-lg font-black text-[#22c55e]">Bukan dashboard guru</p>
      </div>
      <div className="card-rise absolute bottom-4 left-5 hidden rounded-[8px] bg-[#172033] px-4 py-3 text-white shadow-xl md:block [animation-delay:0.8s]">
        <p className="text-xs font-black uppercase text-[#F4B400]">Ini yang dilihat siswa</p>
        <p className="font-heading text-lg font-black">9 akademi, mulai dari satu misi</p>
      </div>

      <div className="rounded-[8px] bg-[#f8fafc] p-3 sm:p-5">
        <p className="text-sm font-black uppercase text-[#0E3A5F]">BaleCita Universe</p>
        <h2 className="font-heading text-xl font-black sm:text-2xl">
          Pilih akademi yang bikin kamu penasaran.
        </h2>

        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {heroCareerCards.map((career, index) => (
            <motion.article
              className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 10 }}
              key={career.title}
              transition={{ delay: index * 0.06 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="p-4 text-white" style={{ background: career.gradient }}>
                <career.icon size={22} />
                <p className="font-heading mt-3 text-sm font-black leading-5">{career.title}</p>
                <p className="mt-1 text-xs font-bold leading-5 text-white/78">{career.tagline}</p>
              </div>
              <div className="p-3">
                {career.locked ? (
                  <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-[8px] bg-slate-100 px-3 py-2 text-xs font-black text-slate-400">
                    <Lock size={13} />
                    Segera dibuka
                  </span>
                ) : (
                  <span className="inline-flex w-full items-center justify-center gap-1.5 rounded-[8px] bg-[#22c55e] px-3 py-2 text-xs font-black text-white shadow-[0_4px_0_#129447]">
                    Mulai dari sini
                    <ArrowRight size={13} />
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-4 rounded-[8px] bg-[#172033] p-4 text-white">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="font-heading font-black">Kurikulum dari dasar</p>
            <span className="pulse-soft rounded-full bg-white/10 px-3 py-1 text-xs font-black text-[#F4B400]">Personal</span>
          </div>
          <div className="grid gap-2 sm:grid-cols-3">
            {["Fondasi", "Misi profesi", "Karya kecil"].map((item, index) => (
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
        <span className="hidden shrink-0 text-xs font-black uppercase tracking-wide text-[#F4B400] md:inline">
          Prinsip kami
        </span>
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
          ["Semua mapel", "fondasi lintas pelajaran", ShieldCheck],
          ["Banyak jalur", "cita-cita jadi kurikulum", Target],
          ["Bertahap", "dari dasar sampai proyek", LineChart],
        ].map(([value, label, Icon]) => (
          <motion.div
            className="rounded-[8px] bg-white p-5 shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            key={label as string}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <Icon className="mb-3 text-[#0E3A5F]" size={24} />
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

function SeoJsonLd() {
  const profileUrl = process.env.NEXT_PUBLIC_PROFILE_URL ?? "http://localhost:3001";
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "BaleBelajar",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    url: profileUrl,
    description:
      "Kelas belajar berbasis cita-cita dengan misi pendek, sertifikat, dan laporan yang mudah dipahami sekolah.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "IDR",
      category: "School pilot program",
    },
    audience: {
      "@type": "EducationalAudience",
      educationalRole: "student",
    },
    provider: {
      "@type": "Organization",
      name: "BaleBelajar",
      url: profileUrl,
    },
  };

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}

function CuriosityLoop() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[8px] bg-[#172033] p-5 text-white shadow-[0_10px_0_#0f172a] sm:p-7">
        <div className="grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#F4B400]">
              Yang bikin penasaran
            </p>
            <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
              Dalam beberapa klik, anak bisa melihat belajar itu menuju ke mana.
            </h2>
            <p className="mt-4 font-semibold leading-6 text-slate-400">
              Pilih akademi, lihat misi, langsung paham buat apa belajar hari
              ini.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#22c55e] px-5 py-4 font-heading font-black text-white shadow-[0_6px_0_#129447] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
                href="/pilot"
              >
                Ajukan Pilot Sekolah
                <ArrowRight size={18} />
              </Link>
              <a
                className="inline-flex items-center justify-center gap-2 rounded-[8px] border-2 border-white/14 bg-white/8 px-5 py-4 font-heading font-black text-white transition hover:bg-white/12"
                href={`${appUrl}/login`}
              >
                Masuk Platform
              </a>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {curiosityCards.map(([title, text], index) => (
              <motion.article
                className="interactive-card rounded-[8px] border border-white/12 bg-white/10 p-5"
                initial={{ opacity: 0, y: 16 }}
                key={title}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="mission-node-active grid size-10 place-items-center rounded-[8px] bg-[#F4B400] font-heading font-black text-[#172033]">
                  {index + 1}
                </span>
                <h3 className="font-heading mt-4 text-xl font-black">{title}</h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CareerBlueprint() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="akademi">
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#0E3A5F]">
            9 Kelas Cita-Cita
          </p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Anak pilih kelas. BaleBelajar siapkan misinya.
          </h2>
          <p className="mt-4 font-semibold leading-7 text-slate-500">
            Bukan cuma disuruh rajin belajar — BaleBelajar tunjukkan misi
            kecil apa yang bisa dimulai hari ini.
          </p>
          <div className="mt-6 rounded-[8px] bg-[#172033] p-5 text-white">
            <Compass className="text-[#F4B400]" size={28} />
            <p className="font-heading mt-4 text-2xl font-black">
              Sederhana: pilih kelas, mulai misi, lihat hasil.
            </p>
            <p className="mt-2 font-semibold leading-6 text-slate-400">
              Dari &ldquo;aku mau jadi detektif&rdquo; jadi misi baca
              petunjuk, sampai proyek investigasi kecil.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {careerTracks.map((item, index) => (
            <motion.article
              className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 12 }}
              key={item.title}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="flex items-start justify-between gap-2">
                <span className="grid size-12 place-items-center rounded-[8px] bg-[#FFF3E0] text-[#0E3A5F]">
                  <item.icon size={25} />
                </span>
                {item.locked ? (
                  <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-black text-slate-400">
                    <Lock size={11} />
                    Segera
                  </span>
                ) : null}
              </div>
              <h3 className="font-heading mt-4 text-xl font-black">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetectiveShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8" id="kasus">
      <motion.div
        className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-xl"
        initial={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <div className="bg-[#172033] p-6 text-white sm:p-8">
          <p className="text-sm font-black uppercase text-[#F4B400]">Contoh misi BaleDetective</p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Misi pendek, seru, dan aman untuk belajar berpikir kritis.
          </h2>
          <p className="mt-3 max-w-2xl font-semibold leading-6 text-slate-400">
            Siswa melihat kasus, memilih bukti, lalu belajar dari keputusannya.
          </p>
        </div>

        <div className="p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#FFF3E0] px-3 py-1 text-xs font-black text-[#0E3A5F]">10-20 menit</span>
            <span className="rounded-full bg-[#f0fdf4] px-3 py-1 text-xs font-black text-[#16a34a]">Rank Cadet</span>
            <span className="rounded-full bg-[#fff7ed] px-3 py-1 text-xs font-black text-[#c2410c]">Aman dan etis</span>
          </div>
          <h3 className="font-heading mt-3 text-2xl font-black">Boss Case: Misteri Dokumen Presentasi</h3>
          <p className="mt-2 max-w-2xl font-semibold leading-6 text-slate-500">
            File presentasi tim hilang. 4 siswa pakai ruangan di jam berbeda.
            Tugasnya: selidiki — tanpa langsung menuduh.
          </p>

          <p className="mt-6 text-xs font-black uppercase text-slate-400">Evidence board</p>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {caseEvidence.map(([label, strength]) => (
              <div
                className="flex items-center gap-2 rounded-[8px] border border-slate-200 bg-[#f8fafc] px-3 py-2.5"
                key={label}
              >
                <span
                  className={[
                    "size-2 shrink-0 rounded-full",
                    strength === "kuat" && "bg-[#22c55e]",
                    strength === "sedang" && "bg-[#F4B400]",
                    strength === "lemah" && "bg-slate-300",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                />
                <span className="text-sm font-bold text-slate-600">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[8px] bg-[#fff7ed] p-5">
            <p className="text-xs font-black uppercase text-[#c2410c]">Pertanyaan ke siswa</p>
            <p className="font-heading mt-2 text-lg font-black leading-6 text-[#172033]">
              &ldquo;Bukti ini cukup buat nuduh salah satu dari mereka?&rdquo;
            </p>
            <p className="mt-2 text-sm font-bold leading-6 text-slate-500">
              Jawabannya: belum cukup. Siswa boleh memilih &ldquo;belum cukup bukti&rdquo;
              kalau datanya belum kuat.
            </p>
          </div>

          <p className="mt-6 text-xs font-black uppercase text-slate-400">Skill yang dilatih</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {detectiveSkills.map((skill) => (
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-1.5 text-xs font-black text-slate-600"
                key={skill.label}
              >
                <skill.icon className="text-[#0E3A5F]" size={14} />
                {skill.label}
              </span>
            ))}
          </div>

          <Link
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#22c55e] px-5 py-4 font-heading font-black text-white shadow-[0_6px_0_#129447] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
            href="/pilot"
          >
            Ajukan Pilot Sekolah
            <ArrowRight size={18} />
          </Link>
        </div>
      </motion.div>
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
            Anak tidak cuma butuh nilai. Mereka butuh alasan untuk penasaran.
          </h2>
          <p className="mt-4 font-semibold leading-7 text-slate-500">
            Dekat dengan impian, siswa lebih mudah bertanya dan kembali lagi.
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
        <p className="text-sm font-black uppercase text-[#F4B400]">Cara kerja</p>
        <h2 className="section-title text-balance-soft font-heading mt-2 max-w-3xl font-black">
          Tidak perlu mulai besar. Mulai dari satu impian, lalu lihat jalurnya terbuka.
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
        <p className="text-sm font-black uppercase text-[#0E3A5F]">Manfaat</p>
        <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
          Bukan cuma belajar lebih rapi. Belajar jadi terasa milik siswa.
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

function CertificateSection() {
  const proofItems = [
    "Misi yang selesai terlihat jelas",
    "Kemampuan anak mudah dibaca orang tua",
    "Sertifikat jadi bukti belajar",
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8" id="sertifikat">
      <div className="surface-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-[#c2410c]">Contoh sertifikat</p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Setelah menyelesaikan kelas, anak mendapat sertifikat.
          </h2>
          <p className="mt-4 font-semibold leading-7 text-slate-500">
            Sertifikat berisi nama anak, kelas yang selesai, nilai, kemampuan yang naik,
            dan saran kelas berikutnya.
          </p>
          <div className="mt-5 grid gap-3">
            {proofItems.map((item) => (
              <div className="flex items-center gap-3 rounded-[8px] border border-slate-200 bg-white p-4 shadow-sm" key={item}>
                <span className="grid size-9 shrink-0 place-items-center rounded-[8px] bg-[#dcfce7] text-[#166534]">
                  <CheckCircle2 size={20} />
                </span>
                <p className="font-heading font-black text-[#172033]">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#22c55e] px-5 py-4 font-heading font-black text-white shadow-[0_7px_0_#129447] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href="/pilot"
            >
              Coba pilot sekolah
              <ArrowRight size={18} />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border-2 border-slate-200 bg-white px-5 py-4 font-heading font-black text-slate-700 shadow-[0_7px_0_#d8e2ef] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href={`${appUrl}/demo/certificate`}
            >
              <Download size={18} />
              Lihat versi lengkap
            </a>
          </div>
        </div>

        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 18 }}
          viewport={{ once: true }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div className="absolute -right-4 -top-4 hidden rounded-[8px] bg-[#172033] px-4 py-3 text-white shadow-xl sm:block">
            <p className="text-xs font-black uppercase text-[#F4B400]">Preview di profil siswa</p>
            <p className="font-heading text-lg font-black">Muncul setelah kelas selesai</p>
          </div>
          <CertificateMockup />
        </motion.div>
      </div>
    </section>
  );
}

function CertificateMockup() {
  return (
    <div className="relative mx-auto max-w-2xl rounded-[8px] bg-[#172033] p-3 shadow-[0_26px_80px_rgba(23,32,51,0.22)]">
      <div className="overflow-hidden rounded-[8px] border-[10px] border-[#172033] bg-[#fffdf7] p-5 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="grid size-12 place-items-center rounded-[8px] bg-[#22c55e] text-white shadow-[0_5px_0_#129447]">
              <BookOpen size={25} />
            </span>
            <div>
              <p className="font-heading text-xl font-black">BaleBelajar</p>
              <p className="text-xs font-black uppercase text-slate-400">Contoh Sertifikat</p>
            </div>
          </div>
          <p className="hidden text-right text-xs font-black uppercase text-[#0E3A5F] sm:block">
            No. BB-DTC-2026-001
          </p>
        </div>

        <div className="py-8 text-center">
          <Award className="mx-auto text-[#f59e0b]" size={64} />
          <p className="mt-4 text-xs font-black uppercase tracking-[0.22em] text-[#0E3A5F]">
            Sertifikat Kelas Detektif
          </p>
          <h3 className="font-heading mx-auto mt-3 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
            Detektif Pemula
          </h3>
          <p className="mt-4 text-sm font-bold text-slate-500">Diberikan kepada</p>
          <p className="font-heading mt-1 text-4xl font-black text-[#6d28d9] sm:text-5xl">
            Alya Putri
          </p>
          <p className="mx-auto mt-4 max-w-lg text-sm font-bold leading-6 text-slate-600">
            Telah menyelesaikan misi mengamati, memilih bukti, dan membuat kesimpulan sederhana.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <CertificateStat label="Nilai akhir" value="91" />
          <CertificateStat label="Misi" value="4/4" />
          <CertificateStat label="Badge" value="Etis" />
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {[
            ["Kemampuan", "Mengamati, memilih bukti, menulis alasan"],
            ["Proyek akhir", "Laporan kasus sederhana"],
          ].map(([title, text]) => (
            <div className="rounded-[8px] bg-[#f8fafc] p-4" key={title}>
              <Medal className="text-[#0E3A5F]" size={22} />
              <p className="font-heading mt-2 font-black">{title}</p>
              <p className="mt-1 text-sm font-bold leading-5 text-slate-500">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-[8px] border border-[#bbf7d0] bg-[#f0fdf4] p-4">
          <p className="font-heading font-black text-[#166534]">Rekomendasi berikutnya</p>
          <p className="mt-1 text-sm font-bold leading-6 text-[#166534]">
            Alya siap lanjut ke kelas berikutnya: memilih bukti yang lebih kuat.
          </p>
        </div>
      </div>
    </div>
  );
}

function CertificateStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[8px] border border-slate-200 bg-white p-4 text-center shadow-sm">
      <p className="font-heading text-3xl font-black text-[#172033]">{value}</p>
      <p className="mt-1 text-xs font-black uppercase text-slate-400">{label}</p>
    </div>
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
          Dari dashboard, guru bisa melihat cerita di balik angka.
        </h2>
        <p className="mt-4 font-semibold leading-7 text-slate-500">
          Tujuan, fondasi, prioritas, dan misi berikutnya — satu alur, gampang
          dipakai di kelas.
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
          [Target, "3", "prioritas belajar", "#F4B400"],
          [BarChart3, "5", "fondasi dipetakan", "#22c55e"],
          [ClipboardCheck, "12", "misi personal", "#ff6b6b"],
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
        <HeartHandshake className="text-[#F4B400]" size={28} />
        <h3 className="font-heading mt-4 text-2xl font-black">
          Jalur belajar berbasis tujuan siswa
        </h3>
        <p className="mt-2 font-semibold leading-6 text-slate-400">
          Standar sekolah tetap jalan, misinya lebih dekat ke minat siswa.
        </p>
        <div className="mt-5 space-y-3">
          {[
            ["Observasi", "8 siswa", "72%"],
            ["Logika", "6 misi", "58%"],
            ["Proyek mini", "12 siswa", "91%"],
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

function PremiumValue() {
  return (
    <section className="relative overflow-hidden bg-[#172033] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="surface-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase text-[#F4B400]">Kenapa bernilai</p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Sekolah tidak membeli aplikasi. Sekolah membeli kejelasan arah belajar.
          </h2>
          <p className="mt-4 font-semibold leading-6 text-slate-400">
            BaleBelajar satukan yang biasanya tercecer: minat siswa, fondasi,
            misi, dan laporan progres.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#22c55e] px-5 py-4 font-heading font-black text-white shadow-[0_7px_0_#129447] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
            href="/pilot"
          >
            Ajukan Pilot Sekolah
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {valueCards.map(([title, text, Icon], index) => (
            <motion.article
              className="interactive-card rounded-[8px] border border-white/12 bg-white/10 p-5 backdrop-blur"
              initial={{ opacity: 0, y: 16 }}
              key={title as string}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="grid size-12 place-items-center rounded-[8px] bg-white text-[#0E3A5F] shadow-[0_6px_0_rgba(255,255,255,0.25)]">
                <Icon size={25} />
              </span>
              <h3 className="font-heading mt-4 text-xl font-black">{title as string}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-300">{text as string}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSignal() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-xl">
          <div className="bg-[linear-gradient(135deg,#4CAF50,#F4B400)] p-6 text-white sm:p-7">
            <p className="text-sm font-black uppercase text-white/70">Pilot sekolah</p>
            <h2 className="font-heading mt-2 text-3xl font-black sm:text-4xl">
              Mulai kecil. Tunjukkan hasil. Baru skalakan.
            </h2>
            <p className="mt-3 max-w-2xl font-bold leading-6 text-white/80">
              Cocok buat sekolah yang mau lihat siswa lebih aktif belajar.
            </p>
            <p className="mt-2 max-w-2xl text-sm font-bold leading-6 text-white/60">
              Kami sengaja mulai dari beberapa sekolah dulu — biar
              pendampingannya tetap dekat.
            </p>
          </div>
          <div className="grid gap-3 p-5 sm:grid-cols-3 sm:p-6">
            {[
              ["1 kelas", "validasi awal tanpa beban besar"],
              ["4 minggu", "cukup untuk melihat pola belajar"],
              ["Laporan pilot", "bahan keputusan untuk sekolah"],
            ].map(([value, label]) => (
              <div className="rounded-[8px] bg-[#f8fafc] p-4" key={value}>
                <p className="font-heading text-2xl font-black text-[#172033]">{value}</p>
                <p className="mt-1 text-sm font-bold leading-5 text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[8px] border border-slate-200 bg-[#fff7ed] p-5 shadow-sm sm:p-6">
          <p className="text-sm font-black uppercase text-[#c2410c]">Yang membuat orang mau bayar</p>
          <div className="mt-4 space-y-3">
            {premiumReasons.map(([title, text], index) => (
              <motion.div
                className="rounded-[8px] bg-white p-4 shadow-sm"
                initial={{ opacity: 0, x: 12 }}
                key={title}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <Check className="mb-2 text-[#22c55e]" size={21} />
                <p className="font-heading text-lg font-black">{title}</p>
                <p className="mt-1 text-sm font-semibold leading-6 text-slate-600">{text}</p>
              </motion.div>
            ))}
          </div>
          <Link
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#172033] px-5 py-4 font-heading font-black text-white shadow-[0_7px_0_#020617] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
            href="/pilot"
          >
            Ajukan Pilot Sekolah
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PilotPackage() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-black uppercase text-[#0E3A5F]">Paket pilot</p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Validasi di satu kelas sebelum sekolah berinvestasi lebih besar.
          </h2>
          <p className="mt-4 font-semibold leading-7 text-slate-500">
            Pilih kelas, pilih jalur impian, jalankan misi, lihat datanya.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            [Clock3, "Implementasi cepat", "Satu kelas, beberapa jalur impian, onboarding ringan."],
            [Target, "Prioritas jelas", "Guru langsung lihat fondasi mana yang perlu dikuatkan."],
            [UsersRound, "Engagement naik", "Misinya nyambung dengan dunia yang ingin mereka coba."],
            [TrendingUp, "Bahan keputusan", "Laporan awal buat baca minat, fondasi, dan potensi skala."],
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
              <Icon className="text-[#0E3A5F]" size={24} />
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
          <p className="text-sm font-black uppercase text-[#ff8a00]">FAQ</p>
          <h2 className="section-title text-balance-soft font-heading mt-2 font-black">
            Yang sering ditanyakan sekolah.
          </h2>
          <p className="mt-4 font-semibold leading-7 text-slate-500">
            Jawaban singkat sebelum mencoba BaleBelajar.
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
                <span className="grid size-10 shrink-0 place-items-center rounded-[8px] bg-[#FFF3E0] text-[#0E3A5F]">
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
            Mau coba BaleBelajar di sekolah Anda?
          </h2>
          <p className="mt-3 max-w-2xl font-bold leading-6 text-white/80">
            Mulai dari satu kelas dulu. Kami bantu siapkan alurnya.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-white px-5 py-4 font-heading font-black text-[#15803d] shadow-[0_6px_0_#bbf7d0]"
            href="/pilot"
          >
            Coba Pilot Sekolah
            <ArrowRight size={19} />
          </Link>
        </div>
        <div className="hidden bg-white/14 p-7 lg:block">
          <div className="rounded-[8px] bg-white p-5 text-[#172033]">
            <MessageCircle className="text-[#22c55e]" size={28} />
            <p className="font-heading mt-4 text-2xl font-black">
              Hasil belajar dibuat lebih jelas.
            </p>
            <p className="mt-2 font-semibold leading-6 text-slate-500">
              Impian siswa, fondasi, sampai misi pertama — siap dibahas
              bersama.
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
            Kelas belajar berbasis cita-cita untuk siswa.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm font-bold text-slate-500">
          <Link href="/kebijakan-privasi">Kebijakan Privasi</Link>
          <Link href="/ketentuan-penggunaan">Ketentuan Penggunaan</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
      </div>
    </footer>
  );
}
