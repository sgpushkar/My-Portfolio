export function IconTrophy({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9H4c-1.1 0-2 .9-2 2v3h2c1.1 0 2 .9 2 2v3h8v-3c0-1.1.9-2 2-2h2v-3c0-1.1-.9-2-2-2h-2V7c0-2.2-1.8-4-4-4h-4c-2.2 0-4 1.8-4 4v2z" />
      <path d="M12 3v6M18 9h2c1.1 0 2 .9 2 2v3h-2c-1.1 0-2 .9-2 2v3" />
    </svg>
  );
}
