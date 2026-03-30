import { brandAssets, founderInfo } from "@/components/landing/siteContent";
import { useLanguage } from "@/context/LanguageContext";
import { Blocks, Brain, Server, Code } from "lucide-react";

const expertiseIcons = [Blocks, Brain, Server, Code];

export const FounderSection = () => {
  const { t } = useLanguage();

  return (
    <section id="founder" className="scroll-mt-28 border-b border-gray-100 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="reveal-up mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C757D]">
            {t({ en: "Leadership", id: "Kepemimpinan" })}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-5xl">
            {t({ en: "Meet Our Founder", id: "Kenali Pendiri Kami" })}
          </h2>
        </div>

        <div className="reveal-up delay-100 grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
          {/* Photo on the left */}
          <div className="md:col-span-4 flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 overflow-hidden rounded-sm border border-gray-200 bg-white shadow-lg">
                <img
                  src={brandAssets.founderImage}
                  alt={founderInfo.name}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D90429]/10 rounded-sm -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#8B5CF6]/10 rounded-sm -z-10" />
            </div>
          </div>

          {/* Profile information on the right */}
          <div className="md:col-span-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-[#1A1A1A] md:text-4xl">
                  {founderInfo.name}
                </h3>
                <p className="mt-2 text-lg font-medium text-[#D90429]">
                  {t(founderInfo.position)}
                </p>
              </div>

              <div className="space-y-4">
                {t(founderInfo.bio).split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-sm leading-relaxed text-[#6C757D] md:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Expertise tags */}
              <div className="pt-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#6C757D] mb-4">
                  {t({ en: "Areas of Expertise", id: "Bidang Keahlian" })}
                </p>
                <div className="flex flex-wrap gap-3">
                  {founderInfo.expertise.map((item, index) => {
                    const Icon = expertiseIcons[index];
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-2 rounded-sm bg-white border border-gray-200 px-4 py-2 shadow-sm"
                      >
                        <Icon className={`h-4 w-4 ${
                          index === 0 ? 'text-[#8B5CF6]' :
                          index === 1 ? 'text-[#D90429]' :
                          'text-[#2B2D42]'
                        }`} />
                        <span className="text-sm font-medium text-[#1A1A1A]">
                          {t(item)}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
