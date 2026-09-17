import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Eye, X } from "lucide-react";
import { galleryImages } from "../data/business";
import Reveal from "./Reveal";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const showNext = () => setActiveIndex((i) => (i + 1) % galleryImages.length);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  const onTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX;
    if (delta > 50) showPrev();
    if (delta < -50) showNext();
    setTouchStartX(null);
  };

  return (
    <section id="gallery" className="bg-brand-warmwhite">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4">
            See the Difference
          </h2>
          <p className="text-brand-charcoal/70 text-lg">
            Explore automotive detailing inspiration and vehicle care.
          </p>
        </Reveal>

        <div className="columns-2 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 3) * 60}
              className="mb-4 break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-soft"
            >
              <button
                onClick={() => setActiveIndex(i)}
                className="block w-full h-full"
                aria-label={`View larger image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-brown/0 group-hover:bg-brand-brown/40 transition-colors duration-300 flex items-center justify-center">
                  <Eye
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    size={28}
                  />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-brand-charcoal/95 flex items-center justify-center lightbox-enter"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-6 right-6 text-white/80 hover:text-white"
          >
            <X size={30} />
          </button>
          <button
            onClick={showPrev}
            aria-label="Previous image"
            className="absolute left-3 sm:left-8 text-white/70 hover:text-white p-2"
          >
            <ChevronLeft size={36} />
          </button>
          <img
            src={galleryImages[activeIndex].src}
            alt={galleryImages[activeIndex].alt}
            className="max-h-[80vh] max-w-[85vw] object-contain rounded-xl"
          />
          <button
            onClick={showNext}
            aria-label="Next image"
            className="absolute right-3 sm:right-8 text-white/70 hover:text-white p-2"
          >
            <ChevronRight size={36} />
          </button>
        </div>
      )}
    </section>
  );
}
