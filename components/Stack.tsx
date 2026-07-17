import Reveal from "./Reveal";

export default function Stack() {
  return (
    <Reveal
      as="section"
      id="stack"
      className="mx-auto max-w-[1280px] px-[clamp(20px,4vw,56px)] py-[clamp(80px,10vw,140px)]"
    >
      <div className="mb-10 flex items-center gap-4 font-mono text-[13px] tracking-[0.02em] text-muted">
        <span>— The toolbox</span>
        <span className="h-px flex-1 bg-rule" />
      </div>

      <h2 className="mb-[clamp(40px,5vw,70px)] max-w-[22ch] font-serif text-[clamp(26px,3.6vw,44px)] leading-[1.05] font-medium tracking-[-0.02em]">
        Languages, frameworks <em className="text-accent italic">&amp;</em> clouds I&apos;m fluent in.
      </h2>

      <div className="grid grid-cols-1 gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex min-h-[clamp(220px,26vw,300px)] flex-col rounded-brand border border-rule bg-cream p-6 px-6 transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
          <span className="mb-5 inline-block font-mono text-xs tracking-[0.08em] uppercase">
            Languages
          </span>
          <ul className="mt-auto flex flex-col gap-1.5">
            {["Java", "Python", "TypeScript", "JavaScript", "C# / .NET"].map((item, i, arr) => (
              <li
                key={item}
                className={`font-serif text-[clamp(20px,1.6vw,26px)] font-medium tracking-[-0.01em] opacity-90 ${
                  i < arr.length - 1 ? "border-b border-current" : ""
                } py-1`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-h-[clamp(220px,26vw,300px)] flex-col rounded-brand border border-ink bg-ink p-6 px-6 text-bg transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
          <span className="mb-5 inline-block font-mono text-xs tracking-[0.08em] text-accent-3 uppercase">
            Frameworks
          </span>
          <ul className="mt-auto flex flex-col gap-1.5">
            {["Spring Boot", "React", "Node.js", "Express", "REST APIs"].map((item, i, arr) => (
              <li
                key={item}
                className={`font-serif text-[clamp(20px,1.6vw,26px)] font-medium tracking-[-0.01em] opacity-90 ${
                  i < arr.length - 1 ? "border-b border-current" : ""
                } py-1`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-h-[clamp(220px,26vw,300px)] flex-col rounded-brand border border-accent bg-accent p-6 px-6 text-cream transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
          <span className="mb-5 inline-block font-mono text-xs tracking-[0.08em] text-white/85 uppercase">
            Cloud
          </span>
          <ul className="mt-auto flex flex-col gap-1.5">
            {["AWS", "Azure", "GCP", "Docker", "Linux"].map((item, i, arr) => (
              <li
                key={item}
                className={`font-serif text-[clamp(20px,1.6vw,26px)] font-medium tracking-[-0.01em] opacity-90 ${
                  i < arr.length - 1 ? "border-b border-current" : ""
                } py-1`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex min-h-[clamp(220px,26vw,300px)] flex-col rounded-brand border border-rule bg-bg-soft p-6 px-6 transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0">
          <span className="mb-5 inline-block font-mono text-xs tracking-[0.08em] text-accent uppercase">
            How I work
          </span>
          <p className="mt-auto font-serif text-lg leading-[1.5] text-ink-soft">
            Pragmatic over precious. I write code other humans can read,
            document the <em className="text-accent italic">why</em>, and treat
            production like a place my code actually has to live.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
