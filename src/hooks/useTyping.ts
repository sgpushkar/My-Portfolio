// src/hooks/useTyping.ts
"use client";

import { useEffect, useState } from "react";
import { TYPING_PHRASES } from "@/lib/data";

export function useTyping() {
  const [display, setDisplay] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPING_PHRASES[phraseIndex];

    const timeout = setTimeout(
      () => {
        if (!deleting) {
          setDisplay(phrase.slice(0, charIndex + 1));
          if (charIndex + 1 > phrase.length) {
            setTimeout(() => setDeleting(true), 1600);
            return;
          }
          setCharIndex((c) => c + 1);
        } else {
          setDisplay(phrase.slice(0, charIndex - 1));
          if (charIndex - 1 < 0) {
            setDeleting(false);
            setPhraseIndex((p) => (p + 1) % TYPING_PHRASES.length);
            setCharIndex(0);
            return;
          }
          setCharIndex((c) => c - 1);
        }
      },
      deleting ? 38 : 68
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, phraseIndex]);

  return display;
}
