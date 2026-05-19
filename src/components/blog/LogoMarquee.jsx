import logos from "../../data/logos";

/**
 * LogoMarquee
 * Displays all client/partner logos in an infinite auto-scrolling strip.
 * Reads logo URLs from src/data/logos.js — add/remove entries there.
 */
export default function LogoMarquee() {
  // Duplicate array so the CSS animation loops seamlessly
  const doubled = [...logos, ...logos];

  return (
    <div className="ow-marquee-section">
      <div className="ow-section-eyebrow">Trusted By</div>
      <h2 className="ow-section-heading" style={{ marginBottom: 32 }}>
        Brands We've Worked With
      </h2>

      <div className="ow-marquee-wrap">
        <div className="ow-marquee-track">
          {doubled.map((url, i) => (
            <div key={i} className="ow-marquee-card">
              <div
                className="ow-marquee-logo"
                style={{
                  background: "#fff",
                  border: "1px solid #e8ecf1",
                  padding: 0,
                  overflow: "hidden",
                }}
              >
                <img
                  src={url}
                  alt={`partner-logo-${i}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}