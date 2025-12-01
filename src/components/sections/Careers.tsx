import { COMPANY } from "@/lib/constants";

export default function Careers() {
  return (
    <section id="careers" className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Careers</h2>
          <div className="section-divider" />
        </div>

        <div className="bg-card-bg border border-card-border rounded-lg p-8 hover:border-accent/50 transition-colors duration-300">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Labourers, Form Setters, and Carpenters
          </h3>
          <p className="text-foreground text-center mb-6">
            We're looking for experienced members to join our team.
          </p>
          <p className="text-foreground text-center">
            Apply today by sending your resume to{" "}
            <a
              href={`mailto:${COMPANY.contact.email}?subject=Job Application`}
              className="text-accent hover:text-accent-dark transition-colors font-medium"
            >
              {COMPANY.contact.email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
