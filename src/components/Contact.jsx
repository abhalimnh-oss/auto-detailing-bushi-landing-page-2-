import { Phone, MapPin, Facebook, Instagram, Navigation } from "lucide-react";
import { business } from "../data/business";
import Reveal from "./Reveal";
import LocationCard from "./LocationCard";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <Reveal className="max-w-xl mb-14">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4">
            Get in Touch
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal className="bg-white rounded-3xl border border-brand-beige p-8 sm:p-10">
            <h3 className="font-heading font-extrabold text-xl mb-6">
              {business.name}
            </h3>

            <div className="space-y-5 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="text-brand-brown mt-1 shrink-0" size={19} />
                <p className="text-brand-charcoal/80 leading-relaxed">
                  {business.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block text-sm text-brand-charcoal/50 mt-1">
                    Plus code: {business.plusCode}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="text-brand-brown shrink-0" size={19} />
                <a href={business.phoneHref} className="text-brand-charcoal/80 hover:text-brand-brown transition-colors">
                  {business.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={business.phoneHref}
                className="flex items-center gap-2 bg-brand-brown text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-brownDark transition-colors"
              >
                <Phone size={15} />
                Call Now
              </a>
              <a
                href={business.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-brand-brown text-brand-brown px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-cream transition-colors"
              >
                <Navigation size={15} />
                Get Directions
              </a>
              <a
                href={business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-brand-beige text-brand-charcoal px-5 py-2.5 rounded-full font-semibold text-sm hover:border-brand-brown hover:text-brand-brown transition-colors"
              >
                <Facebook size={15} />
                Facebook
              </a>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white border border-brand-beige text-brand-charcoal px-5 py-2.5 rounded-full font-semibold text-sm hover:border-brand-brown hover:text-brand-brown transition-colors"
              >
                <Instagram size={15} />
                Instagram
              </a>
            </div>
          </Reveal>

          <LocationCard />
        </div>
      </div>
    </section>
  );
}
