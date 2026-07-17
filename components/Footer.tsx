export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-7 font-mono text-xs tracking-[0.02em] text-muted sm:flex-row sm:items-center sm:justify-between sm:px-7 md:px-10 lg:px-[clamp(28px,4vw,56px)]">
      <div className="flex items-center gap-3">
        <span className="rounded-lg bg-ink px-2 py-1 text-[11px] font-semibold text-bg">
          .HS
        </span>
        <span>© {year} Hugo Sergio</span>
      </div>
      <div>
        <span>Built with care · No frameworks harmed</span>
      </div>
    </footer>
  );
}
