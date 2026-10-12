// src/components/long-walk/LongWalk.tsx
'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/types';

const TW = 1290;

const D = [
  [242, 241, 238],
  [12, 12, 12],
  [214, 213, 209],
  [154, 153, 149],
  [92, 92, 90],
  [43, 43, 42],
];

const NT = [
  [12, 12, 12],
  [242, 241, 238],
  [43, 43, 42],
  [92, 92, 90],
  [154, 153, 149],
  [214, 213, 209],
];

const N = ['bg', 'ink', 'g1', 'g2', 'g3', 'g4'];

const STATIONS: [number, string, string?][] = [
  [8, 'Start'],
  [150, 'About'],
  [262, 'Sienvera', 'sienvera'],
  [335, 'AttenDex', 'attendex'],
  [408, 'CryptoNova', 'cryptonova'],
  [481, 'Sonder Cafe', 'sonder-cafe'],
  [554, 'Madgear Cafe', 'madgear-cafe'],
  [627, 'RepoMedic', 'repomedic-ai'],
  [700, 'Luna', 'luna'],
  [773, 'PHOCCy', 'phoccy'],
  [846, 'My Portfolio', 'portfolio'],
  [925, 'Things I make'],
  [1020, 'Milestones'],
  [1075, 'Buildyn'],
  [1135, 'Contact'],
];

const PROJECT_MAP: Record<string, string> = {
  '262': 'sienvera',
  '335': 'attendex',
  '408': 'cryptonova',
  '481': 'sonder-cafe',
  '554': 'madgear-cafe',
  '627': 'repomedic-ai',
  '700': 'luna',
  '773': 'phoccy',
  '846': 'portfolio',
};

const pos = (
  x: number,
  w?: number,
  h?: number,
  f?: number
): React.CSSProperties => {
  const s: Record<string, string | number> = { '--x': x };
  if (w !== undefined) s['--w'] = w;
  if (h !== undefined) s['--h'] = h;
  if (f !== undefined) s['--f'] = f;
  return s as React.CSSProperties;
};

function seed(s: number) {
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

interface CachedBuilding {
  el: HTMLElement;
  centerU: number;
  isNear: boolean;
}

export default function LongWalk() {
  const [isPlain, setIsPlain] = useState(false);
  const [activeStation, setActiveStation] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalSvgHtml, setModalSvgHtml] = useState<string>('');
  const [modalCaptionHtml, setModalCaptionHtml] = useState<string>('');

  // References
  const scRef = useRef<HTMLDivElement>(null);
  const stRef = useRef<HTMLDivElement>(null);
  const tRef = useRef<HTMLDivElement>(null);
  const l1Ref = useRef<HTMLDivElement>(null);
  const l2Ref = useRef<HTMLDivElement>(null);
  const fglRef = useRef<HTMLDivElement>(null);
  const gpRef = useRef<HTMLDivElement>(null);
  const sunRef = useRef<SVGSVGElement>(null);
  const skyRef = useRef<HTMLDivElement>(null);
  const pgRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const fgRef = useRef<SVGSVGElement>(null);
  const faRef = useRef<SVGGElement>(null);
  const fbRef = useRef<SVGGElement>(null);
  const crRef = useRef<SVGSVGElement>(null);
  const irRef = useRef<HTMLDivElement>(null);
  const ovRef = useRef<HTMLDivElement>(null);

  const activeStationRef = useRef(0);
  const cachedBuildingsRef = useRef<CachedBuilding[]>([]);
  const lastWidthRef = useRef(0);
  const lastHeightRef = useRef(0);

  // Animation values stored in refs for maximum 60fps/120fps performance
  const animRef = useRef({
    CX: 0,
    CY: 0,
    PX: 0,
    PY: 0,
    XS: 0,
    targetXS: 0,
    SX: 0,
    SY: 0,
    lx: -9,
    ly: -9,
    bx: 200,
    by: 200,
    fd: 1,
    mx: 0,
    my: 0,
    ms: false,
    u: 10,
    W: 12900,
    isPlain: false,
    lastN: -1,
    reduceMotion: false,

    // Touch gesture tracking
    touchStartX: 0,
    touchStartY: 0,
    touchLastX: 0,
    touchLastTime: 0,
    touchVelocityX: 0,
    touchMoved: false,
    touchDragging: false,
    momentumVelocity: 0,
  });

  // Keep animRef.current.isPlain in sync
  useEffect(() => {
    animRef.current.isPlain = isPlain;
    if (isPlain) {
      document.body.classList.add('pl');
    } else {
      document.body.classList.remove('pl');
    }
  }, [isPlain]);

  // Layer generation
  const buildLayers = useCallback(() => {
    const { u } = animRef.current;
    if (!l1Ref.current || !l2Ref.current || !fglRef.current) return;

    // Layer 1
    const l1 = l1Ref.current;
    l1.innerHTML = '';
    const r1 = seed(7);
    let x1 = -u * 4;
    const w1 = TW * u * 0.18 + window.innerWidth + u * 20;
    while (x1 < w1) {
      const bw = u * (5 + r1() * 10);
      const h = u * (14 + r1() * (48 - 14));
      const el = document.createElement('i');
      el.style.cssText = `left:${x1}px;width:${bw}px;height:${h}px;background:var(--g1)`;
      l1.appendChild(el);
      x1 += bw + u * (r1() < 0.3 ? 4 + r1() * 8 : 0);
    }

    // Telegraph poles in L1
    [330, 1010].forEach((c) => {
      const d = document.createElement('div');
      d.className = 'co';
      d.style.left = `${window.innerWidth * 0.62 + 0.18 * (c * u - window.innerWidth * 0.34)}px`;
      d.innerHTML = `
        <svg viewBox="0 0 120 400">
          <circle cx="60" cy="62" r="40" fill="none" stroke="var(--g2)" stroke-width="3"/>
          <circle class="b" cx="60" cy="62" r="20"/>
          <path class="b" d="M30 118Q60 80 90 118L84 150H36zM60 140L24 400H96z"/>
          <rect class="b" x="104" y="70" width="6" height="330"/>
          <circle class="b" cx="107" cy="64" r="9"/>
        </svg>
      `;
      l1.appendChild(d);
    });

    // Layer 2
    const l2 = l2Ref.current;
    l2.innerHTML = '';
    const r2 = seed(3);
    let x2 = -u * 4;
    const w2 = TW * u * 0.45 + window.innerWidth + u * 20;
    while (x2 < w2) {
      const bw = u * (5 + r2() * 10);
      const h = u * (8 + r2() * (30 - 8));
      const el = document.createElement('i');
      el.style.cssText = `left:${x2}px;width:${bw}px;height:${h}px;background:var(--g2)`;
      l2.appendChild(el);
      x2 += bw + u * (r2() < 0.3 ? 4 + r2() * 8 : 0);
    }

    // Foreground grass blades
    const fgl = fglRef.current;
    fgl.innerHTML = '';
    const r5 = seed(5);
    let xg = u * 20;
    const wg = TW * u * 1.55 + window.innerWidth;
    while (xg < wg) {
      const el = document.createElement('i');
      el.style.cssText = `left:${xg}px;width:${u * (1.4 + r5() * 2)}px;height:${u * (5 + r5() * 9)}px`;
      fgl.appendChild(el);
      xg += u * (14 + r5() * 38);
    }
  }, []);

  // Sky stars & birds setup (birds placed comfortably in upper skyline)
  const buildSky = useCallback(() => {
    if (!skyRef.current) return;
    const r = seed(11);
    let html = '';
    for (let i = 0; i < 70; i++) {
      const z = 1 + r() * 2.2;
      html += `<div class="s" style="left:${r() * 100}%;top:${r() * 72}%;width:${z}px;height:${z}px;animation-delay:${r() * 4}s"></div>`;
    }
    for (let i = 0; i < 5; i++) {
      html += `<svg viewBox="0 0 32 10" style="top:${16 + i * 5}%;animation-delay:-${i * 14}s;animation-duration:${55 + i * 9}s"><path d="M0 8Q8-2 16 8Q24-2 32 8" fill="none" stroke="var(--ink)" stroke-width="2"/></svg>`;
    }
    skyRef.current.innerHTML = html;
  }, []);

  // Cache building coordinates once to eliminate querySelectorAll and layout thrashing in RAF loop
  const updateCachedBuildings = useCallback(() => {
    if (!tRef.current) return;
    const elements = tRef.current.querySelectorAll<HTMLElement>('.bd.it:not(.hd)');
    cachedBuildingsRef.current = Array.from(elements).map((el) => {
      const bxPos = parseFloat(el.style.getPropertyValue('--x') || '0');
      const bw = parseFloat(el.style.getPropertyValue('--w') || '0');
      return {
        el,
        centerU: bxPos + bw / 2,
        isNear: false,
      };
    });
  }, []);

  // Apply visual transformations efficiently
  const applyTransform = useCallback(() => {
    const { XS, CX, CY, SX, SY, lx, ly, isPlain } = animRef.current;

    if (tRef.current) {
      tRef.current.style.transform = isPlain ? 'none' : `translate3d(${-XS.toFixed(1)}px,0,0)`;
    }
    if (l1Ref.current) {
      l1Ref.current.style.transform = `translate3d(${(-XS * 0.18 + CX * 16).toFixed(1)}px, ${(CY * 5).toFixed(1)}px, 0)`;
    }
    if (l2Ref.current) {
      l2Ref.current.style.transform = `translate3d(${(-XS * 0.45 + CX * 8).toFixed(1)}px, ${(CY * 3).toFixed(1)}px, 0)`;
    }
    if (fglRef.current) {
      fglRef.current.style.transform = `translate3d(${(-XS * 1.55 - CX * 46).toFixed(1)}px, ${(-CY * 10).toFixed(1)}px, 0)`;
    }
    if (gpRef.current) {
      gpRef.current.style.backgroundPositionX = `${(-XS).toFixed(1)}px`;
    }
    if (sunRef.current) {
      sunRef.current.style.transform = `translate(${(SX + CX * 26).toFixed(1)}px, ${(SY + CY * 10).toFixed(1)}px)`;
    }
    if (skyRef.current) {
      skyRef.current.style.transform = `translate(${(CX * 20).toFixed(1)}px, ${(CY * 8).toFixed(1)}px)`;
    }

    const ex = CX * 14;
    const ey = 3 + CY * 8;
    if (Math.abs(ex - lx) > 0.4 || Math.abs(ey - ly) > 0.4) {
      animRef.current.lx = ex;
      animRef.current.ly = ey;
      if (tRef.current) {
        tRef.current.style.setProperty('--ex', ex.toFixed(1));
        tRef.current.style.setProperty('--ey', ey.toFixed(1));
      }
    }
  }, []);

  // Render a visual frame based on current interpolated XS
  const renderFrame = useCallback(() => {
    const { XS, u, W, isPlain } = animRef.current;
    const pl = isPlain;
    const maxScroll = W - window.innerWidth;
    const p = maxScroll > 0 ? Math.min(1, Math.max(0, XS / maxScroll)) : 0;
    const cur = (XS + window.innerWidth * 0.34) / u;

    let n = pl ? 0 : Math.min(1, Math.max(0, (cur - 805) / 75));
    n = n * n * (3 - 2 * n);

    // Only update CSS variables on documentElement if n changed by a meaningful threshold
    if (Math.abs(n - animRef.current.lastN) > 0.003) {
      animRef.current.lastN = n;
      const R = document.documentElement;
      R.style.setProperty('--n', n.toFixed(3));
      R.style.setProperty('--co', (Math.sin(Math.PI * n) * 0.9).toFixed(2));

      for (let i = 0; i < 6; i++) {
        const c = [0, 1, 2].map((k) => Math.round(D[i][k] + (NT[i][k] - D[i][k]) * n));
        R.style.setProperty(`--${N[i]}`, `rgb(${c.join(',')})`);
      }

      const dk = n < 0.5;
      R.style.setProperty('--tx', dk ? '#0c0c0c' : '#f2f1ee');
      R.style.setProperty('--tm', dk ? '#454543' : '#cfcecb');
      R.style.setProperty('--tg', dk ? '#f2f1ee' : '#0c0c0c');
      R.style.setProperty('--tgm', dk ? '#b9b8b4' : '#4a4a48');
    }

    // Walker step toggle
    const st = Math.floor(XS / (u * 3)) % 2;
    if (faRef.current && fbRef.current) {
      faRef.current.style.display = st ? '' : 'none';
      fbRef.current.style.display = st ? 'none' : '';
    }

    // Progress bar
    if (pgRef.current) {
      pgRef.current.style.width = `${(p * 100).toFixed(1)}%`;
    }

    // Walk hint
    if (hintRef.current) {
      hintRef.current.style.opacity = XS > 60 ? '0' : '1';
    }

    // Sun positions
    animRef.current.SX = window.innerWidth * 0.03 + p * (window.innerWidth * 0.94 - 38 * u);
    animRef.current.SY = u * (6 + (1 - Math.pow(Math.sin(Math.PI * p), 0.6)) * 58);

    // Active station tick
    let b = 0;
    STATIONS.forEach((q, j) => {
      if (Math.abs(q[0] - cur) < Math.abs(STATIONS[b][0] - cur)) b = j;
    });
    if (b !== activeStationRef.current) {
      activeStationRef.current = b;
      setActiveStation(b);
    }

    // Walker character position
    if (fgRef.current) {
      const e = Math.min(1, XS / (45 * u));
      fgRef.current.style.left = `${window.innerWidth * 0.15 - (1 - e) * window.innerWidth * 0.24}px`;
    }

    // Building proximity hover effect (.nr) using CACHED coordinates (zero querySelectorAll)
    const fx = window.innerWidth * 0.15 + 2.8 * u;
    cachedBuildingsRef.current.forEach((item) => {
      const isNear = !pl && Math.abs(item.centerU * u - XS - fx) < u * 20;
      if (isNear !== item.isNear) {
        item.isNear = isNear;
        item.el.classList.toggle('nr', isNear);
      }
    });

    applyTransform();
  }, [applyTransform]);

  // Resize handler (optimized for Android to avoid rebuilds on address-bar toggles)
  const handleResize = useCallback(() => {
    const newW = window.innerWidth;
    const newH = window.innerHeight;
    const widthChanged = Math.abs(newW - lastWidthRef.current) > 2;
    const heightChangedSignificantly = Math.abs(newH - lastHeightRef.current) > 120;

    const u = newH / 100;
    animRef.current.u = u;
    const W = TW * u;
    animRef.current.W = W;
    const R = document.documentElement;
    R.style.setProperty('--u', `${u}px`);

    if (scRef.current) {
      scRef.current.style.height = animRef.current.isPlain
        ? 'auto'
        : `${W - newW + newH}px`;
    }

    // Only rebuild DOM layers if width changed or an orientation change occurred
    if (widthChanged || heightChangedSignificantly || lastWidthRef.current === 0) {
      lastWidthRef.current = newW;
      lastHeightRef.current = newH;
      buildLayers();
      updateCachedBuildings();
    }

    // Sync targetXS with current scroll position
    const m = scRef.current ? scRef.current.offsetHeight - newH : 1;
    if (m > 0) {
      const p = Math.min(1, Math.max(0, window.scrollY / m));
      animRef.current.targetXS = p * (W - newW);
    }
    renderFrame();
  }, [buildLayers, updateCachedBuildings, renderFrame]);

  // Smooth station jump
  const goToStation = useCallback(
    (targetStationIndexOrXu: number) => {
      if (!scRef.current) return;
      const { u, W } = animRef.current;
      const maxScroll = W - window.innerWidth;
      const m = scRef.current.offsetHeight - window.innerHeight;
      if (m <= 0 || maxScroll <= 0) return;

      const xu = targetStationIndexOrXu;
      const t = Math.max(0, Math.min(1, (xu * u - window.innerWidth * 0.34) / maxScroll));
      const top = t * m;
      const targetXS = t * maxScroll;

      const far = Math.abs(targetXS - animRef.current.XS) > 90 * u;
      const cx = `${window.innerWidth * 0.15}px 60%`;

      if (!far) {
        animRef.current.targetXS = targetXS;
        window.scrollTo({ top, behavior: 'smooth' });
        return;
      }

      if (irRef.current) {
        irRef.current.style.clipPath = `circle(150% at ${cx})`;
        setTimeout(() => {
          animRef.current.XS = targetXS;
          animRef.current.targetXS = targetXS;
          window.scrollTo({ top, behavior: 'instant' });
          renderFrame();
          if (irRef.current) {
            irRef.current.style.clipPath = `circle(0 at ${cx})`;
          }
        }, 460);
      }
    },
    [renderFrame]
  );

  // Character Hop
  const handleHop = useCallback(() => {
    if (!fgRef.current) return;
    fgRef.current.classList.remove('hop');
    void fgRef.current.getBoundingClientRect();
    fgRef.current.classList.add('hop');
  }, []);

  // Open modal with enriched project details
  const openBuildingModal = useCallback((el: HTMLElement) => {
    if (el.classList.contains('hd')) return;
    const xVal = el.style.getPropertyValue('--x').trim();
    const projectId = PROJECT_MAP[xVal];
    const project = projectId ? PROJECTS.find((p) => p.id === projectId) : null;

    setModalProject(project || null);
    setModalSvgHtml(el.outerHTML);

    const nextEl = el.nextElementSibling as HTMLElement;
    if (nextEl && nextEl.classList.contains('cp')) {
      setModalCaptionHtml(nextEl.innerHTML);
    } else {
      setModalCaptionHtml('');
    }

    if (ovRef.current) {
      ovRef.current.classList.add('on');
    }
    setModalOpen(true);
  }, []);

  // Close modal
  const closeModal = useCallback(() => {
    if (ovRef.current) {
      ovRef.current.classList.remove('on');
    }
    setModalOpen(false);
  }, []);

  // Main lifecycle
  useEffect(() => {
    document.body.classList.add('long-walk-body');
    animRef.current.reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    buildSky();
    handleResize();

    // Native scroll event updates targetXS smoothly
    const onScroll = () => {
      if (animRef.current.isPlain || animRef.current.touchDragging) return;
      const m = scRef.current ? scRef.current.offsetHeight - window.innerHeight : 0;
      if (m <= 0) return;
      const p = Math.min(1, Math.max(0, window.scrollY / m));
      animRef.current.targetXS = p * (animRef.current.W - window.innerWidth);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Pointer move
    const onPointerMove = (e: PointerEvent) => {
      animRef.current.PX = (e.clientX / window.innerWidth) * 2 - 1;
      animRef.current.PY = (e.clientY / window.innerHeight) * 2 - 1;
      animRef.current.ms = e.pointerType === 'mouse';
      animRef.current.mx = e.clientX;
      animRef.current.my = e.clientY;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Keyboard navigation
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (document.body.classList.contains('pl')) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        animRef.current.targetXS = Math.min(
          animRef.current.W - window.innerWidth,
          animRef.current.targetXS + animRef.current.u * 38
        );
        const m = scRef.current ? scRef.current.offsetHeight - window.innerHeight : 1;
        window.scrollTo({
          top: (animRef.current.targetXS / (animRef.current.W - window.innerWidth)) * m,
          behavior: 'smooth',
        });
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        animRef.current.targetXS = Math.max(
          0,
          animRef.current.targetXS - animRef.current.u * 38
        );
        const m = scRef.current ? scRef.current.offsetHeight - window.innerHeight : 1;
        window.scrollTo({
          top: (animRef.current.targetXS / (animRef.current.W - window.innerWidth)) * m,
          behavior: 'smooth',
        });
      }
      if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        handleHop();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    // Wheel navigation (horizontal or vertical)
    const onWheel = (e: WheelEvent) => {
      if (document.body.classList.contains('pl')) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        const maxScroll = animRef.current.W - window.innerWidth;
        const m = scRef.current ? scRef.current.offsetHeight - window.innerHeight : 1;
        animRef.current.targetXS = Math.max(0, Math.min(maxScroll, animRef.current.targetXS + e.deltaX * 1.5));
        window.scrollTo({
          top: (animRef.current.targetXS / maxScroll) * m,
          behavior: 'instant',
        });
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });

    // Touch navigation with smooth inertia momentum physics
    const onTouchStart = (e: TouchEvent) => {
      animRef.current.touchStartX = e.touches[0].clientX;
      animRef.current.touchStartY = e.touches[0].clientY;
      animRef.current.touchLastX = e.touches[0].clientX;
      animRef.current.touchLastTime = performance.now();
      animRef.current.touchVelocityX = 0;
      animRef.current.momentumVelocity = 0;
      animRef.current.touchMoved = false;
      animRef.current.touchDragging = true;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (document.body.classList.contains('pl')) return;
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = currentX - animRef.current.touchLastX;
      const totalDx = currentX - animRef.current.touchStartX;
      const totalDy = currentY - animRef.current.touchStartY;

      if (Math.abs(totalDx) > 7 || Math.abs(totalDy) > 7) {
        animRef.current.touchMoved = true;
      }

      // If swipe is mostly horizontal, glide smoothly along the road
      if (Math.abs(totalDx) > Math.abs(totalDy) * 0.75) {
        if (e.cancelable) e.preventDefault();
        const now = performance.now();
        const dt = Math.max(1, now - animRef.current.touchLastTime);
        animRef.current.touchVelocityX = (deltaX / dt) * 16.6;
        animRef.current.touchLastX = currentX;
        animRef.current.touchLastTime = now;

        const maxScroll = animRef.current.W - window.innerWidth;
        const m = scRef.current ? scRef.current.offsetHeight - window.innerHeight : 1;
        const step = -deltaX * 2.2;
        animRef.current.targetXS = Math.max(0, Math.min(maxScroll, animRef.current.targetXS + step));
        const targetY = (animRef.current.targetXS / maxScroll) * m;
        window.scrollTo({ top: targetY, behavior: 'instant' });
      }
    };

    const onTouchEnd = () => {
      animRef.current.touchDragging = false;
      // If user flicked with velocity, apply momentum glide
      if (Math.abs(animRef.current.touchVelocityX) > 1.2) {
        animRef.current.momentumVelocity = -animRef.current.touchVelocityX * 2.8;
      }
    };

    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    // Attach click listeners to all interactive buildings
    const buildings = document.querySelectorAll<HTMLElement>('.bd.it:not(.hd)');
    const buildingListeners: [HTMLElement, () => void][] = [];
    buildings.forEach((bld) => {
      bld.setAttribute('role', 'button');
      bld.setAttribute('aria-label', 'Open this piece');
      const listener = () => {
        // Prevent click if user was dragging/swiping
        if (!animRef.current.touchMoved) {
          openBuildingModal(bld);
        }
      };
      bld.addEventListener('click', listener);
      buildingListeners.push([bld, listener]);
    });

    // RequestAnimationFrame Loop (runs at 60Hz / 90Hz / 120Hz depending on device display)
    let reqId: number;
    const tick = (t: number) => {
      const { PX, PY, reduceMotion, ms, mx, my } = animRef.current;

      // Parallax smoothing
      animRef.current.CX +=
        ((PX * 0.85 + (reduceMotion ? 0 : Math.sin(t / 2600) * 0.45)) - animRef.current.CX) * 0.06;
      animRef.current.CY +=
        ((PY * 0.6 + (reduceMotion ? 0 : Math.cos(t / 3300) * 0.2)) - animRef.current.CY) * 0.06;

      // Handle touch momentum glide on mobile
      if (Math.abs(animRef.current.momentumVelocity) > 0.4) {
        const maxScroll = animRef.current.W - window.innerWidth;
        const m = scRef.current ? scRef.current.offsetHeight - window.innerHeight : 1;
        animRef.current.targetXS = Math.max(
          0,
          Math.min(maxScroll, animRef.current.targetXS + animRef.current.momentumVelocity)
        );
        animRef.current.momentumVelocity *= 0.92;
        const targetY = (animRef.current.targetXS / maxScroll) * m;
        window.scrollTo({ top: targetY, behavior: 'instant' });
      } else {
        animRef.current.momentumVelocity = 0;
      }

      // Smooth lerp: interpolate current XS towards target XS for buttery-smooth 60/120fps motion
      const diff = animRef.current.targetXS - animRef.current.XS;
      if (Math.abs(diff) > 0.15) {
        animRef.current.XS += diff * 0.12;
        renderFrame();
      } else if (Math.abs(diff) > 0.001) {
        animRef.current.XS = animRef.current.targetXS;
        renderFrame();
      } else {
        applyTransform();
      }

      // Crow companion physics following pointer/walker
      if (crRef.current) {
        const tx = ms
          ? mx + 30
          : window.innerWidth * 0.15 + 34 + Math.sin(t / 900) * 70;
        const ty = ms
          ? my - 26
          : window.innerHeight * 0.42 + Math.cos(t / 700) * 30;

        animRef.current.fd += ((tx > animRef.current.bx ? 1 : -1) - animRef.current.fd) * 0.08;
        animRef.current.bx += (tx - animRef.current.bx) * 0.045;
        animRef.current.by += (ty - animRef.current.by) * 0.045;

        crRef.current.style.transform = `translate(${animRef.current.bx.toFixed(1)}px,${animRef.current.by.toFixed(
          1
        )}px) scaleX(${animRef.current.fd.toFixed(2)})`;
      }

      reqId = requestAnimationFrame(tick);
    };
    reqId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(reqId);
      document.body.classList.remove('long-walk-body', 'pl');
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      buildingListeners.forEach(([bld, listener]) => {
        bld.removeEventListener('click', listener);
      });
    };
  }, [
    buildSky,
    handleResize,
    renderFrame,
    applyTransform,
    openBuildingModal,
    handleHop,
    closeModal,
  ]);

  const toggleViewMode = () => {
    setIsPlain((prev) => {
      const next = !prev;
      setTimeout(() => {
        window.scrollTo(0, 0);
        handleResize();
      }, 20);
      return next;
    });
  };

  return (
    <>
      <div id="sc" ref={scRef}>
        <div id="st" ref={stRef}>
          {/* Sun & Moon */}
          <svg id="sun" ref={sunRef} viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <mask id="mk">
                <rect width="100" height="100" fill="#fff" />
                <circle cx="70" cy="36" r="46" fill="#000" style={{ opacity: 'var(--n)' }} />
              </mask>
            </defs>
            <circle cx="50" cy="50" r="49" className="k" mask="url(#mk)" style={{ opacity: 0.3 }} />
            <circle
              cx="50"
              cy="50"
              r="60"
              fill="none"
              stroke="var(--ink)"
              strokeWidth="9"
              strokeDasharray="1.6 4.2"
              style={{ opacity: 'var(--co,0)' }}
            />
          </svg>

          {/* Sky with stars and birds */}
          <div id="sky" ref={skyRef} />

          {/* Parallax Skyline Layers */}
          <div className="L" id="L1" ref={l1Ref} />
          <div className="L" id="L2" ref={l2Ref} />

          {/* 3D Perspective Ground Plane */}
          <div id="gr">
            <div id="gp" ref={gpRef} />
          </div>

          {/* Horizontal Track with all stations */}
          <div id="T" ref={tRef}>
            {/* 00: Intro Hero */}
            <div className="tx it" style={pos(9, 112, undefined, 10.5)}>
              <p className="tiny">Pushkar Mhatre · Full-stack developer &amp; AI enthusiast · Mumbai</p>
              <h1>
                I Build Things That Feel <i>As Good</i> As They Look.
              </h1>
              <p>
                Founder of Buildyn. Full-stack builder, AI tinkerer, collector of small details. This is
                what I&apos;ve made so far.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <a className="btn" onClick={() => goToStation(248)}>
                  Explore my work
                </a>
                <a className="btn" onClick={() => goToStation(1135)}>
                  Say hi
                </a>
                <Link href="/works" className="btn" style={{ borderColor: 'var(--g2)' }}>
                  Works Archive ↗
                </Link>
              </div>
            </div>

            {/* Landmark Building (Architectural Silhouette) */}
            <svg
              className="bd it hd"
              style={pos(136, 62, 80)}
              viewBox="150 200 480 600"
            >
              <defs>
                <path
                  id="hp"
                  d="M150 800L190 640C185 620 192 605 197 592C185 588 182 570 190 556C178 552 178 540 188 534C176 528 180 518 190 514C170 512 160 500 168 490C180 470 190 458 192 440C186 420 190 395 200 370C215 280 290 205 390 205C490 205 545 285 540 380C536 450 505 500 480 540L470 620C560 650 600 720 620 800Z"
                />
                <clipPath id="hc">
                  <use href="#hp" />
                </clipPath>
              </defs>
              <use href="#hp" className="a" />
              <g clipPath="url(#hc)">
                <path
                  className="b"
                  d="M150 800V620H220V540H290V600H340V470H400V560H450V420H520V580H570V500H640V800z"
                />
                <path
                  className="c"
                  d="M150 800V700H260V640H330V690H420V600H500V680H640V800z"
                />
                <path className="a" d="M380 800V690a40 40 0 0 1 80 0V800z" />
                <circle className="k" cx="420" cy="330" r="46" style={{ opacity: 0.25 }} />
              </g>
            </svg>

            {/* About Section */}
            <div className="tx it" style={{ ...pos(150, 56), top: 'calc(var(--u)*8)' }}>
              <p className="tiny">About</p>
              <h2 style={{ fontSize: 'min(calc(var(--u)*6), 5.6vw)' }}>
                Software should feel as <i>considered</i> as it functions.
              </h2>
              <p>
                Good development isn&apos;t just about writing code. It&apos;s about understanding people,
                solving the right problems, and making the final experience feel effortless.
              </p>
              <p style={{ marginTop: '1.2em' }}>
                I care about clean execution, honest communication, meaningful details, and building
                products that deliver real value.
              </p>
              <div className="chips">
                <span>Modern web development</span>
                <span>AI agent workflows</span>
              </div>
            </div>

            {/* Selected Work Title */}
            <div className="tx it" style={pos(222, 40)}>
              <p className="tiny">Selected work</p>
              <h2 style={{ '--f': 8 } as React.CSSProperties}>7+ shipped. Nine on this road.</h2>
            </div>

            {/* 01: Sienvera */}
            <div className="no it" style={pos(262)}>
              01
            </div>
            <svg
              className="bd it"
              style={pos(262, 34, 50)}
              viewBox="0 0 340 500"
            >
              <rect className="k" y="250" width="340" height="250" />
              <rect className="c" x="20" y="70" width="120" height="170" />
              <rect className="a" x="34" y="84" width="92" height="142" />
              <path className="k" d="M40 220Q48 140 80 148Q112 156 118 220z" />
              <rect className="b" x="170" y="130" width="90" height="110" />
              <circle className="w" cx="215" cy="185" r="30" />
              <rect className="d" x="280" y="50" width="50" height="50" />
              <path
                className="b"
                d="M130 250C108 215 130 200 134 185H176C180 200 202 215 180 250z"
                transform="translate(60 -2)"
              />
            </svg>
            <div className="cp it" style={pos(262)}>
              <small>01 — WEB STOREFRONT</small>
              <h3>Sienvera</h3>
              <p>
                A handmade art storefront with a soft luxury feel and a real admin workflow behind it.
              </p>
            </div>

            {/* 02: AttenDex */}
            <div className="no it" style={pos(335)}>
              02
            </div>
            <svg
              className="bd it"
              style={pos(335, 30, 58)}
              viewBox="0 0 300 580"
            >
              <defs>
                <pattern id="wn" width="60" height="70" patternUnits="userSpaceOnUse">
                  <rect x="10" y="12" width="40" height="46" fill="var(--g3)" />
                </pattern>
              </defs>
              <rect className="d" width="300" height="580" />
              <rect fill="url(#wn)" width="300" height="580" />
              <rect className="w" x="130" y="222" width="40" height="46" />
              <circle className="k" cx="150" cy="240" r="9" />
              <path
                className="bk"
                d="M118 212v-16h16M182 212v-16h-16M118 278v16h16M182 278v16h-16"
                stroke="var(--bg)"
                strokeWidth="5"
                fill="none"
              />
            </svg>
            <div className="cp it" style={pos(335)}>
              <small>02 — AI BIOMETRICS</small>
              <h3>AttenDex</h3>
              <p>
                Real-time facial attendance system with 98% accuracy, cutting roll-call duration by 80%.
              </p>
            </div>

            {/* 03: CryptoNova */}
            <div className="no it" style={pos(408)}>
              03
            </div>
            <svg
              className="bd it"
              style={pos(408, 34, 52)}
              viewBox="0 0 340 520"
            >
              <circle
                className="spin"
                cx="262"
                cy="96"
                r="84"
                fill="none"
                stroke="var(--g3)"
                strokeWidth="34"
                strokeDasharray="7 13"
              />
              <circle className="k" cx="262" cy="96" r="52" />
              <rect className="d" x="0" y="400" width="60" height="120" />
              <rect className="c" x="70" y="340" width="60" height="180" />
              <rect className="b" x="140" y="290" width="60" height="230" />
              <rect className="a" x="210" y="230" width="60" height="290" />
              <rect className="k" x="280" y="190" width="60" height="330" />
            </svg>
            <div className="cp it" style={pos(408)}>
              <small>03 — WEB APP</small>
              <h3>CryptoNova</h3>
              <p>
                Cryptocurrency tracking platform streaming live Binance prices with 24/7 server-side alert sweeps.
              </p>
            </div>

            {/* 04: Sonder Cafe */}
            <div className="no it" style={pos(481)}>
              04
            </div>
            <svg
              className="bd it"
              style={pos(481, 34, 34)}
              viewBox="0 0 340 340"
            >
              <defs>
                <pattern id="stp" width="68" height="60" patternUnits="userSpaceOnUse">
                  <rect width="34" height="60" fill="var(--bg)" />
                </pattern>
              </defs>
              <rect className="k" y="40" width="340" height="60" />
              <rect fill="url(#stp)" y="40" width="340" height="60" />
              <rect className="c" x="20" y="100" width="300" height="240" />
              <rect className="a" x="44" y="130" width="150" height="110" />
              <rect className="k" x="224" y="150" width="70" height="190" />
              <rect className="k" x="84" y="195" width="52" height="45" />
              <circle className="k" cx="142" cy="212" r="11" />
            </svg>
            <div className="cp it" style={pos(481)}>
              <small>04 — BRANDING & WEB</small>
              <h3>Sonder Cafe</h3>
              <p>A cinematic café experience designed to feel warm, premium, and unforgettable.</p>
            </div>

            {/* 05: Madgear Cafe */}
            <div className="no it" style={pos(554)}>
              05
            </div>
            <svg
              className="bd it"
              style={pos(554, 26, 46)}
              viewBox="0 0 260 460"
            >
              <path className="k" d="M30 460V80L70 0H190L230 80V460z" />
              <rect className="a" x="62" y="96" width="136" height="110" />
              <g className="k bk">
                <rect x="96" y="130" width="16" height="16" />
                <rect x="148" y="130" width="16" height="16" />
                <rect x="112" y="146" width="40" height="16" />
                <rect x="96" y="162" width="16" height="16" />
                <rect x="148" y="162" width="16" height="16" />
              </g>
              <path className="c" d="M30 268H230V310H30z" />
              <circle className="w" cx="85" cy="289" r="11" />
              <circle className="b" cx="150" cy="289" r="10" />
              <circle className="b" cx="185" cy="289" r="10" />
              <rect className="d" x="100" y="350" width="60" height="14" />
            </svg>
            <div className="cp it" style={pos(554)}>
              <small>05 — ANIMATED EXPERIENCE</small>
              <h3>Madgear Cafe</h3>
              <p>A bold modern café website designed with high-energy interactions and strong visual identity.</p>
            </div>

            {/* 06: RepoMedic */}
            <div className="no it" style={pos(627)}>
              06
            </div>
            <svg
              className="bd it"
              style={pos(627, 34, 48)}
              viewBox="0 0 340 480"
            >
              <path
                d="M170 480V210M170 330Q170 250 80 250V130M170 260Q170 190 260 190V90"
                stroke="var(--ink)"
                strokeWidth="22"
                fill="none"
              />
              <g className="k pu">
                <circle cx="80" cy="110" r="30" />
                <circle cx="260" cy="70" r="30" />
                <circle cx="170" cy="200" r="26" />
              </g>
              <g className="w">
                <circle cx="80" cy="110" r="12" />
                <circle cx="260" cy="70" r="12" />
              </g>
              <circle className="d" cx="256" cy="400" r="64" />
              <path className="w" d="M244 365h24v26h26v24h-26v26h-24v-26h-26v-24h26z" />
            </svg>
            <div className="cp it" style={pos(627)}>
              <small>06 — AI DEV TOOL</small>
              <h3>RepoMedic</h3>
              <p>AI-powered repository analysis inspecting codebases for structure, dependencies, and hygiene.</p>
            </div>

            {/* 07: Luna */}
            <div className="no it" style={pos(700)}>
              07
            </div>
            <svg
              className="bd it"
              style={pos(700, 30, 50)}
              viewBox="0 0 300 500"
            >
              <path className="k" d="M170 20A90 90 0 1 0 170 200A70 70 0 1 1 170 20z" />
              <path className="d" d="M110 500V240H190V500z" />
              <g className="b tw">
                <circle cx="230" cy="70" r="4" />
                <circle cx="260" cy="130" r="3" />
                <circle cx="40" cy="60" r="3" />
              </g>
              <path className="c" d="M0 460q37-30 75 0t75 0t75 0t75 0V500H0z" />
            </svg>
            <div className="cp it" style={pos(700)}>
              <small>07 — AI ASSISTANT</small>
              <h3>Luna</h3>
              <p>Emotion-aware music recommendation chatbot interpreting mood to curate tailored audio journeys.</p>
            </div>

            {/* 08: PHOCCy */}
            <div className="no it" style={pos(773)}>
              08
            </div>
            <svg
              className="bd it"
              style={pos(773, 40, 50)}
              viewBox="0 0 400 500"
            >
              <rect className="k" x="230" width="170" height="100" rx="18" />
              <path className="k" d="M260 98h36l-34 36z" />
              <g className="w dt">
                <circle cx="282" cy="50" r="9" />
                <circle cx="315" cy="50" r="9" />
                <circle cx="348" cy="50" r="9" />
              </g>
              <polygon className="d" points="0,260 200,160 400,260" />
              <rect className="c" x="20" y="260" width="360" height="26" />
              <g className="b">
                <rect x="40" y="290" width="34" height="170" />
                <rect x="110" y="290" width="34" height="170" />
                <rect x="256" y="290" width="34" height="170" />
                <rect x="326" y="290" width="34" height="170" />
              </g>
              <path className="k" d="M170 500V400a30 30 0 0 1 60 0V500z" />
            </svg>
            <div className="cp it" style={pos(773)}>
              <small>08 — CAMPUS AI</small>
              <h3>PHOCCy</h3>
              <p>Deterministic campus assistant built for Pillai HOC College to answer admissions and events.</p>
            </div>

            {/* 09: My Portfolio */}
            <div className="no it" style={pos(846)}>
              09
            </div>
            <svg
              className="bd it"
              style={pos(846, 40, 50)}
              viewBox="-140 400 500"
            >
              <rect className="k" y="300" width="400" height="60" />
              <rect className="d" x="60" y="240" width="340" height="60" />
              <rect className="c" x="120" y="180" width="280" height="60" />
              <rect className="b" x="180" y="120" width="220" height="60" />
              <rect className="a" x="240" y="60" width="160" height="60" />
              <rect className="d" x="300" y="-140" width="100" height="200" />
              <path className="w" d="M320 60V-50a30 30 0 0 1 60 0V60z" />
            </svg>
            <div className="cp it" style={pos(846)}>
              <small>09 — YOU ARE HERE</small>
              <h3>My Portfolio</h3>
              <p>An evolving interactive digital playground built with Next.js, Framer Motion &amp; custom shaders.</p>
            </div>

            {/* Things I make */}
            <div className="tx it big" style={pos(925, 100)}>
              <p className="tiny">Things I make</p>
              <a>Creative storefronts</a>
              <a>Full-stack web apps</a>
              <a>AI-powered tools</a>
              <a>Details nobody asked for</a>
            </div>

            {/* Milestones */}
            <div className="tx it" style={pos(1020, 50)}>
              <p className="tiny">Milestones</p>
              <div className="row">
                <b>→</b>
                <div>
                  <h4>AI Intern, Reva Technologies</h4>
                  <p>AI applications, chatbots, APIs, production tools.</p>
                </div>
              </div>
              <div className="row">
                <b>→</b>
                <div>
                  <h4>Founder, Buildyn</h4>
                  <p>A creative digital studio at buildyn.in.</p>
                </div>
              </div>
              <div className="row">
                <b>→</b>
                <div>
                  <h4>MSBTE state-level project competition</h4>
                  <p>Participant.</p>
                </div>
              </div>
              <div className="row">
                <b>1</b>
                <div>
                  <h4>Pillai HOC technical quiz</h4>
                  <p>State-level championship, first place.</p>
                </div>
              </div>
            </div>

            {/* Founder Buildyn */}
            <div className="tx it" style={pos(1075, 50)}>
              <p className="tiny">Founder</p>
              <h2 style={{ '--f': 9 } as React.CSSProperties}>Buildyn.</h2>
              <p>The creative digital studio I started.</p>
              <a className="btn" href="https://buildyn.in" target="_blank" rel="noopener noreferrer">
                Visit buildyn.in ↗
              </a>
            </div>

            {/* Contact */}
            <div className="tx it" style={pos(1135, 100)}>
              <p className="tiny">Contact</p>
              <h2 style={{ '--f': 7.6 } as React.CSSProperties}>
                Seen something you like? <i>Say hi.</i>
              </h2>
              <a className="mail" href="mailto:pushkarmhatre007@gmail.com">
                pushkarmhatre007@gmail.com
              </a>
              <div className="ln">
                <a href="https://github.com/sgpushkar" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
                <a
                  href="https://linkedin.com/in/pushkarmhatre"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn ↗
                </a>
                <Link href="/works">
                  Works Archive →
                </Link>
              </div>
            </div>
          </div>

          {/* Walker Character */}
          <svg
            id="fg"
            ref={fgRef}
            viewBox="-8 0 66 140"
            onClick={handleHop}
            role="button"
            aria-label="Poke character to hop"
          >
            <title>poke me to hop</title>
            <g transform="translate(50, 0) scale(-1, 1)">
              <g className="k">
                <circle cx="30" cy="14" r="11" />
                <path d="M14 42Q14 25 30 25Q46 25 46 42L50 98H10z" />
                <path d="M14 40L-6 52 14 54z" />
              </g>
              <g className="k" id="fa" ref={faRef}>
                <path d="M16 96L6 138H22L30 96zM30 96L44 138H58L42 96z" />
              </g>
              <g className="k" id="fb" ref={fbRef} style={{ display: 'none' }}>
                <path d="M18 96L24 138H36L36 96zM28 96L36 138H48L42 96z" />
              </g>
            </g>
          </svg>

          {/* Crow Companion */}
          <svg id="cr" ref={crRef} viewBox="0 0 40 24" aria-hidden="true">
            <g className="k">
              <ellipse cx="18" cy="14" rx="9" ry="5" />
              <circle cx="29" cy="10" r="4" />
              <path d="M32 9l7 2-7 2z" />
              <path d="M9 14L0 19l10-3z" />
              <path id="wg" d="M12 12L17 0 26 11z" />
            </g>
          </svg>

          {/* Foreground Grass */}
          <div id="FG" ref={fglRef} />
        </div>
      </div>

      {/* Heads-Up Display (HUD) */}
      <div id="hud">
        <b onClick={() => goToStation(0)}>P.M</b>

        {/* Minimap Ticks */}
        <div id="mm">
          {STATIONS.map((st, idx) => (
            <i
              key={st[1]}
              title={st[1]}
              className={idx === activeStation ? 'on' : ''}
              onClick={() => goToStation(st[0] === 8 ? 0 : st[0])}
            />
          ))}
        </div>

        {/* Action Controls */}
        <span>
          <a id="pv" onClick={toggleViewMode}>
            {isPlain ? 'Walk view' : 'Simple view'}
          </a>
          <a onClick={() => goToStation(248)}>Work</a>
          <a onClick={() => goToStation(1020)}>Milestones</a>
          <a onClick={() => goToStation(1135)}>Contact</a>
          <Link href="/works">Archive</Link>
        </span>
      </div>

      {/* Building Inspector Modal Overlay */}
      <div
        id="ov"
        ref={ovRef}
        onClick={(e) => e.target === ovRef.current && closeModal()}
      >
        <button id="ox" aria-label="Close modal" onClick={closeModal}>
          ×
        </button>

        {modalOpen && (
          <>
            {/* Building Artwork Box */}
            <div
              className="modal-art-box"
              dangerouslySetInnerHTML={{ __html: modalSvgHtml }}
            />

            {/* Enriched Project Information */}
            <div className="modal-card">
              {modalProject ? (
                <>
                  <div className="modal-tag">
                    {modalProject.featured ? '★ FEATURED · ' : ''}
                    {modalProject.name}
                  </div>
                  <h2 className="modal-title">{modalProject.name}</h2>
                  <p className="modal-hook">{modalProject.hook}</p>
                  <p className="modal-desc">{modalProject.desc}</p>

                  {modalProject.features && modalProject.features.length > 0 && (
                    <ul className="modal-features">
                      {modalProject.features.slice(0, 3).map((feat, i) => (
                        <li key={i}>{feat}</li>
                      ))}
                    </ul>
                  )}

                  <div className="modal-tags">
                    {modalProject.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  <div className="modal-actions">
                    {modalProject.liveUrl && (
                      <a
                        href={modalProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn"
                      >
                        Visit Live Demo ↗
                      </a>
                    )}
                    {modalProject.githubUrl && (
                      <a
                        href={modalProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="modal-btn secondary"
                      >
                        Source Code ↗
                      </a>
                    )}
                    <Link
                      href="/works"
                      className="modal-btn secondary"
                      onClick={closeModal}
                    >
                      All Works Archive →
                    </Link>
                  </div>
                </>
              ) : (
                <div dangerouslySetInnerHTML={{ __html: modalCaptionHtml }} />
              )}
            </div>
          </>
        )}
      </div>

      {/* Circular Iris Transition Effect */}
      <div id="ir" ref={irRef} />

      {/* Interaction Hint */}
      <div id="hint" ref={hintRef}>
        Swipe, scroll or ← → to walk · tap building to inspect
      </div>

      {/* Progress Bar */}
      <div id="pg" ref={pgRef} />
    </>
  );
}
