import { GraduationCap, Building2, Stethoscope,  Store, UserCheck } from "lucide-react";
import localbusinessImg from "../assets/logos/localbusiness.png";
import personalbrandImg from "../assets/logos/personalbrand.jpg";
import franchImg from "../assets/logos/franch.png";
import { Network } from "lucide-react";
export default function Industries() {
  return (
    <section className="industries" id="industries">
      <div className="industries-header">
        <h2 className="fade-up">Industries We Serve</h2>
        <p className="fade-up delay-1">Tailored marketing and automation solutions across diverse sectors</p>
      </div>

      <div className="industries-grid">
        {/* 1. Education */}
        <div className="industry-card education-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <GraduationCap size={40} />
            </div>
            <h3>Educational Institutions</h3>
            <p>Schools, colleges, and training centers</p>
          </div>
        </div>

        {/* 2. Real Estate */}
        <div className="industry-card realestate-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <Building2 size={40} />
            </div>
            <h3>Real Estate</h3>
            <p>Property developers and agencies</p>
          </div>
        </div>

        {/* 3. Healthcare */}
        <div className="industry-card healthcare-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <Stethoscope size={40} />
            </div>
            <h3>Healthcare Clinics</h3>
            <p>Hospitals and wellness centers</p>
          </div>
        </div>

        {/* 4. Political */}
        {/* <div className="industry-card political-bg">
          <div className="industry-overlay"></div>
          <div className="industry-card-inner">
            <div className="industry-icon-wrapper #8b5cf6">
              <Vote size={40} />
            </div>
            <h3>Political Campaigns</h3>
            <p>Election strategy and outreach</p>
          </div>
        </div> */}

        {/* Local Business */}
<div
  className="industry-card local-bg"
  style={{ "--bg-image": `url(${localbusinessImg})` }}
>
  <div className="industry-overlay"></div>

  <div className="industry-card-inner">
    <div className="industry-icon-wrapper">
      <Store size={40} />
    </div>

    <h3>Local Businesses</h3>
    <p>Small shops and local startups</p>
  </div>
</div>

{/* Personal Brand */}
<div
  className="industry-card personal-bg"
  style={{ "--bg-image": `url(${personalbrandImg})` }}
>
  <div className="industry-overlay"></div>
  <div className="industry-card-inner">
    <div className="industry-icon-wrapper">
      <UserCheck size={40} />
    </div>
    <h3>Personal Brands</h3>
    <p>Influencers, coaches, and consultants</p>
  </div>
</div>
{/* Franchise Business */}
<div
  className="industry-card"
  style={{
    "--bg-image": `url(${franchImg})`,
  }}
>
  <div className="industry-overlay"></div>

  <div className="industry-card-inner">
    <div className="industry-icon-wrapper">
      <Network size={40} />
    </div>

    <h3>Franchise Businesses</h3>

    <p>Multi-location brands and franchise growth</p>
  </div>
</div>
      </div>
    </section>
  );
}