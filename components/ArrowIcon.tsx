/** Vector arrows avoid platform-dependent Unicode/emoji rendering. */
export default function ArrowIcon({ direction = "up-right" }: { direction?: "up-right" | "up" }) {
  return (
    <svg
      className="arrow-icon"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={direction === "up" ? "M12 20V4M5 11l7-7 7 7" : "M5 19 19 5M5 5h14v14"} />
    </svg>
  );
}
