"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav site-nav" aria-label="Main navigation" onKeyDown={event => {
      if (event.key === "Escape") {
        setOpen(false);
        event.currentTarget.querySelector<HTMLButtonElement>("button")?.focus();
      }
    }}>
      <a className="brand" href="#inicio">© Hugo Sergio<br />Software Engineer</a>
      <button className="nav-toggle" type="button" aria-expanded={open} aria-controls="navigation-links" onClick={() => setOpen(!open)}>
        {open ? "Close −" : "Menu +"}
      </button>
      <div id="navigation-links" className={`nav-links${open ? " is-open" : ""}`} onClick={() => setOpen(false)}>
        <a href="#sobre">About</a>
        <a href="#projects">Projects</a>
        <a href="#work">Experience</a>
        <a href="#servicos">Expertise & Tech</a>
        <a href="#contato">Contact</a>
      </div>
    </nav>
  );
}
