import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/context/LanguageContext";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    key: "cryptags",
    title: "CrypTags",
    route: "/CrypTags",
    image: "https://customer-assets.emergentagent.com/job_xol-corp-preview-2/artifacts/ht733bqu_LOGO%20-%20CrypTags.png",
    description: {
      en: "A privacy-first offline wallet contact manager. Store wallet addresses, contact notes, and sensitive data locally with encryption. No external servers, no tracking.",
      id: "Manajer kontak wallet offline yang mengutamakan privasi. Simpan alamat wallet, catatan kontak, dan data sensitif secara lokal dengan enkripsi. Tanpa server eksternal, tanpa pelacakan."
    }
  },
  {
    key: "cryptrack",
    title: "CrypTrack",
    route: "/CrypTrack",
    image: "https://customer-assets.emergentagent.com/job_xol-corp-preview-2/artifacts/xnj0fgyv_LOGO%20-%20CrypTrack.png",
    description: {
      en: "Real-time cryptocurrency portfolio tracker. Monitor your holdings, track price movements, and analyze your investment performance across multiple blockchains.",
      id: "Pelacak portofolio cryptocurrency real-time. Pantau kepemilikan Anda, lacak pergerakan harga, dan analisis kinerja investasi Anda di berbagai blockchain."
    }
  },
  {
    key: "cryptrust",
    title: "CrypTrust",
    route: "/CrypTrust",
    image: "https://customer-assets.emergentagent.com/job_xol-corp-preview-2/artifacts/pikjwmir_LOGO%20-%20CrypTrust.png",
    description: {
      en: "Blockchain-based trust and verification system. Secure document verification, digital signatures, and immutable proof of authenticity for businesses and individuals.",
      id: "Sistem kepercayaan dan verifikasi berbasis blockchain. Verifikasi dokumen yang aman, tanda tangan digital, dan bukti keaslian yang tidak dapat diubah untuk bisnis dan individu."
    }
  },
  {
    key: "xolaria-treasury",
    title: "Xolaria On-Chain Treasury Reserve",
    route: "/Xolaria-On-Chain-Treasury-Reserve",
    image: "https://customer-assets.emergentagent.com/job_xol-corp-preview-2/artifacts/ojat8lb3_LOGO%20-%20Xolaria%20On-Chain%20Treasury.png",
    description: {
      en: "Decentralized treasury management solution. Transparent on-chain reserves, multi-signature governance, and real-time auditing for organizations and DAOs.",
      id: "Solusi manajemen treasury terdesentralisasi. Cadangan on-chain yang transparan, tata kelola multi-tanda tangan, dan audit real-time untuk organisasi dan DAO."
    }
  }
];

export const PortfolioSection = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const currentItem = portfolioItems[currentIndex];

  return (
    <section id="portfolio" className="scroll-mt-28 border-b border-gray-100 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12 md:py-28">
        <div className="reveal-up mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C757D]">
            {t({ en: "Our Work", id: "Karya Kami" })}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-5xl">
            {t({ en: "Portfolio", id: "Portofolio" })}
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="reveal-up delay-100 relative">
          <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {portfolioItems.map((item) => (
                <div
                  key={item.key}
                  className="min-w-full cursor-pointer"
                  onClick={() => navigate(item.route)}
                  data-testid={`portfolio-slide-${item.key}`}
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="flex h-64 w-full items-center justify-center bg-white md:h-96 md:w-1/2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-48 w-48 md:h-64 md:w-64 rounded-3xl object-cover shadow-lg"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center p-8 md:w-1/2 md:p-12">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] md:text-3xl">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-base leading-relaxed text-[#6C757D]">
                        {t(item.description)}
                      </p>
                      <div className="mt-6">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(item.route);
                          }}
                          className="rounded-sm bg-[#D90429] px-6 text-white hover:bg-[#EF233C]"
                          data-testid={`view-project-${item.key}`}
                        >
                          {t({ en: "View Project", id: "Lihat Proyek" })}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white transition-colors"
            aria-label="Previous slide"
            data-testid="carousel-prev-btn"
          >
            <ChevronLeft className="h-6 w-6 text-[#1A1A1A]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow-md hover:bg-white transition-colors"
            aria-label="Next slide"
            data-testid="carousel-next-btn"
          >
            <ChevronRight className="h-6 w-6 text-[#1A1A1A]" />
          </button>

          {/* Dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#D90429]" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { portfolioItems };
