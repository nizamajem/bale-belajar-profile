import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
        <h1 className="font-heading text-4xl font-black">
          Ketentuan Penggunaan
        </h1>
        <p className="mt-4 font-semibold leading-8 text-slate-600">
          BaleBelajar digunakan sebagai alat bantu asesmen diagnostik dan
          rekomendasi belajar. Hasil bukan pengganti nilai rapor atau keputusan
          akademik resmi sekolah.
        </p>
      </section>
    </main>
  );
}

