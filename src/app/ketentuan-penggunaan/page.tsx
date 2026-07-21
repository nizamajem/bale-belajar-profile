import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
        <h1 className="font-heading text-3xl font-black leading-tight sm:text-4xl">
          Ketentuan Penggunaan
        </h1>
        <p className="mt-4 font-semibold leading-8 text-slate-600">
          BaleBelajar digunakan sebagai alat bantu asesmen diagnostik,
          pemetaan kompetensi, dan rekomendasi tindak lanjut belajar. Hasil
          platform membantu proses evaluasi, namun tidak menggantikan nilai
          rapor atau keputusan akademik resmi sekolah.
        </p>
      </section>
    </main>
  );
}
