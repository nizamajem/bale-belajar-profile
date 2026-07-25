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
    default: "BaleBelajar - Platform Belajar Personal Berbasis Cita-Cita Siswa",
    template: "%s | BaleBelajar",
  },
  description:
    "BaleBelajar membantu sekolah mengubah cita-cita siswa menjadi peta belajar personal, misi harian, mastery, dan laporan progres yang mudah dipahami guru dan orang tua.",
  keywords: [
    "platform belajar personal",
    "kurikulum personal siswa",
    "edtech Indonesia",
    "platform pendidikan Lombok",
    "peta cita-cita siswa",
    "asesmen diagnostik siswa",
    "dashboard progres siswa",
    "learning management system sekolah",
    "semua pelajaran",
    "teknologi pendidikan Indonesia",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BaleBelajar - Dari Cita-Cita Jadi Peta Belajar Personal",
    description:
      "Platform belajar personal untuk sekolah: siswa memilih impian, BaleBelajar menyusun misi, mastery, dan laporan progres yang bisa ditindaklanjuti.",
    type: "website",
    url: "/",
    locale: "id_ID",
    siteName: "BaleBelajar",
  },
  twitter: {
    card: "summary_large_image",
    title: "BaleBelajar - Platform Belajar Personal untuk Sekolah",
    description:
      "Ubah cita-cita siswa menjadi peta belajar, misi harian, dan progres yang jelas untuk guru, sekolah, dan orang tua.",
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
