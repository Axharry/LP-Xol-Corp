import { Card, CardContent } from "@/components/ui/card";
import { upcomingServices } from "@/components/landing/siteContent";
import { useLanguage } from "@/context/LanguageContext";

export const UpcomingSection = () => {
  const { t } = useLanguage();

  return (
    <section id="upcoming" className="scroll-mt-28 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="reveal-up mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C757D]">
            {t({ en: "Upcoming Services", id: "Layanan Mendatang" })}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-5xl">
            {t({
              en: "Expanding AI & Blockchain consulting services",
              id: "Memperluas layanan konsultasi AI & Blockchain"
            })}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {upcomingServices.map((service, index) => (
            <Card
              key={index}
              className="reveal-up rounded-sm border border-dashed border-gray-300 bg-[#F8F9FA] shadow-none"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <p className="text-base font-medium leading-snug text-[#2B2D42]">
                  {t(service)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm text-[#6C757D]">
          {t({
            en: "These services are currently under development and will be available soon.",
            id: "Layanan ini sedang dalam pengembangan dan akan segera tersedia."
          })}
        </p>
      </div>
    </section>
  );
};
