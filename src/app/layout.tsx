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
    default: "BaleBelajar - Kelas Belajar Berbasis Cita-Cita Siswa",
    template: "%s | BaleBelajar",
  },
  description:
    "BaleBelajar membantu siswa belajar lewat kelas cita-cita, misi pendek, sertifikat, dan laporan yang mudah dipahami guru serta orang tua.",
  keywords: [
    "platform belajar personal",
    "kelas cita-cita siswa",
    "edtech Indonesia",
    "platform pendidikan Lombok",
    "cita-cita siswa",
    "asesmen diagnostik siswa",
    "laporan belajar siswa",
    "learning management system sekolah",
    "semua pelajaran",
    "teknologi pendidikan Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BaleBelajar - Belajar dari Cita-Cita",
    description:
      "Siswa memilih kelas cita-cita, mengerjakan misi pendek, mendapat sertifikat, dan guru bisa melihat hasil belajarnya.",
    type: "website",
    url: "/",
    locale: "id_ID",
    siteName: "BaleBelajar",
  },
  twitter: {
    card: "summary_large_image",
    title: "BaleBelajar - Platform Belajar Personal untuk Sekolah",
    description:
      "Kelas cita-cita, misi pendek, sertifikat, dan laporan belajar yang mudah dipahami.",
  },
  robots: {
    index: true,
    follow: true,
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
