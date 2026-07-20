"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  ClipboardCheck,
  GraduationCap,
  HeartHandshake,
  School,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

const benefits = [
  ["Siswa", "Mengetahui kekuatan, prioritas belajar, dan progress.", GraduationCap],
  ["Guru", "Melihat heatmap kelas dan kelompok remedial lebih cepat.", UsersRound],
  ["Sekolah", "Mendapat peta kemampuan dan laporan program pilot.", School],
];

const workflow = [
  "Siswa mengerjakan asesmen",
  "Sistem memetakan kemampuan",
  "Guru melihat heatmap kelas",
  "Remedial dibuat berbasis data",
  "Orang tua menerima ringkasan",
];

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Navbar />

      <section className="mx-auto grid max-w-7xl items-center gap-8 px-4 pb-10 pt-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#bbf7d0] bg-white px-4 py-2 text-sm font-black text-[#166534] shadow-sm"
            initial={{ opacity: 0, y: 12 }}
          >
            <Sparkles size={17} />
            Pilot asesmen diagnostik untuk sekolah
          </motion.div>
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="font-heading max-w-3xl text-4xl font-black leading-[1.05] sm:text-6xl"
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.06 }}
          >
            Kenali kebutuhan belajar siswa sebelum menentukan langkah berikutnya.
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-600"
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.12 }}
          >
            BaleBelajar membantu sekolah memetakan kemampuan siswa melalui
            asesmen diagnostik, rekomendasi belajar, dan dashboard guru yang
            mudah digunakan.
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="mt-7 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            transition={{ delay: 0.18 }}
          >
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#22c55e] px-6 py-4 font-heading font-black text-white shadow-[0_7px_0_#129447] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href="/pilot"
            >
              Ajukan Pilot Gratis
              <ArrowRight size={19} />
            </Link>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border-2 border-slate-200 bg-white px-6 py-4 font-heading font-black text-slate-700 shadow-[0_7px_0_#d8e2ef] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href="#cara-kerja"
            >
              Lihat Cara Kerja
            </a>
          </motion.div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="float-soft"
          initial={{ opacity: 0, scale: 0.96 }}
          transition={{ delay: 0.14 }}
        >
          <HeroMockup />
        </motion.div>
      </section>

      <section className="border-y border-slate-200 bg-white/76 py-5 backdrop-blur">
        <div className="mx-auto grid max-w-7xl gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            ["1 kelas", "mulai pilot kecil"],
            ["3 prioritas", "rekomendasi belajar"],
            ["7 hari", "rencana tindak lanjut"],
          ].map(([value, label]) => (
            <div className="rounded-[8px] bg-white p-5 shadow-sm" key={label}>
              <p className="font-heading text-3xl font-black text-[#2563eb]">
                {value}
              </p>
              <p className="mt-1 font-bold text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-black uppercase text-[#ff8a00]">
              Masalah yang sering terjadi
            </p>
            <h2 className="font-heading mt-2 text-3xl font-black">
              Nilai total belum cukup menjelaskan kebutuhan siswa.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Guru punya waktu terbatas untuk menganalisis hasil.",
              "Siswa tidak selalu tahu harus belajar dari mana.",
              "Orang tua terlambat melihat pola kesulitan.",
              "Remedial sering belum berbasis peta kompetensi.",
            ].map((item, index) => (
              <motion.div
                className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                key={item}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <Check className="mb-3 text-[#22c55e]" size={22} />
                <p className="font-bold leading-7 text-slate-600">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="bg-[#172033] px-4 py-12 text-white sm:px-6 lg:px-8"
        id="cara-kerja"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase text-[#f9c74f]">
            Cara kerja
          </p>
          <h2 className="font-heading mt-2 text-3xl font-black">
            Satu alur dari asesmen sampai tindak lanjut.
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {workflow.map((item, index) => (
              <motion.div
                className="rounded-[8px] bg-white/10 p-5"
                initial={{ opacity: 0, y: 14 }}
                key={item}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <span className="grid size-10 place-items-center rounded-[8px] bg-[#22c55e] font-heading font-black">
                  {index + 1}
                </span>
                <p className="font-heading mt-5 text-lg font-black leading-7">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map(([title, text, Icon], index) => (
            <motion.article
              className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm"
              initial={{ opacity: 0, y: 14 }}
              key={title as string}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Icon className="text-[#2563eb]" size={30} />
              <h3 className="font-heading mt-5 text-2xl font-black">
                Untuk {title as string}
              </h3>
              <p className="mt-3 font-semibold leading-7 text-slate-600">
                {text as string}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-black uppercase text-[#22c55e]">
            Preview dashboard
          </p>
          <h2 className="font-heading mt-2 text-3xl font-black">
            Guru melihat data yang bisa langsung ditindaklanjuti.
          </h2>
          <p className="mt-4 font-semibold leading-8 text-slate-600">
            Heatmap menunjukkan siapa yang sudah menguasai materi, siapa yang
            sedang berkembang, dan siapa yang perlu latihan.
          </p>
        </div>
        <DashboardPreview />
      </section>

      <section className="px-4 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[8px] bg-[#22c55e] p-7 text-center text-white shadow-[0_10px_0_#129447]">
          <h2 className="font-heading text-3xl font-black">
            Mulai dari satu kelas dan lihat manfaatnya.
          </h2>
          <p className="mx-auto mt-3 max-w-2xl font-bold leading-7 text-white/88">
            Pilot tidak harus mengganti sistem sekolah. Cukup mulai dari satu
            kelas, satu asesmen diagnostik, dan evaluasi bersama.
          </p>
          <Link
            className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-white px-5 py-4 font-heading font-black text-[#15803d] shadow-[0_6px_0_#bbf7d0]"
            href="/pilot"
          >
            Ajukan Pilot
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/88 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link className="flex items-center gap-3" href="/">
          <span className="grid size-11 place-items-center rounded-[8px] bg-[#22c55e] text-white shadow-[0_6px_0_#129447]">
            <BookOpen size={24} strokeWidth={3} />
          </span>
          <span className="font-heading text-xl font-black">BaleBelajar</span>
        </Link>
        <div className="hidden items-center gap-6 text-sm font-black text-slate-600 md:flex">
          <Link href="/">Beranda</Link>
          <a href="#cara-kerja">Solusi</a>
          <a href="#cara-kerja">Untuk Sekolah</a>
          <Link href="/tentang">Tentang</Link>
          <Link href="/pilot">Pilot</Link>
          <Link href="/kontak">Kontak</Link>
        </div>
        <div className="flex items-center gap-2">
          <Link
            className="hidden rounded-[8px] bg-[#22c55e] px-4 py-3 font-heading text-sm font-black text-white shadow-[0_5px_0_#129447] sm:inline-flex"
            href="/pilot"
          >
            Ajukan Pilot
          </Link>
          <a
            className="rounded-[8px] border-2 border-slate-200 bg-white px-4 py-3 font-heading text-sm font-black text-slate-700 shadow-[0_5px_0_#d8e2ef]"
            href={`${appUrl}/login`}
          >
            Masuk Platform
          </a>
        </div>
      </nav>
    </header>
  );
}

function HeroMockup() {
  return (
    <div className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-2xl">
      <div className="rounded-[8px] bg-[#f8fafc] p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-sm font-black uppercase text-[#2563eb]">
              Dashboard guru
            </p>
            <h2 className="font-heading text-2xl font-black">VI A Matematika</h2>
          </div>
          <span className="rounded-full bg-[#dcfce7] px-3 py-1 text-sm font-black text-[#166534]">
            82% selesai
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[92, 76, 58, 84, 88, 62, 54, 78, 95, 86, 80, 68].map((score, index) => (
            <div
              className={[
                "rounded-[8px] px-3 py-4 text-center font-heading font-black text-white",
                score >= 80 && "bg-[#22c55e]",
                score >= 60 && score < 80 && "bg-[#f9c74f] text-[#172033]",
                score < 60 && "bg-[#ff6b6b]",
              ]
                .filter(Boolean)
                .join(" ")}
              key={index}
            >
              {score}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DashboardPreview() {
  return (
    <div className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-xl">
      <div className="grid gap-4 sm:grid-cols-3">
        {[
          [Target, "3", "prioritas belajar"],
          [BarChart3, "76", "rata-rata skor"],
          [ClipboardCheck, "18", "butuh remedial"],
        ].map(([Icon, value, label]) => (
          <div className="rounded-[8px] bg-[#f8fafc] p-4" key={label as string}>
            <Icon className="text-[#2563eb]" size={24} />
            <p className="font-heading mt-3 text-3xl font-black">
              {value as string}
            </p>
            <p className="text-sm font-bold text-slate-500">{label as string}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-[8px] bg-[#172033] p-5 text-white">
        <HeartHandshake className="text-[#f9c74f]" size={28} />
        <h3 className="font-heading mt-4 text-2xl font-black">
          Kelompok remedial otomatis
        </h3>
        <p className="mt-2 font-semibold leading-7 text-slate-300">
          Guru dapat melihat siswa dengan kebutuhan latihan serupa tanpa
          menghitung manual dari nilai total.
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-heading text-xl font-black">BaleBelajar</p>
          <p className="mt-1 text-sm font-semibold text-slate-500">
            Platform asesmen diagnostik untuk sekolah Indonesia.
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
