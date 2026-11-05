
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

export default function Experience() {
  return (
    <section id="work" className="portfolio-section dark" aria-labelledby="experience-heading">
      <p className="section-label">// Experience</p>
      <div className="portfolio-heading"><h2 id="experience-heading">A glimpse of the journey.</h2></div>
      {ROLES.map(role => (
        <article className="experience-row" key={`${role.company}-${role.title}`}>
          <div className="experience-meta">
            <strong>{role.year}</strong>
            <span>{role.period}</span>
            <span>{role.location}</span>
          </div>
          <div>
            <p className="project-meta">{role.company} · {role.type}</p>
            <h3>{role.title}</h3>
            <p className="project-description">{role.summary}</p>
            <ul className="experience-details">{role.bullets.map(text => <li key={text}>{text}</li>)}</ul>
            <ul className="technology-list">{role.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </div>
        </article>
      ))}
    </section>
  );
}
