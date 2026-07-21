import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="surface-grid min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Link
          className="mb-6 inline-flex items-center gap-2 font-heading font-black text-[#2563eb]"
          href="/"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>
        <p className="text-sm font-black uppercase text-[#2563eb]">
          Tentang BaleBelajar
        </p>
        <h1 className="font-heading mt-2 text-3xl font-black leading-tight sm:text-4xl">
          Kami membantu sekolah melihat kebutuhan belajar siswa dengan lebih jelas.
        </h1>
        <p className="mt-4 font-semibold leading-8 text-slate-600">
          BaleBelajar dibangun untuk membantu guru dan sekolah mengambil
          keputusan belajar berdasarkan data kompetensi, bukan hanya nilai
          akhir. Hasil asesmen dirancang agar mudah dibaca, bisa
          ditindaklanjuti, dan tetap menggunakan bahasa yang positif untuk
          siswa.
        </p>
      </section>
    </main>
  );
}
