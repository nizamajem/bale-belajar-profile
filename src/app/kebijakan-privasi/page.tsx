import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
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
        <h1 className="font-heading text-4xl font-black">Kebijakan Privasi</h1>
        <p className="mt-4 font-semibold leading-8 text-slate-600">
          BaleBelajar hanya mengumpulkan data yang diperlukan untuk pelaksanaan
          asesmen, pelaporan hasil, dan komunikasi pilot sekolah. Data siswa
          harus dikelola sesuai izin sekolah dan ketentuan yang berlaku.
        </p>
      </section>
    </main>
  );
}

