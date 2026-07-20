import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

export default function ContactPage() {
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
        <p className="text-sm font-black uppercase text-[#22c55e]">Kontak</p>
        <h1 className="font-heading mt-2 text-4xl font-black">
          Diskusikan kebutuhan sekolah Anda.
        </h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-[8px] bg-[#f8fafc] p-5">
            <Mail className="text-[#2563eb]" size={26} />
            <p className="font-heading mt-4 text-xl font-black">Email</p>
            <p className="mt-1 font-bold text-slate-600">halo@balebelajar.id</p>
          </div>
          <div className="rounded-[8px] bg-[#f8fafc] p-5">
            <MessageCircle className="text-[#22c55e]" size={26} />
            <p className="font-heading mt-4 text-xl font-black">WhatsApp</p>
            <p className="mt-1 font-bold text-slate-600">Isi nomor di .env</p>
          </div>
        </div>
      </section>
    </main>
  );
}

