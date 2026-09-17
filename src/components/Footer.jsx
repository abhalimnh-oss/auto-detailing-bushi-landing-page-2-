import { Facebook, Instagram, Navigation } from "lucide-react";
import { business, navLinks } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-brand-beige">
      <div className="max-w-7xl mx-auto px-6 py-14 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-heading font-extrabold text-lg mb-2">
            {business.name.toUpperCase()}
          </p>
          <p className="text-sm text-brand-charcoal/60">{business.category}</p>
        </div>

        <div>
          <p className="font-heading font-bold text-sm mb-4">Quick Links</p>
          <ul className="space-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-brand-charcoal/70 hover:text-brand-brown transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-heading font-bold text-sm mb-4">Contact</p>
          <p className="text-sm text-brand-charcoal/70 leading-relaxed mb-1">
            {business.addressLines.join(", ")}
          </p>
          <a href={business.phoneHref} className="text-sm text-brand-charcoal/70 hover:text-brand-brown transition-colors block mb-4">
            {business.phoneDisplay}
          </a>
          <div className="flex items-center gap-4">
            <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-charcoal/60 hover:text-brand-brown transition-colors">
              <Facebook size={18} />
            </a>
            <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-charcoal/60 hover:text-brand-brown transition-colors">
              <Instagram size={18} />
            </a>
            <a href={business.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-brand-charcoal/60 hover:text-brand-brown transition-colors text-sm">
              <Navigation size={16} />
              Get Directions
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-brand-beige py-5 text-center text-xs text-brand-charcoal/50">
        © {new Date().getFullYear()} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
