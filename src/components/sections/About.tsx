import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden relative">
              <Image
                src="/images/about.jpg"
                alt="Constrong construction work"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={90}
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-4 border-accent rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="section-title text-left">About</h2>
            <div className="w-16 h-1 bg-accent mb-8" />
            <p className="text-foreground/90 text-lg leading-relaxed mb-6">
              Since {COMPANY.founded}, {COMPANY.name} has been proudly serving the
              construction industry in southern Ontario, based in the{" "}
              {COMPANY.location.city}-Waterloo area.
            </p>
            <p className="text-muted leading-relaxed mb-6">{COMPANY.description}</p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-card-bg rounded-lg border border-card-border">
                <p className="text-3xl font-bold text-accent mb-1">100+</p>
                <p className="text-sm text-muted uppercase tracking-wider">
                  Projects Completed
                </p>
              </div>
              <div className="text-center p-4 bg-card-bg rounded-lg border border-card-border">
                <p className="text-3xl font-bold text-accent mb-1">5+</p>
                <p className="text-sm text-muted uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
