import blogPosts, { allTags } from "../../data/blogPosts";
import BlogImage from "./BlogImage";
/**
 * Sidebar
 * Props:
 *   posts            {array}    — full blogPosts list (for Recent Posts)
 *   activeCategory   {string}   — currently selected filter
 *   onCategoryChange {function} — called with a category string
 *   onSelectPost     {function} — called with a post object (Recent Posts click)
 */
export default function Sidebar({ posts, activeCategory, onCategoryChange, onSelectPost }) {
  return (
    <aside className="bp-sidebar">

      {/* ── Categories ── */}
      <div className="bp-sidebar-widget">
        <div className="bp-widget-header">
          <div className="bp-widget-title">Industries </div>
        </div>

        <div className="bp-categories-list">
          {blogPosts.map((p) => (
            <div
              key={p.id}
              className={`bp-category-item ${activeCategory === p.category ? "active" : ""}`}
              onClick={() => onCategoryChange(p.category)}
            >
              <div className="bp-cat-left">
                <div className="bp-cat-dot" style={{ background: p.accent }} />
                <span className="bp-cat-name">{p.category}</span>
              </div>
              <span className="bp-cat-count">1</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Recent Posts ── */}
      <div className="bp-sidebar-widget">
        <div className="bp-widget-header">
          <div className="bp-widget-title">Recent Posts</div>
        </div>

        <div className="bp-recent-list">
          {posts.slice(0, 5).map((p) => (
            <div
              key={p.id}
              className="bp-recent-item"
              onClick={() => onSelectPost(p)}
            >
              <div className="bp-recent-thumb">
                <BlogImage src={p.thumbImage} alt={p.title} icon={p.icon} />
              </div>
              <div className="bp-recent-body">
                <div className="bp-recent-cat" style={{ color: p.accent }}>
                  {p.category}
                </div>
                <div className="bp-recent-title">{p.title}</div>
                <div className="bp-recent-date">{p.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Tags cloud ── */}
      <div className="bp-sidebar-widget">
        <div className="bp-widget-header">
          <div className="bp-widget-title">Tags</div>
        </div>
        <div className="bp-tags-cloud">
          {allTags.map((t) => (
            <span key={t} className="bp-cloud-tag">{t}</span>
          ))}
        </div>
      </div>

      {/* ── CTA widget ── */}
      <div className="bp-cta-widget">
        <div className="bp-cta-widget-icon"></div>
        <div className="bp-cta-widget-heading">Ready to Grow?</div>
        <div className="bp-cta-widget-sub">
          Tell us about your brand. We'll build your next case study together.
        </div>
        <a href="#contact" className="bp-cta-widget-btn">
          Start a Project →
        </a>
      </div>

    </aside>
  );
}