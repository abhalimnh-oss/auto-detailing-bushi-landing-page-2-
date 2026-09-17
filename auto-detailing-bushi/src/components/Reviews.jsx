import { Star, ExternalLink } from "lucide-react";
import { business, reviews } from "../data/business";
import Reveal from "./Reveal";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <Reveal className="text-center max-w-xl mx-auto mb-14">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-5">
            What Customers Say
          </h2>
          <div className="flex justify-center text-brand-brown mb-2" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={22} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <p className="text-brand-charcoal font-semibold">
            {business.googleRating} / 5 · {business.googleReviewCount} Google Reviews
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
          {reviews.map((review, i) => (
            <Reveal
              key={review.name}
              delay={i * 100}
              className="bg-white rounded-2xl p-7 border border-brand-beige"
            >
              <div className="flex text-brand-brown mb-3" aria-hidden="true">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="text-brand-charcoal/70 text-sm mb-3">
                5-star Google review
              </p>
              <p className="font-heading font-bold text-sm">{review.name}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center">
          <a
            href={business.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-brand-brown text-brand-brown px-7 py-3.5 rounded-full font-semibold hover:bg-brand-brown hover:text-white transition-colors"
          >
            View on Google Maps
            <ExternalLink size={16} />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
