// src/components/ui/ClientEffects.tsx
"use client";

import { useScrollReveal, useGlassCardGlow } from "@/hooks/useScrollReveal";

export default function ClientEffects() {
  useScrollReveal();
  useGlassCardGlow();
  return null;
}
