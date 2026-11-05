"use client";
import Reveal from "./Reveal";

type Project = {
  cover: string;
  gradient: string;
  year: string;
  title: string;
  desc: string;
  stack: string[];
  repository: string;
  website?: string;
};

// Descriptions and technologies checked against public GitHub docs and source code.
// Years reflect repository creation; website URLs come from repository metadata.
const PROJECTS: Project[] = [
  {
    cover: "Messaging · Integration",
    gradient: "linear-gradient(135deg, #1F1B16 0%, #6BA8C0 100%)",
    year: "2026",
    title: "Kafka Demo",
    desc: "Demonstração de mensageria com duas aplicações Spring Boot: uma publica mensagens recebidas por HTTP e outra as consome pelo Apache Kafka. A infraestrutura de Kafka e ZooKeeper roda com Docker Compose.",
    stack: ["Java", "Spring Boot", "Apache Kafka", "Docker Compose"],
    repository: "https://github.com/huser0/kafka-demo",
  },
  {
    cover: "CRM · Automation",
    gradient: "linear-gradient(135deg, #6BA8C0 0%, #2A2520 100%)",
    year: "2026",
    title: "Salesforce Picklist Automation",
    desc: "Automação em Python para habilitar valores de picklists em Record Types do Salesforce a partir de uma matriz Excel. Inclui simulação, aplicação via Salesforce CLI e planilha de retorno com os resultados.",
    stack: ["Python", "Salesforce CLI", "openpyxl", "Excel"],
    repository: "https://github.com/huser0/salesforce_automation_picklist",
  },
  {
    cover: "Web & Mobile · Finance",
    gradient: "linear-gradient(135deg, #4C7A5A 0%, #B8863A 100%)",
    year: "2026",
    title: "Controle de Notas",
    desc: "Aplicativo web e mobile para organizar cupons fiscais, acompanhar gastos e consultar o histórico de preços. Inclui leitura de notas por OCR, gráficos de análise e exportação para Excel.",
    stack: ["React", "React Native", "Expo", "Tesseract.js"],
    repository: "https://github.com/huser0/controle-notas",
    website: "https://controle-notas-nine.vercel.app",
  },
  {
    cover: "Data · Visualization",
    gradient: "linear-gradient(135deg, #1F1B16 0%, #C75B3F 100%)",
    year: "2026",
    title: "Chronos",
    desc: "Mapeamento e visualização de dependências entre rotinas batch como grafo dirigido. Transforma relações de um CSV em uma visualização interativa para explorar cadeias de execução.",
    stack: ["Python", "FastAPI", "PostgreSQL", "D3.js"],
    repository: "https://github.com/huser0/Chronos",
  },
  {
    cover: "Desktop · Database tool",
    gradient: "linear-gradient(135deg, #6BA8C0 0%, #1F1B16 100%)",
    year: "2026",
    title: "Queryboard",
    desc: "Aplicativo desktop leve, multi-banco e somente leitura para executar consultas SELECT e interpretar os resultados automaticamente. Permite salvar consultas e executar várias delas em paralelo.",
    stack: ["Rust", "Tauri", "PostgreSQL", "MySQL"],
    repository: "https://github.com/huser0/queryboard",
  },
  {
    cover: "API · Study project",
    gradient: "linear-gradient(135deg, #D6B656 0%, #C75B3F 100%)",
    year: "2026",
    title: "Task Manager API",
    desc: "API REST para gerenciamento de tarefas com Spring Boot e Spring Data REST/JPA. Inclui criação, busca e listagem paginada de tarefas, respostas HAL e documentação Swagger/OpenAPI.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "H2"],
    repository: "https://github.com/huser0/task-manager-api",
  },
  {
    cover: "Web · Study tool",
    gradient: "linear-gradient(135deg, #FF9900 0%, #232F3E 100%)",
    year: "2026",
    title: "Study Guides Hub",
    desc: "Catálogo central de guias de estudo interativos, com acesso ao guia de migração de Spring para Quarkus e ao guia de Amazon S3 para a certificação AWS Solutions Architect.",
    stack: ["React", "JavaScript", "Vite"],
    repository: "https://github.com/huser0/guide",
    website: "https://guide-roan-five.vercel.app",
  },
  {
    cover: "AI · Movie recommendations",
    gradient: "linear-gradient(135deg, #2A2520 0%, #6BA8C0 100%)",
    year: "2025",
    title: "Chat with LangChain4j + Ollama",
    desc: "Aplicação de recomendação de filmes com Java, Spring Boot, LangChain4j e Ollama, configurada para execução local.",
    stack: ["Java", "Spring Boot", "LangChain4j", "Ollama"],
    repository: "https://github.com/huser0/chat_with_langchain4j_ollama",
  },
];

function StatusBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.12em] text-cream/90 uppercase"
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-cream/80" />
      Public repository
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
        A curated shelf of personal projects and study tools, with source code
        and documentation available on GitHub.
      </p>

      <div className="grid grid-cols-1 gap-5.5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((p) => (
          <article
            key={p.repository}
            className={`group flex flex-col overflow-hidden rounded-brand border border-rule bg-cream transition-all duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1.25 hover:shadow-[0_24px_50px_-22px_rgba(26,23,20,0.25)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none`}
          >
            <div
              className="relative flex h-[clamp(140px,18vw,220px)] items-end overflow-hidden p-4.5 after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]"
              style={{ background: p.gradient }}
            >
              <div className="relative z-10 flex w-full items-end justify-between gap-3">
                <span className="rounded bg-black/35 px-2.5 py-1 font-mono text-[11px] tracking-[0.1em] text-cream uppercase backdrop-blur-[6px]">
                  {p.cover}
                </span>
                <StatusBadge />
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
                <a
                  href={p.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${p.title} on GitHub`}
                  className="inline-flex items-center gap-1 border-b border-current pb-px text-ink hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  GitHub →
                </a>
                {p.website && (
                  <a
                    href={p.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.title}`}
                    className="inline-flex items-center gap-1 border-b border-current pb-px text-ink hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    Visit site →
                  </a>
                )}
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
