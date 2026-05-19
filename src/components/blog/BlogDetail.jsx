import { useEffect } from "react";
import BlogImage from "./BlogImage";



export default function BlogDetail({ post, onBack, allPosts }) {
const related = allPosts.filter((p) => p.id !== post.id).slice(0, 3);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [post.id]);

  return (
    <div className="bd-root">

      {/* ── Back button ── */}
      <button className="bd-back-btn" onClick={() => onBack()}>
        <span className="bd-back-arrow">←</span> Back
      </button>

      {/* ── Hero image ── */}
      <div className="bd-hero-img">
        <BlogImage
          src={post.image}
          alt={post.title}
          placeholderText={`${post.category} — Hero Image`}
          icon={post.icon}
        />
        <span
          className="bd-category-badge"
          style={{
            background: post.accentLight,
            color:       post.accent,
            border:      `1px solid ${post.accentBorder}`,
          }}
        >
          {post.category}
        </span>
      </div>

      {/* ── Meta bar ── */}
      <div className="bd-meta-bar">
        <span className="bd-meta-item">
          <span className="bd-meta-icon"></span>{post.date}
        </span>
        <span className="bd-meta-item">
          <span className="bd-meta-icon"></span>{post.readTime}
        </span>
        <span className="bd-meta-item">
          <span className="bd-meta-icon"></span>{post.author.name}
        </span>
      </div>

      {/* ── Title ── */}
      <h1 className="bd-article-title">{post.title}</h1>

      {/* ── Tagline blockquote ── */}
      <div
        className="bd-article-tagline"
        style={{
          borderLeftColor: post.accent,
          background:       post.accentLight,
          color:            post.accent,
        }}
      >
        "{post.tagline}"
      </div>

      {/* ── Body paragraphs ── */}
      <div className="bd-body-text">
        {post.body.map((para, i) => (
          <p key={i} className="bd-para">{para}</p>
        ))}
      </div>

      {/* ── Impact stats ── */}
      <div
        className="bd-stats-section"
        style={{
          background:   post.accentLight,
          borderColor:  post.accentBorder,
        }}
      >
        <div className="bd-stats-label" style={{ color: post.accent }}>
          Impact & Results
        </div>
        <div className="bd-stats-grid">
          {post.stats.map((s, i) => (
            <div key={i} className="bd-stat">
              <div className="bd-stat-val" style={{ color: post.accent }}>
                {s.value}
              </div>
              <div className="bd-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Deliverables ── */}
      <div className="bd-deliverables-section">
        <div className="bd-deliverables-label">Deliverables</div>
        <div className="bd-deliverables-list">
          {post.deliverables.map((d) => (
            <span key={d} className="bd-deliverable">{d}</span>
          ))}
        </div>
      </div>

      {/* ── Tags ── */}
      <div className="bd-tags-section">
        <div className="bd-tags-label">Tags</div>
        <div className="bd-tags-list">
          {post.tags.map((t) => (
            <span
              key={t}
              className="bd-tag"
              style={{
                background: post.accentLight,
                color:       post.accent,
                border:      `1px solid ${post.accentBorder}`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── Share bar ── */}
      <div className="bd-share-bar">
        <span className="bd-share-label">Share</span>
        {["LinkedIn", "Twitter / X", "WhatsApp", "Copy Link"].map((s) => (
          <button key={s} className="bd-share-btn">{s}</button>
        ))}
      </div>

      {/* ── Author box ── */}
      <div className="bd-author-box">
        <div
          className="bd-author-avatar-lg"
          style={{
            background: post.accentLight,
            color:       post.accent,
            border:      `1px solid ${post.accentBorder}`,
          }}
        >
          {post.author.initials}
        </div>
        <div>
          <div className="bd-author-name">{post.author.name}</div>
          <div className="bd-author-role">{post.author.role}</div>
          <div className="bd-author-bio">
            Specialist in brand strategy and digital growth across the{" "}
            {post.category.toLowerCase()} sector, with hands-on experience
            leading campaigns from brief to measurable outcome.
          </div>
        </div>
      </div>

      {/* ── Related posts ── */}
      {related.length > 0 && (
        <div className="bd-related-section">
          <h3 className="bd-related-heading">Related Case Studies</h3>
          <div className="bd-related-grid">
            {related.map((r) => (
              <div
                key={r.id}
                className="bd-related-card"
                onClick={() => onBack(r)}
              >
                <div className="bd-related-img">
                  <BlogImage src={r.image} alt={r.title} icon={r.icon} />
                </div>
                <div className="bd-related-body">
                  <div className="bd-related-cat" style={{ color: r.accent }}>
                    {r.category}
                  </div>
                  <div className="bd-related-title">{r.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}