import {MessageSquare, ZoomIn, Settings, Rocket, LineChart} from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="process" id="process">

        <div className="process-header text-center">
          <h2>
            How We <span className="text-gradient">Work</span>
          </h2>
          <p className="process-sub">
            A proven 5-step process that transforms your marketing and drives consistent results
          </p>
        </div>

        {/* TOP ICON LINE */}
        <div className="process-line">
          <div className="line"></div>

          <div className="circle">
            <MessageSquare size={40} />
          </div>
          <div className="circle">
            <ZoomIn size={40} />
          </div>
          <div className="circle">
            <Settings size={40} />
          </div>
          <div className="circle">
            <Rocket size={40} />
          </div>
          <div className="circle">
            <LineChart size={40} />
          </div>
        </div>

        {/* CARDS */}
        <div className="process-cards">
          <div className="process-card">
            <span>01</span>
            <h4>Free Strategy Consultation</h4>
            <p>We start with a detailed discussion to understand your business goals and challenges.</p>
          </div>

          <div className="process-card">
            <span>02</span>
            <h4>Business Analysis</h4>
            <p>Deep market research and competitor analysis to identify opportunities.</p>
          </div>

          <div className="process-card">
            <span>03</span>
            <h4>Campaign and Funnel Setup</h4>
            <p>We build your complete marketing infrastructure including automation.</p>
          </div>

          <div className="process-card">
            <span>04</span>
            <h4>Launch and Optimization</h4>
            <p>Campaigns go live with continuous monitoring and optimization.</p>
          </div>

          <div className="process-card">
            <span>05</span>
            <h4>Tracking and Support</h4>
            <p>Ongoing lead tracking and sales support to maximize conversions.</p>
          </div>
        </div>
      </section>
  );
}