// ---------------------------------------------------------------------------
// Auto Detailing Bushi — central business data
// Edit the values in this file to update content across the entire site.
// See README.md for a guided walkthrough of common edits.
// ---------------------------------------------------------------------------

export const business = {
  name: "Auto Detailing Bushi",
  category: "Car Detailing / Automotive Detailing",
  phoneDisplay: "+355 69 611 8529",
  phoneHref: "tel:+355696118529",
  addressLines: ["Farke e Madhe", "Tiranë 1010", "Albania"],
  addressInline: "Farke e Madhe, Tiranë 1010, Albania",
  plusCode: "8V7J+7Q Tiranë, Albania",
  googleMapsUrl:
    "https://www.google.com/maps/place/Auto+Detailing+Bushi/data=!4m7!3m6!1s0x135037c5ff1f44b3:0x2c2293ded2c33d2f!8m2!3d41.3132289!4d19.881991!16s%2Fg%2F11ydr1xx70",
  facebookUrl: "https://www.facebook.com/autodetailing.bushi",
  instagramUrl: "https://www.instagram.com/auto_detailing_bushi/?hl=sw-ke",
  googleRating: "5.0",
  googleReviewCount: 2,
  mapsListingHours: "Open 24 hours",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

// Editable service categories — add, remove, or edit freely.
export const services = [
  {
    id: "exterior",
    title: "Exterior Detailing",
    description: "Detailed exterior cleaning and vehicle presentation.",
  },
  {
    id: "interior",
    title: "Interior Detailing",
    description: "Careful cleaning and refreshing of the vehicle interior.",
  },
  {
    id: "deep-cleaning",
    title: "Deep Vehicle Cleaning",
    description:
      "A more detailed cleaning approach for vehicles that need extra attention.",
  },
  {
    id: "paint-care",
    title: "Paint Care",
    description: "Care focused on maintaining a clean and polished appearance.",
  },
  {
    id: "polishing",
    title: "Car Polishing",
    description: "Polishing-focused vehicle care for a smoother visual finish.",
  },
  {
    id: "premium",
    title: "Premium Detailing",
    description:
      "A comprehensive detailing option for customers looking for a more complete vehicle treatment.",
  },
];

// Editable FAQ list.
export const faqs = [
  {
    question: "How can I contact Auto Detailing Bushi?",
    answer: `You can call Auto Detailing Bushi directly at ${business.phoneDisplay}.`,
  },
  {
    question: "Where is Auto Detailing Bushi located?",
    answer:
      "The Google Maps listing places Auto Detailing Bushi in Farke e Madhe, Tiranë 1010, Albania.",
  },
  {
    question: "How can I request a detailing service?",
    answer: "Call the business directly to discuss your vehicle and the service you need.",
  },
  {
    question: "Does Auto Detailing Bushi have social media?",
    answer: "Yes. You can connect with Auto Detailing Bushi through Facebook and Instagram.",
  },
  {
    question: "What is the Google rating?",
    answer: "The supplied Google Maps listing currently shows a 5.0 rating from 2 reviews.",
  },
];

// Only the two reviews actually supplied. No review text was provided, so a
// neutral "5-star Google review" label is shown instead of invented quotes.
export const reviews = [
  { name: "Eles Shahaj", rating: 5 },
  { name: "am rental", rating: 5 },
];

// Gallery images — sourced from client-supplied photography.
// NOTE: paths are relative (no leading "/") so they work correctly no
// matter what subfolder the site is deployed under (see vite.config.js).
export const galleryImages = [
  { src: "images/gallery-01.jpg", alt: "Detailer applying ceramic coating to a car panel" },
  { src: "images/gallery-02.jpg", alt: "Close-up of a brake caliper being refinished" },
  { src: "images/gallery-03.jpg", alt: "Polishing the headlight of a dark vehicle" },
  { src: "images/gallery-04.jpg", alt: "Applying paint protection film to a vehicle bumper" },
  { src: "images/gallery-05.jpg", alt: "Hand-drying a vehicle panel after washing" },
  { src: "images/gallery-06.jpg", alt: "Foam wash covering a vehicle during exterior cleaning" },
];
