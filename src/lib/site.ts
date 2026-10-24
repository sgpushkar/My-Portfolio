// src/lib/site.ts

export const DEFAULT_SITE_URL = 'https://pushkarmhatre.me';

/**
 * Returns the resolved base URL for the portfolio site.
 * Prioritizes user environment variables, Vercel production/preview domain,
 * and falls back to a clean default production URL.
 */
export function getBaseUrl(): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : DEFAULT_SITE_URL);

  const trimmed = envUrl.trim().replace(/\/$/, '');
  return trimmed.startsWith('http://') || trimmed.startsWith('https://')
    ? trimmed
    : `https://${trimmed}`;
}
