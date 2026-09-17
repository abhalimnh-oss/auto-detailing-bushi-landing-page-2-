import { business } from "../data/business";
import Reveal from "./Reveal";

export default function ServiceCard({ icon: Icon, title, description, delay = 0 }) {
  return (
    <Reveal
      delay={delay}
      className="bg-white rounded-2xl p-8 border border-brand-beige hover:shadow-soft hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center text-brand-brown mb-5">
        <Icon size={22} />
      </div>
      <h3 className="font-heading font-bold text-lg mb-2">{title}</h3>
      <p className="text-brand-charcoal/70 text-sm leading-relaxed mb-5">
        {description}
      </p>
      <a
        href={business.phoneHref}
        className="text-brand-brown font-semibold text-sm hover:text-brand-brownDark transition-colors"
      >
        Enquire Now
      </a>
    </Reveal>
  );
}
