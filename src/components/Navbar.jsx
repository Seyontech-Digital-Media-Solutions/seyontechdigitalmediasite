import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import seyoon from "../assets/logos/seyoon.png";
import PricingModal from "./PricingModal";
import "../styles/navbar.css";
<<<<<<< HEAD
// import { Link } from "react-router-dom";
=======
>>>>>>> aeddf74ba8cdc5cdda39b72ae91c24236d53a4a4

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
<<<<<<< HEAD
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
  
      navigate("/");
      // Small delay to let the home page render before scrolling
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
=======

  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (anchor) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        const el = document.querySelector(anchor);

        if (el) {
          el.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 100);

    } else {
      const el = document.querySelector(anchor);

      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
        });
      }
>>>>>>> aeddf74ba8cdc5cdda39b72ae91c24236d53a4a4
    }
  };

  return (
    <>
      <header className="navbar">

<<<<<<< HEAD
        {/* LEFT LOGO */}
        
        <div className="nav-left">
          <img src={seyoon} alt="logo" className="logo-img" />
        </div>

        {/* DESKTOP NAV */}
       <nav className="nav-links">
  <a href="#home"     onClick={(e) => handleNavClick(e, "#home")}>Home</a>
  <a href="#about"    onClick={(e) => handleNavClick(e, "#about")}>About</a>
  <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Services</a>

  <a href="#contact"  onClick={(e) => handleNavClick(e, "#contact")}>Contact</a>
 
</nav>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <button className="btn" onClick={() => setShowModal(true)}>
            Get Started
          </button>
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
=======
        <div className="nav-left">
          <img
            src={seyoon}
            alt="logo"
            className="logo-img"
          />
        </div>

        <nav className="nav-links">

          <button onClick={() => handleNavClick("#home")}>
            Home
          </button>

          <button onClick={() => handleNavClick("#about")}>
            About
          </button>

          <button onClick={() => handleNavClick("#services")}>
            Services
          </button>

          <button onClick={() => handleNavClick("#contact")}>
            Contact
          </button>

        </nav>

        <div className="nav-right">

          <button
            className="btn"
            onClick={() => setShowModal(true)}
          >
            Get Started
          </button>

          <button
            className="hamburger"
>>>>>>> aeddf74ba8cdc5cdda39b72ae91c24236d53a4a4
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
<<<<<<< HEAD
=======

>>>>>>> aeddf74ba8cdc5cdda39b72ae91c24236d53a4a4
        </div>

      </header>

<<<<<<< HEAD
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
=======
      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>

        <button onClick={() => handleNavClick("#home")}>
          Home
        </button>

        <button onClick={() => handleNavClick("#about")}>
          About
        </button>

        <button onClick={() => handleNavClick("#services")}>
          Services
        </button>

        <button onClick={() => handleNavClick("#contact")}>
          Contact
        </button>

        <button
          className="mobile-cta"
          onClick={() => {
            setShowModal(true);
            setMenuOpen(false);
          }}
        >
          Get Started
        </button>

      </div>

      {showModal && (
        <PricingModal
          onClose={() => setShowModal(false)}
        />
      )}
>>>>>>> aeddf74ba8cdc5cdda39b72ae91c24236d53a4a4
    </>
  );
}