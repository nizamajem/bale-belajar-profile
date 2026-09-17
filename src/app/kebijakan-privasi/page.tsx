import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <h2 className="font-heading text-xl font-black leading-tight text-slate-900">
        {title}
      </h2>
      <div className="mt-3 space-y-3 font-semibold leading-7 text-slate-600">
        {children}
      </div>
    </div>
  );
}

export default function PrivacyPage() {
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
          Kebijakan Privasi
        </h1>
        <p className="mt-2 text-sm font-semibold text-slate-400">
          Berlaku efektif: 17 September 2026
        </p>

        <p className="mt-4 font-semibold leading-8 text-slate-600">
          BaleBelajar (&quot;kami&quot;) menyediakan platform belajar,
          asesmen diagnostik, dan pemetaan kompetensi untuk siswa, guru, dan
          sekolah, melalui aplikasi mobile dan situs web. Kebijakan ini
          menjelaskan data apa yang kami kumpulkan, bagaimana data itu
          digunakan, dan hak pengguna terhadap datanya.
        </p>

        <Section title="1. Data yang Kami Kumpulkan">
          <p>Kami mengumpulkan data berikut sesuai kebutuhan layanan:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-slate-900">Data akun</span> — nama,
              alamat email, dan status verifikasi akun, yang dikelola melalui
              Firebase Authentication saat mendaftar atau masuk.
            </li>
            <li>
              <span className="text-slate-900">Data sekolah/kelas</span> —
              afiliasi sekolah, kelas, dan mata pelajaran, untuk siswa dan
              guru yang terdaftar melalui program sekolah/pilot.
            </li>
            <li>
              <span className="text-slate-900">Data belajar</span> — jawaban
              asesmen, progres misi/quest, hasil pemetaan kompetensi, dan
              riwayat aktivitas belajar di dalam aplikasi.
            </li>
            <li>
              <span className="text-slate-900">Data perangkat</span> —
              identifier notifikasi (push token) dan izin perangkat
              (misalnya notifikasi) yang diberikan pengguna, untuk mengirim
              pengingat belajar.
            </li>
            <li>
              <span className="text-slate-900">Data komunikasi</span> — nama,
              email, dan pesan yang dikirim melalui formulir kontak atau
              pendaftaran pilot sekolah di situs kami.
            </li>
          </ul>
          <p>
            Kami tidak mengumpulkan data lokasi presisi, kontak perangkat,
            atau data finansial, karena tidak dibutuhkan oleh layanan kami.
          </p>
        </Section>

        <Section title="2. Bagaimana Data Digunakan">
          <ul className="list-disc space-y-2 pl-5">
            <li>Menyediakan dan mengoperasikan fitur asesmen dan belajar.</li>
            <li>
              Menyusun pemetaan kompetensi dan rekomendasi tindak lanjut
              belajar untuk siswa, guru, dan sekolah terkait.
            </li>
            <li>Mengirim notifikasi pengingat belajar (jika diizinkan).</li>
            <li>
              Menjaga keamanan akun, mencegah penyalahgunaan, dan menanggapi
              permintaan dukungan.
            </li>
            <li>
              Menghubungi sekolah atau kontak yang mendaftar melalui program
              pilot.
            </li>
          </ul>
        </Section>

        <Section title="3. Data Anak dan Persetujuan Sekolah/Orang Tua">
          <p>
            Sebagian pengguna BaleBelajar adalah siswa berusia di bawah 13
            tahun. Untuk pengguna ini, pendaftaran dan pengelolaan akun
            dilakukan melalui sekolah, guru, atau orang tua/wali sebagai
            pihak yang memberikan izin, bukan langsung oleh anak.
          </p>
          <p>
            Kami hanya mengumpulkan data anak yang secara wajar diperlukan
            untuk pelaksanaan asesmen dan pembelajaran, dan tidak menampilkan
            iklan atau membagikan data anak untuk tujuan pemasaran pihak
            ketiga. Sekolah atau orang tua/wali dapat menghubungi kami
            melalui kontak di bagian 7 untuk meminta akses, koreksi, atau
            penghapusan data anak.
          </p>
        </Section>

        <Section title="4. Berbagi Data dengan Pihak Ketiga">
          <p>
            Kami tidak menjual data pengguna. Data diproses oleh
            penyedia layanan berikut, sebatas yang diperlukan untuk
            menjalankan aplikasi:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <span className="text-slate-900">Firebase / Google Cloud</span>{" "}
              — autentikasi akun dan infrastruktur layanan.
            </li>
            <li>
              Penyedia infrastruktur server (hosting) yang menyimpan basis
              data BaleBelajar.
            </li>
          </ul>
          <p>
            Kami dapat mengungkapkan data apabila diwajibkan oleh hukum yang
            berlaku, atau untuk melindungi hak dan keamanan pengguna kami.
          </p>
        </Section>

        <Section title="5. Penyimpanan dan Keamanan Data">
          <p>
            Data akun dan sesi login disimpan menggunakan penyimpanan
            terenkripsi di perangkat (secure storage), dan data belajar
            disimpan di basis data kami dengan akses yang dibatasi. Kami
            menerapkan langkah keamanan yang wajar untuk mencegah akses,
            perubahan, atau pengungkapan data tanpa izin.
          </p>
          <p>
            Data disimpan selama akun aktif digunakan, atau selama
            diperlukan untuk tujuan asesmen dan kepatuhan hukum, dan akan
            dihapus atau dianonimkan setelah tidak lagi diperlukan sesuai
            permintaan yang sah.
          </p>
        </Section>

        <Section title="6. Hak Pengguna">
          <p>
            Pengguna, orang tua/wali, atau sekolah dapat meminta:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Akses ke data pribadi yang kami simpan.</li>
            <li>Koreksi data yang tidak akurat.</li>
            <li>Penghapusan akun dan data terkait.</li>
            <li>Penarikan izin penggunaan data (sepanjang secara hukum dimungkinkan).</li>
          </ul>
          <p>
            Kami akan menanggapi permintaan yang sah dalam waktu yang wajar
            melalui kontak di bagian 7.
          </p>
        </Section>

        <Section title="7. Kontak">
          <p>
            Pertanyaan, permintaan akses/hapus data, atau laporan terkait
            privasi dapat dikirim ke:{" "}
            <a
              className="text-[#2563eb] underline"
              href="mailto:balebalajarindonesia@gmail.com"
            >
              balebalajarindonesia@gmail.com
            </a>
          </p>
        </Section>

        <Section title="8. Perubahan Kebijakan">
          <p>
            Kebijakan ini dapat diperbarui dari waktu ke waktu. Perubahan
            akan dipublikasikan di halaman ini dengan tanggal berlaku efektif
            yang baru.
          </p>
        </Section>
      </section>
    </main>
  );
}
