export default function About() {
  return (
    <section className="intro dark" id="sobre" aria-labelledby="sobre-label">
    <h2 className="section-label" id="sobre-label">// About</h2>
    <p className="intro-statement">4+ years <em>turning ideas into production-grade software.</em> From cloud architecture to pixel-perfect UI — for retail and civil construction.</p>
    <div className="intro-detail">
    <p>I&apos;m a <strong>Software Engineer</strong> based in Brazil, currently working at <strong>Kyndryl</strong> as <strong>Associate Technical Support</strong>, supporting clients in retail and civil construction.</p>
    <p>Before that, I spent time at <strong>IBM</strong> as an <strong>Application Developer</strong>, building software for retail customers at scale. Two big shops, one shared obsession: shipping clean, maintainable code that solves real problems.</p>
    <p>I move comfortably between backend, frontend, and cloud. Docker and Linux are home — I treat infrastructure as part of the product.</p>
    <a className="button" href="https://github.com/huser0">Explore my GitHub <span aria-hidden="true">&nbsp; ↗</span></a>
    </div>
    <dl className="stats">
    <div><dt>4+</dt><dd>Years building software</dd></div>
    <div><dt>12+</dt><dd>Technologies in daily rotation</dd></div>
    <div><dt>3</dt><dd>Cloud providers · AWS · Azure · GCP</dd></div>
    <div><dt>∞</dt><dd>Cups of coffee while debugging</dd></div></dl>
    </section>
  );
}
