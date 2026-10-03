import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import HowItWorks from "./Components/HowItWorks";
import Programs from "./Components/Programs";
import Comparison from "./Components/Comparison";
import Testimonials from "./Components/Testimonials";
import CTA from "./Components/CTA";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F2421]">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Programs />
        <Comparison />
        <Testimonials />
        <CTA />
      </main>

      <Footer />

      {/* Floating support button */}
      <a
        href="#contact"
        aria-label="Contact Kalki Fitness Studio"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#EAFB7B] text-[#0F2421] shadow-[0_0_30px_rgba(234,251,123,.3)] transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(234,251,123,.5)]"
      >
        <span className="text-xl">↗</span>
      </a>
    </div>
  );
}