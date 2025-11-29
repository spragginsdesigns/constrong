import { CAREERS, COMPANY } from "@/lib/constants";

export default function Careers() {
  return (
    <section id="careers" className="py-20 md:py-28 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Careers</h2>
          <div className="section-divider" />
        </div>

        <div className="space-y-6">
          {CAREERS.map((career) => (
            <div
              key={career.id}
              className="bg-card-bg border border-card-border rounded-lg p-6 hover:border-accent/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-semibold text-accent mb-2">
                {career.title}
              </h3>
              <p className="text-muted">{career.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted mb-4">
            Apply today by sending your resume to the contacts below:
          </p>
          <a
            href={`mailto:${COMPANY.contact.email}?subject=Job Application`}
            className="text-accent hover:text-accent-dark transition-colors font-medium"
          >
            {COMPANY.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
