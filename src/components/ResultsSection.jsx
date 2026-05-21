import Counter from "./Counter";

  

export default function ResultsSection() {
  return (


      <section className="results-section" id="results">
        <div className="container">


          <div className="results-header">
            <h2>
              OUR <span className="text-gradient">RESULTS</span>
            </h2>
            <p>
              Tangible results, not empty claims — we build efficient AI tools that scale,
              optimize, and save valuable hours.
            </p>
          </div>



          <div className="results-grid">

            <div className="result-card">
              <h3><Counter end={150} suffix="+" /></h3>
              <h4>Project success</h4>
              <p>Delivered across 20+ countries—from startups to top corporations.</p>
            </div>

            <div className="result-card">
              <h3><Counter end={100} suffix="%" /></h3>
              <h4>Client efficiency</h4>
              <p>Clients reporting enhanced efficiency with our custom strategies.</p>
            </div>

            <div className="result-card">
              <h3><Counter end={300} suffix="+" /></h3>
              <h4>AI innovation</h4>
              <p>Hours spent crafting smart AI tools to optimize workflows.</p>
            </div>

            <div className="result-card">
              <h3><Counter end={75} suffix="+" /></h3>
              <h4>Industry recognition</h4>
              <p>Recognized for design, tech, and sustainability.</p>
            </div>

          </div>
        </div>
      </section>
  );
}