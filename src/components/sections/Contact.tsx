"use client";

import { useState, FormEvent } from "react";
import { COMPANY } from "@/lib/constants";
import { PhoneIcon, MailIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult({
          success: true,
          message: "Thank you for your message! We'll be in touch soon.",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        setResult({
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setResult({
        success: false,
        message: "Failed to send message. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card-bg">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact</h2>
          <div className="section-divider" />
        </div>

        {/* Single Column Contact Form */}
        <div>
          <h3 className="text-xl font-semibold mb-6">Inquiries</h3>
          <p className="text-muted mb-8">
            For inquiries, questions, or comments, please provide your information
            below:
          </p>

          {result?.success ? (
            <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
              <p className="text-accent font-medium">{result.message}</p>
              <button
                onClick={() => setResult(null)}
                className="mt-4 text-sm text-muted hover:text-foreground transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field for spam protection */}
              <input type="checkbox" name="botcheck" className="hidden" />

              {/* Hidden fields for Web3Forms */}
              <input type="hidden" name="subject" value="New Contact Form Submission - Constrong Website" />
              <input type="hidden" name="from_name" value="Constrong Website" />

              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted resize-none"
                />
              </div>

              {result && !result.success && (
                <div className="bg-red-500/10 border border-red-500 rounded-lg p-4 text-center">
                  <p className="text-red-400 text-sm">{result.message}</p>
                </div>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Sending..." : "Send"}
              </Button>
            </form>
          )}

          {/* Contact Info - Below Form with White Font */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-foreground">
            <a
              href={`tel:${COMPANY.contact.phoneRaw}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <PhoneIcon className="text-accent flex-shrink-0" size={18} />
              <span>{COMPANY.contact.phone}</span>
            </a>
            <a
              href={`mailto:${COMPANY.contact.email}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <MailIcon className="text-accent flex-shrink-0" size={18} />
              <span>{COMPANY.contact.email}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
