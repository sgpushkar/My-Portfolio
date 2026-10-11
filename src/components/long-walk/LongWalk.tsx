// src/components/long-walk/LongWalk.tsx
'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';

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

const STATIONS: [number, string][] = [
  [8, 'Start'],
  [150, 'About'],
  [262, 'Sienvera'],
  [335, 'AttenDex'],
  [408, 'CryptoNova'],
  [481, 'Sonder Cafe'],
  [554, 'Madgear Cafe'],
  [627, 'RepoMedic'],
  [700, 'Luna'],
  [773, 'PHOCCy'],
  [846, 'My Portfolio'],
  [925, 'Things I make'],
  [1020, 'Milestones'],
  [1075, 'Buildyn'],
  [1135, 'Contact'],
];

function seed(s: number) {
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export default function LongWalk() {
  const [isPlain, setIsPlain] = useState(false);
  const [activeStation, setActiveStation] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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
  const ocRef = useRef<HTMLDivElement>(null);

  // Animation values stored in refs to avoid re-renders
  const animRef = useRef({
    CX: 0,
    CY: 0,
    PX: 0,
    PY: 0,
    XS: 0,
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
    touchX0: 0,
    touchY0: 0,
    reduceMotion: false,
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

  // Sky stars & birds setup
  const buildSky = useCallback(() => {
    if (!skyRef.current) return;
    const r = seed(11);
    let html = '';
    for (let i = 0; i < 70; i++) {
      const z = 1 + r() * 2.2;
      html += `<div class="s" style="left:${r() * 100}%;top:${r() * 72}%;width:${z}px;height:${z}px;animation-delay:${r() * 4}s"></div>`;
    }
    for (let i = 0; i < 5; i++) {
      html += `<svg viewBox="0 0 32 10" style="top:${12 + i * 7}%;animation-delay:-${i * 14}s;animation-duration:${55 + i * 9}s"><path d="M0 8Q8-2 16 8Q24-2 32 8" fill="none" stroke="var(--ink)" stroke-width="2"/></svg>`;
    }
    skyRef.current.innerHTML = html;
  }, []);

  // Apply visual transformations
  const applyTransform = useCallback(() => {
    const { XS, CX, CY, SX, SY, lx, ly } = animRef.current;
    const pl = animRef.current.isPlain;
    const R = document.documentElement;

    if (tRef.current) {
      tRef.current.style.transform = pl ? 'none' : `translate3d(${-XS}px,0,0)`;
    }
    if (l1Ref.current) {
      l1Ref.current.style.transform = `translate3d(${-XS * 0.18 + CX * 16}px, ${CY * 5}px, 0)`;
    }
    if (l2Ref.current) {
      l2Ref.current.style.transform = `translate3d(${-XS * 0.45 + CX * 8}px, ${CY * 3}px, 0)`;
    }
    if (fglRef.current) {
      fglRef.current.style.transform = `translate3d(${-XS * 1.55 - CX * 46}px, ${-CY * 10}px, 0)`;
    }
    if (gpRef.current) {
      gpRef.current.style.backgroundPositionX = `${-XS}px`;
    }
    if (sunRef.current) {
      sunRef.current.style.transform = `translate(${SX + CX * 26}px, ${SY + CY * 10}px)`;
    }
    if (skyRef.current) {
      skyRef.current.style.transform = `translate(${CX * 20}px, ${CY * 8}px)`;
    }

    const ex = CX * 14;
    const ey = 3 + CY * 8;
    if (Math.abs(ex - lx) > 0.35 || Math.abs(ey - ly) > 0.35) {
      animRef.current.lx = ex;
      animRef.current.ly = ey;
      if (tRef.current) {
        tRef.current.style.setProperty('--ex', ex.toFixed(1));
        tRef.current.style.setProperty('--ey', ey.toFixed(1));
      }
    }
  }, []);

  // Recalculate dimensions & draw frame
  const draw = useCallback(() => {
    if (!scRef.current) return;
    const R = document.documentElement;
    const pl = animRef.current.isPlain;
    const m = scRef.current.offsetHeight - window.innerHeight;
    const p = pl || m <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / m));
    const x = p * (animRef.current.W - window.innerWidth);
    animRef.current.XS = x;

    const { u } = animRef.current;
    const cur = (x + window.innerWidth * 0.34) / u;
    let n = pl ? 0 : Math.min(1, Math.max(0, (cur - 805) / 75));
    n = n * n * (3 - 2 * n);

    R.style.setProperty('--n', n.toString());
    R.style.setProperty('--co', (Math.sin(Math.PI * n) * 0.9).toFixed(2));

    for (let i = 0; i < 6; i++) {
      const c = [0, 1, 2].map((k) => Math.round(D[i][k] + (NT[i][k] - D[i][k]) * n));
      R.style.setProperty(`--${N[i]}`, `rgb(${c.join(',')})`);
    }

    const dk = n < 0.5;
    const dynamicVars: [string, string, string][] = [
      ['--tx', '#0c0c0c', '#f2f1ee'],
      ['--tm', '#454543', '#cfcecb'],
      ['--tg', '#f2f1ee', '#0c0c0c'],
      ['--tgm', '#b9b8b4', '#4a4a48'],
    ];
    dynamicVars.forEach(([name, light, dark]) => {
      R.style.setProperty(name, dk ? light : dark);
    });

    // Legs animation
    const f = Math.floor(x / (u * 3)) % 2;
    if (faRef.current && fbRef.current) {
      faRef.current.style.display = f ? 'none' : '';
      fbRef.current.style.display = f ? '' : 'none';
    }

    // Progress bar
    if (pgRef.current) {
      pgRef.current.style.width = `${p * 100}%`;
    }

    // Walk hint
    if (hintRef.current) {
      hintRef.current.style.opacity = x > 60 ? '0' : '1';
    }

    // Sun positions
    animRef.current.SX = window.innerWidth * 0.03 + p * (window.innerWidth * 0.94 - 38 * u);
    animRef.current.SY = u * (6 + (1 - Math.pow(Math.sin(Math.PI * p), 0.6)) * 58);

    // Active minimap tick
    let b = 0;
    STATIONS.forEach((q, j) => {
      if (Math.abs(q[0] - cur) < Math.abs(STATIONS[b][0] - cur)) b = j;
    });
    setActiveStation(b);

    // Character position
    if (fgRef.current) {
      const e = Math.min(1, x / (45 * u));
      fgRef.current.style.left = `${window.innerWidth * 0.15 - (1 - e) * window.innerWidth * 0.24}px`;
    }

    // Building proximity hover effect (.nr)
    const fx = window.innerWidth * 0.15 + 2.8 * u;
    const buildings = document.querySelectorAll<HTMLElement>('.bd.it:not(.hd)');
    buildings.forEach((bld) => {
      const bxPos = parseFloat(bld.style.getPropertyValue('--x') || '0');
      const bw = parseFloat(bld.style.getPropertyValue('--w') || '0');
      const center = bxPos + bw / 2;
      const isNear = !pl && Math.abs(center * u - x - fx) < u * 20;
      bld.classList.toggle('nr', isNear);
    });

    applyTransform();
  }, [applyTransform]);

  // Resize handler
  const handleResize = useCallback(() => {
    const u = window.innerHeight / 100;
    animRef.current.u = u;
    const W = TW * u;
    animRef.current.W = W;
    const R = document.documentElement;
    R.style.setProperty('--u', `${u}px`);

    if (scRef.current) {
      scRef.current.style.height = animRef.current.isPlain
        ? 'auto'
        : `${W - window.innerWidth + window.innerHeight}px`;
    }

    buildLayers();
    draw();
  }, [buildLayers, draw]);

  // Smooth station jump
  const goToStation = useCallback((xu: number) => {
    if (!scRef.current) return;
    const { u, W } = animRef.current;
    const m = scRef.current.offsetHeight - window.innerHeight;
    if (m <= 0) return;

    const t = Math.max(0, Math.min(1, (xu * u - window.innerWidth * 0.34) / (W - window.innerWidth)));
    const top = t * m;
    const far = (Math.abs(top - window.scrollY) / m) * (W - window.innerWidth) > 90 * u;
    const cx = `${window.innerWidth * 0.15}px 60%`;

    if (!far) {
      window.scrollTo({ top, behavior: 'smooth' });
      return;
    }

    if (irRef.current) {
      irRef.current.style.clipPath = `circle(150% at ${cx})`;
      setTimeout(() => {
        window.scrollTo({ top, behavior: 'instant' });
        if (irRef.current) {
          irRef.current.style.clipPath = `circle(0 at ${cx})`;
        }
      }, 520);
    }
  }, []);

  // Character Hop
  const handleHop = useCallback(() => {
    if (!fgRef.current) return;
    fgRef.current.classList.remove('hop');
    void fgRef.current.getBoundingClientRect();
    fgRef.current.classList.add('hop');
  }, []);

  // Open modal for building
  const openBuildingModal = useCallback((el: HTMLElement) => {
    if (el.classList.contains('hd') || !ocRef.current || !ovRef.current) return;
    const clonedSvg = el.cloneNode(true) as HTMLElement;
    const nextEl = el.nextElementSibling as HTMLElement;
    if (!nextEl) return;
    const clonedCaption = nextEl.cloneNode(true) as HTMLElement;

    clonedSvg.removeAttribute('class');
    clonedSvg.style.cssText =
      'width:100%;height:auto;max-height:72vh;filter:drop-shadow(10px 8px 0 var(--g3))';
    clonedCaption.className = 'cp';
    clonedCaption.removeAttribute('style');

    ocRef.current.innerHTML = '';
    ocRef.current.appendChild(clonedSvg);
    ocRef.current.appendChild(clonedCaption);

    ovRef.current.classList.add('on');
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

    const onScroll = () => draw();
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
    window.addEventListener('pointermove', onPointerMove);

    // Keyboard navigation
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        return;
      }
      if (document.body.classList.contains('pl')) return;

      const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (d) {
        e.preventDefault();
        window.scrollBy({ top: d * animRef.current.u * 34, behavior: 'smooth' });
      }
      if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        handleHop();
      }
    };
    window.addEventListener('keydown', onKeyDown);

    // Wheel navigation
    const onWheel = (e: WheelEvent) => {
      if (
        Math.abs(e.deltaX) > Math.abs(e.deltaY) &&
        !document.body.classList.contains('pl')
      ) {
        e.preventDefault();
        window.scrollBy(0, e.deltaX);
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });

    // Touch navigation
    const onTouchStart = (e: TouchEvent) => {
      animRef.current.touchX0 = e.touches[0].clientX;
      animRef.current.touchY0 = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (document.body.classList.contains('pl')) return;
      const dx = e.touches[0].clientX - animRef.current.touchX0;
      const dy = e.touches[0].clientY - animRef.current.touchY0;
      if (Math.abs(dx) > Math.abs(dy) * 1.4) {
        e.preventDefault();
        window.scrollBy(0, -dx * 1.4);
        animRef.current.touchX0 = e.touches[0].clientX;
      }
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });

    // Attach click handlers to buildings
    const buildings = document.querySelectorAll<HTMLElement>('.bd.it:not(.hd)');
    const buildingListeners: [HTMLElement, () => void][] = [];
    buildings.forEach((bld) => {
      bld.setAttribute('role', 'button');
      bld.setAttribute('aria-label', 'Open this piece');
      const listener = () => openBuildingModal(bld);
      bld.addEventListener('click', listener);
      buildingListeners.push([bld, listener]);
    });

    // RequestAnimationFrame Loop
    let reqId: number;
    const tick = (t: number) => {
      const { PX, PY, reduceMotion, ms, mx, my } = animRef.current;
      animRef.current.CX +=
        ((PX * 0.85 + (reduceMotion ? 0 : Math.sin(t / 2600) * 0.45)) - animRef.current.CX) * 0.06;
      animRef.current.CY +=
        ((PY * 0.6 + (reduceMotion ? 0 : Math.cos(t / 3300) * 0.2)) - animRef.current.CY) * 0.06;

      applyTransform();

      // Crow companion following
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

        crRef.current.style.transform = `translate(${animRef.current.bx}px,${animRef.current.by}px) scaleX(${animRef.current.fd.toFixed(
          2
        )})`;
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
      buildingListeners.forEach(([bld, listener]) => {
        bld.removeEventListener('click', listener);
      });
    };
  }, [buildSky, handleResize, draw, applyTransform, openBuildingModal, handleHop, closeModal]);

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
          <svg id="sun" ref={sunRef} viewBox="0 0 100 100">
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
            <div className="tx it" style={{ ['--x' as any]: 9, ['--w' as any]: 112, ['--f' as any]: 10.5 }}>
              <p className="tiny">Pushkar Mhatre · Full-stack developer &amp; AI enthusiast · Mumbai</p>
              <h1>
                I Build Things That Feel <i>As Good</i> As They Look.
              </h1>
              <p>
                Founder of Buildyn. Full-stack builder, AI tinkerer, collector of small details. This is
                what I&apos;ve made so far.
              </p>
              <a className="btn" onClick={() => goToStation(248)}>
                Explore my work
              </a>
              <a className="btn" onClick={() => goToStation(1150)}>
                Say hi
              </a>
            </div>

            {/* Landmark Building (Architectural Silhouette) */}
            <svg
              className="bd it hd"
              style={{ ['--x' as any]: 136, ['--w' as any]: 62, ['--h' as any]: 80 }}
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
            <div className="tx it" style={{ ['--x' as any]: 150, ['--w' as any]: 56, top: 'calc(var(--u)*8)' }}>
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
            <div className="tx it" style={{ ['--x' as any]: 222, ['--w' as any]: 40 }}>
              <p className="tiny">Selected work</p>
              <h2 style={{ ['--f' as any]: 8 }}>7+ shipped. Nine on this road.</h2>
            </div>

            {/* 01: Sienvera */}
            <div className="no it" style={{ ['--x' as any]: 262 }}>
              01
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 262, ['--w' as any]: 34, ['--h' as any]: 50 }}
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
            <div className="cp it" style={{ ['--x' as any]: 262 }}>
              <small>01 — WEB</small>
              <h3>Sienvera</h3>
              <p>
                A digital storefront for handmade art, featuring collection browsing, commission
                enquiries, theme switching, and administrative workflows.
              </p>
            </div>

            {/* 02: AttenDex */}
            <div className="no it" style={{ ['--x' as any]: 335 }}>
              02
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 335, ['--w' as any]: 30, ['--h' as any]: 58 }}
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
            <div className="cp it" style={{ ['--x' as any]: 335 }}>
              <small>02 — AI</small>
              <h3>AttenDex</h3>
              <p>
                An AI-powered attendance system using face recognition to simplify classroom
                attendance. Tested results: 98% face-detection accuracy, 80% reduction in attendance time.
              </p>
            </div>

            {/* 03: CryptoNova */}
            <div className="no it" style={{ ['--x' as any]: 408 }}>
              03
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 408, ['--w' as any]: 34, ['--h' as any]: 52 }}
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
            <div className="cp it" style={{ ['--x' as any]: 408 }}>
              <small>03 — WEB APP</small>
              <h3>CryptoNova</h3>
              <p>
                A cryptocurrency tracking platform with live prices, server-side alerts, and
                notifications. 50 live trading pairs; alerts designed to trigger within one second.
              </p>
            </div>

            {/* 04: Sonder Cafe */}
            <div className="no it" style={{ ['--x' as any]: 481 }}>
              04
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 481, ['--w' as any]: 34, ['--h' as any]: 34 }}
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
            <div className="cp it" style={{ ['--x' as any]: 481 }}>
              <small>04 — WEB</small>
              <h3>Sonder Cafe</h3>
              <p>A digital presence for a café.</p>
            </div>

            {/* 05: Madgear Cafe */}
            <div className="no it" style={{ ['--x' as any]: 554 }}>
              05
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 554, ['--w' as any]: 26, ['--h' as any]: 46 }}
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
            <div className="cp it" style={{ ['--x' as any]: 554 }}>
              <small>05 — CONCEPT</small>
              <h3>Madgear Cafe</h3>
              <p>A website concept for a gaming café.</p>
            </div>

            {/* 06: RepoMedic */}
            <div className="no it" style={{ ['--x' as any]: 627 }}>
              06
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 627, ['--w' as any]: 34, ['--h' as any]: 48 }}
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
            <div className="cp it" style={{ ['--x' as any]: 627 }}>
              <small>06 — DEV TOOL</small>
              <h3>RepoMedic</h3>
              <p>A developer-focused project.</p>
            </div>

            {/* 07: Luna */}
            <div className="no it" style={{ ['--x' as any]: 700 }}>
              07
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 700, ['--w' as any]: 30, ['--h' as any]: 50 }}
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
            <div className="cp it" style={{ ['--x' as any]: 700 }}>
              <small>07 — AI</small>
              <h3>Luna</h3>
              <p>A mood-based music recommendation chatbot.</p>
            </div>

            {/* 08: PHOCCy */}
            <div className="no it" style={{ ['--x' as any]: 773 }}>
              08
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 773, ['--w' as any]: 40, ['--h' as any]: 50 }}
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
            <div className="cp it" style={{ ['--x' as any]: 773 }}>
              <small>08 — AI</small>
              <h3>PHOCCy</h3>
              <p>A chatbot built for Pillai HOC College.</p>
            </div>

            {/* 09: My Portfolio */}
            <div className="no it" style={{ ['--x' as any]: 846 }}>
              09
            </div>
            <svg
              className="bd it"
              style={{ ['--x' as any]: 846, ['--w' as any]: 40, ['--h' as any]: 50 }}
              viewBox="0 -140 400 500"
            >
              <rect className="k" y="300" width="400" height="60" />
              <rect className="d" x="60" y="240" width="340" height="60" />
              <rect className="c" x="120" y="180" width="280" height="60" />
              <rect className="b" x="180" y="120" width="220" height="60" />
              <rect className="a" x="240" y="60" width="160" height="60" />
              <rect className="d" x="300" y="-140" width="100" height="200" />
              <path className="w" d="M320 60V-50a30 30 0 0 1 60 0V60z" />
            </svg>
            <div className="cp it" style={{ ['--x' as any]: 846 }}>
              <small>09 — YOU ARE HERE</small>
              <h3>My Portfolio</h3>
              <p>My own evolving digital playground.</p>
            </div>

            {/* Things I make */}
            <div className="tx it big" style={{ ['--x' as any]: 925, ['--w' as any]: 100 }}>
              <p className="tiny">Things I make</p>
              <a>Creative storefronts</a>
              <a>Full-stack web apps</a>
              <a>AI-powered tools</a>
              <a>Details nobody asked for</a>
            </div>

            {/* Milestones */}
            <div className="tx it" style={{ ['--x' as any]: 1020, ['--w' as any]: 50 }}>
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
            <div className="tx it" style={{ ['--x' as any]: 1075, ['--w' as any]: 50 }}>
              <p className="tiny">Founder</p>
              <h2 style={{ ['--f' as any]: 9 }}>Buildyn.</h2>
              <p>The creative digital studio I started.</p>
              <a className="btn" href="https://buildyn.in" target="_blank" rel="noopener noreferrer">
                Visit buildyn.in ↗
              </a>
            </div>

            {/* Contact */}
            <div className="tx it" style={{ ['--x' as any]: 1135, ['--w' as any]: 100 }}>
              <p className="tiny">Contact</p>
              <h2 style={{ ['--f' as any]: 7.6 }}>
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
              </div>
            </div>
          </div>

          {/* Walker Character */}
          <svg
            id="fg"
            ref={fgRef}
            viewBox="-8 0 66 140"
            onClick={handleHop}
          >
            <title>poke me</title>
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
        <b>P.M</b>
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
        <span>
          <a id="pv" onClick={toggleViewMode}>
            {isPlain ? 'Walk view' : 'Simple view'}
          </a>
          <a onClick={() => goToStation(248)}>Work</a>
          <a onClick={() => goToStation(1020)}>Milestones</a>
          <a onClick={() => goToStation(1135)}>Contact</a>
        </span>
      </div>

      {/* Building Inspector Overlay Modal */}
      <div id="ov" ref={ovRef} onClick={(e) => e.target === ovRef.current && closeModal()}>
        <button id="ox" aria-label="Close" onClick={closeModal}>
          ×
        </button>
        <div id="oc" ref={ocRef} />
      </div>

      {/* Circular Iris Transition Effect */}
      <div id="ir" ref={irRef} />

      {/* Interaction Hint */}
      <div id="hint" ref={hintRef}>
        Scroll, swipe or ← → to walk · tap a building to open it
      </div>

      {/* Progress Bar */}
      <div id="pg" ref={pgRef} />
    </>
  );
}
