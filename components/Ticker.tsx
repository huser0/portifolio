const SKILLS = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "TypeScript",
  "Python",
  ".NET",
  "AWS",
  "Azure",
  "GCP",
  "Docker",
  "Linux",
];

export default function Ticker() {
  const items = [...SKILLS, ...SKILLS, ...SKILLS];

  return (
    <div className="relative mx-auto max-w-[1280px] overflow-hidden border-t border-b border-ink bg-bg py-4.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[clamp(56px,8vw,140px)] bg-linear-to-r from-bg to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[clamp(56px,8vw,140px)] bg-linear-to-l from-bg to-transparent" />
      <div className="ticker-track inline-flex items-center whitespace-nowrap text-ink [gap:clamp(28px,5vw,72px)] pl-[clamp(28px,5vw,72px)] font-serif text-[clamp(20px,2.2vw,40px)] font-medium">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center [gap:clamp(28px,5vw,72px)]">
            <span>{item}</span>
            <span aria-hidden="true" className="text-[0.7em] text-accent">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
