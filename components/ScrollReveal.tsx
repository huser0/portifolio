"use client";

import { useEffect } from "react";

/** Progressive enhancement: content stays readable without JavaScript or motion. */
export default function ScrollReveal() {
  useEffect(() => {
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    if (!("IntersectionObserver" in window)) return;
    const animations = new Map<Element, Animation>();
    const elements = Array.from(document.querySelectorAll<HTMLElement>(
      "main > section > .section-label, .intro-statement, .intro-detail, .stats, " +
      ".portfolio-heading, .project-card, .experience-row, .service-content > h2, " +
      ".service-description, .service-list > details, .toolbox-grid > *, " +
      ".publications-heading, .publication, .contact > *"
    ));

    const observer = new IntersectionObserver(entries => {
      let stagger = 0;
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        if (motion.matches || entry.target.contains(document.activeElement)) continue;
        const animation = entry.target.animate([
          { opacity: 0, transform: "translateY(20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ], {
          duration: 1100,
          delay: Math.min(stagger++ * 140, 420),
          easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
          fill: "backwards",
        });
        animations.set(entry.target, animation);
        animation.onfinish = () => animations.delete(entry.target);
      }
    }, { threshold: 0 });

    // Preserve the initial viewport and restored scroll position without a flash.
    for (const element of elements) {
      const bounds = element.getBoundingClientRect();
      if (bounds.top >= window.innerHeight) observer.observe(element);
    }
    const cancelMotion = () => {
      if (!motion.matches) return;
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const revealFocused = (event: FocusEvent) => {
      if (!(event.target instanceof Element)) return;
      for (const element of elements) {
        if (!element.contains(event.target)) continue;
        observer.unobserve(element);
        animations.get(element)?.cancel();
        animations.delete(element);
      }
    };
    motion.addEventListener("change", cancelMotion);
    document.addEventListener("focusin", revealFocused);
    return () => {
      observer.disconnect();
      animations.forEach(animation => animation.cancel());
      motion.removeEventListener("change", cancelMotion);
      document.removeEventListener("focusin", revealFocused);
    };
  }, []);

  return null;
}
