/**
 * BlogPageHeader
 * Props:
 *   selectedPost {object|null} — when non-null, shows detail breadcrumb + title
 *   onBlogClick  {function}    — navigates back to listing from breadcrumb
 */
export default function BlogPageHeader({ selectedPost, onBlogClick }) {
  return (
    <div className="bp-page-header">
      <div className="bp-page-header-inner">

        {/* Breadcrumb */}
        <div className="bp-breadcrumb">
          <a href="/">Home</a>
          <span className="bp-breadcrumb-sep">›</span>

          {selectedPost ? (
            <>
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); onBlogClick(); }}
              >
                Blog
              </a>
              <span className="bp-breadcrumb-sep">›</span>
              <span className="bp-breadcrumb-current">{selectedPost.category}</span>
            </>
          ) : (
            <span className="bp-breadcrumb-current">Blog</span>
          )}
        </div>

        {/* Heading */}
        {selectedPost ? (
          <>
            <h1 className="bp-page-title">{selectedPost.category}</h1>
            <p className="bp-page-sub">Case study — {selectedPost.title}</p>
          </>
        ) : (
          <>
            <h1 className="bp-page-title">Our Case Studies</h1>
            <p className="bp-page-sub">
              Real clients. Measurable results. Across 7 industries — here's the full story
              of what we did and what happened next.
            </p>
          </>
        )}

      </div>
    </div>
  );
}