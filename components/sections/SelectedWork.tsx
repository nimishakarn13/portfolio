'use client'

import { headline, inter, spaceMono } from '@/lib/fonts'
import { Reveal } from './scroll-fx'
import ScrollStack, { ScrollStackItem } from '@/components/effects/ScrollStack'
import { ImgPlaceholder } from '@/components/case-study/CaseStudyUI'

const PROJECTS = [
  {
    index: '01',
    title: 'Rebuilding Day One',
    tag: 'Product Design · B2B SaaS',
    blurb:
      'Simplified a 4-page, 30-field onboarding flow to 2 steps — raising completion rates and talent matches for a B2B talent platform.',
    href: '/case-study/day-one',
    external: false,
    imageLabel: 'Day One Preview',
  },
  {
    index: '02',
    title: 'Bringing Local Pharmacies Online',
    tag: 'Product Design · HealthTech / Local Commerce',
    blurb:
      'A two-sided mobile app that let neighborhood pharmacies in Bangalore sell medicines online — without losing customers to Tata 1mg, PharmEasy, or Netmeds.',
    href: '/case-study/medpay',
    external: false,
    imageLabel: 'Medpay Preview',
  },
  {
    index: '03',
    title: 'Cancer Care Journey Map',
    tag: 'Concept · Healthcare',
    blurb:
      'A subway-map-style navigation system that consolidates appointments, medications, symptoms, finances, and nutrition for cancer patients and caregivers.',
    href: '/case-study/cancer-care',
    external: false,
    imageLabel: 'Cancer Care Preview',
  },
  {
    index: '04',
    title: 'AI Portfolio Builder',
    tag: 'Product Design · AI / SaaS MVP',
    blurb:
      'A scalable MVP that lets agencies build customized client portfolios with AI — even from Zoom calls or emails.',
    href: '/case-study/building-folio',
    external: false,
    imageLabel: 'Folio Preview',
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

function WorkCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const linkProps = project.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <ScrollStackItem itemClassName="work-card">
      <a href={project.href} {...linkProps} className="work-card-link">
        <div className="work-card-inner">
          <div className="work-card-text">
            <span className={spaceMono.className} style={{ fontSize: '14px', color: '#5fe6a0' }}>
              {project.index}
            </span>
            <p
              className={spaceMono.className}
              style={{
                fontSize: '11px',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                color: '#8b8e9e',
                margin: '18px 0 14px',
              }}
            >
              {project.tag}
            </p>
            <h3
              className={headline.className}
              style={{
                fontWeight: 600,
                fontSize: 'clamp(26px, 3.2vw, 38px)',
                color: '#f7f6f9',
                margin: '0 0 18px',
                lineHeight: 1.15,
              }}
            >
              {project.title}
            </h3>
            <p
              className={inter.className}
              style={{ fontSize: '15.5px', lineHeight: 1.65, color: '#a9acbc', margin: '0 0 28px', maxWidth: '440px' }}
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
          <div className="work-card-image">
            <ImgPlaceholder label={project.imageLabel} aspect="4 / 3" />
          </div>
        </div>
      </a>
    </ScrollStackItem>
  )
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      style={{
        background: '#05060b',
        padding: 'clamp(72px, 12vw, 140px) 0',
        borderTop: '1px solid rgba(245,244,247,0.08)',
      }}
    >
      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 44px)' }}>
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
              margin: '0 0 clamp(16px, 3vw, 24px)',
            }}
          >
            A few projects worth a closer look.
          </h2>
          <p
            className={inter.className}
            style={{ fontSize: '14px', color: '#71748a', margin: '0 0 clamp(48px, 7vw, 72px)' }}
          >
            Keep scrolling — each project stacks on the last.
          </p>
        </Reveal>
      </div>

      <ScrollStack useWindowScroll itemDistance={32} itemScale={0.04} itemStackDistance={24} baseScale={0.9}>
        {PROJECTS.map((p) => (
          <WorkCard key={p.title} project={p} />
        ))}
      </ScrollStack>

      <style>{`
        .work-card {
          border-top: 1px solid rgba(245,244,247,0.14);
          border-bottom: 1px solid rgba(245,244,247,0.14);
        }
        .work-card-link {
          display: block;
          text-decoration: none;
          background: #0a0b12;
        }
        .work-card-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: clamp(40px, 6vw, 64px) clamp(16px, 5vw, 44px);
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
          align-items: center;
        }
        .work-card-text {
          display: flex;
          flex-direction: column;
        }
        @media (min-width: 860px) {
          .work-card-inner { grid-template-columns: 1fr 1fr; gap: 56px; }
        }
      `}</style>
    </section>
  )
}
