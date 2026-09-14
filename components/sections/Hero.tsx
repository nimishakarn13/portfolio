'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import CaseStudyNavLink from '@/components/layout/CaseStudyNavLink'
import { Displacement } from '@/components/canvasui/Displacement'
import { headline as playfair } from '@/lib/fonts'

const inter = Inter({ weight: ['400', '500', '600'], subsets: ['latin'] })

function ResumeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 2h9l5 5v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100dvh',
        background: '#000000',
        overflow: 'hidden',
        fontFamily: `${inter.style.fontFamily}, sans-serif`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* ── Header ── */}
      <header
        className="hero-header"
        style={{
          position: 'relative',
          zIndex: 20,
          padding: '28px clamp(16px, 5vw, 44px)',
        }}
      >
        <span
          className={inter.className}
          style={{ fontSize: 'clamp(12px, 3vw, 15px)', fontWeight: 600, color: '#f5f4f7', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}
        >
          NIMISHA KARN
        </span>

        <nav className="hero-header-nav" style={{ gap: 'clamp(18px, 3vw, 36px)' }}>
          <CaseStudyNavLink
            href="#work"
            label="Work"
            className={`nav-link ${inter.className}`}
            style={{ fontSize: '13px', color: '#c7c9d6', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
          />
          <a
            href="#about"
            className={`nav-link ${inter.className}`}
            style={{ fontSize: '13px', color: '#c7c9d6', textDecoration: 'none', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
          >
            About me
          </a>
          <a
            href="#contact"
            className={`nav-link ${inter.className}`}
            style={{ fontSize: '13px', color: '#c7c9d6', textDecoration: 'none', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
          >
            Contact
          </a>
        </nav>

        <a
          href="https://drive.google.com/file/d/1wbFD24DsvsZRSfpl-l4_xM4LFKWFoTCE/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={inter.className}
          style={{
            justifySelf: 'end',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 16px',
            borderRadius: '999px',
            border: '1px solid rgba(245,244,247,0.22)',
            background: 'rgba(245,244,247,0.04)',
            color: '#f5f4f7',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}
        >
          <ResumeIcon />
          RESUME
        </a>
      </header>

      {/* ── Hero body ── */}
      <div className="hero-body" style={{ position: 'relative', flex: 1 }}>
        {/* enormous, near-invisible decorative background word */}
        <span
          aria-hidden="true"
          className={playfair.className}
          style={{
            position: 'absolute',
            left: '50%',
            top: '52%',
            transform: 'translate(-50%, -50%)',
            fontSize: 'clamp(140px, 22vw, 360px)',
            fontWeight: 600,
            color: '#f5f4f7',
            opacity: 0.035,
            whiteSpace: 'nowrap',
            letterSpacing: '0.01em',
            pointerEvents: 'none',
            userSelect: 'none',
            zIndex: 0,
          }}
        >
          product
        </span>

        {/* portrait — existing asset, unmodified file; greyscale + bottom blend are CSS-only */}
        <div className="hero-portrait">
          <Displacement
            style={{ width: '100%', height: '100%' }}
            grid={50}
            radius={0.18}
            strength={0.12}
            threshold={60}
            aberration={1.2}
            grain={0.08}
          >
            <Image
              src="/Me.png"
              alt="Portrait of Nimisha Karn"
              width={1226}
              height={1283}
              priority
              sizes="(min-width: 768px) 46vw, 82vw"
              style={{
                display: 'block',
                width: '100%',
                height: 'auto',
                filter: 'grayscale(100%)',
              }}
            />
          </Displacement>
          {/* overlay: fades the portrait's base into the (now flat black) hero
              background instead of ending on a hard photographic edge — kept
              outside Displacement so it always paints above its WebGL canvas */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 45%, #000000 96%)',
              pointerEvents: 'none',
            }}
          />
        </div>

        <div className="hero-columns">
          <div className="hero-left">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '7px 14px',
                borderRadius: '999px',
                background: 'rgba(80,200,140,0.08)',
                border: '1px solid rgba(120,220,170,0.22)',
                marginBottom: 'clamp(28px, 5vw, 48px)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#5fe6a0',
                  boxShadow: '0 0 8px rgba(95,230,160,0.8)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              <span
                className={inter.className}
                style={{
                  fontSize: '10.5px',
                  fontWeight: 600,
                  color: '#8fe8bb',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}
              >
                Available for senior product design roles
              </span>
            </div>

            <h1
              className={playfair.className}
              style={{
                fontWeight: 500,
                fontSize: 'clamp(34px, 4.6vw, 66px)',
                lineHeight: 1.12,
                letterSpacing: '-0.01em',
                color: '#f7f6f9',
                margin: 0,
              }}
            >
              Designing products
              <br />
              that work <em style={{ fontStyle: 'italic' }}>under real-</em>
              <br />
              <em style={{ fontStyle: 'italic' }}>world</em> pressure.
            </h1>
          </div>

          <div className="hero-right">
            <p
              style={{
                fontSize: '15.5px',
                lineHeight: 1.65,
                color: '#a9acbc',
                maxWidth: '420px',
                margin: 0,
              }}
            >
              Senior Product Designer based in Ahmedabad, with 4+ years across fintech, health-tech, and B2B SaaS. I
              show the thinking, research, and decisions behind every project.
            </p>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                marginTop: 'clamp(24px, 4vw, 40px)',
              }}
            >
              <a
                href="#work"
                className={inter.className}
                style={{ fontSize: '14px', fontWeight: 600, color: '#f5f4f7', textDecoration: 'none', whiteSpace: 'nowrap', pointerEvents: 'auto' }}
              >
                See selected work ↓
              </a>
              <span style={{ width: '1px', height: '14px', background: 'rgba(245,244,247,0.2)' }} />
              <a
                href="#contact"
                className={inter.className}
                style={{ fontSize: '14px', color: '#8b8e9e', textDecoration: 'none', whiteSpace: 'nowrap', pointerEvents: 'auto' }}
              >
                Let&rsquo;s talk →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-header {
          display: grid;
          grid-template-columns: auto auto;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }
        .hero-header-nav {
          display: none;
        }
        @media (min-width: 768px) {
          .hero-header {
            grid-template-columns: 1fr auto 1fr;
          }
          .hero-header-nav {
            display: flex;
            justify-content: center;
          }
        }

        .hero-body {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          padding: clamp(24px, 5vw, 44px) clamp(16px, 5vw, 44px) 0;
          display: flex;
          flex-direction: column;
        }

        .hero-portrait {
          position: relative;
          z-index: 1;
          order: 3;
          width: min(78vw, 420px);
          margin: clamp(24px, 6vw, 40px) auto 0;
        }

        .hero-columns {
          position: relative;
          z-index: 2;
          order: 1;
          display: flex;
          flex-direction: column;
          gap: clamp(28px, 6vw, 48px);
          /* Text overlaps the portrait by design (it sits above it, z-index 2
             vs 1) — pointer-events:none here lets hover/cursor events pass
             through to the portrait's displacement effect underneath instead
             of being captured by this box's empty space. Re-enabled on the
             actual links below so they stay clickable. */
          pointer-events: none;
        }

        .hero-left {
          width: 100%;
        }

        .hero-right {
          width: 100%;
        }

        @media (min-width: 900px) {
          .hero-body {
            flex-direction: row;
            align-items: stretch;
            min-height: 640px;
            padding-bottom: clamp(32px, 6vw, 64px);
          }

          /* Centered and large, anchored near the header. It's free to run
             behind .hero-left and .hero-right — the bold display headline
             stays legible over it, and the bottom overlay + greyscale keep
             the area under .hero-right dark/desaturated enough to stay
             legible too (verified by rendering, not assumed). */
          .hero-portrait {
            position: absolute;
            order: initial;
            left: 50%;
            transform: translateX(-50%);
            top: 0;
            right: auto;
            width: clamp(440px, 40vw, 680px);
            margin: 0;
          }

          .hero-columns {
            order: initial;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            width: 100%;
            gap: 40px;
            margin-top: clamp(48px, 8vh, 96px);
          }

          .hero-left {
            width: 50%;
            flex-shrink: 0;
          }

          .hero-right {
            width: 380px;
            flex-shrink: 0;
            margin-top: clamp(140px, 20vh, 260px);
          }
        }

        /* Between 900–1199px there isn't enough horizontal room for a big
           centered portrait plus a 380px-wide right column without the two
           overlapping over real (illegible) photo content — confirmed by
           measuring actual rendered rects, not assumed. Drop the description
           below the portrait/headline row instead of shrinking the portrait
           down to a size that no longer reads as "large". */
        @media (min-width: 900px) and (max-width: 1199px) {
          .hero-columns {
            flex-wrap: wrap;
          }
          .hero-right {
            width: 100%;
            max-width: 520px;
            margin-top: 100px;
          }
        }
      `}</style>
    </section>
  )
}
