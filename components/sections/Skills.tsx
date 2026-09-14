import {
  PenTool,
  Component,
  Sparkles,
  LayoutTemplate,
  Users,
  ClipboardCheck,
  BarChart3,
  Route,
  StickyNote,
  MousePointerClick,
  Code2,
  type LucideIcon,
} from 'lucide-react'
import { siFigma, siFramer, siReact, siNextdotjs, siThreedotjs, siWebgl, siGreensock } from 'simple-icons'
import { headline, inter, spaceMono } from '@/lib/fonts'
import { Reveal, StaggerGroup } from './scroll-fx'

type SkillIcon = LucideIcon | (({ size }: { size?: number }) => React.JSX.Element)

/** Renders a Simple Icons brand mark as a monochrome inline SVG (currentColor). */
function brandIcon(path: string): SkillIcon {
  return function BrandIcon({ size = 15 }: { size?: number }) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ flexShrink: 0 }}>
        <path d={path} />
      </svg>
    )
  }
}

type Skill = { name: string; icon: SkillIcon }

const SKILL_GROUPS: { label: string; skills: Skill[] }[] = [
  {
    label: 'Design',
    skills: [
      { name: 'Product & UX Design', icon: PenTool },
      { name: 'Design Systems', icon: Component },
      { name: 'Interaction & Motion Design', icon: Sparkles },
      { name: 'Wireframing & Prototyping', icon: LayoutTemplate },
    ],
  },
  {
    label: 'Research',
    skills: [
      { name: 'User Research', icon: Users },
      { name: 'Usability Testing', icon: ClipboardCheck },
      { name: 'Competitive Analysis', icon: BarChart3 },
      { name: 'Journey Mapping', icon: Route },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'Figma', icon: brandIcon(siFigma.path) },
      { name: 'FigJam', icon: StickyNote },
      { name: 'Framer', icon: brandIcon(siFramer.path) },
      { name: 'Principle', icon: MousePointerClick },
    ],
  },
  {
    label: 'Development',
    skills: [
      { name: 'React', icon: brandIcon(siReact.path) },
      { name: 'Next.js', icon: brandIcon(siNextdotjs.path) },
      { name: 'WebGL', icon: brandIcon(siWebgl.path) },
      { name: 'Three.js', icon: brandIcon(siThreedotjs.path) },
      { name: 'GSAP', icon: brandIcon(siGreensock.path) },
      { name: 'Design-to-Code Handoff', icon: Code2 },
    ],
  },
]

const MARQUEE_ITEMS = [
  'Product Design', 'User Research', 'Design Systems', 'Prototyping',
  'Figma', 'Motion Design', 'React & Next.js', 'WebGL',
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        background: '#05060b',
        padding: 'clamp(72px, 12vw, 140px) 0',
        borderTop: '1px solid rgba(245,244,247,0.08)',
        overflow: 'hidden',
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
            What I bring to the table
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className={headline.className}
            style={{
              fontWeight: 700,
              fontSize: 'clamp(30px, 4.4vw, 50px)',
              lineHeight: 1.15,
              color: '#f7f6f9',
              maxWidth: '680px',
              width: 'fit-content',
              margin: '0 0 clamp(56px, 8vw, 88px)',
            }}
          >
            The toolkit behind the pixels.
          </h2>
        </Reveal>
      </div>

      {/* marquee band — full-width breakout, strong visual transition into the grid */}
      <div className="marquee" style={{ margin: '0 0 clamp(64px, 9vw, 96px)' }}>
        <div className="marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span
              key={i}
              className={headline.className}
              style={{ fontSize: 'clamp(32px, 5.4vw, 58px)', fontWeight: 600, color: 'rgba(245,244,247,0.9)' }}
            >
              {item}
              <span style={{ color: '#5fe6a0', margin: '0 clamp(24px, 3.6vw, 44px)', fontSize: '0.5em', verticalAlign: 'middle' }}>
                ✦
              </span>
            </span>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 44px)' }}>
        <StaggerGroup className="skills-grid" stagger={0.1}>
          {SKILL_GROUPS.map((group) => (
            <div key={group.label} className="skill-card">
              <h3
                className={spaceMono.className}
                style={{
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#8b8e9e',
                  margin: '0 0 20px',
                }}
              >
                {group.label}
              </h3>
              <div className="skill-pill-row">
                {group.skills.map(({ name, icon: Icon }) => (
                  <span key={name} className={`${inter.className} skill-pill`}>
                    <Icon size={15} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </StaggerGroup>
      </div>

      <style>{`
        .marquee {
          width: 100%;
          overflow: hidden;
          border-top: 1px solid rgba(245,244,247,0.08);
          border-bottom: 1px solid rgba(245,244,247,0.08);
          padding: clamp(16px, 3vw, 24px) 0;
        }
        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: marquee-scroll 32s linear infinite;
        }
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track { animation: none; }
        }
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(20px, 3vw, 24px);
        }
        .skill-card {
          background: #0a0b12;
          border: 1px solid rgba(245,244,247,0.1);
          border-radius: 16px;
          padding: clamp(24px, 3vw, 30px);
        }
        .skill-pill-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }
        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          color: #e4e5ee;
          padding: 9px 16px 9px 12px;
          border-radius: 999px;
          background: #0d0f16;
          border: 1px solid rgba(245,244,247,0.14);
          line-height: 1;
          transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
        }
        .skill-pill svg {
          color: #8fe8bb;
        }
        .skill-pill:hover {
          border-color: rgba(95,230,160,0.5);
          background: rgba(95,230,160,0.08);
          transform: translateY(-1px);
        }
        @media (min-width: 720px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1100px) {
          .skills-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `}</style>
    </section>
  )
}
