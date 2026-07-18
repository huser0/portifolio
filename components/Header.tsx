"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
];

export default function Header() {
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = ["about", "work", "projects", "stack", "contact"]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!("IntersectionObserver" in window) || !sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-50% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-100 flex items-center justify-between border-b border-rule/50 bg-bg/85 px-5 py-4 backdrop-blur-[10px] backdrop-saturate-150 sm:px-7 sm:py-4.5 md:px-10 lg:px-[clamp(28px,4vw,56px)] 2xl:px-20">
        <a
          href="#top"
          aria-label="Hugo Sergio home"
          className="flex items-baseline gap-2.5 font-mono text-sm font-medium tracking-[0.04em]"
        >
          <span className="rounded-lg bg-ink px-2.5 py-1.5 font-semibold text-bg">
            .HS
          </span>
          <span className="hidden text-ink-soft sm:inline">Hugo Sergio</span>
        </a>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-4 text-[13px] font-medium md:flex md:gap-7 md:text-sm"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="tracking-[0.01em] text-ink-soft transition-colors hover:text-accent"
              style={active === item.id ? { color: "var(--color-accent)" } : undefined}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 !text-bg transition-all hover:-translate-y-0.5 hover:bg-accent hover:!text-cream motion-reduce:hover:translate-y-0"
          >
            Contact
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="relative z-1 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-rule/60 bg-bg text-ink md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </>
            )}
          </svg>
        </button>
      </header>

      {open && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          className="fixed inset-0 z-99 flex flex-col bg-bg md:hidden"
        >
          <div className="h-[68px] shrink-0 border-b border-rule/60" aria-hidden="true" />
          <div className="flex flex-1 flex-col gap-6 overflow-y-auto px-6 pt-6 pb-10">
            <ul role="list" className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <li key={item.id} className="border-b border-rule/60">
                  <a
                    href={`#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-serif text-3xl tracking-[-0.01em] text-ink"
                    style={
                      active === item.id ? { color: "var(--color-accent)" } : undefined
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[15px] font-medium !text-bg"
            >
              Contact
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </a>
            <p className="mt-auto font-mono text-xs tracking-[0.04em] text-muted">
              © {new Date().getFullYear()} Hugo Sergio
            </p>
          </div>
        </div>
      )}
    </>
  );
}
