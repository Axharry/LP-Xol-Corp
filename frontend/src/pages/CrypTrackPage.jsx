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
      title: "1. Core Principle",
      content: [
        "CrypTrack operates under a fundamental principle:",
        "Your data is yours. We do not collect, store, or transmit your personal or financial data to any external server."
      ]
    },
    {
      title: "2. Data Storage",
      content: [
        "• All data is stored locally on your device only",
        "• No cloud storage is used",
        "• No centralized database exists",
        "• No account registration is required",
        "This includes:",
        "• Portfolio data",
        "• Custom cryptocurrency entries",
        "• Application settings"
      ]
    },
    {
      title: "3. No Data Collection",
      content: [
        "CrypTrack does not collect:",
        "• Personal information",
        "• Wallet private keys or seed phrases",
        "• Usage analytics",
        "• Device identifiers",
        "• Location data"
      ]
    },
    {
      title: "4. No Third-Party Tracking",
      content: [
        "The application:",
        "• Does not use tracking SDKs",
        "• Does not use analytics services",
        "• Does not include advertising networks"
      ]
    },
    {
      title: "5. External Content (Track Panel)",
      content: [
        "The Track feature uses an in-app browser to display third-party websites (e.g., CoinMarketCap).",
        "• These websites operate under their own privacy policies",
        "• CrypTrack does not control or store any data from those websites",
        "• Users are responsible for reviewing third-party policies"
      ]
    },
    {
      title: "6. Data Export",
      content: [
        "Users may export their data manually via:",
        "• JSON format",
        "• CSV format",
        "All exported data remains under the user's control and responsibility."
      ]
    },
    {
      title: "7. Data Deletion",
      content: [
        "Users can permanently delete all data via:",
        "\"Clear All Data\" feature inside the app",
        "This action:",
        "• Deletes all stored data locally",
        "• Is irreversible"
      ]
    },
    {
      title: "8. Security",
      content: [
        "CrypTrack follows a local-first security model:",
        "• No internet exposure for sensitive data",
        "• Reduced attack surface (no backend server)",
        "However, users are responsible for:",
        "• Securing their device",
        "• Maintaining backups if needed"
      ]
    },
    {
      title: "9. Children's Privacy",
      content: [
        "CrypTrack does not knowingly collect or process data from children, as no data collection occurs."
      ]
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "This Privacy Policy may be updated periodically. Updates will be reflected within the app or official distribution channels."
      ]
    },
    {
      title: "11. Contact",
      content: [
        "For questions or support: xolariacorporation@gmail.com"
      ]
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
              PRIVACY POLICY — CRYPTRACK
            </h2>
            <p className="mt-3 text-sm text-[#6C757D]">
              Effective Date: 30 March 2026
            </p>
          </div>

          <p className="text-base leading-relaxed text-[#1A1A1A] mb-8">
            CrypTrack ("the App") is designed with a strict privacy-first architecture. This Privacy Policy explains how your data is handled when using the application.
          </p>

          <div className="space-y-8">
            {privacySections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1A1A1A]">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.content.map((paragraph, pIndex) => (
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
              FINAL STATEMENT
            </h3>
            <p className="text-base leading-relaxed text-[#1A1A1A] mb-4">
              CrypTrack is built with a clear objective:
            </p>
            <p className="text-lg font-semibold text-[#D90429] mb-4">
              Maximum control, zero data exploitation.
            </p>
            <p className="text-base leading-relaxed text-[#6C757D]">
              We do not monetize your data. We do not track you. We do not own your information.
            </p>
            <p className="text-lg font-bold text-[#1A1A1A] mt-4">
              You do.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
