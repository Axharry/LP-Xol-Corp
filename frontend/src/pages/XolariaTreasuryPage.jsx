import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Vault, Users, Eye, BarChart3 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const XolariaTreasuryPage = () => {
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  const features = [
    {
      icon: Vault,
      title: { en: "On-Chain Reserves", id: "Cadangan On-Chain" },
      description: {
        en: "Transparent treasury reserves stored on-chain with full visibility. Every transaction is recorded and verifiable.",
        id: "Cadangan treasury transparan yang disimpan on-chain dengan visibilitas penuh. Setiap transaksi dicatat dan dapat diverifikasi."
      }
    },
    {
      icon: Users,
      title: { en: "Multi-Signature Governance", id: "Tata Kelola Multi-Tanda Tangan" },
      description: {
        en: "Secure multi-signature wallet implementation for treasury management. Require multiple approvals for fund movements.",
        id: "Implementasi wallet multi-tanda tangan yang aman untuk manajemen treasury. Memerlukan beberapa persetujuan untuk pergerakan dana."
      }
    },
    {
      icon: Eye,
      title: { en: "Real-Time Auditing", id: "Audit Real-Time" },
      description: {
        en: "Continuous real-time auditing capabilities. Track all treasury activities with complete transparency.",
        id: "Kemampuan audit real-time yang berkelanjutan. Lacak semua aktivitas treasury dengan transparansi penuh."
      }
    },
    {
      icon: BarChart3,
      title: { en: "Analytics Dashboard", id: "Dashboard Analitik" },
      description: {
        en: "Comprehensive analytics dashboard for treasury performance, allocation tracking, and financial reporting.",
        id: "Dashboard analitik komprehensif untuk kinerja treasury, pelacakan alokasi, dan pelaporan keuangan."
      }
    }
  ];

  const benefits = [
    { en: "Complete transparency for stakeholders", id: "Transparansi penuh untuk pemangku kepentingan" },
    { en: "Reduced operational risks", id: "Risiko operasional yang berkurang" },
    { en: "Automated compliance reporting", id: "Pelaporan kepatuhan otomatis" },
    { en: "Decentralized governance", id: "Tata kelola terdesentralisasi" },
    { en: "Immutable transaction history", id: "Riwayat transaksi yang tidak dapat diubah" },
    { en: "24/7 accessibility", id: "Aksesibilitas 24/7" }
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
                  <span className="text-6xl font-bold text-gray-300">X</span>
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
              <h1 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl lg:text-5xl" data-testid="treasury-title">
                Xolaria On-Chain Treasury Reserve
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[#6C757D]">
                {t({
                  en: "Decentralized treasury management solution. Transparent on-chain reserves, multi-signature governance, and real-time auditing for organizations and DAOs.",
                  id: "Solusi manajemen treasury terdesentralisasi. Cadangan on-chain yang transparan, tata kelola multi-tanda tangan, dan audit real-time untuk organisasi dan DAO."
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

      {/* Benefits Section */}
      <section className="border-b border-gray-100 bg-[#F8F9FA]">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="text-2xl font-semibold text-[#1A1A1A] md:text-3xl">
            {t({ en: "Benefits", id: "Manfaat" })}
          </h2>
          
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            {benefits.map((item, index) => (
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
              {t({ en: "Interested in Xolaria Treasury?", id: "Tertarik dengan Xolaria Treasury?" })}
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
