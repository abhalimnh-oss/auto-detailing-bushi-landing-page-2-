import { Phone } from "lucide-react";
import { business } from "../data/business";
import Reveal from "./Reveal";

export default function FeaturedSection() {
  return (
    <section className="relative">
      <div className="relative h-[480px] lg:h-[560px]">
        <img
          src="images/featured.jpg"
          alt="Detailer polishing the headlight area of a vehicle"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/70 via-brand-charcoal/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <Reveal className="max-w-md text-white">
            <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4">
              Your Car Deserves Attention
            </h2>
            <p className="text-white/85 text-lg leading-relaxed mb-8">
              From the exterior finish to the smallest details, present your
              vehicle with care.
            </p>
            <a
              href={business.phoneHref}
              className="inline-flex items-center gap-2 bg-brand-brown text-white px-7 py-3.5 rounded-full font-semibold hover:bg-brand-brownDark transition-colors"
            >
              <Phone size={17} />
              Call Now
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
