"use client";

import { useEffect } from "react";

export default function SectionNavigation() {
  useEffect(() => {
    let lockedUntil = 0;
    let lastWheel = 0;
    let wheelDistance = 0;
    let gestureConsumed = false;
    const ignored = "input, textarea, select, [contenteditable], [role='dialog'], [role='slider'], [role='listbox']";

    const navigate = (direction: number) => {
      if (performance.now() < lockedUntil) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const stops = [0, ...Array.from(document.querySelectorAll<HTMLElement>("main > section:not(.hero)"), section =>
        Math.min(maxScroll, window.scrollY + section.getBoundingClientRect().top)
      )];
      const destination = direction > 0
        ? stops.find(top => top > window.scrollY + 24)
        : stops.reverse().find(top => top < window.scrollY - 24);
      if (destination === undefined) return;
      lockedUntil = performance.now() + 850;
      window.scrollTo({ top: destination, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowDown", "ArrowUp"].includes(event.key) || event.repeat || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.target instanceof Element && event.target.closest(`${ignored}, button, a, summary`)) return;
      event.preventDefault();
      navigate(event.key === "ArrowDown" ? 1 : -1);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey || event.shiftKey || Math.abs(event.deltaX) >= Math.abs(event.deltaY)) return;
      if (event.target instanceof Element) {
        if (event.target.closest(ignored)) return;
        // Preserve independent scroll areas such as an expanded menu or widget.
        for (let el: Element | null = event.target; el && el !== document.body; el = el.parentElement) {
          if (/(auto|scroll)/.test(getComputedStyle(el).overflowY) && el.scrollHeight > el.clientHeight) return;
        }
      }
      event.preventDefault();
      const now = performance.now();
      const continuingGesture = now - lastWheel < 180;
      lastWheel = now;
      if (!continuingGesture) { wheelDistance = 0; gestureConsumed = false; }
      if (now < lockedUntil || gestureConsumed) { wheelDistance = 0; return; }
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
      if (Math.sign(delta) !== Math.sign(wheelDistance)) wheelDistance = 0;
      wheelDistance += delta;
      if (Math.abs(wheelDistance) >= 40) {
        gestureConsumed = true;
        navigate(Math.sign(wheelDistance));
        wheelDistance = 0;
      }
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return null;
}
