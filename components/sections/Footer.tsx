import { headline, inter, spaceMono } from '@/lib/fonts'
import { Reveal } from './scroll-fx'

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About me' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: '#000000',
        borderTop: '1px solid rgba(245,244,247,0.08)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          padding: 'clamp(56px, 10vw, 120px) clamp(16px, 5vw, 44px) clamp(32px, 5vw, 48px)',
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
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className={headline.className}
              style={{
                fontWeight: 600,
                fontSize: 'clamp(30px, 5vw, 56px)',
                lineHeight: 1.15,
                color: '#f7f6f9',
                maxWidth: '760px',
                margin: '0 0 clamp(32px, 5vw, 48px)',
              }}
            >
              Let&rsquo;s build something worth using.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <a
              href="mailto:nimishakarn13@gmail.com"
              className={`${inter.className} footer-email`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: 'clamp(16px, 2.4vw, 20px)',
                fontWeight: 600,
                color: '#f5f4f7',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(245,244,247,0.3)',
                paddingBottom: '6px',
                marginBottom: 'clamp(20px, 3vw, 28px)',
              }}
            >
              nimishakarn13@gmail.com
            </a>
          </Reveal>

          <Reveal delay={0.14}>
            <a
              href="https://drive.google.com/file/d/1wbFD24DsvsZRSfpl-l4_xM4LFKWFoTCE/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`${inter.className} footer-resume`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: 600,
                color: '#a9acbc',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                marginBottom: 'clamp(56px, 9vw, 96px)',
              }}
            >
              View Resume ↗
            </a>
          </Reveal>

          <div className="footer-bottom">
            <span
              className={inter.className}
              style={{ fontSize: '13px', color: '#71748a', letterSpacing: '0.02em' }}
            >
              © {new Date().getFullYear()} Nimisha Karn. All rights reserved. · Vibecoded in Claude Code
            </span>

            <nav style={{ display: 'flex', gap: 'clamp(18px, 3vw, 32px)' }}>
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`nav-link ${inter.className}`}
                  style={{ fontSize: '13px', color: '#a9acbc', textDecoration: 'none', letterSpacing: '0.02em' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <style>{`
        .footer-email:hover, .footer-resume:hover {
          color: #5fe6a0;
          border-color: rgba(95,230,160,0.5);
        }
        .footer-bottom {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-top: clamp(24px, 4vw, 32px);
          border-top: 1px solid rgba(245,244,247,0.08);
        }
        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>
    </footer>
  )
}
