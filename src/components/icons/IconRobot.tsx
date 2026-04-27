export function IconRobot({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="14" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.2"/>
      <rect x="14" y="18" width="4" height="4" rx="1" fill="currentColor"/>
      <rect x="22" y="18" width="4" height="4" rx="1" fill="currentColor"/>
      <line x1="15" y1="26" x2="25" y2="26" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="20" y1="14" x2="20" y2="10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="20" cy="9" r="1.5" fill="currentColor"/>
      <line x1="10" y1="22" x2="6" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <line x1="30" y1="22" x2="34" y2="22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

