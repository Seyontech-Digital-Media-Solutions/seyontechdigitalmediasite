import "../styles/about.css";

export default function AboutSection() {
  return (
    <section className="hero" id="about">
        <div className="hero-left">
          <div className="image-grid">
            <img src="https://images.unsplash.com/photo-1559028012-481c04fa702d" alt="img1" />
            <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" alt="img2" />
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="img3" />
            <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984" alt="img4" />
          </div>
        </div>

        <div className="hero-right">

          {/* ABOUT */}
          <h1>Seyon Tech is a results-driven digital media solutions dedicated to helping businesses generate quality leads, automate sales processes, and scale their operations through cutting-edge AI-powered marketing solutions</h1>
           <p>
            We combine proven digital marketing strategies with advanced automation technology to deliver measurable results. From paid advertising to AI chatbots and complete funnel development, we provide end-to-end solutions that transform your marketing efforts into a predictable revenue engine..
           </p>
          <a href="#services">
            <button className="btn btn-primary">Let’s Connect</button>
          </a>
        </div>
      </section>
  );
}