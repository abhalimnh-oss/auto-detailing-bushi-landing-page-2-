import { Phone, ClipboardList } from "lucide-react";
import { business } from "../data/business";

export default function MobileCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-brand-brown flex divide-x divide-white/20 shadow-[0_-6px_20px_rgba(0,0,0,0.15)]">
      <a
        href={business.phoneHref}
        className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3.5 text-sm"
      >
        <Phone size={16} />
        Call Now
      </a>
      <a
        href="#booking"
        className="flex-1 flex items-center justify-center gap-2 text-white font-semibold py-3.5 text-sm"
      >
        <ClipboardList size={16} />
        Request Service
      </a>
    </div>
  );
}
