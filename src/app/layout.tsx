import type { Metadata } from "next";
import { Nunito, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const heading = Nunito({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const body = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_PROFILE_URL ?? "http://localhost:3001"),
  title: {
    default: "BaleBelajar - Blueprint Belajar Personal dari Cita-Cita ke Kurikulum",
    template: "%s | BaleBelajar",
  },
  description:
    "BaleBelajar membantu sekolah memetakan minat, fondasi lintas pelajaran, dan cita-cita siswa untuk menyusun kurikulum belajar personal dari dasar.",
  keywords: [
    "blueprint belajar siswa",
    "kurikulum personal siswa",
    "platform pendidikan Lombok",
    "peta cita-cita siswa",
    "asesmen diagnostik siswa",
    "semua pelajaran",
    "teknologi pendidikan Indonesia",
  ],
  openGraph: {
    title: "BaleBelajar - Dari Cita-Cita Jadi Kurikulum Belajar",
    description:
      "Platform blueprint belajar untuk memetakan minat, fondasi pelajaran, dan jalur profesi siswa dari dasar.",
    type: "website",
    url: "/",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "BaleBelajar - Blueprint Belajar Personal untuk Siswa",
    description:
      "Pemetaan minat, fondasi lintas pelajaran, dan jalur cita-cita siswa menjadi kurikulum personal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${heading.variable} ${body.variable}`}>{children}</body>
    </html>
  );
}
