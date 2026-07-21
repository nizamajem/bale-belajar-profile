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
    default: "BaleBelajar - Platform Asesmen Diagnostik untuk Sekolah",
    template: "%s | BaleBelajar",
  },
  description:
    "BaleBelajar membantu sekolah memetakan kemampuan siswa, membaca pola kesulitan kelas, dan menyusun tindak lanjut belajar berbasis data kompetensi.",
  keywords: [
    "asesmen diagnostik siswa",
    "platform pendidikan Lombok",
    "dashboard guru",
    "remedial berbasis data",
    "pemetaan kemampuan siswa",
    "teknologi pendidikan Indonesia",
  ],
  openGraph: {
    title: "BaleBelajar - Platform Asesmen Diagnostik untuk Sekolah",
    description:
      "Pemetaan kemampuan siswa, dashboard guru, dan rekomendasi tindak lanjut belajar yang mudah dipahami.",
    type: "website",
    url: "/",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "BaleBelajar - Platform Asesmen Diagnostik untuk Sekolah",
    description:
      "Pemetaan kemampuan siswa dan rekomendasi tindak lanjut belajar berbasis data kompetensi.",
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
