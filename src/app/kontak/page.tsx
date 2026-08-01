import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";

const email = "balebelajarindonesia@gmail.com";
const whatsappDisplay = "087855267656";
const whatsappLink = "https://wa.me/6287855267656";

export default function ContactPage() {
  return (
    <main className="surface-grid min-h-screen px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <section className="mx-auto max-w-3xl rounded-[8px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <Link
          className="mb-6 inline-flex items-center gap-2 font-heading font-black text-[#0E3A5F]"
          href="/"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>
        <p className="text-sm font-black uppercase text-[#22c55e]">Kontak</p>
        <h1 className="font-heading mt-2 text-3xl font-black leading-tight sm:text-4xl">
          Diskusikan pilot BaleBelajar untuk sekolah Anda.
        </h1>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <a className="rounded-[8px] bg-[#f8fafc] p-5 transition hover:-translate-y-0.5 hover:shadow-md" href={`mailto:${email}`}>
            <Mail className="text-[#0E3A5F]" size={26} />
            <p className="font-heading mt-4 text-xl font-black">Email</p>
            <p className="mt-1 break-words font-bold text-slate-600">{email}</p>
          </a>
          <a className="rounded-[8px] bg-[#f8fafc] p-5 transition hover:-translate-y-0.5 hover:shadow-md" href={whatsappLink} rel="noreferrer" target="_blank">
            <MessageCircle className="text-[#22c55e]" size={26} />
            <p className="font-heading mt-4 text-xl font-black">WhatsApp</p>
            <p className="mt-1 font-bold text-slate-600">{whatsappDisplay}</p>
          </a>
        </div>
      </section>
    </main>
  );
}
