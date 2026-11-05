import Stack from "./Stack";

export default function Expertise() {
  return (
    <section className="services dark" id="servicos" aria-labelledby="expertise-heading">
    <p className="section-label">// Expertise & Technologies</p>
    <div className="service-layout">
    <div className="service-number" aria-hidden="true">01</div>
    <div className="service-content">
    <h2 id="expertise-heading">Full Stack & Cloud</h2>
    <p className="service-description">From backend services to thoughtful interfaces and cloud infrastructure. Clean, maintainable code that solves real problems.</p>
    <div className="service-list">
    <details open><summary>Backend engineering</summary>
    <p>Java / Spring Boot, .NET, Python, and Node.js.</p></details>
    <details><summary>Frontend development</summary>
    <p>React, TypeScript, and modern JavaScript — from ideas to pixel-perfect UI.</p></details>
    <details><summary>Cloud architecture</summary>
    <p>AWS, Azure, and GCP. Infrastructure is part of the product.</p></details>
    <details><summary>Containers & systems</summary>
    <p>Docker and Linux are home — tools I work with across the stack.</p></details>
    <details><summary>Industry experience</summary>
    <p>Software and technical support for clients in retail and civil construction.</p></details>
    <details><summary>Professional background</summary>
    <p>Kyndryl · Associate Technical Support.<br />Previously IBM · Application Developer.</p></details>
    </div>

    </div></div>
    <Stack />
    </section>
  );
}
