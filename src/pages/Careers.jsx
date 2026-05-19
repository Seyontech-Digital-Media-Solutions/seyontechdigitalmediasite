import { useState, useRef } from "react";
import { jobOpenings, perks, hiringSteps } from "../data/careersData";
import "../styles/Careers.css";

// ─── REVEAL HOOK (inline to avoid extra import issues) ────────────────────────
import useReveal from "../hooks/useReveal";

// ─── JOB CARD ─────────────────────────────────────────────────────────────────

function JobCard({ job, index, onApply }) {
  const ref     = useRef(null);
  const visible = useReveal(ref);
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      ref={ref}
      className="cr-job-card"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : "translateY(28px)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
        borderTop:  `3px solid ${job.accent}`,
      }}
    >
      {/* Card header */}
      <div className="cr-job-header">
        <div className="cr-job-icon" style={{ background: job.accentLight, border: `1px solid ${job.accentBorder}` }}>
          {job.icon}
        </div>
        <div className="cr-job-header-text">
          <div className="cr-job-dept" style={{ color: job.accent }}>{job.department}</div>
          <h3 className="cr-job-title">{job.title}</h3>
        </div>
      </div>

      {/* Meta badges */}
      <div className="cr-job-meta">
        <span className="cr-badge"><span>📍</span>{job.location}</span>
        <span className="cr-badge"><span>⏱</span>{job.type}</span>
        <span className="cr-badge"><span>💼</span>{job.experience}</span>
      </div>

      {/* Description */}
      <p className="cr-job-desc">{job.description}</p>

      {/* Expandable details */}
      {expanded && (
        <div className="cr-job-details">
          <div className="cr-job-section">
            <div className="cr-job-section-label">Responsibilities</div>
            <ul className="cr-job-list">
              {job.responsibilities.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
          <div className="cr-job-section">
            <div className="cr-job-section-label">Requirements</div>
            <ul className="cr-job-list">
              {job.requirements.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
          </div>
          {job.niceToHave?.length > 0 && (
            <div className="cr-job-section">
              <div className="cr-job-section-label">Nice to Have</div>
              <div className="cr-nice-tags">
                {job.niceToHave.map((n, i) => (
                  <span key={i} className="cr-nice-tag" style={{ background: job.accentLight, color: job.accent, border: `1px solid ${job.accentBorder}` }}>
                    {n}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="cr-job-footer">
        <button
          className="cr-toggle-btn"
          style={{ color: job.accent }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less ↑" : "View Details ↓"}
        </button>
        <button
          className="cr-apply-btn"
          style={{ background: job.accent }}
          onClick={() => onApply(job)}
        >
          Apply Now →
        </button>
      </div>
    </div>
  );
}

// ─── PERK CARD ────────────────────────────────────────────────────────────────

function PerkCard({ perk, index }) {
  const ref     = useRef(null);
  const visible = useReveal(ref);

  return (
    <div
      ref={ref}
      className="cr-perk-card"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : "translateY(24px)",
        transition: `opacity 0.45s ease ${index * 0.06}s, transform 0.45s ease ${index * 0.06}s`,
      }}
    >
      <div className="cr-perk-icon">{perk.icon}</div>
      <div className="cr-perk-title">{perk.title}</div>
      <div className="cr-perk-desc">{perk.desc}</div>
    </div>
  );
}

// ─── APPLY MODAL ─────────────────────────────────────────────────────────────

function ApplyModal({ job, onClose }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!job) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your actual form submission / API call
    setSubmitted(true);
  };

  return (
    <div className="cr-modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="cr-modal">
        <button className="cr-modal-close" onClick={onClose}>✕</button>

        {submitted ? (
          <div className="cr-modal-success">
            <div className="cr-success-icon">🎉</div>
            <h3>Application Submitted!</h3>
            <p>Thanks for applying for <strong>{job.title}</strong>. We'll review your application and get back to you within 3–5 business days.</p>
            <button className="cr-apply-btn" style={{ background: job.accent, marginTop: 24 }} onClick={onClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="cr-modal-header" style={{ borderBottom: `3px solid ${job.accent}` }}>
              <div className="cr-job-dept" style={{ color: job.accent, marginBottom: 6 }}>{job.department}</div>
              <h2 className="cr-modal-title">Apply for {job.title}</h2>
              <div className="cr-job-meta" style={{ marginTop: 10 }}>
                <span className="cr-badge"><span>📍</span>{job.location}</span>
                <span className="cr-badge"><span>💼</span>{job.experience}</span>
              </div>
            </div>

            <form className="cr-modal-form" onSubmit={handleSubmit}>
              <div className="cr-form-group">
                <label>Full Name *</label>
                <input
                  type="text" required placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="cr-form-row">
                <div className="cr-form-group">
                  <label>Email Address *</label>
                  <input
                    type="email" required placeholder="you@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div className="cr-form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel" required placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
              </div>
              <div className="cr-form-group">
                <label>Portfolio / LinkedIn URL</label>
                <input
                  type="url" placeholder="https://yourportfolio.com"
                />
              </div>
              <div className="cr-form-group">
                <label>Resume / CV *</label>
                <div className="cr-file-upload">
                  <input type="file" accept=".pdf,.doc,.docx" required id="resume-upload" style={{ display: "none" }} />
                  <label htmlFor="resume-upload" className="cr-file-label">
                    📎 Choose File (PDF, DOC — max 5MB)
                  </label>
                </div>
              </div>
              <div className="cr-form-group">
                <label>Why do you want to join Seyon Tech?</label>
                <textarea
                  rows={4} placeholder="Tell us what excites you about this role and what you'll bring to the team..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>
              <button
                type="submit"
                className="cr-apply-btn cr-submit-btn"
                style={{ background: job.accent }}
              >
                Submit Application →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ─── MAIN CAREERS PAGE ────────────────────────────────────────────────────────

export default function Careers() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedJob, setSelectedJob]   = useState(null);

  const departments = ["All", ...new Set(jobOpenings.map((j) => j.department))];

  const filtered =
    activeFilter === "All"
      ? jobOpenings
      : jobOpenings.filter((j) => j.department === activeFilter);

  return (
    <div className="cr-root">

      {/* ── HERO ── */}
      <div className="cr-hero">
        <div className="cr-hero-bg" />
        <div className="cr-hero-glow" />
        <div className="cr-hero-content">
          <div className="cr-hero-tag">
            <span className="cr-dot" /> We're Hiring
          </div>
          <h1 className="cr-hero-title">
            Build Your Career at<br />
            <span className="cr-hero-gradient">Seyon Tech</span>
          </h1>
          <p className="cr-hero-sub">
            We're a fast-growing digital marketing agency based in Chennai, working with brands across 7 industries. If you're hungry to learn, love marketing, and want work that actually moves the needle — you'll fit right in.
          </p>
          <div className="cr-hero-stats">
            <div><div className="cr-hero-stat-num">7+</div><div className="cr-hero-stat-lbl">Open Roles</div></div>
            <div><div className="cr-hero-stat-num">Chennai</div><div className="cr-hero-stat-lbl">Based</div></div>
            <div><div className="cr-hero-stat-num">Fast</div><div className="cr-hero-stat-lbl">Growth</div></div>
            <div><div className="cr-hero-stat-num">100%</div><div className="cr-hero-stat-lbl">Real Work</div></div>
          </div>
        </div>
      </div>

      {/* ── WHY JOIN US (PERKS) ── */}
      <div className="cr-section cr-perks-section">
        <div className="cr-section-inner">
          <div className="cr-eyebrow">Why Seyon Tech?</div>
          <h2 className="cr-section-title">A Place Where Careers Actually Grow</h2>
          <p className="cr-section-sub">
            We don't just talk about growth. Every person on this team has moved faster here than they would have anywhere else.
          </p>
          <div className="cr-perks-grid">
            {perks.map((perk, i) => <PerkCard key={i} perk={perk} index={i} />)}
          </div>
        </div>
      </div>

      {/* ── HIRING PROCESS ── */}
      <div className="cr-section cr-process-section">
        <div className="cr-section-inner">
          <div className="cr-eyebrow">How We Hire</div>
          <h2 className="cr-section-title">Simple, Fast, Transparent</h2>
          <p className="cr-section-sub">No drawn-out processes. We respect your time and move quickly.</p>
          <div className="cr-process-track">
            {hiringSteps.map((step, i) => (
              <div key={i} className="cr-process-step">
                <div className="cr-step-num">{step.step}</div>
                {i < hiringSteps.length - 1 && <div className="cr-step-line" />}
                <div className="cr-step-body">
                  <div className="cr-step-title">{step.title}</div>
                  <div className="cr-step-desc">{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── OPEN POSITIONS ── */}
      <div className="cr-section cr-jobs-section">
        <div className="cr-section-inner">
          <div className="cr-eyebrow">Open Positions</div>
          <h2 className="cr-section-title">Find Your Role</h2>
          <p className="cr-section-sub">
            {filtered.length} open position{filtered.length !== 1 ? "s" : ""} across {departments.length - 1} departments. Click any card to view full details.
          </p>

          {/* Department filter */}
          <div className="cr-dept-filter">
            {departments.map((dept) => (
              <button
                key={dept}
                className={`cr-dept-btn ${activeFilter === dept ? "cr-dept-btn--active" : ""}`}
                onClick={() => setActiveFilter(dept)}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job cards grid */}
          <div className="cr-jobs-grid">
            {filtered.map((job, i) => (
              <JobCard key={job.id} job={job} index={i} onApply={setSelectedJob} />
            ))}
          </div>
        </div>
      </div>

      {/* ── OPEN APPLICATION CTA ── */}
      <div className="cr-open-cta">
        <div className="cr-open-cta-inner">
          <div className="cr-eyebrow" style={{ color: "rgba(255,255,255,0.7)" }}>Don't See Your Role?</div>
          <h2 className="cr-open-cta-title">Send Us an Open Application</h2>
          <p className="cr-open-cta-sub">
            If you're talented and passionate about digital marketing, we want to hear from you — even if there's no current opening that fits.
          </p>
          <a href="mailto:careers@seyontech.in" className="cr-open-cta-btn">
            📩 careers@seyontech.in
          </a>
        </div>
      </div>

      {/* ── APPLY MODAL ── */}
      {selectedJob && (
        <ApplyModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}

    </div>
  );
}