import Reveal from "./Reveal";

const PROJECTS = [
  {
    cover: "Retail · Recsys",
    gradient: "linear-gradient(135deg, #1F1B16 0%, #C75B3F 100%)",
    year: "2025",
    title: "Sortimento Complementar",
    desc: (
      <>
        Recommendation engine for complementary assortment at{" "}
        <strong className="font-semibold text-ink">GPA</strong> — picks
        cross-sell items for retail shelves, integrated with the store-front
        catalog.
      </>
    ),
    stack: ["Java", "Spring Boot", "Node.js", "React", "Next.js"],
    link: "Notes →",
  },
  {
    cover: "POS · Critical",
    gradient: "linear-gradient(135deg, #6BA8C0 0%, #1F1B16 100%)",
    year: "2024 — Now",
    title: "Frente de Caixa Modernization",
    desc: (
      <>
        Sustaining and evolving <strong className="font-semibold text-ink">POS systems</strong>{" "}
        serving thousands of checkouts daily at GPA. PHP backends,
        Oracle/Postgres, Linux cron routines — the unsexy work that keeps
        retail running.
      </>
    ),
    stack: ["PHP", "CodeIgniter", "Laravel", "Bash", "Oracle", "Postgres"],
    link: "Architecture →",
  },
  {
    cover: "E-commerce · Cloud",
    gradient: "linear-gradient(135deg, #D6B656 0%, #C75B3F 100%)",
    year: "2025",
    title: "Tigre on AWS",
    desc: (
      <>
        Magento + WordPress infrastructure on AWS for{" "}
        <strong className="font-semibold text-ink">Tigre</strong>. Container
        workloads, serverless edge functions, S3-backed media, Cognito auth,
        CloudFront in front of everything.
      </>
    ),
    stack: ["AWS", "Magento", "WordPress", "Vue.js", "Nuxt.js", "Docker"],
    link: "Stack →",
  },
  {
    cover: "Compliance · Tools",
    gradient: "linear-gradient(135deg, #2A2520 0%, #6BA8C0 100%)",
    year: "2023",
    title: "Nota Fiscal Corrector",
    desc: (
      <>
        Windows Forms tool to correct{" "}
        <strong className="font-semibold text-ink">fiscal documents</strong>{" "}
        across retail stores — keeps operations audit-ready at hundreds of
        locations. Old-school desktop, but battle-tested.
      </>
    ),
    stack: [".NET", "C#", "Windows Forms"],
    link: "Details →",
  },
];

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
        A selection of systems I&apos;ve shipped, sustained or helped evolve
        across retail and e-commerce. Each one taught me something new —
        usually the hard way.
      </p>

      <div className="grid grid-cols-1 gap-5.5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.title}
            className="flex flex-col overflow-hidden rounded-brand border border-rule bg-cream transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.25 hover:shadow-[0_24px_50px_-22px_rgba(26,23,20,0.25)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none"
          >
            <div
              className="relative flex h-[clamp(140px,18vw,220px)] items-end overflow-hidden p-4.5 font-mono text-[11px] tracking-[0.1em] text-cream uppercase after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]"
              style={{ background: p.gradient }}
            >
              <span className="relative z-10 rounded bg-black/35 px-2.25 py-1.25 backdrop-blur-[6px]">
                {p.cover}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5.5 pt-5.5">
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
                    className="rounded-full border border-rule bg-bg px-2.25 py-1 font-mono text-[11px] text-muted"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex gap-4.5 text-[13px] font-medium">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener"
                  className="border-b border-current pb-px text-ink transition-colors hover:text-accent"
                >
                  {p.link}
                </a>
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
