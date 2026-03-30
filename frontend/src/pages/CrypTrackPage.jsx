import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, TrendingUp, PieChart, Bell, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const CrypTrackPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const features = [
    {
      icon: TrendingUp,
      title: { en: "Real-Time Price Tracking", id: "Pelacakan Harga Real-Time" },
      description: {
        en: "Monitor cryptocurrency prices in real-time with live updates from multiple exchanges and data sources.",
        id: "Pantau harga cryptocurrency secara real-time dengan pembaruan langsung dari berbagai bursa dan sumber data."
      }
    },
    {
      icon: PieChart,
      title: { en: "Portfolio Analytics", id: "Analitik Portofolio" },
      description: {
        en: "Comprehensive portfolio analysis with profit/loss tracking, allocation breakdowns, and performance metrics.",
        id: "Analisis portofolio komprehensif dengan pelacakan untung/rugi, rincian alokasi, dan metrik kinerja."
      }
    },
    {
      icon: Bell,
      title: { en: "Price Alerts", id: "Peringatan Harga" },
      description: {
        en: "Set custom price alerts to stay informed about market movements and never miss trading opportunities.",
        id: "Atur peringatan harga khusus untuk tetap mendapat informasi tentang pergerakan pasar dan jangan lewatkan peluang trading."
      }
    },
    {
      icon: Layers,
      title: { en: "Multi-Chain Support", id: "Dukungan Multi-Chain" },
      description: {
        en: "Track assets across multiple blockchains including Ethereum, BSC, Polygon, Solana, and more.",
        id: "Lacak aset di berbagai blockchain termasuk Ethereum, BSC, Polygon, Solana, dan lainnya."
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
    </div>
  );
};
