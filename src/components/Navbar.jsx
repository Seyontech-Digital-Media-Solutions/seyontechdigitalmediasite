import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import seyoon from "../assets/logos/seyoon.png";
import PricingModal from "./PricingModal";
import "../styles/navbar.css";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    }
  };

  return (
    <>
      <header className="navbar">

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
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </header>

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
    </>
  );
}