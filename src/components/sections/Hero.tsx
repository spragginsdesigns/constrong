"use client";

import { COMPANY } from "@/lib/constants";
import { FacebookIcon, InstagramIcon, ChevronDownIcon } from "@/components/ui/Icons";
import Logo from "@/components/layout/Logo";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Social Links - Left Side */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-4">
        <a
          href={COMPANY.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-accent transition-colors duration-300"
          aria-label="Facebook"
        >
          <FacebookIcon size={28} />
        </a>
        <a
          href={COMPANY.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/70 hover:text-accent transition-colors duration-300"
          aria-label="Instagram"
        >
          <InstagramIcon size={28} />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <Logo size={120} className="mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider mb-4">
            {COMPANY.name.toUpperCase()}
          </h1>
          <p className="text-lg md:text-xl text-muted mb-2">Concrete Contractor</p>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            {COMPANY.tagline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get a Quote
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/50 hover:text-accent transition-colors duration-300 animate-pulse-slow"
        aria-label="Scroll to services"
      >
        <ChevronDownIcon size={40} />
      </a>
    </section>
  );
}
