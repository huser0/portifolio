"use client";

import { useEffect, useRef, useState } from "react";

const LINKS = [
  ["#sobre", "About"],
  ["#projects", "Projects"],
  ["#work", "Experience"],
  ["#servicos", "Expertise & Tech"],
  ["#publications", "Journal"],
  ["#contato", "Contact"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!open) return;
    const modal = dialog.current;
    if (!modal) return;
    const previousOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = "hidden";
    modal.showModal();
    const desktop = matchMedia("(min-width: 801px)");
    const onResize = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", onResize);
    return () => {
      modal.close();
      document.documentElement.style.overflow = previousOverflow;
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const followLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);
    // Close the modal and release the scroll lock before following the anchor.
    requestAnimationFrame(() => {
      const section = document.querySelector<HTMLElement>(href);
      if (!section) return;
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
      section.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
      history.replaceState(null, "", href);
    });
  };

  return (
    <>
      <nav className="nav site-nav" aria-label="Main navigation">
        <a className="brand" href="#inicio"><span>© Hugo Sergio</span><span className="brand-role">Software Engineer</span></a>
        <button className="nav-toggle" type="button" aria-label="Open menu" aria-expanded={open} aria-controls="mobile-menu" aria-haspopup="dialog" onClick={() => setOpen(true)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="nav-links">
          {LINKS.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
        </div>
      </nav>
      <dialog ref={dialog} id="mobile-menu" className="mobile-menu" role="dialog" aria-label="Navigation menu" onCancel={() => setOpen(false)}>
        <div className="mobile-menu-header">
          <span className="brand"><span>© Hugo Sergio</span><span className="brand-role">Software Engineer</span></span>
          <button className="mobile-menu-close" type="button" aria-label="Close menu" onClick={() => setOpen(false)} autoFocus>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M6 18 18 6" /></svg>
          </button>
        </div>
        <nav className="mobile-menu-links" aria-label="Mobile navigation">
          {LINKS.map(([href, label], index) => (
            <a key={href} href={href} onClick={event => followLink(event, href)}>
              <span className="mobile-menu-number" aria-hidden="true">0{index + 1}</span>{label}
            </a>
          ))}
        </nav>
        <p className="mobile-menu-footer">Software Engineer · AI & Cloud</p>
      </dialog>
    </>
  );
}
