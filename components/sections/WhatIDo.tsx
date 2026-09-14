import { headline, inter, spaceMono } from '@/lib/fonts'
import { Reveal, StaggerGroup, Counter } from './scroll-fx'

const STATS = [
  { to: 4, prefix: '', suffix: '+', label: 'Years of experience' },
  { to: 95, prefix: '>', suffix: '%', label: 'Project completion rate' },
  { to: 18, prefix: '', suffix: '+', label: 'Projects finished' },
]

const CAPABILITIES = [
  {
    title: 'Product Design',
    body: 'End-to-end interface design — from early flows and wireframes to polished, production-ready screens.',
  },
  {
    title: 'UX Research',
    body: 'Interviews, audits, and competitive analysis that ground decisions in how people actually use the product.',
  },
  {
    title: 'Design Systems',
    body: 'Reusable components and documented patterns that keep a growing product consistent as it scales.',
  },
  {
    title: 'Prototyping & Handoff',
    body: 'Interactive prototypes and clean specs that get engineering teams building the right thing, fast.',
  },
]

export default function WhatIDo() {
  return (
    <section
      id="about"
      style={{
        background: '#05060b',
        padding: 'clamp(72px, 12vw, 140px) clamp(16px, 5vw, 44px)',
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
              margin: '0 0 24px',
            }}
          >
            What I do
          </p>
        </Reveal>

        <div className="about-split">
          <Reveal delay={0.05}>
            <p
              className={headline.className}
              style={{
                fontWeight: 500,
                fontSize: 'clamp(26px, 3.4vw, 40px)',
                lineHeight: 1.3,
                color: '#f7f6f9',
                margin: 0,
                maxWidth: '560px',
              }}
            >
              I bridge the gap between design and development to deliver products that feel
              consistent and work smoothly.
            </p>
          </Reveal>

          <div className="about-stats">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.08} className="about-stat">
                <div
                  className={headline.className}
                  style={{
                    fontSize: 'clamp(40px, 5vw, 64px)',
                    fontWeight: 600,
                    color: '#f5f4f7',
                    lineHeight: 1,
                    letterSpacing: '-0.01em',
                  }}
                >
                  <Counter to={s.to} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <p
                  className={spaceMono.className}
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: '#8b8e9e',
                    margin: '10px 0 0',
                  }}
                >
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <StaggerGroup className="capability-grid">
          {CAPABILITIES.map((c) => (
            <div key={c.title} className="capability-card">
              <h3
                className={headline.className}
                style={{ fontWeight: 500, fontSize: '19px', color: '#f5f4f7', margin: '0 0 12px' }}
              >
                {c.title}
              </h3>
              <p
                className={inter.className}
                style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#a9acbc', margin: 0 }}
              >
                {c.body}
              </p>
            </div>
          ))}
        </StaggerGroup>
      </div>

      <style>{`
        .about-split {
          display: flex;
          flex-direction: column;
          gap: clamp(32px, 5vw, 48px);
          padding-bottom: clamp(56px, 8vw, 88px);
          margin-bottom: clamp(56px, 8vw, 88px);
          border-bottom: 1px solid rgba(245,244,247,0.08);
        }
        .about-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .about-stat {
          border-left: 1px solid rgba(245,244,247,0.14);
          padding-left: 18px;
        }
        .capability-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1px;
          background: rgba(245,244,247,0.1);
          border: 1px solid rgba(245,244,247,0.1);
          border-radius: 12px;
          overflow: hidden;
        }
        .capability-card {
          background: #05060b;
          padding: clamp(24px, 4vw, 36px);
          transition: background 0.25s ease;
        }
        .capability-card:hover {
          background: #0a0b12;
        }
        @media (min-width: 720px) {
          .about-split { flex-direction: row; align-items: center; justify-content: space-between; }
          .about-split > div:first-child { flex: 1; }
          .about-stats { flex: 1; max-width: 460px; }
        }
        @media (min-width: 640px) {
          .capability-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .capability-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  )
}
