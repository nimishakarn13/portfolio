import { headline, inter, spaceMono } from '@/lib/fonts'
import { Reveal, DrawLine } from './scroll-fx'

const JOURNEY = [
  {
    period: '2024 — Present',
    role: 'Product Designer',
    org: 'Spirinova Technologies (now DELCU Technologies)',
    body: 'Worked on seamless UI/UX solutions across CMS tools, improving user satisfaction and product usability. Collaborated closely with dev teams, delivered functional designs aligned with business goals.',
  },
  {
    period: '2022 — 2024',
    role: 'Product Designer',
    org: 'Underground Movement',
    body: 'Led product-wide UI/UX design strategies, delivering intuitive interfaces and consistent visual systems. Focused on data-driven iteration, collaborative handoffs, and user-first decision making.',
  },
  {
    period: '2021 — 2022',
    role: 'UX Designer',
    org: 'Buzo Media Services',
    body: 'Supported the design team with UX research, wireframes, and prototypes. Helped deliver responsive designs across platforms.',
  },
]

export default function DesignJourney() {
  return (
    <section
      id="journey"
      style={{
        background: '#05060b',
        padding: 'clamp(72px, 12vw, 140px) clamp(16px, 5vw, 44px)',
        borderTop: '1px solid rgba(245,244,247,0.08)',
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
            My design journey
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
            4+ years, one throughline.
          </h2>
        </Reveal>

        <div className="timeline">
          <div className="timeline-rail">
            <DrawLine className="timeline-rail-fill" />
          </div>

          <div className="timeline-items">
            {JOURNEY.map((item, i) => (
              <Reveal key={item.org} delay={i * 0.05} y={36} className="timeline-item">
                <span className="timeline-dot" aria-hidden="true" />
                <p
                  className={spaceMono.className}
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.06em',
                    color: '#8b8e9e',
                    margin: '0 0 8px',
                  }}
                >
                  {item.period}
                </p>
                <h3
                  className={headline.className}
                  style={{ fontWeight: 600, fontSize: '21px', color: '#f5f4f7', margin: '0 0 4px' }}
                >
                  {item.role}
                </h3>
                <p
                  className={inter.className}
                  style={{ fontSize: '13.5px', fontWeight: 600, color: '#5fe6a0', margin: '0 0 12px' }}
                >
                  {item.org}
                </p>
                <p
                  className={inter.className}
                  style={{ fontSize: '14.5px', lineHeight: 1.65, color: '#a9acbc', margin: 0, maxWidth: '560px' }}
                >
                  {item.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .timeline {
          position: relative;
          display: grid;
          grid-template-columns: 20px 1fr;
          gap: 28px;
        }
        .timeline-rail {
          position: relative;
          width: 1px;
          background: rgba(245,244,247,0.14);
        }
        .timeline-rail-fill {
          position: absolute;
          inset: 0;
          width: 1px;
          background: #5fe6a0;
          box-shadow: 0 0 10px rgba(95,230,160,0.5);
        }
        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: clamp(40px, 6vw, 64px);
        }
        .timeline-item {
          position: relative;
        }
        .timeline-dot {
          position: absolute;
          left: -52px;
          top: 6px;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: #5fe6a0;
          box-shadow: 0 0 8px rgba(95,230,160,0.7);
        }
      `}</style>
    </section>
  )
}
