import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">


    <Image className="portrait" src="/assets/portrait-v14.png" alt="Black and white portrait of Hugo Sergio, with his back turned and face in profile" width={927} height={1697} sizes="(max-width: 600px) 360px, 50vw" loading="eager" fetchPriority="high" />

    <div className="hero-title title-back" aria-hidden="true"><span>Hugo S</span>er<span>gio</span></div>
    <h1 className="hero-title title-front" aria-label="Hugo Sergio">Hugo S<span className="behind-portrait" aria-hidden="true">er</span>gio</h1>
    <div className="hero-bottom">
    <div className="hero-shortcuts"><a href="https://www.linkedin.com/in/hugosergio1/"><span aria-hidden="true">↗</span> LinkedIn</a><a href="https://github.com/huser0"><span aria-hidden="true">↗</span> GitHub</a><a href="mailto:contato.dev.hugosergio@gmail.com"><span aria-hidden="true">↗</span> Email me</a></div>
    <p className="role">// Software Engineer<br />AI & Cloud</p></div>
    </section>
  );
}
