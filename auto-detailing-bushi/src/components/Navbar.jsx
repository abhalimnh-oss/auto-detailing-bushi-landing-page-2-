import { useEffect, useState } from "react";
import { Facebook, Instagram, Menu, Phone, X } from "lucide-react";
import { business, navLinks } from "../data/business";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-[0_4px_20px_-8px_rgba(90,58,34,0.25)]" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#home" className="font-heading font-extrabold text-xl tracking-tight text-brand-charcoal">
          AUTO DETAILING <span className="text-brand-brown">BUSHI</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 font-medium text-[15px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brand-charcoal/85 hover:text-brand-brown transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={business.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Auto Detailing Bushi on Facebook"
            className="text-brand-charcoal/70 hover:text-brand-brown transition-colors"
          >
            <Facebook size={19} />
          </a>
          <a
            href={business.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Auto Detailing Bushi on Instagram"
            className="text-brand-charcoal/70 hover:text-brand-brown transition-colors"
          >
            <Instagram size={19} />
          </a>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 bg-brand-brown text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-brand-brownDark transition-colors shadow-soft"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        <button
          className="lg:hidden text-brand-charcoal"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-white border-t border-brand-beige px-6 py-6 animate-fadeUp">
          <ul className="flex flex-col gap-4 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-brand-charcoal/85 hover:text-brand-brown transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 mt-6">
            <a href={business.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-charcoal/70">
              <Facebook size={20} />
            </a>
            <a href={business.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-charcoal/70">
              <Instagram size={20} />
            </a>
          </div>
          <a
            href={business.phoneHref}
            className="mt-5 flex items-center justify-center gap-2 bg-brand-brown text-white px-5 py-3 rounded-full font-semibold text-sm w-full"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      )}
    </header>
  );
}
