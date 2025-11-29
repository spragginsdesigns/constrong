import { SERVICES } from "@/lib/constants";
import Card, { CardImage, CardContent, CardTitle } from "@/components/ui/Card";

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-card-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">Services</h2>
          <div className="section-divider" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <Card key={service.id} className="group">
              <CardImage
                src={service.image}
                alt={service.title}
                className="h-56"
              />
              <CardContent>
                <CardTitle>{service.title}</CardTitle>
                <p className="text-muted leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
