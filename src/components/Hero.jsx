import { Phone, Star, MapPin } from "lucide-react";
import { business } from "../data/business";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-b from-brand-cream to-brand-warmwhite">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <p className="text-brand-brown font-heading font-bold tracking-wide text-sm mb-5">
            PREMIUM AUTO DETAILING · TIRANA
          </p>
          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] text-brand-charcoal mb-6">
            Give Your Car the Finish It Deserves
          </h1>
          <p className="text-lg text-brand-charcoal/75 leading-relaxed max-w-xl mb-9">
            Professional automotive detailing in Tirana, Albania, with a focus
            on a clean and refined vehicle finish.
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#booking"
              className="bg-brand-brown text-white px-7 py-3.5 rounded-full font-semibold hover:bg-brand-brownDark transition-colors shadow-soft"
            >
              Book a Service
            </a>
            <a
              href={business.phoneHref}
              className="flex items-center gap-2 bg-white border border-brand-brown text-brand-brown px-7 py-3.5 rounded-full font-semibold hover:bg-brand-cream transition-colors"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <div className="flex items-center gap-2">
              <div className="flex text-brand-brown" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="font-semibold text-brand-charcoal">
                {business.googleRating} Google Rating
              </span>
            </div>
            <span className="text-brand-charcoal/70">
              {business.googleReviewCount} Google Reviews
            </span>
            <span className="flex items-center gap-1.5 text-brand-charcoal/70">
              <MapPin size={15} />
              Farke e Madhe, Tiranë
            </span>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-brown/10 rounded-[2rem] -z-10 hidden sm:block" />
            <img
              src="images/hero.jpg"
              alt="Detailer applying paint protection film to a vehicle in a bright, premium detailing studio"
              className="w-full h-[420px] sm:h-[500px] object-cover rounded-3xl shadow-2xl"
              loading="eager"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
