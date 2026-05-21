import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand">
          <h2 className="logo">
            SEYON <span>TECH</span>
          </h2>
          <p>
            Digital Media Solutions that drive real results. We help businesses
            generate leads, automate sales, and scale faster.
          </p>

          <div className="socials">
            <a href="https://www.linkedin.com/company/seyon-technology-digital-solutions/posts/?feedView=all"><FaLinkedin /></a>
            <a href="https://www.instagram.com/seyontechnology/"><FaInstagram /></a>
            <a href="https://www.youtube.com/@seyontechdigitalmediasoultions"><FaYoutube /></a>
            <a href="https://www.facebook.com/profile.php?id=61575338586037"><FaFacebook /></a>
          </div>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#industries">Industries</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li>AI Automation</li>
            <li>Paid Ads Management</li>
            <li>Social Media Marketing</li>
            <li>Website and Funnels</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h4>Contact</h4>
          <p>info@seyontech.in</p>
          <p>+91 86104 99770</p>
          <p>Thousand Lights, Chennai-06, Tamil Nadu</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Seyon Tech. All rights reserved.</p>
        <div className="legal">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Career</a>
        </div>
      </div>
    </footer>
  );
}