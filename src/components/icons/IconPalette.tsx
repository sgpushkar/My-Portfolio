export function IconPalette({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="13" cy="13" r="8" />
      <path d="M5.12 5.12A7.99 7.99 0 0 0 21 13" />
      <circle cx="5" cy="5" r="1" fill="currentColor" />
      <circle cx="19" cy="5" r="1" fill="currentColor" />
      <circle cx="5" cy="19" r="1" fill="currentColor" />
      <circle cx="19" cy="19" r="1" fill="currentColor" />
    </svg>
  );
}
