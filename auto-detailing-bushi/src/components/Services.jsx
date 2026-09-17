import { Droplets, Brush, Sparkles, ShieldCheck, Gem, Crown } from "lucide-react";
import { services } from "../data/business";
import ServiceCard from "./ServiceCard";
import Reveal from "./Reveal";

const icons = {
  exterior: Droplets,
  interior: Brush,
  "deep-cleaning": Sparkles,
  "paint-care": ShieldCheck,
  polishing: Gem,
  premium: Crown,
};

export default function Services() {
  return (
    <section id="services" className="bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4">
            Our Detailing Services
          </h2>
          <p className="text-brand-charcoal/70 text-lg">
            Professional care for a cleaner, more refined vehicle.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              icon={icons[service.id]}
              title={service.title}
              description={service.description}
              delay={i * 60}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
