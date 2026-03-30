import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Clock } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const CRYPTRUST_LOGO = "https://customer-assets.emergentagent.com/job_xol-corp-preview-2/artifacts/pikjwmir_LOGO%20-%20CrypTrust.png";

export const CrypTrustPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

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
                src={CRYPTRUST_LOGO}
                alt="CrypTrust Logo"
                className="h-64 w-64 rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                  <Clock className="h-3 w-3" />
                  {t({ en: "Upcoming Project", id: "Proyek Akan Datang" })}
                </span>
              </div>
              <h1 className="text-4xl font-bold text-[#1A1A1A] md:text-5xl" data-testid="cryptrust-title">
                CrypTrust
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#6C757D]">
                {t({
                  en: "Blockchain-based trust and verification system. Secure document verification, digital signatures, and immutable proof of authenticity for businesses and individuals.",
                  id: "Sistem kepercayaan dan verifikasi berbasis blockchain. Verifikasi dokumen yang aman, tanda tangan digital, dan bukti keaslian yang tidak dapat diubah untuk bisnis dan individu."
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Notice Section */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-amber-100 mb-6">
              <Clock className="h-10 w-10 text-amber-600" />
            </div>
            
            <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">
              {t({ en: "Coming Soon", id: "Segera Hadir" })}
            </h2>
            
            <p className="mt-4 text-lg text-[#6C757D]">
              {t({
                en: "This project is scheduled to start around",
                id: "Proyek ini dijadwalkan untuk dimulai sekitar"
              })}
            </p>
            
            <p className="mt-2 text-3xl font-bold text-[#D90429]">
              1 July 2026
            </p>
            
            <p className="mt-6 text-base text-[#6C757D] leading-relaxed">
              {t({
                en: "CrypTrust will bring secure document verification, digital signatures, and immutable proof of authenticity using blockchain technology. Stay tuned for updates!",
                id: "CrypTrust akan menghadirkan verifikasi dokumen yang aman, tanda tangan digital, dan bukti keaslian yang tidak dapat diubah menggunakan teknologi blockchain. Nantikan pembaruannya!"
              })}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
