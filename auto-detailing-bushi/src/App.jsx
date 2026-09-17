import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import About from "./components/About";
import Services from "./components/Services";
import FeaturedSection from "./components/FeaturedSection";
import WhyChoose from "./components/WhyChoose";
import Gallery from "./components/Gallery";
import DetailingInFocus from "./components/DetailingInFocus";
import Process from "./components/Process";
import Reviews from "./components/Reviews";
import Social from "./components/Social";
import FAQ from "./components/FAQ";
import BookingSection from "./components/BookingSection";
import Contact from "./components/Contact";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import MobileCTA from "./components/MobileCTA";

export default function App() {
  return (
    <div className="pb-16 lg:pb-0">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <About />
        <Services />
        <FeaturedSection />
        <WhyChoose />
        <Gallery />
        <DetailingInFocus />
        <Process />
        <Reviews />
        <Social />
        <FAQ />
        <BookingSection />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
    </div>
  );
}
