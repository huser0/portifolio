import Reveal from "./Reveal";

type Project = {
  cover: string;
  gradient: string;
  year: string;
  status: "Coming soon" | "In progress" | "Open source";
  title: string;
  desc: React.ReactNode;
  stack: string[];
  link: string;
};

const PROJECTS: Project[] = [
  {
    cover: "Web · Side project",
    gradient: "linear-gradient(135deg, #1F1B16 0%, #C75B3F 100%)",
    year: "2026",
    status: "Coming soon",
    title: "Personal Project — Placeholder",
    desc: (
      <>
        A small, opinionated side project I&apos;m building to scratch my own
        itch. More details once it stops being embarrassing — for now, this
        card holds the spot.
      </>
    ),
    stack: ["TypeScript", "React", "Next.js"],
    link: "Soon →",
  },
  {
    cover: "CLI · Tooling",
    gradient: "linear-gradient(135deg, #6BA8C0 0%, #1F1B16 100%)",
    year: "2026",
    status: "Coming soon",
    title: "Personal Project — Placeholder",
    desc: (
      <>
        A developer tool I keep wishing existed. Clean CLI, sensible defaults,
        zero telemetry. Drop-in for the workflows I run every day.
      </>
    ),
    stack: ["Node.js", "TypeScript"],
    link: "Soon →",
  },
  {
    cover: "OSS · Contribution",
    gradient: "linear-gradient(135deg, #D6B656 0%, #C75B3F 100%)",
    year: "TBD",
    status: "In progress",
    title: "Open Source — Placeholder",
    desc: (
      <>
        An open-source contribution I&apos;m actively working on. Documentation
        and a public repo will land here once the first release is shipped.
      </>
    ),
    stack: ["Open source", "TBD"],
    link: "Tracked →",
  },
  {
    cover: "Web · Study tool",
    gradient: "linear-gradient(135deg, #FF9900 0%, #232F3E 100%)",
    year: "2026",
    status: "Open source",
    title: "Study Guides Hub",
    desc: (
      <>
        Portal de guias de estudo interativos para certificações AWS e
        tecnologias como Quarkus. Navegação por módulos, progresso e
        sidebar com tópicos — tudo client-side com React e Vite.
      </>
    ),
    stack: ["React", "TypeScript", "Vite"],
    link: "hugosergio.com.br/guide/",
  },
  {
    cover: "Notes · Writing",
    gradient: "linear-gradient(135deg, #2A2520 0%, #6BA8C0 100%)",
    year: "TBD",
    status: "Coming soon",
    title: "Writing — Placeholder",
    desc: (
      <>
        Technical notes and post-mortems from the work I do day to day.
        Long-form, opinionated, and indexed by tag so future-me can actually
        find them.
      </>
    ),
    stack: ["MDX", "Notes"],
    link: "Drafts →",
  },
];

function StatusBadge({ status }: { status: Project["status"] }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-cream/90 uppercase"
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cream/80" />
      {status}
    </span>
  );
}

export default function Projects() {
  return (
    <Reveal
      as="section"
      id="projects"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,140px)]"
    >
      <div className="mb-10 flex items-center gap-4 font-mono text-[13px] tracking-[0.02em] text-muted">
        <span>— Projects</span>
        <span className="h-px flex-1 bg-rule" />
        <span className="font-serif text-muted italic">A few things worth showing</span>
      </div>

      <h2 className="mb-[clamp(40px,5vw,70px)] max-w-[22ch] font-serif text-[clamp(26px,3.6vw,44px)] leading-[1.05] font-medium tracking-[-0.02em]">
        Things I&apos;ve <em className="text-accent italic">built</em>, broken, and fixed.
      </h2>

      <p className="mt-[-30px] mb-[50px] max-w-[60ch] font-serif text-[clamp(17px,1.4vw,21px)] leading-[1.5] text-muted italic">
        A curated shelf of personal and open-source work. Client work lives
        under NDA, so the cards below are placeholders I&apos;ll swap as I
        ship new things.
      </p>

      <div className="grid grid-cols-1 gap-5.5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <article
            key={`${p.title}-${i}`}
            className="group flex flex-col overflow-hidden rounded-brand border border-rule bg-cream transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.25 hover:shadow-[0_24px_50px_-22px_rgba(26,23,20,0.25)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
          >
            <div
              className="relative flex h-[clamp(140px,18vw,220px)] items-end overflow-hidden p-4.5 after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]"
              style={{ background: p.gradient }}
            >
              <div className="relative z-10 flex w-full items-end justify-between gap-3">
                <span className="rounded bg-black/35 px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] text-cream uppercase backdrop-blur-[6px]">
                  {p.cover}
                </span>
                <StatusBadge status={p.status} />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5.5">
              <span className="font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
                {p.year}
              </span>
              <h3 className="my-1.5 font-serif text-[clamp(22px,1.9vw,26px)] leading-[1.2] font-medium tracking-[-0.015em]">
                {p.title}
              </h3>
              <p className="mb-4.5 flex-1 text-[14.5px] leading-[1.55] text-ink-soft">
                {p.desc}
              </p>
              <ul role="list" className="mb-4.5 flex flex-wrap gap-1.5">
                {p.stack.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-rule bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex items-center justify-between gap-4.5 text-[13px] font-medium">
                <span
                  aria-disabled="true"
                  className="inline-flex items-center gap-1 border-b border-transparent pb-px text-muted"
                >
                  {p.link}
                </span>
                <span className="font-mono text-[10px] tracking-[0.12em] text-muted uppercase">
                  Placeholder
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-9 text-center font-serif text-sm text-muted italic">
        More on{" "}
        <a
          href="https://github.com/huser0"
          target="_blank"
          rel="noopener"
          className="border-b border-current pb-px not-italic text-ink hover:text-accent"
        >
          GitHub
        </a>{" "}
        · Always open to showcasing something new here.
      </p>
    </Reveal>
  );
}
