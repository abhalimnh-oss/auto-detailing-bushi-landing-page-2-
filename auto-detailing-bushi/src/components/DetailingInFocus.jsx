import Reveal from "./Reveal";

const images = [
  { src: "images/hero.jpg", alt: "Applying paint protection film to a vehicle" },
  { src: "images/gallery-03.jpg", alt: "Polishing the headlight of a dark vehicle" },
  { src: "images/gallery-05.jpg", alt: "Hand-drying a vehicle panel" },
];

export default function DetailingInFocus() {
  return (
    <section className="bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-12">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4">
            Detailing in Focus
          </h2>
          <p className="text-brand-charcoal/70 text-lg">
            A closer look at the automotive detailing process.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <Reveal key={img.src} delay={i * 90}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-64 object-cover rounded-2xl shadow-soft"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
