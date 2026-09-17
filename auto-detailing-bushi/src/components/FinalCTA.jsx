import { Phone, ClipboardList } from "lucide-react";
import { business } from "../data/business";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="bg-brand-brown">
      <div className="max-w-4xl mx-auto px-6 py-20 lg:py-24 text-center">
        <Reveal>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-5">
            Ready to Give Your Car a Fresh Finish?
          </h2>
          <p className="text-white/85 text-lg mb-10 max-w-xl mx-auto">
            Contact Auto Detailing Bushi today to discuss your vehicle
            detailing needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 bg-white text-brand-brown px-7 py-3.5 rounded-full font-semibold hover:bg-brand-cream transition-colors"
            >
              <Phone size={17} />
              Call Now
            </a>
            <a
              href="#booking"
              className="flex items-center gap-2 border border-white/70 text-white px-7 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors"
            >
              <ClipboardList size={17} />
              Request a Service
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
