import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, FileCheck, Fingerprint, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const CrypTrustPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const features = [
    {
      icon: FileCheck,
      title: { en: "Document Verification", id: "Verifikasi Dokumen" },
      description: {
        en: "Secure and immutable document verification using blockchain technology. Ensure authenticity and prevent tampering.",
        id: "Verifikasi dokumen yang aman dan tidak dapat diubah menggunakan teknologi blockchain. Pastikan keaslian dan cegah manipulasi."
      }
    },
    {
      icon: Fingerprint,
      title: { en: "Digital Signatures", id: "Tanda Tangan Digital" },
      description: {
        en: "Cryptographically secure digital signatures that provide non-repudiation and legal validity for your documents.",
        id: "Tanda tangan digital yang aman secara kriptografis yang memberikan non-repudiasi dan validitas hukum untuk dokumen Anda."
      }
    },
    {
      icon: Shield,
      title: { en: "Proof of Authenticity", id: "Bukti Keaslian" },
      description: {
        en: "Generate immutable proof of authenticity that can be verified by anyone, anytime, anywhere.",
        id: "Hasilkan bukti keaslian yang tidak dapat diubah yang dapat diverifikasi oleh siapa pun, kapan pun, di mana pun."
      }
    },
    {
      icon: CheckCircle,
      title: { en: "Compliance Ready", id: "Siap Kepatuhan" },
      description: {
        en: "Built with regulatory compliance in mind. Suitable for businesses and individuals requiring audit trails.",
        id: "Dibangun dengan mempertimbangkan kepatuhan regulasi. Cocok untuk bisnis dan individu yang memerlukan jejak audit."
      }
    }
  ];

  const useCases = [
    { en: "Legal document verification", id: "Verifikasi dokumen hukum" },
    { en: "Certificate authenticity", id: "Keaslian sertifikat" },
    { en: "Contract signing", id: "Penandatanganan kontrak" },
    { en: "Academic credentials", id: "Kredensial akademik" },
    { en: "Supply chain verification", id: "Verifikasi rantai pasokan" },
    { en: "Identity verification", id: "Verifikasi identitas" }
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
              <h1 className="mt-3 text-4xl font-bold text-[#1A1A1A] md:text-5xl" data-testid="cryptrust-title">
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

      {/* Use Cases Section */}
      <section className="border-b border-gray-100 bg-[#F8F9FA]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">
            {t({ en: "Use Cases", id: "Kasus Penggunaan" })}
          </h2>
          
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {useCases.map((item, index) => (
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
              {t({ en: "Interested in CrypTrust?", id: "Tertarik dengan CrypTrust?" })}
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
