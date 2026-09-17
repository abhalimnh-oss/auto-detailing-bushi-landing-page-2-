import { Facebook, Instagram } from "lucide-react";
import { business } from "../data/business";
import Reveal from "./Reveal";

export default function Social() {
  return (
    <section className="bg-brand-warmwhite">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20 text-center">
        <Reveal>
          <h2 className="font-heading font-extrabold text-3xl mb-8">
            Follow Auto Detailing Bushi
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-brown text-white px-7 py-3.5 rounded-full font-semibold hover:bg-brand-brownDark transition-colors"
            >
              <Facebook size={18} />
              Facebook
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-brand-brown text-brand-brown px-7 py-3.5 rounded-full font-semibold hover:bg-brand-cream transition-colors"
            >
              <Instagram size={18} />
              Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
