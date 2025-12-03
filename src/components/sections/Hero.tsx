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
            backgroundImage: "url('/images/hero-bg.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Social Links - Left Side */}
      <div className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-10 hidden sm:flex flex-col gap-6">
        <a
          href={COMPANY.social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-accent hover:scale-110 transition-all duration-300"
          aria-label="Facebook"
        >
          <FacebookIcon size={24} />
        </a>
        <a
          href={COMPANY.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground/60 hover:text-accent hover:scale-110 transition-all duration-300"
          aria-label="Instagram"
        >
          <InstagramIcon size={24} />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="space-y-8 animate-fade-in-up">
          {/* Logo */}
          <Logo size={100} className="mx-auto opacity-90" />
          
          {/* Heading Group */}
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide">
              {COMPANY.name.toUpperCase()}
            </h1>
            <p className="text-xl md:text-2xl text-accent font-medium">
              Concrete Contractor
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {COMPANY.tagline}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-foreground/40 hover:text-accent transition-all duration-300 animate-bounce"
        aria-label="Scroll to services"
      >
        <ChevronDownIcon size={32} />
      </a>
    </section>
  );
}
