"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const portraitRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const portrait = portraitRef.current;
    if (
      !portrait ||
      !window.matchMedia("(min-width: 781px)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;

    let raf: number | null = null;
    let targetX = 0,
      targetY = 0,
      curX = 0,
      curY = 0;

    const loop = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      const baseRotate = 1.5;
      portrait.style.transform = `rotate(${baseRotate + curX}deg) translate(${
        curX * 0.5
      }px, ${curY * 0.5}px)`;
      if (Math.abs(targetX - curX) > 0.05 || Math.abs(targetY - curY) > 0.05) {
        raf = requestAnimationFrame(loop);
      } else {
        raf = null;
      }
    };

    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth,
        h = window.innerHeight;
      targetX = (e.clientX / w - 0.5) * 6;
      targetY = (e.clientY / h - 0.5) * 6;
      if (!raf) raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      aria-label="Introduction"
      className="relative mx-auto max-w-[1280px] px-[clamp(20px,4vw,56px)] pt-[clamp(40px,6vw,90px)]"
    >
      <div className="mb-9 flex flex-wrap items-center gap-2 text-[13px] text-muted">
        <span className="inline-block h-3 w-3 rounded-full bg-[#F2A6A2]" />
        <span className="inline-block h-3 w-3 rounded-full bg-[#A6D4C0]" />
        <span className="inline-block h-3 w-3 rounded-full bg-accent-2" />
        <span className="inline-block h-3 w-3 rounded-full bg-ink" />
        <span className="ml-2.5 font-mono text-xs tracking-[0.02em]">
          Open to opportunities · Available for hire
        </span>
      </div>

      <h1 className="max-w-[14ch] font-serif text-[clamp(40px,7.5vw,110px)] leading-[0.98] font-medium tracking-[-0.02em] text-ink">
        <span className="hero-line hero-line-1">
          I&apos;m a <em className="hero-em italic">software engineer</em>
        </span>
        <span className="hero-line hero-line-2">
          who builds <em className="hero-em italic">reliable</em>
        </span>
        <span className="hero-line hero-line-3">
          and <em className="hero-em italic">user-friendly</em> systems
        </span>
        <span className="hero-line hero-line-4">
          that <span className="hero-highlight">teams trust</span>.
        </span>
      </h1>

      <div className="mt-[clamp(50px,8vw,110px)] grid grid-cols-1 items-end gap-[clamp(30px,5vw,80px)] pb-10 md:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="max-w-[52ch] text-[clamp(15px,1.2vw,18px)] text-ink-soft">
            4+ years turning ideas into production-grade software. I work across
            the full stack — from cloud architecture to pixel-perfect UI — for
            clients in <strong>retail</strong> and{" "}
            <strong>civil construction</strong>.
          </p>
          <p className="mt-3.5 text-sm text-muted">
            Find me on{" "}
            <a
              href="https://www.linkedin.com/in/hugosergio1/"
              target="_blank"
              rel="noopener"
              className="border-b border-current pb-px hover:text-accent"
            >
              LinkedIn
            </a>
            ,{" "}
            <a
              href="https://github.com/huser0"
              target="_blank"
              rel="noopener"
              className="border-b border-current pb-px hover:text-accent"
            >
              GitHub
            </a>
            , or just{" "}
            <a
              href="mailto:devhuser@gmail.com"
              className="border-b border-current pb-px hover:text-accent"
            >
              send me an email
            </a>
            .
          </p>
        </div>

        <figure
          ref={portraitRef}
          className="relative mx-auto w-full max-w-[260px] overflow-hidden rounded-brand bg-bg-soft shadow-[0_1px_0_rgba(0,0,0,0.04),0_20px_50px_-20px_rgba(26,23,20,0.25)] transition-transform duration-400 ease-[cubic-bezier(.2,.7,.2,1)] sm:max-w-[300px] md:mx-0 md:ml-auto md:max-w-[320px] md:rotate-[1.5deg] md:hover:rotate-0 md:hover:scale-[1.02] motion-reduce:transform-none motion-reduce:transition-none xl:max-w-[380px]"
        >
          <Image
            src="/assets/avatar.svg"
            alt="Stylized portrait of Hugo Sergio"
            width={320}
            height={320}
            className="h-auto w-full"
          />
          <figcaption className="flex justify-between border-t border-rule bg-cream px-3.5 py-2.5 font-mono text-xs text-ink-soft">
            Hugo · <span className="text-accent">since 2021</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
