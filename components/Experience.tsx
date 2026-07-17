import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Reveal
      as="section"
      id="work"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,140px)]"
    >
      <div className="mb-10 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[13px] tracking-[0.02em] text-muted">
        <span>— Experience</span>
        <span className="h-px flex-1 basis-12 bg-rule" />
        <span className="font-serif text-muted italic">A glimpse of the journey</span>
      </div>

      <h2 className="mb-[clamp(40px,5vw,70px)] max-w-[16ch] font-serif text-[clamp(32px,5vw,64px)] leading-[1.05] font-medium tracking-[-0.02em]">
        Two companies.
        <br />
        <em className="text-accent italic">One relentless</em> craft.
      </h2>

      <ol role="list" className="flex flex-col border-t border-ink">
        {/* Kyndryl */}
        <li className="grid grid-cols-1 gap-6 border-b border-ink py-[clamp(28px,4vw,50px)] transition-colors hover:bg-accent/4 md:grid-cols-[clamp(160px,18vw,240px)_1fr] md:gap-[clamp(24px,4vw,60px)]">
          <div className="flex flex-col gap-1 pt-2">
            <span className="font-mono text-sm tracking-[0.02em] text-ink">2025</span>
            <span className="font-serif text-lg text-muted italic">— Now · 9mo</span>
            <span className="mt-1.5 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
              Remote · BR
            </span>
          </div>
          <div className="max-w-[65ch]">
            <h3 className="mb-1 font-serif text-[clamp(24px,2.6vw,34px)] font-medium tracking-[-0.01em]">
              Associate Technical Support
            </h3>
            <p className="mb-4 text-sm text-muted">
              Kyndryl <span className="mx-1.5 text-accent">·</span> Full-time
            </p>
            <p className="mb-4 max-w-[60ch] text-[clamp(15px,1.1vw,17px)] text-ink-soft">
              Level-2 support for enterprise clients in{" "}
              <strong className="font-semibold">retail</strong> and{" "}
              <strong className="font-semibold">civil construction</strong>.
              Investigation, fixes, and operational routines — keeping critical
              systems up while quietly improving them.
            </p>

            <div className="my-4.5 flex flex-col gap-5.5 rounded-2xl border border-rule bg-cream p-5">
              <div className="border-l-2 border-accent pl-4">
                <p className="mb-1 font-serif text-[19px] font-medium tracking-[-0.01em]">
                  Client <span className="font-serif font-normal text-accent italic">@</span>{" "}
                  <strong className="font-semibold">Tigre</strong>
                </p>
                <p className="mb-3 text-[13.5px] leading-[1.5] text-muted">
                  CMS &amp; e-commerce support across WordPress, Magento and modern
                  JS stacks on AWS.
                </p>
                <ul role="list" className="flex flex-wrap gap-2">
                  {[
                    "WordPress",
                    "Magento",
                    "Vue.js",
                    "Nuxt.js",
                    "JavaScript",
                    "MariaDB",
                    "MySQL",
                    "AWS EC2",
                    "S3",
                    "Lambda",
                    "ECS",
                    "API Gateway",
                    "CloudFront",
                    "Cognito",
                    "Docker",
                    "Podman",
                  ].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-rule bg-cream px-2.5 py-1.25 font-mono text-xs text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-l-2 border-accent pl-4">
                <p className="mb-1 font-serif text-[19px] font-medium tracking-[-0.01em]">
                  Client <span className="font-serif font-normal text-accent italic">@</span>{" "}
                  <strong className="font-semibold">GPA · Varejo</strong>
                </p>
                <p className="mb-3 text-[13.5px] leading-[1.5] text-muted">
                  Sustentação de sistemas críticos — frente de caixa, NF e
                  sortimento.
                </p>
                <ul role="list" className="mb-1 flex flex-col gap-2">
                  <li className="relative pl-5 text-sm leading-[1.5] text-ink-soft before:absolute before:left-0 before:top-0 before:font-serif before:text-[15px] before:text-accent before:content-['→']">
                    <strong className="font-serif font-semibold text-ink italic">
                      Frente de Caixa
                    </strong>{" "}
                    — PHP, CodeIgniter, Laravel, JavaScript, Bash, Docker/Podman,
                    Linux, Crontab, Oracle, Postgres, MySQL
                  </li>
                  <li className="relative pl-5 text-sm leading-[1.5] text-ink-soft before:absolute before:left-0 before:top-0 before:font-serif before:text-[15px] before:text-accent before:content-['→']">
                    <strong className="font-serif font-semibold text-ink italic">
                      Correção de NF
                    </strong>{" "}
                    — .NET, Windows Forms
                  </li>
                  <li className="relative pl-5 text-sm leading-[1.5] text-ink-soft before:absolute before:left-0 before:top-0 before:font-serif before:text-[15px] before:text-accent before:content-['→']">
                    <strong className="font-serif font-semibold text-ink italic">
                      Sortimento Complementar
                    </strong>{" "}
                    — Java, Spring Boot, JavaScript, Node, React, Next.js
                  </li>
                </ul>
                <p className="my-3 font-serif text-[13px] text-muted italic">
                  Atendimento N2 · rotinas · Natural Adabas · TWS · PCOM
                </p>
                <ul role="list" className="flex flex-wrap gap-2">
                  {[
                    "PHP",
                    "Laravel",
                    "CodeIgniter",
                    "Java",
                    "Spring Boot",
                    "React",
                    "Next.js",
                    ".NET",
                    "Windows Forms",
                    "Oracle",
                    "Postgres",
                    "MySQL",
                    "Linux",
                    "Bash",
                    "Docker",
                  ].map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-rule bg-cream px-2.5 py-1.25 font-mono text-xs text-ink-soft"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </li>

        {/* IBM Application Developer */}
        <li className="grid grid-cols-1 gap-6 border-b border-ink py-[clamp(28px,4vw,50px)] transition-colors hover:bg-accent/4 md:grid-cols-[clamp(160px,18vw,240px)_1fr] md:gap-[clamp(24px,4vw,60px)]">
          <div className="flex flex-col gap-1 pt-2">
            <span className="font-mono text-sm tracking-[0.02em] text-ink">IBM</span>
            <span className="font-serif text-lg text-muted italic">2023 — 2025 · 2y 4mo</span>
            <span className="mt-1.5 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
              São Paulo · Remote
            </span>
          </div>
          <div className="max-w-[65ch]">
            <h3 className="mb-1 font-serif text-[clamp(24px,2.6vw,34px)] font-medium tracking-[-0.01em]">
              Application Developer
            </h3>
            <p className="mb-4 text-sm text-muted">
              IBM <span className="mx-1.5 text-accent">·</span> Full-time ·
              GPA (Grupo Pão de Açúcar)
            </p>
            <p className="mb-4 max-w-[60ch] text-[clamp(15px,1.1vw,17px)] text-ink-soft">
              Application support, data flow analysis, operational support and
              development of fixes for critical{" "}
              <strong className="font-semibold">retail</strong> systems.
            </p>
            <ul role="list" className="my-4 flex flex-col gap-2">
              {[
                <>
                  Level-2 support for{" "}
                  <strong className="font-semibold">
                    offers, promotions and pricing
                  </strong>{" "}
                  — root cause analysis and corrective implementations.
                </>,
                "Developed and shipped fixes for system failures, ensuring business continuity.",
                <>
                  Monitored and executed <strong className="font-semibold">mainframe (z/OS)</strong> and
                  integrated system routines.
                </>,
                <>
                  Maintained and administered <strong className="font-semibold">Linux servers</strong> hosting
                  critical applications.
                </>,
                <>
                  Analyzed and processed large datasets using{" "}
                  <strong className="font-semibold">SQL on Oracle &amp; PostgreSQL</strong>.
                </>,
                "Resolved integration issues between internal and external systems.",
                <>
                  On-call shifts for critical operations;{" "}
                  <strong className="font-semibold">on-site support for Black Friday</strong>.
                </>,
                "Monitoring with GKE Logging, Elasticsearch, Kibana; testing with Postman.",
                "Cross-functional collaboration for continuous process and system improvements.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="relative pl-4.5 text-[14.5px] leading-[1.55] text-ink-soft before:absolute before:top-2.25 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
                >
                  {text}
                </li>
              ))}
            </ul>
            <ul role="list" className="flex flex-wrap gap-2">
              {[
                "SQL",
                "Oracle",
                "PostgreSQL",
                "z/OS",
                "Linux",
                "Shell Script",
                "Java",
                "Python",
                "PHP",
                "GCP",
                "GKE",
                "Docker",
                "Elasticsearch",
                "Kibana",
                "Postman",
                "Azure DevOps",
                "ServiceNow",
                "Spring",
              ].map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-rule bg-cream px-2.5 py-1.25 font-mono text-xs text-ink-soft"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </li>

        {/* IBM Internship */}
        <li className="grid grid-cols-1 gap-6 border-b border-ink py-[clamp(28px,4vw,50px)] transition-colors hover:bg-accent/4 md:grid-cols-[clamp(160px,18vw,240px)_1fr] md:gap-[clamp(24px,4vw,60px)]">
          <div className="flex flex-col gap-1 pt-2">
            <span className="font-mono text-sm tracking-[0.02em] text-ink">IBM</span>
            <span className="font-serif text-lg text-muted italic">2023 · 7mo</span>
            <span className="mt-1.5 font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
              Internship
            </span>
          </div>
          <div className="max-w-[65ch]">
            <h3 className="mb-1 font-serif text-[clamp(24px,2.6vw,34px)] font-medium tracking-[-0.01em]">
              Early Associate — Software Developer
            </h3>
            <p className="mb-4 text-sm text-muted">
              IBM <span className="mx-1.5 text-accent">·</span> Estágio · GPA
            </p>
            <p className="mb-4 max-w-[60ch] text-[clamp(15px,1.1vw,17px)] text-ink-soft">
              Retail sector at <strong className="font-semibold">GPA</strong> —
              pricing, offer and move-to-cloud team.
            </p>
            <ul role="list" className="my-4 flex flex-col gap-2">
              {[
                <>
                  Agile methodologies: <strong className="font-semibold">Scrum &amp; Kanban</strong>.
                </>,
                "Java, Spring Boot, z/OS, ServiceNow.",
                "Testes integrados (integration testing).",
                "Azure DevOps pipelines & boards.",
              ].map((text, i) => (
                <li
                  key={i}
                  className="relative pl-4.5 text-[14.5px] leading-[1.55] text-ink-soft before:absolute before:top-2.25 before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
                >
                  {text}
                </li>
              ))}
            </ul>
            <ul role="list" className="flex flex-wrap gap-2">
              {["Java", "Spring Boot", "z/OS", "ServiceNow", "Azure DevOps", "Scrum", "Kanban"].map(
                (tag) => (
                  <li
                    key={tag}
                    className="rounded-full border border-rule bg-cream px-2.5 py-1.25 font-mono text-xs text-ink-soft"
                  >
                    {tag}
                  </li>
                )
              )}
            </ul>
          </div>
        </li>
      </ol>
    </Reveal>
  );
}
