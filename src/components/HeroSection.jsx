import "../styles/hero.css";
import heroVideo from "../assets/hero.mp4";
import { useEffect, useRef } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
// import { Link } from "react-router-dom";
>>>>>>> aeddf74ba8cdc5cdda39b72ae91c24236d53a4a4

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  return (
    <section className="hero-container" id="home">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        className="hero-bg-video"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">
           AWARD-WINNING CREATIVE AGENCY
        </div>

        <h1 className="hero-title">
          TRANSFORM YOUR <br />
          <span className="text-gradient">BRAND STORY</span>
        </h1>

        <p className="hero-subtitle">
          We craft exceptional digital experiences
          that captivate audiences.
        </p>

        <div className="hero-btns">
        <a href="#contact" className="btn-primary-outlined">
  Let's Talk →
</a>
<<<<<<< HEAD
        <Link to="/work" className="btn-primary-outlined">
  View Our Work →
</Link>
=======
        {/* <Link to="/work" className="btn-primary-outlined">
  View Our Work →
</Link> */}
>>>>>>> aeddf74ba8cdc5cdda39b72ae91c24236d53a4a4
        </div>
      </div>
    </section>
  );
}