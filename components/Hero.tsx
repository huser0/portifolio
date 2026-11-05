import ArrowIcon from "./ArrowIcon";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-label="Introduction">


    <Image className="portrait" src="/assets/portrait-v14.png" alt="Black and white portrait of Hugo Sergio, with his back turned and face in profile" width={927} height={1697} sizes="(max-width: 600px) 360px, 50vw" loading="eager" fetchPriority="high" />

    <div className="hero-title title-back" aria-hidden="true"><span>Hugo S</span>er<span>gio</span></div>
    <h1 className="hero-title title-front" aria-label="Hugo Sergio">Hugo S<span className="behind-portrait" aria-hidden="true">er</span>gio</h1>
    <div className="hero-bottom">
    <div className="hero-shortcuts"><a href="https://www.linkedin.com/in/hugosergio1/"><ArrowIcon /> LinkedIn</a><a href="https://github.com/huser0"><ArrowIcon /> GitHub</a><a href="mailto:contato.dev.hugosergio@gmail.com"><ArrowIcon /> Email me</a></div>
    <p className="role">// Software Engineer<br />AI & Cloud</p></div>
    <div className="scroll-hint" role="img" aria-label="Scroll down to explore">
      <svg width="22" height="34" viewBox="0 0 22 34" fill="none" aria-hidden="true">
        <rect x="1" y="1" width="20" height="32" rx="10" stroke="currentColor" strokeWidth="1.5" />
        <rect className="scroll-hint-wheel" x="10" y="7" width="2" height="6" rx="1" fill="currentColor" />
      </svg>
    </div>
    </section>
  );
}
