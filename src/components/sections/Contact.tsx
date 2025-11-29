"use client";

import { useState, FormEvent } from "react";
import { COMPANY } from "@/lib/constants";
import { PhoneIcon, MailIcon, MapPinIcon } from "@/components/ui/Icons";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in production, connect to an API
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, open mailto with the form data
    const subject = encodeURIComponent(`Website Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${COMPANY.contact.email}?subject=${subject}&body=${body}`;

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Contact</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Inquiries</h3>
            <p className="text-muted mb-8">
              For inquiries, questions, or comments, please provide your information
              below:
            </p>

            {submitted ? (
              <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
                <p className="text-accent font-medium">
                  Thank you for your message! We&apos;ll be in touch soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-background border border-card-border rounded-lg focus:outline-none focus:border-accent transition-colors text-foreground placeholder:text-muted resize-none"
                  />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div>
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6">Address</h3>
              <div className="flex items-start gap-4 text-muted">
                <MapPinIcon className="text-accent mt-1 flex-shrink-0" size={20} />
                <div>
                  <p>{COMPANY.name}</p>
                  <p>{COMPANY.location.full}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6">Contacts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-muted">
                  <PhoneIcon className="text-accent flex-shrink-0" size={20} />
                  <a
                    href={`tel:${COMPANY.contact.phoneRaw}`}
                    className="hover:text-accent transition-colors"
                  >
                    {COMPANY.contact.phone}
                  </a>
                </div>
                <div className="flex items-center gap-4 text-muted">
                  <MailIcon className="text-accent flex-shrink-0" size={20} />
                  <a
                    href={`mailto:${COMPANY.contact.email}`}
                    className="hover:text-accent transition-colors break-all"
                  >
                    {COMPANY.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
