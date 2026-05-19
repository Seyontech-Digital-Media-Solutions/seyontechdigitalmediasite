import { useRef } from "react";
import useReveal   from "../../hooks/useReveal";
import BlogImage   from "./BlogImage";

/**
 * BlogCard
 * Props:
 *   post    {object}   — single blog post from blogPosts.js
 *   index   {number}   — used to stagger the reveal animation
 *   onRead  {function} — called with the post when "Read Case Study" is clicked
 */
export default function BlogCard({ post, index, onRead }) {
  const ref     = useRef(null);
  const visible = useReveal(ref);

  return (
    <article
      ref={ref}
      className="bp-card"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "none" : "translateY(28px)",
        transition: `opacity 0.55s ease ${index * 0.06}s, transform 0.55s ease ${index * 0.06}s`,
      }}
    >
      {/* ── Hero Image ── */}
      <div className="bp-card-img-wrap">
        <BlogImage
          src={post.image}
          alt={post.title}
          placeholderText={`${post.category} — ${post.title.split(":")[0]}`}
          icon={post.icon}
        />
        <span
          className="bp-card-category-badge"
          style={{
            background: post.accentLight,
            color:       post.accent,
            border:      `1px solid ${post.accentBorder}`,
          }}
        >
          {post.category}
        </span>
      </div>

      {/* ── Body ── */}
      <div className="bp-card-body">
        <div className="bp-card-meta">
          <span className="bp-meta-item">📅 {post.date}</span>
          <span className="bp-meta-dot" />
          <span className="bp-meta-item">⏱ {post.readTime}</span>
        </div>

        <h2 className="bp-card-title">{post.title}</h2>
        <p className="bp-card-tagline" style={{ color: post.accent }}>
          "{post.tagline}"
        </p>
        <p className="bp-card-excerpt">{post.excerpt}</p>

        <div className="bp-card-footer">
          {/* Author */}
          <div className="bp-author-row">
            <div
              className="bp-author-avatar"
              style={{
                background: post.accentLight,
                color:       post.accent,
                border:      `1px solid ${post.accentBorder}`,
              }}
            >
              {post.author.initials}
            </div>
            <div className="bp-author-info">
              <div className="bp-author-name">{post.author.name}</div>
              <div className="bp-author-role">{post.author.role}</div>
            </div>
          </div>

          {/* Read more */}
          <button
            className="bp-read-more-btn"
            style={{ borderColor: post.accentBorder, color: post.accent }}
            onClick={() => onRead(post)}
          >
            Read Case Study <span className="bp-read-more-arrow">→</span>
          </button>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="bp-card-stats">
        {post.stats.map((s, i) => (
          <div key={i} className="bp-card-stat">
            <div className="bp-card-stat-val" style={{ color: post.accent }}>
              {s.value}
            </div>
            <div className="bp-card-stat-lbl">{s.label}</div>
          </div>
        ))}
      </div>
    </article>
  );
}