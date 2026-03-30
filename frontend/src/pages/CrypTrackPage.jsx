import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CRYPTRACK_LOGO = "https://customer-assets.emergentagent.com/job_xol-corp-preview-2/artifacts/xnj0fgyv_LOGO%20-%20CrypTrack.png";

export const CrypTrackPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const privacySections = [
    {
      title: { en: "1. Core Principle", id: "1. Prinsip Utama" },
      content: {
        en: [
          "CrypTrack operates under a fundamental principle:",
          "Your data is yours. We do not collect, store, or transmit your personal or financial data to any external server."
        ],
        id: [
          "CrypTrack beroperasi di bawah prinsip dasar:",
          "Data Anda adalah milik Anda. Kami tidak mengumpulkan, menyimpan, atau mengirimkan data pribadi atau keuangan Anda ke server eksternal mana pun."
        ]
      }
    },
    {
      title: { en: "2. Data Storage", id: "2. Penyimpanan Data" },
      content: {
        en: [
          "• All data is stored locally on your device only",
          "• No cloud storage is used",
          "• No centralized database exists",
          "• No account registration is required",
          "This includes:",
          "• Portfolio data",
          "• Custom cryptocurrency entries",
          "• Application settings"
        ],
        id: [
          "• Semua data disimpan secara lokal di perangkat Anda saja",
          "• Tidak ada penyimpanan cloud yang digunakan",
          "• Tidak ada database terpusat",
          "• Tidak diperlukan pendaftaran akun",
          "Ini termasuk:",
          "• Data portofolio",
          "• Entri cryptocurrency kustom",
          "• Pengaturan aplikasi"
        ]
      }
    },
    {
      title: { en: "3. No Data Collection", id: "3. Tidak Ada Pengumpulan Data" },
      content: {
        en: [
          "CrypTrack does not collect:",
          "• Personal information",
          "• Wallet private keys or seed phrases",
          "• Usage analytics",
          "• Device identifiers",
          "• Location data"
        ],
        id: [
          "CrypTrack tidak mengumpulkan:",
          "• Informasi pribadi",
          "• Private key atau seed phrase wallet",
          "• Analitik penggunaan",
          "• Pengidentifikasi perangkat",
          "• Data lokasi"
        ]
      }
    },
    {
      title: { en: "4. No Third-Party Tracking", id: "4. Tidak Ada Pelacakan Pihak Ketiga" },
      content: {
        en: [
          "The application:",
          "• Does not use tracking SDKs",
          "• Does not use analytics services",
          "• Does not include advertising networks"
        ],
        id: [
          "Aplikasi:",
          "• Tidak menggunakan SDK pelacakan",
          "• Tidak menggunakan layanan analitik",
          "• Tidak menyertakan jaringan periklanan"
        ]
      }
    },
    {
      title: { en: "5. External Content (Track Panel)", id: "5. Konten Eksternal (Panel Track)" },
      content: {
        en: [
          "The Track feature uses an in-app browser to display third-party websites (e.g., CoinMarketCap).",
          "• These websites operate under their own privacy policies",
          "• CrypTrack does not control or store any data from those websites",
          "• Users are responsible for reviewing third-party policies"
        ],
        id: [
          "Fitur Track menggunakan browser dalam aplikasi untuk menampilkan situs web pihak ketiga (misalnya, CoinMarketCap).",
          "• Situs web ini beroperasi di bawah kebijakan privasi mereka sendiri",
          "• CrypTrack tidak mengontrol atau menyimpan data apa pun dari situs web tersebut",
          "• Pengguna bertanggung jawab untuk meninjau kebijakan pihak ketiga"
        ]
      }
    },
    {
      title: { en: "6. Data Export", id: "6. Ekspor Data" },
      content: {
        en: [
          "Users may export their data manually via:",
          "• JSON format",
          "• CSV format",
          "All exported data remains under the user's control and responsibility."
        ],
        id: [
          "Pengguna dapat mengekspor data mereka secara manual melalui:",
          "• Format JSON",
          "• Format CSV",
          "Semua data yang diekspor tetap di bawah kendali dan tanggung jawab pengguna."
        ]
      }
    },
    {
      title: { en: "7. Data Deletion", id: "7. Penghapusan Data" },
      content: {
        en: [
          "Users can permanently delete all data via:",
          "\"Clear All Data\" feature inside the app",
          "This action:",
          "• Deletes all stored data locally",
          "• Is irreversible"
        ],
        id: [
          "Pengguna dapat menghapus semua data secara permanen melalui:",
          "Fitur \"Hapus Semua Data\" di dalam aplikasi",
          "Tindakan ini:",
          "• Menghapus semua data yang tersimpan secara lokal",
          "• Tidak dapat dibatalkan"
        ]
      }
    },
    {
      title: { en: "8. Security", id: "8. Keamanan" },
      content: {
        en: [
          "CrypTrack follows a local-first security model:",
          "• No internet exposure for sensitive data",
          "• Reduced attack surface (no backend server)",
          "However, users are responsible for:",
          "• Securing their device",
          "• Maintaining backups if needed"
        ],
        id: [
          "CrypTrack mengikuti model keamanan lokal-first:",
          "• Tidak ada paparan internet untuk data sensitif",
          "• Permukaan serangan yang berkurang (tanpa server backend)",
          "Namun, pengguna bertanggung jawab untuk:",
          "• Mengamankan perangkat mereka",
          "• Memelihara cadangan jika diperlukan"
        ]
      }
    },
    {
      title: { en: "9. Children's Privacy", id: "9. Privasi Anak-anak" },
      content: {
        en: [
          "CrypTrack does not knowingly collect or process data from children, as no data collection occurs."
        ],
        id: [
          "CrypTrack tidak secara sengaja mengumpulkan atau memproses data dari anak-anak, karena tidak ada pengumpulan data yang terjadi."
        ]
      }
    },
    {
      title: { en: "10. Changes to This Policy", id: "10. Perubahan pada Kebijakan Ini" },
      content: {
        en: [
          "This Privacy Policy may be updated periodically. Updates will be reflected within the app or official distribution channels."
        ],
        id: [
          "Kebijakan Privasi ini dapat diperbarui secara berkala. Pembaruan akan tercermin dalam aplikasi atau saluran distribusi resmi."
        ]
      }
    },
    {
      title: { en: "11. Contact", id: "11. Kontak" },
      content: {
        en: [
          "For questions or support: xolariacorporation@gmail.com"
        ],
        id: [
          "Untuk pertanyaan atau dukungan: xolariacorporation@gmail.com"
        ]
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#D90429]"
              data-testid="back-to-home-button"
            >
              <ArrowLeft className="h-4 w-4" />
              {t({ en: "Back to Home", id: "Kembali ke Beranda" })}
            </Button>
            
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-[#1A1A1A] hover:text-[#D90429]"
              data-testid="language-toggle-button"
            >
              <Globe className="h-4 w-4" />
              {language === 'en' ? 'ID' : 'EN'}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="border-b border-gray-100 bg-[#F8F9FA]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">
            {/* Logo Image */}
            <div className="flex items-center justify-center">
              <img
                src={CRYPTRACK_LOGO}
                alt="CrypTrack Logo"
                className="h-64 w-64 rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D90429]">
                {t({ en: "Portfolio Project", id: "Proyek Portofolio" })}
              </p>
              <h1 className="mt-3 text-4xl font-bold text-[#1A1A1A] md:text-5xl" data-testid="cryptrack-title">
                CrypTrack
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#6C757D]">
                {t({
                  en: "Real-time cryptocurrency portfolio tracker. Monitor your holdings, track price movements, and analyze your investment performance across multiple blockchains.",
                  id: "Pelacak portofolio cryptocurrency real-time. Pantau kepemilikan Anda, lacak pergerakan harga, dan analisis kinerja investasi Anda di berbagai blockchain."
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Section */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="border-b border-gray-200 pb-8 mb-8">
            <h2 className="text-3xl font-bold text-[#1A1A1A] md:text-4xl">
              {t({ en: "PRIVACY POLICY — CRYPTRACK", id: "KEBIJAKAN PRIVASI — CRYPTRACK" })}
            </h2>
            <p className="mt-3 text-sm text-[#6C757D]">
              {t({ en: "Effective Date: 30 March 2026", id: "Tanggal Efektif: 30 Maret 2026" })}
            </p>
          </div>

          <p className="text-base leading-relaxed text-[#1A1A1A] mb-8">
            {t({
              en: "CrypTrack (\"the App\") is designed with a strict privacy-first architecture. This Privacy Policy explains how your data is handled when using the application.",
              id: "CrypTrack (\"Aplikasi\") dirancang dengan arsitektur yang mengutamakan privasi secara ketat. Kebijakan Privasi ini menjelaskan bagaimana data Anda ditangani saat menggunakan aplikasi."
            })}
          </p>

          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">
                  {t(section.title)}
                </h3>
                <div className="space-y-2">
                  {t(section.content).map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-base leading-relaxed text-[#6C757D]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Final Statement */}
          <div className="mt-12 p-6 bg-[#F8F9FA] rounded-sm border border-gray-200">
            <h3 className="text-xl font-bold text-[#1A1A1A] mb-4">
              {t({ en: "FINAL STATEMENT", id: "PERNYATAAN AKHIR" })}
            </h3>
            <p className="text-base leading-relaxed text-[#1A1A1A] mb-4">
              {t({
                en: "CrypTrack is built with a clear objective:",
                id: "CrypTrack dibangun dengan tujuan yang jelas:"
              })}
            </p>
            <p className="text-lg font-semibold text-[#D90429] mb-4">
              {t({
                en: "Maximum control, zero data exploitation.",
                id: "Kontrol maksimal, eksploitasi data nol."
              })}
            </p>
            <p className="text-base leading-relaxed text-[#6C757D]">
              {t({
                en: "We do not monetize your data. We do not track you. We do not own your information.",
                id: "Kami tidak memonetisasi data Anda. Kami tidak melacak Anda. Kami tidak memiliki informasi Anda."
              })}
            </p>
            <p className="text-lg font-bold text-[#1A1A1A] mt-4">
              {t({ en: "You do.", id: "Anda yang memilikinya." })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
