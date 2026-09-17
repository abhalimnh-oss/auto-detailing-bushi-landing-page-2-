import { Star, MessageSquare, Clock, MapPin } from "lucide-react";
import { business } from "../data/business";
import Reveal from "./Reveal";

const items = [
  {
    icon: Star,
    value: `${business.googleRating}★`,
    label: "Google Rating",
  },
  {
    icon: MessageSquare,
    value: `${business.googleReviewCount}`,
    label: "Google Reviews",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Currently listed as open 24 hours on Google Maps",
  },
  {
    icon: MapPin,
    value: "Tirana",
    label: "Farke e Madhe, Albania",
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-white border-y border-brand-beige">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={i * 80} className="flex items-start gap-3">
            <item.icon className="text-brand-brown shrink-0 mt-1" size={26} />
            <div>
              <p className="font-heading font-extrabold text-2xl text-brand-charcoal leading-none mb-1.5">
                {item.value}
              </p>
              <p className="text-sm text-brand-charcoal/65 leading-snug">
                {item.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
