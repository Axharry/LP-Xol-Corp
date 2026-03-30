import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Wallet, Link2, Users, QrCode, HardDrive, Shield } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useNavigate } from "react-router-dom";

const cryptagsLogo = "https://customer-assets.emergentagent.com/job_github-landing-demo/artifacts/1iowfetz_CT.png";

const keyFeatures = [
  {
    icon: Wallet,
    title: { en: "Wallet Address Contact Management", id: "Manajemen Kontak Alamat Wallet" },
    description: { en: "Store and label wallet addresses like contacts", id: "Simpan dan beri label alamat wallet seperti kontak" }
  },
  {
    icon: Link2,
    title: { en: "Multi-Chain Support", id: "Dukungan Multi-Chain" },
    description: { en: "Manage addresses across multiple blockchain networks", id: "Kelola alamat di berbagai jaringan blockchain" }
  },
  {
    icon: Users,
    title: { en: "Contact Grouping & Organization", id: "Pengelompokan & Organisasi Kontak" },
    description: { en: "Organize wallets into custom groups and categories", id: "Organisir wallet ke dalam grup dan kategori kustom" }
  },
  {
    icon: QrCode,
    title: { en: "QR Code Address Scanner", id: "Scanner QR Code Alamat" },
    description: { en: "Quickly scan and add wallet addresses via QR codes", id: "Pindai dan tambah alamat wallet via QR code dengan cepat" }
  },
  {
    icon: HardDrive,
    title: { en: "Offline Local Data Storage", id: "Penyimpanan Data Lokal Offline" },
    description: { en: "All data stored locally on your device", id: "Semua data disimpan secara lokal di perangkat Anda" }
  },
  {
    icon: Shield,
    title: { en: "Optional Encrypted Vault", id: "Vault Terenkripsi Opsional" },
    description: { en: "Secure sensitive data with encryption", id: "Amankan data sensitif dengan enkripsi" }
  },
];

export const ProductsSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="products" className="scroll-mt-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="reveal-up mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C757D]">
            {t({ en: "Products", id: "Produk" })}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-5xl">
            {t({ en: "Web3 Utility Tools for Modern Crypto Users", id: "Alat Utilitas Web3 untuk Pengguna Crypto Modern" })}
          </h2>
        </div>

        <Card className="reveal-up delay-100 rounded-sm border border-gray-200 bg-[#F8F9FA] shadow-sm">
          <CardContent className="p-6 md:p-10">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-12">
              <div className="md:col-span-3 flex justify-center md:justify-start">
                <button
                  onClick={() => navigate("/privacy-policy")}
                  className="w-32 h-32 md:w-40 md:h-40 overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer"
                  aria-label="View CrypTags Privacy Policy"
                  data-testid="cryptags-logo-button"
                >
                  <img
                    src={cryptagsLogo}
                    alt="CrypTags App Logo - Click to view Privacy Policy"
                    className="h-full w-full object-cover"
                  />
                </button>
              </div>

              <div className="md:col-span-9">
                <Badge variant="outline" className="rounded-sm border-[#8B5CF6]/30 bg-white text-[#8B5CF6]">
                  {t({ en: "Native Offline Mobile App", id: "Aplikasi Mobile Native Offline" })}
                </Badge>
                <h3 className="mt-5 text-2xl font-semibold text-[#1A1A1A] md:text-3xl">CrypTags</h3>
                <p className="mt-2 text-sm font-medium text-[#8B5CF6]">
                  {t({ en: "Web3 Address Book & Wallet Contact Manager", id: "Buku Alamat Web3 & Manajer Kontak Wallet" })}
                </p>
                
                <p className="mt-4 text-sm leading-relaxed text-[#6C757D] md:text-base">
                  {t({
                    en: "CrypTags is a privacy-first Web3 address book designed to help users manage and organize cryptocurrency wallet addresses like contacts.",
                    id: "CrypTags adalah buku alamat Web3 yang mengutamakan privasi, dirancang untuk membantu pengguna mengelola dan mengorganisir alamat wallet cryptocurrency seperti kontak."
                  })}
                </p>
                
                <p className="mt-3 text-sm leading-relaxed text-[#6C757D] md:text-base">
                  {t({
                    en: "Instead of repeatedly copying and pasting long wallet strings, CrypTags allows users to store, label, group, and manage wallet addresses across multiple blockchain networks in a clean and intuitive interface.",
                    id: "Alih-alih berulang kali menyalin dan menempel string wallet yang panjang, CrypTags memungkinkan pengguna menyimpan, memberi label, mengelompokkan, dan mengelola alamat wallet di berbagai jaringan blockchain dalam antarmuka yang bersih dan intuitif."
                  })}
                </p>
                
                <p className="mt-3 text-sm leading-relaxed text-[#6C757D] md:text-base">
                  {t({
                    en: <>Built with an <span className="font-semibold text-[#1A1A1A]">offline-first architecture</span>, CrypTags stores all data locally on the user's device, ensuring full privacy and control without relying on cloud services or external servers.</>,
                    id: <>Dibangun dengan <span className="font-semibold text-[#1A1A1A]">arsitektur offline-first</span>, CrypTags menyimpan semua data secara lokal di perangkat pengguna, memastikan privasi dan kontrol penuh tanpa bergantung pada layanan cloud atau server eksternal.</>
                  })}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium text-[#8B5CF6]">
                    {t({ en: "Crypto Users", id: "Pengguna Crypto" })}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium text-[#8B5CF6]">
                    {t({ en: "Web3 Builders", id: "Pengembang Web3" })}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium text-[#8B5CF6]">
                    {t({ en: "Digital Asset Workflows", id: "Alur Kerja Aset Digital" })}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-[#8B5CF6]/10 px-3 py-1 text-xs font-medium text-[#8B5CF6]">
                    {t({ en: "Multi-Chain Compatible", id: "Kompatibel Multi-Chain" })}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-[#1A1A1A] mb-6">
                {t({ en: "Key Features", id: "Fitur Utama" })}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {keyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-4 rounded-lg bg-white border border-gray-100 hover:border-[#8B5CF6]/30 hover:shadow-sm transition-all"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#8B5CF6]/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#8B5CF6]" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1A1A1A]">{t(feature.title)}</p>
                        <p className="text-xs text-[#6C757D] mt-1">{t(feature.description)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
