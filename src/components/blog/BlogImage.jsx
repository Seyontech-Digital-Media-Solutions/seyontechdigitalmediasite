function BlogImage({ src, alt, placeholderText, icon, style, className }) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt || placeholderText || "Blog image"}
        style={style}
        className={className}
      />
    );
  }

  return (
    <div className={`bp-img-placeholder ${className || ""}`} style={style}>
      <span className="bp-img-placeholder-icon">{icon || "📷"}</span>
      <span>Add Your Image Here</span>
      {placeholderText && (
        <span style={{ fontSize: 11, opacity: 0.7 }}>{placeholderText}</span>
      )}
    </div>
  );
}

export { BlogImage };
export default BlogImage;