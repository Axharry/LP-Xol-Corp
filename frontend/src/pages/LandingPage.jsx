import { useEffect } from "react";
import Lenis from "lenis";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { ProductsSection } from "@/components/landing/ProductsSection";
import { UpcomingProductSection } from "@/components/landing/UpcomingProductSection";
import { UpcomingSection } from "@/components/landing/UpcomingSection";
import { FounderSection } from "@/components/landing/FounderSection";
import { AboutSection } from "@/components/landing/AboutSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { FooterSection } from "@/components/landing/FooterSection";

export const LandingPage = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.5,
    });

    let animationFrameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      animationFrameId = window.requestAnimationFrame(raf);
    };

    animationFrameId = window.requestAnimationFrame(raf);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <main className="xolaria-page" data-testid="xolaria-landing-page">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <UpcomingSection />
      <ProductsSection />
      <UpcomingProductSection />
      <FounderSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
};
