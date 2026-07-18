import Reveal from "./Reveal";

type Role = {
  year: string;
  period: string;
  location: string;
  company: string;
  type: string;
  title: string;
  summary: string;
  bullets: string[];
  tags: string[];
};

const ROLES: Role[] = [
  {
    year: "2025",
    period: "Now · 9mo",
    location: "Remote · BR",
    company: "Kyndryl",
    type: "Full-time",
    title: "Associate Technical Support",
    summary:
      "Level-2 support for enterprise clients in retail and civil construction. Investigation, fixes, and operational routines — keeping critical systems up while quietly improving them.",
    bullets: [
      "CMS & e-commerce support across WordPress, Magento and modern JS stacks on AWS for client @ Tigre.",
      "Sustained critical retail systems at GPA — POS checkouts, fiscal document correction (NF), and a complementary-assortment recommendation service.",
      "Daily routines on Linux servers: cron, bash, and container workloads with Docker/Podman across AWS and on-prem.",
    ],
    tags: [
      "WordPress",
      "Magento",
      "Nuxt.js",
      ".NET",
      "Java",
      "Spring Boot",
      "React",
      "Next.js",
      "AWS",
      "Docker",
      "Oracle",
      "MariaDB",
      "Linux",
    ],
  },
  {
    year: "IBM",
    period: "2023 — 2025 · 2y 4mo",
    location: "São Paulo · Remote",
    company: "IBM",
    type: "Full-time · GPA",
    title: "Application Developer",
    summary:
      "Application support, data flow analysis, and development of fixes for critical retail systems at GPA (Grupo Pão de Açúcar).",
    bullets: [
      "Level-2 support for offers, promotions and pricing — root cause analysis and corrective implementations.",
      "Developed and shipped fixes for system failures, ensuring business continuity during peak operations.",
      "Maintained and administered Linux servers hosting critical applications; monitored and executed mainframe (z/OS) routines.",
      "On-call shifts for critical operations, including on-site support for Black Friday.",
    ],
    tags: [
      "Java",
      "SQL",
      "Oracle",
      "PostgreSQL",
      "Linux",
      "GCP",
      "Docker",
      "Elasticsearch",
    ],
  },
  {
    year: "IBM",
    period: "2023 · 7mo",
    location: "Internship",
    company: "IBM",
    type: "Internship · GPA",
    title: "Early Associate — Software Developer",
    summary:
      "Retail sector at GPA — pricing, offer and move-to-cloud team. First steps into production engineering.",
    bullets: [
      "Worked inside the Scrum & Kanban rituals on a cross-functional squad.",
      "Built features in Java + Spring Boot and supported legacy z/OS systems through ServiceNow.",
      "Authored integration tests and managed CI/CD pipelines through Azure DevOps.",
    ],
    tags: [
      "Java",
      "Spring Boot",
      "z/OS",
      "ServiceNow",
      "Azure DevOps",
      "Scrum",
    ],
  },
];

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-full border border-rule bg-cream px-2.5 py-1 font-mono text-[11px] tracking-[0.02em] text-ink-soft">
      {children}
    </li>
  );
}

function Meta({ role }: { role: Role }) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="font-mono text-sm tracking-[0.02em] text-ink">
        {role.year}
      </span>
      <span className="font-serif text-base text-muted italic">
        {role.period}
      </span>
      <span className="font-mono text-[11px] tracking-[0.06em] text-muted uppercase">
        {role.location}
      </span>
    </div>
  );
}

function RoleBlock({ role, isLast }: { role: Role; isLast: boolean }) {
  return (
    <article
      className={`grid grid-cols-1 gap-5 py-[clamp(36px,5vw,64px)] md:grid-cols-[clamp(170px,20vw,240px)_1fr] md:gap-x-[clamp(28px,4vw,72px)] md:gap-y-0 ${
        isLast ? "" : "border-b border-rule"
      }`}
    >
      <Meta role={role} />
      <div className="min-w-0 max-w-[68ch]">
        <div className="mb-4 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-serif text-[clamp(24px,2.6vw,34px)] font-medium tracking-[-0.01em]">
            {role.title}
          </h3>
          <span className="font-mono text-xs tracking-[0.04em] text-muted">
            {role.company}
            <span className="mx-2 text-accent">·</span>
            {role.type}
          </span>
        </div>

        <p className="mb-5 text-[clamp(15px,1.1vw,17px)] leading-[1.55] text-ink-soft">
          {role.summary}
        </p>

        <ul role="list" className="mb-6 flex flex-col gap-2">
          {role.bullets.map((text, i) => (
            <li
              key={i}
              className="relative pl-4.5 text-[14.5px] leading-[1.6] text-ink-soft before:absolute before:top-[10px] before:left-0 before:h-1.5 before:w-1.5 before:rounded-full before:bg-accent before:content-['']"
            >
              {text}
            </li>
          ))}
        </ul>

        <ul role="list" className="flex flex-wrap gap-1.5">
          {role.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
      </div>
    </article>
  );
}

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

      <div className="border-t border-ink">
        {ROLES.map((role, idx) => (
          <RoleBlock
            key={`${role.company}-${role.title}`}
            role={role}
            isLast={idx === ROLES.length - 1}
          />
        ))}
      </div>
    </Reveal>
  );
}
