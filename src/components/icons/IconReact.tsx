export function IconReact({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <ellipse cx="12" cy="12" rx="8" ry="5" transform="rotate(-60 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="5" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="8" ry="5" transform="rotate(60 12 12)" />
    </svg>
  );
}
