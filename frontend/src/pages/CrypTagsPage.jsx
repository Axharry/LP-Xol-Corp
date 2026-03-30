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
      title: "1. Information We Collect",
      content: [
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
      ]
    },
    {
      title: "2. Local Data Storage",
      content: [
        "CrypTags operates as an offline-first application.",
        "All user data is stored locally on the device using internal storage. The app does not require an internet connection to function.",
        "CrypTags does not maintain any remote database or cloud storage system.",
        "Users have full control over their stored information."
      ]
    },
    {
      title: "3. Encrypted Sensitive Data",
      content: [
        "CrypTags may allow users to store sensitive information such as:",
        "• Private keys",
        "• Seed phrases",
        "If used, this information is protected through local encryption and password protection within the application.",
        "The developer cannot access, recover, or view this information.",
        "Users are responsible for securely managing their device and application password."
      ]
    },
    {
      title: "4. Data Sharing",
      content: [
        "CrypTags does not sell, share, or transmit user data.",
        "No user information is sent to:",
        "• External servers",
        "• Analytics services",
        "• Advertising networks",
        "• Third-party tracking tools",
        "All data remains on the user's device."
      ]
    },
    {
      title: "5. Internet Usage",
      content: [
        "CrypTags does not require internet connectivity for its core functionality.",
        "Internet access may only be used if the user chooses to open external links, such as:",
        "• Developer support contact",
        "• External documentation",
        "• Donation pages",
        "These actions are initiated voluntarily by the user."
      ]
    },
    {
      title: "6. Third-Party Services",
      content: [
        "CrypTags does not integrate with third-party data processing services.",
        "No analytics, advertising SDKs, or tracking services are included in the application."
      ]
    },
    {
      title: "7. Children's Privacy",
      content: [
        "CrypTags is not directed toward children under the age of 13.",
        "The application does not knowingly collect personal information from children."
      ]
    },
    {
      title: "8. User Responsibility",
      content: [
        "Because CrypTags stores data locally, users are responsible for:",
        "• Protecting their device",
        "• Managing application passwords",
        "• Backing up exported data if necessary",
        "Loss of device access or deletion of the application may result in loss of locally stored data."
      ]
    },
    {
      title: "9. Changes to This Privacy Policy",
      content: [
        "This Privacy Policy may be updated from time to time.",
        "Any updates will be reflected by updating the \"Last Updated\" date at the top of this page."
      ]
    },
    {
      title: "10. Contact Information",
      content: [
        "If you have questions about this Privacy Policy or the CrypTags application, you can contact the developer at:",
        "Email: xolariacorporation@gmail.com"
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
              Privacy Policy for CrypTags
            </h2>
            <p className="mt-3 text-sm text-[#6C757D]">
              Last Updated: March 2026
            </p>
          </div>

          <p className="text-base leading-relaxed text-[#1A1A1A] mb-8">
            CrypTags respects your privacy and is committed to protecting user data. This Privacy Policy explains how the CrypTags application handles information when you use the app.
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
        </div>
      </section>
    </div>
  );
};
