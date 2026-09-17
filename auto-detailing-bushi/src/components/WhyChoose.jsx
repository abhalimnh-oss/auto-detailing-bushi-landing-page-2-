import { Focus, Gem, MapPin, PhoneCall } from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Focus,
    title: "Attention to Detail",
    description:
      "Focused on presenting your vehicle with a clean and refined appearance.",
  },
  {
    icon: Gem,
    title: "Premium Presentation",
    description: "A sophisticated detailing-focused experience.",
  },
  {
    icon: MapPin,
    title: "Local in Tirana",
    description: "Located in Farke e Madhe, Tiranë.",
  },
  {
    icon: PhoneCall,
    title: "Easy to Contact",
    description: "Call directly or connect through Facebook and Instagram.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <Reveal>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-14 max-w-xl">
            Why Auto Detailing Bushi?
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <Reveal
              key={f.title}
              delay={i * 70}
              className="bg-white rounded-2xl p-7 border border-brand-beige"
            >
              <div className="w-11 h-11 rounded-full bg-brand-cream flex items-center justify-center text-brand-brown mb-4">
                <f.icon size={20} />
              </div>
              <h3 className="font-heading font-bold text-base mb-2">
                {f.title}
              </h3>
              <p className="text-sm text-brand-charcoal/70 leading-relaxed">
                {f.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
