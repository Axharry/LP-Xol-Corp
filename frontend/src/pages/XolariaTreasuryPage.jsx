import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Vault, Eye, Shield, Layers } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const TREASURY_LOGO = "https://customer-assets.emergentagent.com/job_xol-corp-preview-2/artifacts/ojat8lb3_LOGO%20-%20Xolaria%20On-Chain%20Treasury.png";

export const XolariaTreasuryPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const features = [
    {
      icon: Eye,
      title: { en: "Full Transparency", id: "Transparansi Penuh" },
      description: {
        en: "The treasury is fully verifiable on-chain, ensuring transparency and real-time visibility for stakeholders.",
        id: "Treasury dapat diverifikasi sepenuhnya on-chain, memastikan transparansi dan visibilitas real-time untuk pemangku kepentingan."
      }
    },
    {
      icon: Layers,
      title: { en: "EVM-Compatible", id: "Kompatibel EVM" },
      description: {
        en: "Utilizing an EVM-compatible address enables seamless integration across multiple blockchain networks, including the Ethereum ecosystem.",
        id: "Menggunakan alamat yang kompatibel dengan EVM memungkinkan integrasi mulus di berbagai jaringan blockchain, termasuk ekosistem Ethereum."
      }
    },
    {
      icon: Vault,
      title: { en: "Open Infrastructure", id: "Infrastruktur Terbuka" },
      description: {
        en: "The treasury functions as an open financial infrastructure layer for future development and ecosystem expansion.",
        id: "Treasury berfungsi sebagai lapisan infrastruktur keuangan terbuka untuk pengembangan masa depan dan ekspansi ekosistem."
      }
    },
    {
      icon: Shield,
      title: { en: "Strategic Management", id: "Manajemen Strategis" },
      description: {
        en: "Supporting operational stability, ecosystem growth, and strategic initiatives as part of Xolaria's long-term financial strategy.",
        id: "Mendukung stabilitas operasional, pertumbuhan ekosistem, dan inisiatif strategis sebagai bagian dari strategi keuangan jangka panjang Xolaria."
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
                src={TREASURY_LOGO}
                alt="Xolaria On-Chain Treasury Reserve Logo"
                className="h-64 w-64 rounded-3xl object-cover shadow-lg"
              />
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D90429]">
                {t({ en: "Portfolio Project", id: "Proyek Portofolio" })}
              </p>
              <h1 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl lg:text-5xl" data-testid="treasury-title">
                Xolaria On-Chain Treasury Reserve
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#6C757D]">
                {t({
                  en: "Xolaria has established a digital asset treasury reserve as part of its long-term financial strategy, supporting operational stability, ecosystem growth, and strategic initiatives.",
                  id: "Xolaria telah mendirikan cadangan treasury aset digital sebagai bagian dari strategi keuangan jangka panjangnya, mendukung stabilitas operasional, pertumbuhan ekosistem, dan inisiatif strategis."
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="max-w-4xl">
            <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl mb-6">
              {t({ en: "About the Treasury", id: "Tentang Treasury" })}
            </h2>
            
            <div className="space-y-4 text-base leading-relaxed text-[#6C757D]">
              <p>
                {t({
                  en: "Xolaria has established a digital asset treasury reserve as part of its long-term financial strategy, supporting operational stability, ecosystem growth, and strategic initiatives. The treasury is fully verifiable on-chain, ensuring transparency and real-time visibility for stakeholders.",
                  id: "Xolaria telah mendirikan cadangan treasury aset digital sebagai bagian dari strategi keuangan jangka panjangnya, mendukung stabilitas operasional, pertumbuhan ekosistem, dan inisiatif strategis. Treasury dapat diverifikasi sepenuhnya on-chain, memastikan transparansi dan visibilitas real-time untuk pemangku kepentingan."
                })}
              </p>
              <p>
                {t({
                  en: "To maximize interoperability, Xolaria utilizes an EVM-compatible address, enabling seamless integration across multiple blockchain networks, including the Ethereum ecosystem.",
                  id: "Untuk memaksimalkan interoperabilitas, Xolaria menggunakan alamat yang kompatibel dengan EVM, memungkinkan integrasi mulus di berbagai jaringan blockchain, termasuk ekosistem Ethereum."
                })}
              </p>
              <p>
                {t({
                  en: "The treasury also functions as an open financial infrastructure layer for future development and ecosystem expansion. For transparency purposes, the treasury address is publicly accessible, and any inbound transfers are treated as voluntary ecosystem contributions in alignment with Xolaria's treasury management strategy.",
                  id: "Treasury juga berfungsi sebagai lapisan infrastruktur keuangan terbuka untuk pengembangan masa depan dan ekspansi ekosistem. Untuk tujuan transparansi, alamat treasury dapat diakses publik, dan setiap transfer masuk diperlakukan sebagai kontribusi ekosistem sukarela sesuai dengan strategi manajemen treasury Xolaria."
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#F8F9FA]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl mb-10">
            {t({ en: "Key Features", id: "Fitur Utama" })}
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
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
