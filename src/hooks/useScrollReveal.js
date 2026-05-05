import { useEffect, useRef } from "react";

function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const selector = options.selector;
    const targets = selector
      ? Array.from(element.querySelectorAll(selector))
      : [element];

    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("reveal--visible");
          observerInstance.unobserve(entry.target);
        });
      },
      {
        threshold: options.threshold ?? 0.12,
        rootMargin: options.rootMargin ?? "0px 0px -50px 0px",
      }
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [options.selector, options.threshold, options.rootMargin]);

  return ref;
}

export default useScrollReveal;
