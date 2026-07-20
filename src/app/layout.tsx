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
  title: "BaleBelajar - Asesmen Diagnostik dan Pemetaan Kemampuan Siswa",
  description:
    "BaleBelajar membantu sekolah, guru, siswa, dan orang tua memahami kemampuan belajar melalui asesmen diagnostik dan rekomendasi berbasis data.",
  keywords: [
    "asesmen diagnostik siswa",
    "platform pendidikan Lombok",
    "dashboard guru",
    "remedial berbasis data",
    "pemetaan kemampuan siswa",
    "teknologi pendidikan Indonesia",
  ],
  openGraph: {
    title: "BaleBelajar - Asesmen Diagnostik",
    description:
      "Pemetaan kemampuan siswa, rekomendasi belajar, dan dashboard guru yang mudah digunakan.",
    type: "website",
    url: "http://localhost:3001",
  },
  twitter: {
    card: "summary_large_image",
    title: "BaleBelajar - Asesmen Diagnostik",
    description:
      "Pemetaan kemampuan siswa dan rekomendasi belajar berbasis data.",
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

