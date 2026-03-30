import { Button } from "@/components/ui/button";
import { brandAssets } from "@/components/landing/siteContent";
import { useLanguage } from "@/context/LanguageContext";
import { Blocks, Brain, Cpu } from "lucide-react";

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section
      id="hero"
      className="relative scroll-mt-28 border-b border-gray-100 pt-36"
      data-testid="hero-section"
    >
      <div className="tech-grid-bg absolute inset-0 pointer-events-none" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 md:grid-cols-12 md:gap-12 md:px-12 md:pb-28">
        <div className="reveal-up md:col-span-7">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-[#8B5CF6]/10 px-3 py-1">
              <Blocks className="h-4 w-4 text-[#8B5CF6]" />
              <span className="text-xs font-medium text-[#8B5CF6]">Blockchain</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#D90429]/10 px-3 py-1">
              <Brain className="h-4 w-4 text-[#D90429]" />
              <span className="text-xs font-medium text-[#D90429]">AI</span>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-[#2B2D42]/10 px-3 py-1">
              <Cpu className="h-4 w-4 text-[#2B2D42]" />
              <span className="text-xs font-medium text-[#2B2D42]">Tech</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold leading-tight text-[#1A1A1A] sm:text-5xl lg:text-6xl">
            {t({
              en: "Blockchain & AI Solutions for Modern Businesses",
              id: "Solusi Blockchain & AI untuk Bisnis Modern"
            })}
          </h1>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#6C757D] md:text-lg">
            {t({
              en: "We build blockchain systems, AI-powered applications, and digital infrastructure that drive innovation and business growth.",
              id: "Kami membangun sistem blockchain, aplikasi berbasis AI, dan infrastruktur digital yang mendorong inovasi dan pertumbuhan bisnis."
            })}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button
              type="button"
              onClick={() => scrollToSection("services")}
              className="h-12 rounded-sm bg-[#D90429] px-8 text-white hover:bg-[#EF233C]"
            >
              {t({ en: "View Services", id: "Lihat Layanan" })}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="h-12 rounded-sm border-2 border-[#D90429] px-8 text-[#D90429] hover:bg-[#D90429] hover:text-white"
            >
              {t({ en: "Contact Us", id: "Hubungi Kami" })}
            </Button>
          </div>
        </div>

        <div className="reveal-up delay-200 md:col-span-5">
          <div className="aspect-[5/6] overflow-hidden rounded-sm border border-gray-200 bg-[#F8F9FA]">
            <img
              src={brandAssets.heroImage}
              alt={t({ en: "Blockchain and AI technology", id: "Teknologi Blockchain dan AI" })}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
