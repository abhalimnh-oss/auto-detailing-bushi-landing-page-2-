import { MapPin, ExternalLink } from "lucide-react";
import { business } from "../data/business";
import Reveal from "./Reveal";

export default function LocationCard() {
  return (
    <Reveal className="bg-white rounded-3xl border border-brand-beige p-8 h-full flex flex-col">
      <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-brown mb-5">
        <MapPin size={22} />
      </div>
      <h3 className="font-heading font-bold text-xl mb-3">Find Us in Tirana</h3>
      <p className="text-brand-charcoal/70 leading-relaxed mb-6">
        {business.addressLines.join(", ")}
      </p>
      <a
        href={business.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-2 text-brand-brown font-semibold hover:text-brand-brownDark transition-colors"
      >
        Open in Google Maps
        <ExternalLink size={16} />
      </a>
    </Reveal>
  );
}
