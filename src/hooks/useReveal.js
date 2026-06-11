import { useState, useEffect } from "react";

/**
 * useReveal — fires once when the element enters the viewport.
 * Usage:
 *   const ref     = useRef(null);
 *   const visible = useReveal(ref);
 */
export default function useReveal(ref, threshold = 0.05) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, threshold]);

  return visible;
}