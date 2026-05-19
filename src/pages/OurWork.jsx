import { useState } from "react";

// ─── Styles ───────────────────────────────────────────────────────────────────
import "../styles/OurWork.css";

// ─── Data ─────────────────────────────────────────────────────────────────────
import blogPosts from "../data/blogPosts";

// ─── Components ───────────────────────────────────────────────────────────────
import BlogPageHeader  from "../components/blog/BlogPageHeader";
import BlogFilterBar   from "../components/blog/BlogFilterBar";
import BlogCard        from "../components/blog/BlogCard";
import BlogDetail      from "../components/blog/BlogDetail";
import Sidebar         from "../components/blog/Sidebar";
// import LogoMarquee     from "../components/blog/LogoMarquee";

// ─── OurWork (Blog page) ─────────────────────────────────────────────────────

export default function OurWork() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  // Filtered list for the grid
  const filtered =
    activeFilter === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeFilter);

  // Navigate back from detail — optionally jump directly to a related post
  const handleDetailBack = (relatedPost) => {
    if (relatedPost && typeof relatedPost === "object") {
      setSelectedPost(relatedPost);
    } else {
      setSelectedPost(null);
    }
  };

  // Clicking a sidebar category resets to listing + applies filter
  const handleCategoryChange = (cat) => {
    setActiveFilter(cat);
    setSelectedPost(null);
  };

  return (
    <div className="bp-root">

      {/* ── Page header (breadcrumb + title) ── */}
      <BlogPageHeader
        selectedPost={selectedPost}
        onBlogClick={() => setSelectedPost(null)}
      />

      {/* ── Filter bar — only visible in listing view ── */}
      {!selectedPost && (
        <BlogFilterBar
          activeFilter={activeFilter}
          onChange={setActiveFilter}
        />
      )}

      {/* ── Two-column layout: content + sidebar ── */}
      <div className="bp-layout">

        {/* Main column */}
        <div className="bp-main-col">
          {selectedPost ? (
            /* Full article view */
            <BlogDetail
              post={selectedPost}
              onBack={handleDetailBack}
              allPosts={blogPosts}
            />
          ) : (
            /* Card grid */
            <div className="bp-grid">
              {filtered.map((post, i) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={i}
                  onRead={setSelectedPost}
                />
              ))}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <Sidebar
          posts={blogPosts}
          activeCategory={activeFilter}
          onCategoryChange={handleCategoryChange}
          onSelectPost={setSelectedPost}
        />
      </div>

      {/* ── Logo marquee (always visible below the grid/detail) ── */}
      {/* <LogoMarquee /> */}

    </div>
  );
}