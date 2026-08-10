export default function GuildEmblem({ size = 40, className = "", decorative = true }) {
  return (
    <svg
      className={`emblem ${className}`.trim()}
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role={decorative ? "presentation" : "img"}
      aria-hidden={decorative ? "true" : undefined}
      aria-label={decorative ? undefined : "FTG guild emblem"}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32 4 55 15v16c0 14.5-8.7 24.1-23 29C17.7 55.1 9 45.5 9 31V15L32 4Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      <path
        d="M22 18h20v7H30v8h10v7H30v14h-8V18Z"
        fill="currentColor"
      />
      <path
        className="emblem-accent"
        d="M42 32c3.6 1.8 6 5.2 6 9.1 0 5.5-4.7 10-10.5 10-2.7 0-5.2-1-7.1-2.7 5.9-.3 10.6-4.9 10.6-10.5 0-2.2-.7-4.2-1.9-5.9.9-.1 1.9-.1 2.9 0Z"
        fill="currentColor"
      />
    </svg>
  );
}
