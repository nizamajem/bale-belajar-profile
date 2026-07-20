import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
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
        <h1 className="font-heading mt-2 text-4xl font-black">
          Platform asesmen diagnostik untuk tindak lanjut belajar.
        </h1>
        <p className="mt-4 font-semibold leading-8 text-slate-600">
          BaleBelajar membantu sekolah memahami kemampuan siswa berdasarkan
          kompetensi, bukan hanya nilai total. Hasil asesmen dipakai untuk
          rekomendasi belajar, remedial, dan laporan orang tua.
        </p>
      </section>
    </main>
  );
}

