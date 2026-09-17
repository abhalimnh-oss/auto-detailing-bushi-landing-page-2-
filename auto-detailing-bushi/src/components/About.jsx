import { Phone } from "lucide-react";
import { business } from "../data/business";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="bg-brand-warmwhite">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <img
            src="images/about.jpg"
            alt="Detailer carefully hand-drying a vehicle panel"
            className="w-full h-[380px] lg:h-[460px] object-cover rounded-3xl shadow-soft"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-6">
            Detailing That Makes Your Car Stand Out
          </h2>
          <p className="text-brand-charcoal/75 text-lg leading-relaxed mb-8 max-w-lg">
            Auto Detailing Bushi provides automotive detailing services in
            Farke e Madhe, Tiranë. We're a professional destination for
            customers who care about the appearance and presentation of their
            vehicles.
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-2 bg-brand-brown text-white px-7 py-3.5 rounded-full font-semibold hover:bg-brand-brownDark transition-colors shadow-soft"
          >
            <Phone size={17} />
            Call Auto Detailing Bushi
          </a>
        </Reveal>
      </div>
    </section>
  );
}
