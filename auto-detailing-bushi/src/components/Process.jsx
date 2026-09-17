import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Call Auto Detailing Bushi.",
  },
  {
    number: "02",
    title: "Tell Us About Your Vehicle",
    description: "Explain the vehicle and detailing service you need.",
  },
  {
    number: "03",
    title: "Arrange Your Service",
    description: "Discuss the service and arrange the next step with the business.",
  },
];

export default function Process() {
  return (
    <section className="bg-brand-warmwhite">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        <Reveal className="max-w-2xl mb-14">
          <h2 className="font-heading font-extrabold text-3xl lg:text-4xl">
            Simple Booking Process
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              delay={i * 100}
              className="bg-white rounded-2xl p-8 border border-brand-beige"
            >
              <div className="w-12 h-12 rounded-full bg-brand-brown text-white flex items-center justify-center font-heading font-bold mb-5">
                {step.number}
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-brand-charcoal/70 text-sm leading-relaxed">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
