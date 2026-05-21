import { allCategories } from "../../data/blogPosts";

/**
 * BlogFilterBar
 * Props:
 *   activeFilter {string} — currently active category ("All" or a category name)
 *   onChange     {function} — called with the new category string
 */
export default function BlogFilterBar({ activeFilter, onChange }) {
  return (
    <div className="bp-filter-bar">
      <div className="bp-filters">
        {allCategories.map((cat) => (
          <button
            key={cat}
            className={`bp-filter-btn ${activeFilter === cat ? "bp-filter-btn--active" : ""}`}
            onClick={() => onChange(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}