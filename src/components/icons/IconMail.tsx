export function IconMail({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="12" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <path d="M8 14L20 22L32 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

