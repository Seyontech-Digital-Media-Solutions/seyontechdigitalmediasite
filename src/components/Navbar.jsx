import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import seyoon from "../assets/logos/seyoon.png";
import PricingModal from "./PricingModal";
import "../styles/navbar.css";
// import { Link } from "react-router-dom";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e, anchor) => {
    e.preventDefault();
    setMenuOpen(false);

    if (location.pathname === "/") {
      // Already on home — just scroll to section
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: "smooth"});
    } else {
      // On another page — navigate home, then scroll after page loads
      navigate("/");
      // Small delay to let the home page render before scrolling
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      <header className="navbar">

        {/* LEFT LOGO */}
        
        <div className="nav-left">
          <img src={seyoon} alt="logo" className="logo-img" />
        </div>

        {/* DESKTOP NAV */}
       <nav className="nav-links">
  <a href="#home"     onClick={(e) => handleNavClick(e, "#home")}>Home</a>
  <a href="#about"    onClick={(e) => handleNavClick(e, "#about")}>About</a>
  <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Services</a>
  <a href="/careers">Careers</a>
  <a href="#contact"  onClick={(e) => handleNavClick(e, "#contact")}>Contact</a>
 
</nav>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <button className="btn" onClick={() => setShowModal(true)}>
            Get Started
          </button>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

      </header>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#home"     onClick={(e) => handleNavClick(e, "#home")}>Home</a>
        <a href="#about"    onClick={(e) => handleNavClick(e, "#about")}>About</a>
        <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Services</a>
        <a href="#contact"  onClick={(e) => handleNavClick(e, "#contact")}>Contact</a>
        <button
          className="mobile-cta"
          onClick={() => { setShowModal(true); setMenuOpen(false); }}
        >
          Get Started
        </button>
      </div>

      {showModal && <PricingModal onClose={() => setShowModal(false)} />}
    </>
  );
}