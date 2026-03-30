import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CRYPTAGS_LOGO = "https://customer-assets.emergentagent.com/job_xol-corp-preview-2/artifacts/ht733bqu_LOGO%20-%20CrypTags.png";

export const CrypTagsPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const privacySections = [
    {
      title: { en: "1. Information We Collect", id: "1. Informasi yang Kami Kumpulkan" },
      content: {
        en: [
          "CrypTags is designed with a privacy-first approach.",
          "The application does not collect, transmit, or store personal data on external servers.",
          "All information entered into the app is stored locally on the user's device.",
          "This may include:",
          "• Contact names",
          "• Wallet addresses",
          "• Contact notes",
          "• Group or entity labels",
          "• Optional email or phone information entered by the user",
          "• Optional encrypted vault data (if used)",
          "This information is stored only on your device and is not shared with the developer or any third parties."
        ],
        id: [
          "CrypTags dirancang dengan pendekatan yang mengutamakan privasi.",
          "Aplikasi tidak mengumpulkan, mengirimkan, atau menyimpan data pribadi di server eksternal.",
          "Semua informasi yang dimasukkan ke dalam aplikasi disimpan secara lokal di perangkat pengguna.",
          "Ini mungkin termasuk:",
          "• Nama kontak",
          "• Alamat wallet",
          "• Catatan kontak",
          "• Label grup atau entitas",
          "• Email atau telepon opsional yang dimasukkan oleh pengguna",
          "• Data vault terenkripsi opsional (jika digunakan)",
          "Informasi ini hanya disimpan di perangkat Anda dan tidak dibagikan dengan pengembang atau pihak ketiga mana pun."
        ]
      }
    },
    {
      title: { en: "2. Local Data Storage", id: "2. Penyimpanan Data Lokal" },
      content: {
        en: [
          "CrypTags operates as an offline-first application.",
          "All user data is stored locally on the device using internal storage. The app does not require an internet connection to function.",
          "CrypTags does not maintain any remote database or cloud storage system.",
          "Users have full control over their stored information."
        ],
        id: [
          "CrypTags beroperasi sebagai aplikasi offline-first.",
          "Semua data pengguna disimpan secara lokal di perangkat menggunakan penyimpanan internal. Aplikasi tidak memerlukan koneksi internet untuk berfungsi.",
          "CrypTags tidak memelihara database jarak jauh atau sistem penyimpanan cloud.",
          "Pengguna memiliki kontrol penuh atas informasi yang disimpan."
        ]
      }
    },
    {
      title: { en: "3. Encrypted Sensitive Data", id: "3. Data Sensitif Terenkripsi" },
      content: {
        en: [
          "CrypTags may allow users to store sensitive information such as:",
          "• Private keys",
          "• Seed phrases",
          "If used, this information is protected through local encryption and password protection within the application.",
          "The developer cannot access, recover, or view this information.",
          "Users are responsible for securely managing their device and application password."
        ],
        id: [
          "CrypTags dapat memungkinkan pengguna untuk menyimpan informasi sensitif seperti:",
          "• Private key",
          "• Seed phrase",
          "Jika digunakan, informasi ini dilindungi melalui enkripsi lokal dan perlindungan kata sandi dalam aplikasi.",
          "Pengembang tidak dapat mengakses, memulihkan, atau melihat informasi ini.",
          "Pengguna bertanggung jawab untuk mengelola perangkat dan kata sandi aplikasi mereka dengan aman."
        ]
      }
    },
    {
      title: { en: "4. Data Sharing", id: "4. Pembagian Data" },
      content: {
        en: [
          "CrypTags does not sell, share, or transmit user data.",
          "No user information is sent to:",
          "• External servers",
          "• Analytics services",
          "• Advertising networks",
          "• Third-party tracking tools",
          "All data remains on the user's device."
        ],
        id: [
          "CrypTags tidak menjual, membagikan, atau mengirimkan data pengguna.",
          "Tidak ada informasi pengguna yang dikirim ke:",
          "• Server eksternal",
          "• Layanan analitik",
          "• Jaringan periklanan",
          "• Alat pelacakan pihak ketiga",
          "Semua data tetap berada di perangkat pengguna."
        ]
      }
    },
    {
      title: { en: "5. Internet Usage", id: "5. Penggunaan Internet" },
      content: {
        en: [
          "CrypTags does not require internet connectivity for its core functionality.",
          "Internet access may only be used if the user chooses to open external links, such as:",
          "• Developer support contact",
          "• External documentation",
          "• Donation pages",
          "These actions are initiated voluntarily by the user."
        ],
        id: [
          "CrypTags tidak memerlukan konektivitas internet untuk fungsi intinya.",
          "Akses internet hanya dapat digunakan jika pengguna memilih untuk membuka tautan eksternal, seperti:",
          "• Kontak dukungan pengembang",
          "• Dokumentasi eksternal",
          "• Halaman donasi",
          "Tindakan ini dilakukan secara sukarela oleh pengguna."
        ]
      }
    },
    {
      title: { en: "6. Third-Party Services", id: "6. Layanan Pihak Ketiga" },
      content: {
        en: [
          "CrypTags does not integrate with third-party data processing services.",
          "No analytics, advertising SDKs, or tracking services are included in the application."
        ],
        id: [
          "CrypTags tidak terintegrasi dengan layanan pemrosesan data pihak ketiga.",
          "Tidak ada analitik, SDK periklanan, atau layanan pelacakan yang disertakan dalam aplikasi."
        ]
      }
    },
    {
      title: { en: "7. Children's Privacy", id: "7. Privasi Anak-anak" },
      content: {
        en: [
          "CrypTags is not directed toward children under the age of 13.",
          "The application does not knowingly collect personal information from children."
        ],
        id: [
          "CrypTags tidak ditujukan untuk anak-anak di bawah usia 13 tahun.",
          "Aplikasi tidak secara sengaja mengumpulkan informasi pribadi dari anak-anak."
        ]
      }
    },
    {
      title: { en: "8. User Responsibility", id: "8. Tanggung Jawab Pengguna" },
      content: {
        en: [
          "Because CrypTags stores data locally, users are responsible for:",
          "• Protecting their device",
          "• Managing application passwords",
          "• Backing up exported data if necessary",
          "Loss of device access or deletion of the application may result in loss of locally stored data."
        ],
        id: [
          "Karena CrypTags menyimpan data secara lokal, pengguna bertanggung jawab untuk:",
          "• Melindungi perangkat mereka",
          "• Mengelola kata sandi aplikasi",
          "• Mencadangkan data yang diekspor jika perlu",
          "Kehilangan akses perangkat atau penghapusan aplikasi dapat mengakibatkan hilangnya data yang disimpan secara lokal."
        ]
      }
    },
    {
      title: { en: "9. Changes to This Privacy Policy", id: "9. Perubahan pada Kebijakan Privasi Ini" },
      content: {
        en: [
          "This Privacy Policy may be updated from time to time.",
          "Any updates will be reflected by updating the \"Last Updated\" date at the top of this page."
        ],
        id: [
          "Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu.",
          "Setiap pembaruan akan tercermin dengan memperbarui tanggal \"Terakhir Diperbarui\" di bagian atas halaman ini."
        ]
      }
    },
    {
      title: { en: "10. Contact Information", id: "10. Informasi Kontak" },
      content: {
        en: [
          "If you have questions about this Privacy Policy or the CrypTags application, you can contact the developer at:",
          "Email: xolariacorporation@gmail.com"
        ],
        id: [
          "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau aplikasi CrypTags, Anda dapat menghubungi pengembang di:",
          "Email: xolariacorporation@gmail.com"
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
                src={CRYPTAGS_LOGO}
                alt="CrypTags Logo"
                className="h-64 w-64 rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D90429]">
                {t({ en: "Portfolio Project", id: "Proyek Portofolio" })}
              </p>
              <h1 className="mt-3 text-4xl font-bold text-[#1A1A1A] md:text-5xl" data-testid="cryptags-title">
                CrypTags
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#6C757D]">
                {t({
                  en: "A privacy-first offline wallet contact manager. Store wallet addresses, contact notes, and sensitive data locally with encryption. No external servers, no tracking.",
                  id: "Manajer kontak wallet offline yang mengutamakan privasi. Simpan alamat wallet, catatan kontak, dan data sensitif secara lokal dengan enkripsi. Tanpa server eksternal, tanpa pelacakan."
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
              {t({ en: "Privacy Policy for CrypTags", id: "Kebijakan Privasi untuk CrypTags" })}
            </h2>
            <p className="mt-3 text-sm text-[#6C757D]">
              {t({ en: "Last Updated: March 2026", id: "Terakhir Diperbarui: Maret 2026" })}
            </p>
          </div>

          <p className="text-base leading-relaxed text-[#1A1A1A] mb-8">
            {t({
              en: "CrypTags respects your privacy and is committed to protecting user data. This Privacy Policy explains how the CrypTags application handles information when you use the app.",
              id: "CrypTags menghormati privasi Anda dan berkomitmen untuk melindungi data pengguna. Kebijakan Privasi ini menjelaskan bagaimana aplikasi CrypTags menangani informasi saat Anda menggunakan aplikasi."
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
        </div>
      </section>
    </div>
  );
};
