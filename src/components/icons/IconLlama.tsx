export function IconLlama({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="6" r="2" />
      <path d="M10 8h4v6c0 2.2-1.8 4-4 4s-4-1.8-4-4v-6h4z" />
      <path d="M7 12v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2M17 12v2c0 1.1.9 2 2 2s2-.9 2-2v-2" />
    </svg>
  );
}
