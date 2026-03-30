import { Blocks, Brain, Globe, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { serviceItems } from "@/components/landing/siteContent";
import { useLanguage } from "@/context/LanguageContext";

const iconMap = {
  "blockchain-development": Blocks,
  "ai-solutions": Brain,
  "web-development": Globe,
  "digital-infrastructure": Server,
};

export const ServicesSection = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="scroll-mt-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="reveal-up mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C757D]">
            {t({ en: "Our Services", id: "Layanan Kami" })}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-5xl">
            {t({
              en: "Blockchain, AI & Digital Solutions for the Future",
              id: "Solusi Blockchain, AI & Digital untuk Masa Depan"
            })}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {serviceItems.map((service, index) => {
            const Icon = iconMap[service.key];

            return (
              <Card
                key={service.key}
                className="reveal-up rounded-sm border border-gray-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="space-y-4 p-8">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-sm ${
                      service.key === 'blockchain-development' ? 'bg-[#8B5CF6]/10' :
                      service.key === 'ai-solutions' ? 'bg-[#D90429]/10' :
                      'bg-[#F1F3F5]'
                    }`}
                  >
                    <Icon className={`h-6 w-6 ${
                      service.key === 'blockchain-development' ? 'text-[#8B5CF6]' :
                      service.key === 'ai-solutions' ? 'text-[#D90429]' :
                      'text-[#2B2D42]'
                    }`} />
                  </div>
                  <CardTitle className="text-xl text-[#1A1A1A]">
                    {t(service.title)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 pt-0">
                  <p className="text-sm leading-relaxed text-[#6C757D] md:text-base">
                    {t(service.description)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
