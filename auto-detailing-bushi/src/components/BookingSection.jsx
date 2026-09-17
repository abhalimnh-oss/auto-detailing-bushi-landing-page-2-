import BookingForm from "./BookingForm";
import Reveal from "./Reveal";

export default function BookingSection() {
  return (
    <section id="booking" className="bg-brand-warmwhite">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <Reveal className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl mb-4">
            Request a Detailing Service
          </h2>
          <p className="text-brand-charcoal/70 text-lg">
            Fill out the form below and Auto Detailing Bushi will follow up
            with you directly.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  );
}
