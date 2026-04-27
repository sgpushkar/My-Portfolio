export function IconCursor({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10L18 30L21 22L30 19L10 10Z"
        stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" fill="none"/>
      <line x1="21" y1="22" x2="28" y2="30" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
