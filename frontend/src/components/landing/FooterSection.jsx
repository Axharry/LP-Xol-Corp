import { brandAssets } from "@/components/landing/siteContent";

export const FooterSection = () => {
  return (
    <footer className="bg-white" data-testid="footer-section">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 md:grid-cols-3 md:px-12" data-testid="footer-grid">
        <div data-testid="footer-brand-block">
          <img
            src={brandAssets.logo}
            alt="Xolaria Corp Logo"
            className="h-10 w-auto object-contain"
            data-testid="footer-logo-image"
          />
          <p className="mt-4 text-base text-[#1A1A1A]" data-testid="footer-company-name">
            Xolaria Corp
          </p>
          <p className="mt-2 text-sm text-[#6C757D]" data-testid="footer-company-tagline">
            Blockchain & AI Solutions
          </p>
        </div>

        <div data-testid="footer-email-block">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#6C757D]" data-testid="footer-email-heading">
            Email
          </p>
          <a
            href="mailto:info@xolaria.pro"
            className="mt-3 block text-sm text-[#1A1A1A] underline-offset-4 hover:underline"
            data-testid="footer-email-primary"
          >
            info@xolaria.pro
          </a>
          <a
            href="mailto:xolariacorp@gmail.com"
            className="mt-1 block text-sm text-[#1A1A1A] underline-offset-4 hover:underline"
            data-testid="footer-email-secondary"
          >
            xolariacorp@gmail.com
          </a>
        </div>

        <div data-testid="footer-social-block">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#6C757D]" data-testid="footer-instagram-heading">
            Instagram
          </p>
          <a
            href="https://www.instagram.com/xolariacorporation"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-sm text-[#1A1A1A] underline-offset-4 hover:underline"
            data-testid="footer-instagram-link"
          >
            @xolariacorporation
          </a>
        </div>
      </div>

      <div className="border-t border-gray-100 px-6 py-5 md:px-12" data-testid="footer-copyright-container">
        <p className="mx-auto max-w-7xl text-sm text-[#6C757D]" data-testid="footer-copyright-text">
          Copyright © Xolaria Corp
        </p>
      </div>
    </footer>
  );
};
