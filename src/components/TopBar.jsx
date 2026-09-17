import { MapPin, Phone } from "lucide-react";
import { business } from "../data/business";

export default function TopBar() {
  return (
    <div className="hidden sm:block bg-brand-brownDark text-brand-cream text-sm">
      <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between">
        <span className="font-medium tracking-wide">{business.name}</span>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-brand-cream/90">
            <MapPin size={14} />
            {business.addressInline}
          </span>
          <a
            href={business.phoneHref}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={14} />
            {business.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
