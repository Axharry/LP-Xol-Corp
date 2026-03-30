import { Button } from "@/components/ui/button";
import { brandAssets } from "@/components/landing/siteContent";
import { useLanguage } from "@/context/LanguageContext";
import { Globe } from "lucide-react";

const navItems = [
  { label: { en: "Services", id: "Layanan" }, sectionId: "services" },
  { label: { en: "Portfolio", id: "Portofolio" }, sectionId: "portfolio" },
  { label: { en: "About", id: "Tentang" }, sectionId: "about" },
  { label: { en: "Contact", id: "Kontak" }, sectionId: "contact" },
];

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm"
      data-testid="navbar-container"
    >
      <nav
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-12"
        data-testid="navbar-content"
      >
        <button
          type="button"
          className="flex items-center gap-3"
          onClick={() => scrollToSection("hero")}
          data-testid="navbar-logo-button"
          aria-label="Go to top"
        >
          <div className="h-11 w-11 overflow-hidden rounded-sm border border-gray-200 bg-white">
            <img
              src={brandAssets.logo}
              alt="Xolaria Corp Logo"
              className="h-full w-full scale-[1.6] object-cover object-top"
            />
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-sm font-semibold text-[#1A1A1A]">Xolaria Corp</p>
            <p className="text-xs text-[#6C757D]">
              {t({ en: "Blockchain & AI Solutions", id: "Solusi Blockchain & AI" })}
            </p>
          </div>
        </button>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Button
              key={`desktop-${item.sectionId}`}
              variant="ghost"
              type="button"
              onClick={() => scrollToSection(item.sectionId)}
              className="text-sm text-[#1A1A1A] hover:bg-[#F1F3F5]"
            >
              {t(item.label)}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button
            type="button"
            variant="ghost"
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm"
          >
            <Globe className="h-4 w-4" />
            <span className="font-medium">{language === 'en' ? 'ID' : 'EN'}</span>
          </Button>
          <Button
            type="button"
            onClick={() => scrollToSection("contact")}
            className="h-11 rounded-sm bg-[#D90429] px-5 text-white hover:bg-[#EF233C]"
          >
            {t({ en: "Contact Us", id: "Hubungi Kami" })}
          </Button>
        </div>
      </nav>

      <div className="mx-auto flex w-full max-w-7xl items-center gap-2 overflow-x-auto px-6 pb-3 lg:hidden">
        {navItems.map((item) => (
          <Button
            key={`mobile-${item.sectionId}`}
            variant="outline"
            type="button"
            onClick={() => scrollToSection(item.sectionId)}
            className="h-8 rounded-sm border-gray-300 px-3 text-xs text-[#1A1A1A]"
          >
            {t(item.label)}
          </Button>
        ))}
      </div>
    </header>
  );
};
