import logos from "../data/logos";

export default function LogoScroll() {
  return (
    <section className="logo-section">
      <h2>Trusted by Growing Companies</h2>

      <div className="logo-wrapper">
        <div className="logo-track">
          {[...logos, ...logos].map((logo, i) => (
            <img key={i} src={logo} alt="logo" />
          ))}
        </div>
      </div>
    </section>
  );
}