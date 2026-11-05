import ArrowIcon from "./ArrowIcon";

type Project = {
  cover: string;
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
    year: "2026",
    title: "Kafka Demo",
    desc: "Demonstração de mensageria com duas aplicações Spring Boot: uma publica mensagens recebidas por HTTP e outra as consome pelo Apache Kafka. A infraestrutura de Kafka e ZooKeeper roda com Docker Compose.",
    stack: ["Java", "Spring Boot", "Apache Kafka", "Docker Compose"],
    repository: "https://github.com/huser0/kafka-demo",
  },
  {
    cover: "CRM · Automation",
    year: "2026",
    title: "Salesforce Picklist Automation",
    desc: "Automação em Python para habilitar valores de picklists em Record Types do Salesforce a partir de uma matriz Excel. Inclui simulação, aplicação via Salesforce CLI e planilha de retorno com os resultados.",
    stack: ["Python", "Salesforce CLI", "openpyxl", "Excel"],
    repository: "https://github.com/huser0/salesforce_automation_picklist",
  },
  {
    cover: "Web & Mobile · Finance",
    year: "2026",
    title: "Controle de Notas",
    desc: "Aplicativo web e mobile para organizar cupons fiscais, acompanhar gastos e consultar o histórico de preços. Inclui leitura de notas por OCR, gráficos de análise e exportação para Excel.",
    stack: ["React", "React Native", "Expo", "Tesseract.js"],
    repository: "https://github.com/huser0/controle-notas",
    website: "https://controle-notas-nine.vercel.app",
  },
  {
    cover: "Data · Visualization",
    year: "2026",
    title: "Chronos",
    desc: "Mapeamento e visualização de dependências entre rotinas batch como grafo dirigido. Transforma relações de um CSV em uma visualização interativa para explorar cadeias de execução.",
    stack: ["Python", "FastAPI", "PostgreSQL", "D3.js"],
    repository: "https://github.com/huser0/Chronos",
  },
  {
    cover: "Desktop · Database tool",
    year: "2026",
    title: "Queryboard",
    desc: "Aplicativo desktop leve, multi-banco e somente leitura para executar consultas SELECT e interpretar os resultados automaticamente. Permite salvar consultas e executar várias delas em paralelo.",
    stack: ["Rust", "Tauri", "PostgreSQL", "MySQL"],
    repository: "https://github.com/huser0/queryboard",
  },
  {
    cover: "API · Study project",
    year: "2026",
    title: "Task Manager API",
    desc: "API REST para gerenciamento de tarefas com Spring Boot e Spring Data REST/JPA. Inclui criação, busca e listagem paginada de tarefas, respostas HAL e documentação Swagger/OpenAPI.",
    stack: ["Java", "Spring Boot", "Spring Data JPA", "H2"],
    repository: "https://github.com/huser0/task-manager-api",
  },
  {
    cover: "Web · Study tool",
    year: "2026",
    title: "Study Guides Hub",
    desc: "Catálogo central de guias de estudo interativos, com acesso ao guia de migração de Spring para Quarkus e ao guia de Amazon S3 para a certificação AWS Solutions Architect.",
    stack: ["React", "JavaScript", "Vite"],
    repository: "https://github.com/huser0/guide",
    website: "https://guide-roan-five.vercel.app",
  },
  {
    cover: "AI · Movie recommendations",
    year: "2025",
    title: "Chat with LangChain4j + Ollama",
    desc: "Aplicação de recomendação de filmes com Java, Spring Boot, LangChain4j e Ollama, configurada para execução local.",
    stack: ["Java", "Spring Boot", "LangChain4j", "Ollama"],
    repository: "https://github.com/huser0/chat_with_langchain4j_ollama",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="portfolio-section dark" aria-labelledby="projects-heading">
      <p className="section-label">// Selected work</p>
      <div className="portfolio-heading">
        <h2 id="projects-heading">Projects.</h2>
        <span>{String(PROJECTS.length).padStart(2, "0")} projects</span>
      </div>
      <div>
        {PROJECTS.map((project, index) => (
          <article key={project.repository} className="project-row">
            <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <p className="project-meta">{project.cover} · {project.year}</p>
              <h3>{project.title}</h3>
              <ul className="technology-list" aria-label={`Technologies used in ${project.title}`}>
                {project.stack.map(tag => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
            <div>
              <p className="project-description" lang="pt-BR">{project.desc}</p>
              <div className="project-links">
                <a href={project.repository} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} on GitHub`}>Source code <ArrowIcon /></a>
                {project.website && <a href={project.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}>Visit site <ArrowIcon /></a>}
              </div>
            </div>
          </article>
        ))}
      </div>
      <a href="https://github.com/huser0" target="_blank" rel="noopener noreferrer" className="button repositories-link">All repositories <ArrowIcon /></a>
    </section>
  );
}
