import { useLanguage } from "@/context/LanguageContext";

export const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-28 border-b border-gray-100 bg-[#F8F9FA]" data-testid="about-section">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="reveal-up mx-auto max-w-3xl text-left md:text-center" data-testid="about-content-block">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C757D]" data-testid="about-eyebrow-text">
            {t({ en: "About Xolaria Corp", id: "Tentang Xolaria Corp" })}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-5xl" data-testid="about-title">
            {t({
              en: "Practical technology infrastructure with strategic clarity",
              id: "Infrastruktur teknologi praktis dengan kejelasan strategis"
            })}
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-[#6C757D] md:text-lg" data-testid="about-description">
            {t({
              en: "Xolaria Corp is committed to delivering practical technology infrastructure and strategic solutions that help businesses operate more efficiently and adapt to the digital economy.",
              id: "Xolaria Corp berkomitmen untuk menyediakan infrastruktur teknologi praktis dan solusi strategis yang membantu bisnis beroperasi lebih efisien dan beradaptasi dengan ekonomi digital."
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
