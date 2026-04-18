export function IconBrain({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
      <path d="M15 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
      <path d="M12 8c2.21 0 4 1.79 4 4 0 1.1-.44 2.1-1.16 2.84.72.74 1.16 1.74 1.16 2.84 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.1.44-2.1 1.16-2.84C8.44 14.1 8 13.1 8 12c0-2.21 1.79-4 4-4z" />
    </svg>
  );
}
