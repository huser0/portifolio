"use client";

import { useEffect } from "react";

export default function SectionNavigation() {
  useEffect(() => {
    let lockedUntil = 0;
    let lastWheel = 0;
    let wheelDistance = 0;
    let gestureConsumed = false;
    const ignored = "input, textarea, select, [contenteditable], [role='dialog'], [role='slider'], [role='listbox']";

    const getIntroDestination = () => {
      const landing = document.querySelector<HTMLElement>(".landing-screen");
      const about = document.querySelector<HTMLElement>("#sobre");
      if (!landing || !about) return null;
      const bounds = landing.getBoundingClientRect();
      // Only snap out of the introduction after all of its content is visible.
      if (bounds.bottom <= 2 || bounds.bottom > window.innerHeight + 2) return null;
      return window.scrollY + about.getBoundingClientRect().top;
    };

    const navigate = (destination: number) => {
      if (performance.now() < lockedUntil) return;
      lockedUntil = performance.now() + 450;
      window.scrollTo({ top: destination, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowDown" || event.repeat || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.target instanceof Element && event.target.closest(`${ignored}, button, a, summary`)) return;
      const destination = getIntroDestination();
      if (destination === null) return;
      event.preventDefault();
      navigate(destination);
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
      const destination = getIntroDestination();
      if (event.deltaY <= 0 || destination === null) {
        wheelDistance = 0;
        gestureConsumed = false;
        return;
      }
      const now = performance.now();
      const continuingGesture = now - lastWheel < 180;
      lastWheel = now;
      if (!continuingGesture) { wheelDistance = 0; gestureConsumed = false; }
      if (now < lockedUntil || gestureConsumed) {
        event.preventDefault();
        wheelDistance = 0;
        return;
      }
      event.preventDefault();
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1);
      if (Math.sign(delta) !== Math.sign(wheelDistance)) wheelDistance = 0;
      wheelDistance += delta;
      if (Math.abs(wheelDistance) >= 40) {
        gestureConsumed = true;
        navigate(destination);
        wheelDistance = 0;
      }
    };

    const onScrollEnd = () => { lockedUntil = 0; };
    window.addEventListener("scrollend", onScrollEnd);
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      window.removeEventListener("scrollend", onScrollEnd);
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("wheel", onWheel);
    };
  }, []);

  return null;
}
