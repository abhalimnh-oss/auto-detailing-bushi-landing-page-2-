import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";

const serviceOptions = [
  "Exterior Detailing",
  "Interior Detailing",
  "Deep Cleaning",
  "Paint Care",
  "Car Polishing",
  "Premium Detailing",
  "Other",
];

const initialState = {
  fullName: "",
  phone: "",
  email: "",
  vehicleMake: "",
  vehicleModel: "",
  vehicleYear: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export default function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const update = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.service) next.service = "Please select a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    // NOTE: No backend is connected. This form does not currently send data
    // anywhere — see README.md for how to wire it up to an email service.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-brand-beige p-10 text-center max-w-xl mx-auto">
        <CheckCircle2 className="text-brand-brown mx-auto mb-4" size={40} />
        <h3 className="font-heading font-bold text-xl mb-2">
          Request prepared
        </h3>
        <p className="text-brand-charcoal/70 leading-relaxed mb-6">
          This is a demo form and isn't connected to a backend yet, so nothing
          was sent. For now, please call Auto Detailing Bushi directly to
          arrange your service.
        </p>
        <button
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="text-brand-brown font-semibold hover:text-brand-brownDark"
        >
          Fill out another request
        </button>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-xl border border-brand-beige bg-brand-warmwhite px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-brown/50";

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-3xl border border-brand-beige p-6 sm:p-10 max-w-2xl mx-auto">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name" required error={errors.fullName}>
          <input className={inputClass} value={form.fullName} onChange={update("fullName")} />
        </Field>
        <Field label="Phone Number" required error={errors.phone}>
          <input className={inputClass} value={form.phone} onChange={update("phone")} type="tel" />
        </Field>
        <Field label="Email">
          <input className={inputClass} value={form.email} onChange={update("email")} type="email" />
        </Field>
        <Field label="Vehicle Make">
          <input className={inputClass} value={form.vehicleMake} onChange={update("vehicleMake")} />
        </Field>
        <Field label="Vehicle Model">
          <input className={inputClass} value={form.vehicleModel} onChange={update("vehicleModel")} />
        </Field>
        <Field label="Vehicle Year">
          <input className={inputClass} value={form.vehicleYear} onChange={update("vehicleYear")} />
        </Field>
        <Field label="Service Required" required error={errors.service}>
          <select className={inputClass} value={form.service} onChange={update("service")}>
            <option value="">Select a service</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred Date">
          <input className={inputClass} value={form.preferredDate} onChange={update("preferredDate")} type="date" />
        </Field>
        <Field label="Preferred Time">
          <input className={inputClass} value={form.preferredTime} onChange={update("preferredTime")} type="time" />
        </Field>
      </div>

      <Field label="Message" className="mt-5">
        <textarea
          className={`${inputClass} min-h-[110px] resize-y`}
          value={form.message}
          onChange={update("message")}
        />
      </Field>

      <button
        type="submit"
        className="mt-7 w-full sm:w-auto bg-brand-brown text-white px-8 py-3.5 rounded-full font-semibold hover:bg-brand-brownDark transition-colors shadow-soft"
      >
        Send Request
      </button>
    </form>
  );
}

function Field({ label, required, error, children, className = "" }) {
  return (
    <label className={`block text-sm ${className}`}>
      <span className="font-medium text-brand-charcoal mb-1.5 block">
        {label}
        {required && <span className="text-brand-brown"> *</span>}
      </span>
      {children}
      {error && <span className="text-red-600 text-xs mt-1 block">{error}</span>}
    </label>
  );
}
