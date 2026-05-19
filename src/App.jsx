import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurWork from "./pages/OurWork";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import Careers from "./pages/Careers";

export default function App() {
  return (
    <>
      <Navbar/>
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<OurWork />} />
          <Route path="/careers" element={<Careers />} />
      </Routes>  

      <ContactSection />
      <Footer />
    </>
  );
}