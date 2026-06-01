import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import LogoScroll from "../components/LogoScroll";
import ServicesSection from "../components/ServicesSection";
import WhyChoose from "../components/WhyChoose";
import Industries from "../components/Industries";
import ProcessSection from "../components/ProcessSection";
import ResultsSection from "../components/ResultsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

import "../styles/global.css";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <LogoScroll />
      <ServicesSection />
      <WhyChoose />
      <Industries />
      <ProcessSection />
      <ResultsSection />

      <ContactSection />
      <Footer />
    </>
  );
}