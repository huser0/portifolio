import Reveal from "./Reveal";

const STATS = [
  { num: "4+", label: "Years building software" },
  { num: "12+", label: "Technologies in daily rotation" },
  { num: "3", label: "Cloud providers · AWS · Azure · GCP" },
  { num: "∞", label: "Cups of coffee while debugging" },
];

export default function About() {
  return (
    <Reveal
      as="section"
      id="about"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,140px)]"
    >
      <div className="mb-10 flex items-center gap-4 font-mono text-[13px] tracking-[0.02em] text-muted">
        <span>— About</span>
        <span className="h-px flex-1 bg-rule" />
      </div>

      <div className="grid grid-cols-1 items-start gap-[clamp(40px,5vw,80px)] lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="mb-7 max-w-[56ch] font-serif text-[clamp(22px,2.4vw,32px)] leading-[1.35] tracking-[-0.01em] text-ink">
            I&apos;m a <strong className="font-semibold">Software Engineer</strong>{" "}
            based in Brazil, currently working at{" "}
            <em className="text-accent not-italic italic">Kyndryl</em> as{" "}
            <em className="text-accent not-italic italic">
              Associate Technical Support
            </em>
            , supporting clients in <strong className="font-semibold">retail</strong>{" "}
            and <strong className="font-semibold">civil construction</strong>.
          </p>
          <p className="mb-4.5 max-w-[56ch] text-[clamp(16px,1.25vw,19px)] text-ink-soft">
            Before that, I spent time at <em className="italic">IBM</em> as an{" "}
            <em className="italic">Application Developer</em>, building software
            for retail customers at scale. Two big shops, one shared obsession:
            shipping clean, maintainable code that solves real problems.
          </p>
          <p className="max-w-[56ch] text-[clamp(16px,1.25vw,19px)] text-ink-soft">
            I move comfortably between{" "}
            <strong className="font-semibold">backend</strong> (Java/Spring Boot,
            .NET, Python, Node), <strong className="font-semibold">frontend</strong>{" "}
            (React, TypeScript, modern JS), and{" "}
            <strong className="font-semibold">cloud</strong> (AWS, Azure, GCP).
            Docker and Linux are home — I treat infrastructure as part of the
            product.
          </p>
        </div>

        <aside
          aria-label="Quick facts"
          className="grid grid-cols-2 gap-3.5 self-start rounded-brand border border-rule bg-cream p-5.5 lg:sticky lg:top-25"
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`p-3.5 px-2 ${i >= 2 ? "border-t border-rule pt-4.5" : ""} ${
                i % 2 === 0 ? "border-r border-rule pr-3.5" : "pl-3.5"
              }`}
            >
              <div className="font-serif text-[clamp(36px,3.6vw,52px)] leading-none font-semibold tracking-[-0.02em] text-ink">
                {stat.num}
              </div>
              <div className="mt-2 font-mono text-xs tracking-[0.06em] text-muted uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </aside>
      </div>
    </Reveal>
  );
}
