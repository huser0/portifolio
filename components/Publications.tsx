import Image from "next/image";
import ArrowIcon from "./ArrowIcon";

// Curated posts: add verified titles, summaries and local covers here.
// This list is intentionally independent of LinkedIn authentication or embeds.
const PUBLICATIONS = [
  {
    url: "https://lnkd.in/p/dZ2ufiJb",
    category: "Carreira · Bastidores",
    title: "Minha jornada na IBM: um ciclo de aprendizado",
    summary: "Do estágio em Salesforce à atuação no varejo com o GPA: uma reflexão sobre três anos de colaboração, desafios e crescimento profissional.",
    image: "/assets/linkedin-ibm.jpg",
    imageWidth: 1170,
    imageHeight: 1425,
    imageFit: "cover" as const,
    imageAlt: "Apresentação para uma turma em uma sala de treinamento, em registro compartilhado na publicação sobre a IBM.",
  },
  {
    url: "https://lnkd.in/p/dQBSWVAG",
    category: "Tecnologia · Docker",
    title: "Docker sem medo: primeiros passos com containers",
    summary: "Uma introdução descomplicada aos containers, com analogias para entender o Docker e uma indicação do badge Docker Essentials da IBM para começar a aprender.",
    image: "/assets/linkedin-docker.jpg",
    imageWidth: 352,
    imageHeight: 352,
    imageFit: "contain" as const,
    imageAlt: "Badge Docker Essentials da IBM Developer Skills Network, com o símbolo do Docker ao centro.",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="publications-section dark" aria-labelledby="publications-heading">
      <p className="section-label">// Beyond the code</p>
      <div className="publications-heading">
        <h2 id="publications-heading">Journal <span>/ Recently</span></h2>
        <a href="https://www.linkedin.com/in/hugosergio1/recent-activity/all/" target="_blank" rel="noopener noreferrer">
          All posts <ArrowIcon />
        </a>
      </div>
      <div className="publications-grid">
        {PUBLICATIONS.map(post => (
          <article className="publication" key={post.url} lang="pt-BR">
            <a className="publication-link" href={post.url} target="_blank" rel="noopener noreferrer">
              <div className="publication-cover">
                <Image src={post.image} alt={post.imageAlt} width={post.imageWidth} height={post.imageHeight} style={{ objectFit: post.imageFit }} sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />
                <span className="publication-arrow" aria-hidden="true"><ArrowIcon /></span>
              </div>
              <p className="publication-category">{post.category}</p>
              <h3>{post.title}</h3>
              <p className="publication-summary">{post.summary}</p>
              <p className="publication-source">Hugo Sergio <span>·</span> Ler no LinkedIn <ArrowIcon /></p>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
