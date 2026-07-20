"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Loader2, Send } from "lucide-react";

export default function PilotPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function submitPilot(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1"}/public/leads`,
        {
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
        },
      );

      if (!response.ok) {
        throw new Error("Pengajuan belum bisa dikirim.");
      }

      setSubmitted(true);
    } catch {
      setError("Pengajuan belum bisa dikirim. Pastikan backend berjalan di port 4000.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          className="mb-6 inline-flex items-center gap-2 font-heading font-black text-[#2563eb]"
          href="/"
        >
          <ArrowLeft size={18} />
          Kembali
        </Link>

        <section className="grid overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-xl lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-[#172033] p-6 text-white sm:p-8">
            <p className="text-sm font-black uppercase text-[#f9c74f]">
              Pilot sekolah
            </p>
            <h1 className="font-heading mt-3 text-4xl font-black leading-tight">
              Mulai dari satu kelas, satu asesmen, dan evaluasi bersama.
            </h1>
            <p className="mt-4 font-semibold leading-8 text-slate-300">
              Tim BaleBelajar akan membantu sekolah mencoba asesmen diagnostik,
              dashboard guru, dan laporan hasil tanpa mengganti sistem yang
              sudah berjalan.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="rounded-[8px] bg-[#f0fdf4] p-6 text-[#166534]">
                <CheckCircle2 size={36} />
                <h2 className="font-heading mt-4 text-2xl font-black">
                  Terima kasih.
                </h2>
                <p className="mt-2 font-bold leading-7">
                  Tim BaleBelajar akan menghubungi Anda untuk mendiskusikan
                  pilot sekolah.
                </p>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={submitPilot}>
                <input className="hidden" name="website" tabIndex={-1} />
                <Field label="Nama sekolah" name="schoolName" required />
                <Field label="Nama penghubung" name="contactName" required />
                <Field label="Jabatan" name="position" />
                <Field label="Nomor WhatsApp" name="phone" required />
                <Field label="Email" name="email" type="email" />
                <Field label="Jumlah siswa" name="studentCount" type="number" />
                <label className="block">
                  <span className="mb-2 block text-sm font-black text-slate-600">
                    Pesan
                  </span>
                  <textarea
                    className="min-h-28 w-full rounded-[8px] border-2 border-slate-200 px-4 py-3 font-bold outline-none focus:border-[#2563eb]"
                    name="message"
                    placeholder="Ceritakan kebutuhan sekolah secara singkat"
                  />
                </label>
                {error ? (
                  <div className="rounded-[8px] bg-[#fff1f2] p-4 text-sm font-bold leading-6 text-[#9f1239]">
                    {error}
                  </div>
                ) : null}
                <button
                  className="flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#22c55e] px-5 py-4 font-heading font-black text-white shadow-[0_7px_0_#129447] active:translate-y-1 active:shadow-none disabled:opacity-70"
                  disabled={loading}
                  type="submit"
                >
                  {loading ? <Loader2 className="animate-spin" size={19} /> : <Send size={19} />}
                  Kirim pengajuan
                </button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-slate-600">
        {label}
      </span>
      <input
        className="w-full rounded-[8px] border-2 border-slate-200 px-4 py-3 font-bold outline-none focus:border-[#2563eb]"
        name={name}
        required={required}
        type={type}
      />
    </label>
  );
}
