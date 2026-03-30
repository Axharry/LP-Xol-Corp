import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/context/LanguageContext";

const API_URL = process.env.REACT_APP_BACKEND_URL;

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    if (submitStatus) setSubmitStatus(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post(`${API_URL}/api/contact`, {
        name: formState.name.trim(),
        email: formState.email.trim(),
        message: formState.message.trim(),
      });
      setSubmitStatus('success');
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 border-b border-gray-100" data-testid="contact-section">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28">
        <div className="reveal-up" data-testid="contact-info-block">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6C757D]" data-testid="contact-eyebrow">
            {t({ en: "Contact Us", id: "Hubungi Kami" })}
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-[#1A1A1A] md:text-5xl" data-testid="contact-title">
            {t({
              en: "Let's discuss your technology infrastructure goals",
              id: "Mari diskusikan tujuan infrastruktur teknologi Anda"
            })}
          </h2>

          <div className="mt-8 space-y-5" data-testid="contact-details-list">
            <div data-testid="contact-email-group">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6C757D]" data-testid="contact-email-label">
                Email
              </p>
              <a
                href="mailto:info@xolaria.pro"
                className="mt-2 block text-base text-[#1A1A1A] underline-offset-4 hover:underline"
                data-testid="contact-email-primary"
              >
                info@xolaria.pro
              </a>
              <a
                href="mailto:xolariacorp@gmail.com"
                className="mt-1 block text-base text-[#1A1A1A] underline-offset-4 hover:underline"
                data-testid="contact-email-secondary"
              >
                xolariacorp@gmail.com
              </a>
            </div>

            <div data-testid="contact-whatsapp-group">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6C757D]" data-testid="contact-whatsapp-label">
                WhatsApp
              </p>
              <a
                href="https://wa.me/6281353712324"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-base text-[#1A1A1A] underline-offset-4 hover:underline"
                data-testid="contact-whatsapp-link"
              >
                +62 813-5371-2324
              </a>
            </div>

            <div data-testid="contact-instagram-group">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#6C757D]" data-testid="contact-instagram-label">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/xolariacorporation"
                target="_blank"
                rel="noreferrer"
                className="mt-2 block text-base text-[#1A1A1A] underline-offset-4 hover:underline"
                data-testid="contact-instagram-link"
              >
                @xolariacorporation
              </a>
            </div>
          </div>
        </div>

        <form
          className="reveal-up delay-200 space-y-5 rounded-sm border border-gray-200 bg-[#F8F9FA] p-6 md:p-8"
          onSubmit={handleSubmit}
          data-testid="contact-form"
        >
          <div data-testid="contact-form-name-group">
            <label className="mb-2 block text-sm font-medium text-[#1A1A1A]" htmlFor="name" data-testid="contact-form-name-label">
              {t({ en: "Name", id: "Nama" })}
            </label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={onChange}
              required
              className="h-11 rounded-sm border-gray-300 bg-white"
              data-testid="contact-form-name-input"
            />
          </div>

          <div data-testid="contact-form-email-group">
            <label className="mb-2 block text-sm font-medium text-[#1A1A1A]" htmlFor="email" data-testid="contact-form-email-label">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={onChange}
              required
              className="h-11 rounded-sm border-gray-300 bg-white"
              data-testid="contact-form-email-input"
            />
          </div>

          <div data-testid="contact-form-message-group">
            <label className="mb-2 block text-sm font-medium text-[#1A1A1A]" htmlFor="message" data-testid="contact-form-message-label">
              {t({ en: "Message", id: "Pesan" })}
            </label>
            <Textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={onChange}
              required
              className="min-h-[140px] rounded-sm border-gray-300 bg-white"
              data-testid="contact-form-message-input"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="h-11 w-full rounded-sm bg-[#D90429] text-white hover:bg-[#EF233C] disabled:opacity-50"
            data-testid="contact-form-submit-button"
          >
            {isSubmitting 
              ? t({ en: "Sending...", id: "Mengirim..." })
              : t({ en: "Send Message", id: "Kirim Pesan" })
            }
          </Button>

          {submitStatus === 'success' && (
            <div className="rounded-sm bg-green-50 border border-green-200 p-3 text-center text-green-700" data-testid="contact-form-success">
              {t({ en: "Message sent successfully! We'll get back to you soon.", id: "Pesan berhasil dikirim! Kami akan segera menghubungi Anda." })}
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="rounded-sm bg-red-50 border border-red-200 p-3 text-center text-red-700" data-testid="contact-form-error">
              {t({ en: "Failed to send message. Please try again.", id: "Gagal mengirim pesan. Silakan coba lagi." })}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};
