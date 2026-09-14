'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { headline, inter, spaceMono } from '@/lib/fonts'
import { Reveal } from './scroll-fx'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const PROJECTS = [
  {
    index: '01',
    title: 'Rebuilding Day One',
    tag: 'Product Design · B2B SaaS',
    blurb:
      'Simplified a 4-page, 30-field onboarding flow to 2 steps — raising completion rates and talent matches for a B2B talent platform.',
    href: '/case-study/day-one',
    external: false,
    accent: 'linear-gradient(135deg, #2f6fed, #05060b 72%)',
  },
  {
    index: '02',
    title: 'Cancer Care Journey Map',
    tag: 'Concept · Healthcare',
    blurb:
      'A subway-map-style navigation system that consolidates appointments, medications, symptoms, finances, and nutrition for cancer patients and caregivers.',
    href: '/case-study/cancer-care',
    external: false,
    accent: 'linear-gradient(135deg, #e0556f, #05060b 72%)',
  },
  {
    index: '03',
    title: 'AI Portfolio Builder',
    tag: 'Product Design · AI / SaaS MVP',
    blurb:
      'A scalable MVP that lets agencies build customized client portfolios with AI — even from Zoom calls or emails.',
    href: '/case-study/building-folio',
    external: false,
    accent: 'linear-gradient(135deg, #a86ff0, #05060b 72%)',
  },
]

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 18 18 6M18 6H9M18 6v9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function WorkRow({ project, reverse }: { project: (typeof PROJECTS)[number]; reverse: boolean }) {
  const accentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = accentRef.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('.work-row'),
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  const linkProps = project.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Reveal y={48}>
      <a
        href={project.href}
        {...linkProps}
        className={`work-row ${reverse ? 'work-row-reverse' : ''}`}
      >
        <div className="work-row-media">
          <div ref={accentRef} className="work-row-accent" style={{ background: project.accent }} />
        </div>
        <div className="work-row-text">
          <span className={spaceMono.className} style={{ fontSize: '13px', color: '#5fe6a0' }}>
            {project.index}
          </span>
          <p
            className={spaceMono.className}
            style={{
              fontSize: '10.5px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#8b8e9e',
              margin: '14px 0 12px',
            }}
          >
            {project.tag}
          </p>
          <h3
            className={headline.className}
            style={{
              fontWeight: 600,
              fontSize: 'clamp(24px, 3vw, 34px)',
              color: '#f5f4f7',
              margin: '0 0 16px',
              lineHeight: 1.15,
            }}
          >
            {project.title}
          </h3>
          <p
            className={inter.className}
            style={{ fontSize: '15px', lineHeight: 1.65, color: '#a9acbc', margin: '0 0 24px', maxWidth: '440px' }}
          >
            {project.blurb}
          </p>
          <span
            className={inter.className}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '13.5px',
              fontWeight: 600,
              color: '#f5f4f7',
            }}
          >
            {project.external ? 'View project' : 'View case study'} <ArrowIcon />
          </span>
        </div>
      </a>
    </Reveal>
  )
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      style={{
        background: '#05060b',
        padding: 'clamp(72px, 12vw, 140px) clamp(16px, 5vw, 44px)',
        borderTop: '1px solid rgba(245,244,247,0.08)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto' }}>
        <Reveal>
          <p
            className={spaceMono.className}
            style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#8fe8bb',
              margin: '0 0 20px',
            }}
          >
            Selected work
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className={headline.className}
            style={{
              fontWeight: 600,
              fontSize: 'clamp(28px, 4vw, 46px)',
              lineHeight: 1.2,
              color: '#f7f6f9',
              maxWidth: '680px',
              margin: '0 0 clamp(48px, 7vw, 80px)',
            }}
          >
            A few projects worth a closer look.
          </h2>
        </Reveal>

        <div className="work-list">
          {PROJECTS.map((p, i) => (
            <WorkRow key={p.title} project={p} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>

      <style>{`
        .work-list {
          display: flex;
          flex-direction: column;
          gap: clamp(48px, 7vw, 80px);
        }
        .work-row {
          display: flex;
          flex-direction: column;
          gap: 28px;
          text-decoration: none;
          border-top: 1px solid rgba(245,244,247,0.1);
          padding-top: clamp(32px, 5vw, 48px);
        }
        .work-row-media {
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(245,244,247,0.1);
        }
        .work-row-accent {
          aspect-ratio: 16 / 10;
          width: 100%;
          height: 116%;
          transform: translateY(-8%);
        }
        .work-row-text {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 860px) {
          .work-row { flex-direction: row; align-items: center; gap: 56px; }
          .work-row-reverse { flex-direction: row-reverse; }
          .work-row-media { flex: 0 0 46%; }
          .work-row-text { flex: 1; }
        }
      `}</style>
    </section>
  )
}
