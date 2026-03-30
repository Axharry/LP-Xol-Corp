import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Shield, Lock, Smartphone, Database } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const CrypTagsPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const features = [
    {
      icon: Shield,
      title: { en: "Privacy-First Design", id: "Desain Mengutamakan Privasi" },
      description: {
        en: "CrypTags is designed with a privacy-first approach. The application does not collect, transmit, or store personal data on external servers.",
        id: "CrypTags dirancang dengan pendekatan yang mengutamakan privasi. Aplikasi tidak mengumpulkan, mengirimkan, atau menyimpan data pribadi di server eksternal."
      }
    },
    {
      icon: Database,
      title: { en: "Local Data Storage", id: "Penyimpanan Data Lokal" },
      description: {
        en: "All user data is stored locally on the device using internal storage. The app does not require an internet connection to function.",
        id: "Semua data pengguna disimpan secara lokal di perangkat menggunakan penyimpanan internal. Aplikasi tidak memerlukan koneksi internet untuk berfungsi."
      }
    },
    {
      icon: Lock,
      title: { en: "Encrypted Sensitive Data", id: "Data Sensitif Terenkripsi" },
      description: {
        en: "Store sensitive information like private keys and seed phrases with local encryption and password protection.",
        id: "Simpan informasi sensitif seperti private key dan seed phrase dengan enkripsi lokal dan perlindungan kata sandi."
      }
    },
    {
      icon: Smartphone,
      title: { en: "Offline-First", id: "Offline-First" },
      description: {
        en: "CrypTags operates as an offline-first application. No remote database or cloud storage system is required.",
        id: "CrypTags beroperasi sebagai aplikasi offline-first. Tidak diperlukan database jarak jauh atau sistem penyimpanan cloud."
      }
    }
  ];

  const dataTypes = [
    { en: "Contact names", id: "Nama kontak" },
    { en: "Wallet addresses", id: "Alamat wallet" },
    { en: "Contact notes", id: "Catatan kontak" },
    { en: "Group or entity labels", id: "Label grup atau entitas" },
    { en: "Optional email or phone information", id: "Email atau telepon opsional" },
    { en: "Optional encrypted vault data", id: "Data vault terenkripsi opsional" }
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
            {/* Image Placeholder */}
            <div className="flex items-center justify-center">
              <div className="flex h-64 w-full max-w-md items-center justify-center rounded-sm border-2 border-dashed border-gray-300 bg-white">
                <div className="text-center">
                  <span className="text-6xl font-bold text-gray-300">C</span>
                  <p className="mt-2 text-sm text-gray-400">
                    {t({ en: "Image Coming Soon", id: "Gambar Segera Hadir" })}
                  </p>
                </div>
              </div>
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

      {/* Features Section */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">
            {t({ en: "Key Features", id: "Fitur Utama" })}
          </h2>
          
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="rounded-sm border border-gray-200 bg-white p-6 shadow-sm"
                  data-testid={`feature-card-${index}`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-[#D90429]/10">
                    <Icon className="h-6 w-6 text-[#D90429]" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">
                    {t(feature.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#6C757D]">
                    {t(feature.description)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="border-b border-gray-100 bg-[#F8F9FA]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">
            {t({ en: "What You Can Store", id: "Apa yang Dapat Anda Simpan" })}
          </h2>
          <p className="mt-4 text-base text-[#6C757D]">
            {t({
              en: "All information is stored only on your device and is not shared with the developer or any third parties.",
              id: "Semua informasi hanya disimpan di perangkat Anda dan tidak dibagikan dengan pengembang atau pihak ketiga mana pun."
            })}
          </p>
          
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {dataTypes.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-sm border border-gray-200 bg-white px-4 py-3"
              >
                <div className="h-2 w-2 rounded-full bg-[#D90429]" />
                <span className="text-sm text-[#1A1A1A]">{t(item)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">
              {t({ en: "Interested in CrypTags?", id: "Tertarik dengan CrypTags?" })}
            </h2>
            <p className="mt-4 text-base text-[#6C757D]">
              {t({
                en: "Contact us to learn more about this project.",
                id: "Hubungi kami untuk mempelajari lebih lanjut tentang proyek ini."
              })}
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                onClick={() => navigate("/#contact")}
                className="rounded-sm bg-[#D90429] px-6 text-white hover:bg-[#EF233C]"
                data-testid="contact-us-button"
              >
                {t({ en: "Contact Us", id: "Hubungi Kami" })}
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/")}
                className="rounded-sm border-gray-300"
                data-testid="back-home-button"
              >
                {t({ en: "Back to Home", id: "Kembali ke Beranda" })}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
