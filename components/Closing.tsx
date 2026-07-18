export default function Closing() {
  return (
    <section
      id="contact"
      aria-label="Get in touch"
      className="relative mt-15 overflow-hidden bg-ink px-[clamp(20px,4vw,56px)] py-[clamp(90px,12vw,160px)] text-bg before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_at_top_right,rgba(199,91,63,0.25),transparent_60%)]"
    >
      <div className="relative mx-auto max-w-[1280px]">
        <p className="mb-5.5 font-mono text-[13px] tracking-[0.04em] text-accent-3">
          — Let&apos;s talk
        </p>
        <h2 className="mb-7 max-w-[14ch] font-serif text-[clamp(40px,6.5vw,128px)] leading-[0.98] font-medium tracking-[-0.025em]">
          Have a project, an idea,
          <br /> or a <em className="text-accent-3 italic">weird problem</em>?
        </h2>
        <p className="mb-10 max-w-[50ch] text-[clamp(15px,1.2vw,18px)] text-bg/75">
          I&apos;m always open to new opportunities, conversations, and
          collaborations. Drop a line — I read everything.
        </p>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:contato.dev.hugosergio@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-[clamp(14px,1.1vw,16px)] font-medium tracking-[0.01em] text-cream transition-all hover:-translate-y-0.5 hover:bg-accent-3 hover:text-ink sm:px-6 sm:py-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            contato.dev.hugosergio@gmail.com
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/hugosergio1/"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-bg/30 px-5 py-3.5 text-[clamp(14px,1.1vw,16px)] font-medium tracking-[0.01em] text-bg transition-all hover:-translate-y-0.5 hover:bg-bg hover:text-ink sm:px-6 sm:py-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/huser0"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full border border-bg/30 px-5 py-3.5 text-[clamp(14px,1.1vw,16px)] font-medium tracking-[0.01em] text-bg transition-all hover:-translate-y-0.5 hover:bg-bg hover:text-ink sm:px-6 sm:py-4 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
