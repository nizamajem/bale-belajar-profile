"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Compass, HeartHandshake, Sparkles, Target } from "lucide-react";

const beliefs = [
  {
    icon: Sparkles,
    title: "Penasaran itu motor belajar",
    text: "Lebih kuat dari sekadar kejar nilai.",
  },
  {
    icon: Target,
    title: "Tiap pelajaran butuh alasan",
    text: "Bukan daftar materi yang berdiri sendiri.",
  },
  {
    icon: HeartHandshake,
    title: "Progres itu cerita, bukan angka",
    text: "Bahasa manusiawi buat guru dan orang tua.",
  },
];

export default function AboutPage() {
  return (
    <main className="surface-grid min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link
          className="mb-6 inline-flex items-center gap-2 font-heading font-black text-[#2563eb]"
          href="/"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>

        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          initial={{ opacity: 0, y: 16 }}
        >
          <p className="text-sm font-black uppercase text-[#2563eb]">
            Kenapa BaleBelajar ada
          </p>
          <h1 className="hero-title text-balance-soft font-heading mt-3 font-black leading-[1.05] text-[#172033]">
            Siswa pintar, tapi penasarannya hilang.
          </h1>

          <p className="mt-5 max-w-xl font-bold leading-6 text-slate-500">
            Bukan karena mereka tidak mampu. Cuma tidak ada yang menunjukkan
            pelajaran itu buat apa.
          </p>

          <p className="mt-6 max-w-xl font-bold leading-6 text-slate-500">
            Kalau pelajaran nyambung ke cita-cita sendiri — detektif, dokter,
            ICT, guru, apa pun — penasaran itu bisa kembali. Bukan ganti
            kurikulum, cuma buka jalur belajar yang lebih personal di
            atasnya.
          </p>

          <p className="mt-4 max-w-xl text-sm font-bold leading-6 text-slate-400">
            Progresnya juga dirancang jadi percakapan, bukan vonis nilai.
          </p>
        </motion.section>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {beliefs.map((item, index) => (
            <motion.article
              className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm"
              initial={{ opacity: 0, y: 14 }}
              key={item.title}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <span className="grid size-11 place-items-center rounded-[8px] bg-[#eff6ff] text-[#2563eb]">
                <item.icon size={22} />
              </span>
              <h3 className="font-heading mt-4 text-lg font-black">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-600">{item.text}</p>
            </motion.article>
          ))}
        </div>

        <motion.section
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 overflow-hidden rounded-[8px] bg-[#172033] p-6 text-white shadow-[0_10px_0_#0f172a] sm:p-8"
          initial={{ opacity: 0, y: 16 }}
        >
          <Compass className="text-[#f9c74f]" size={26} />
          <h2 className="font-heading mt-4 text-2xl font-black sm:text-3xl">
            Siswamu pintar tapi mulai kehilangan penasaran? Kami mau bantu.
          </h2>
          <p className="mt-3 max-w-2xl font-semibold leading-6 text-slate-400">
            Mulai dari satu kelas, satu pilot, lihat sendiri hasilnya.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#22c55e] px-5 py-4 font-heading font-black text-white shadow-[0_6px_0_#129447] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-none"
              href="/pilot"
            >
              Ajukan Pilot Sekolah
              <ArrowRight size={18} />
            </Link>
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-[8px] border-2 border-white/14 bg-white/8 px-5 py-4 font-heading font-black text-white transition hover:bg-white/12"
              href="/kontak"
            >
              Ngobrol Dulu
            </Link>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
