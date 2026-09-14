'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import { ImgPlaceholder, Divider } from './CaseStudyUI'
import { ACCENT, BG, BODY, BORDER, HEADLINE, MUTED, MUTED_LABEL, SM, TEXT } from './theme'

export type CaseStudyNavSection = { id: string; number: string; title: string }

type CaseStudyLayoutProps = {
  eyebrow: string
  title: string
  subtitle: string
  meta: { label: string; value: string }[]
  heroImageLabel?: string
  sections: CaseStudyNavSection[]
  nextHref?: string
  nextLabel?: string
  children: React.ReactNode
}

export default function CaseStudyLayout({
  eyebrow,
  title,
  subtitle,
  meta,
  heroImageLabel = 'Hero Image Placeholder',
  sections,
  nextHref = '/#work',
  nextLabel = 'View Next Case Study',
  children,
}: CaseStudyLayoutProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id ?? '')
  const [isMobile, setIsMobile] = useState(false)
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const lenis = new Lenis()
    lenisRef.current = lenis

    const tickerFn = (time: number) => lenis.raf(time * 1000)
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add(tickerFn)
    gsap.ticker.lagSmoothing(0)

    const headings = gsap.utils.toArray<HTMLElement>('.case-section-heading')
    const tweens = headings.map((el) =>
      gsap.fromTo(
        el,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        }
      )
    )

    return () => {
      lenis.destroy()
      gsap.ticker.remove(tickerFn)
      tweens.forEach((t) => t.scrollTrigger?.kill())
      ScrollTrigger.refresh()
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -55% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [sections])

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -100 })
    } else {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div style={{ background: BG, color: TEXT, minHeight: '100vh' }}>
      {/* ── Page Wrapper ── */}
      <main style={{ paddingTop: '40px' }}>

        {/* ── Page Hero ── */}
        <section style={{ padding: isMobile ? '60px 24px 0' : '80px 64px 0', maxWidth: '1200px', margin: '0 auto' }}>
          <p
            style={{
              fontFamily: SM,
              fontSize: '11px',
              color: MUTED_LABEL,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              margin: '0 0 28px 0',
            }}
          >
            {eyebrow}
          </p>

          <h1
            style={{
              fontFamily: HEADLINE,
              fontWeight: 700,
              fontSize: 'clamp(38px, 6.4vw, 84px)',
              lineHeight: 1.02,
              color: TEXT,
              margin: '0 0 28px 0',
              letterSpacing: '-0.01em',
              maxWidth: '880px',
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontFamily: BODY,
              fontSize: '18px',
              lineHeight: 1.65,
              color: MUTED,
              margin: '0 0 40px 0',
              maxWidth: '640px',
            }}
          >
            {subtitle}
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '32px',
              marginBottom: '52px',
            }}
          >
            {meta.map(({ label, value }) => (
              <div key={label}>
                <span style={{ fontFamily: SM, fontSize: '10px', color: MUTED_LABEL, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                  {label}
                </span>
                <span style={{ fontFamily: BODY, fontSize: '15px', color: TEXT }}>
                  {value}
                </span>
              </div>
            ))}
          </div>

          <ImgPlaceholder label={heroImageLabel} />
        </section>

        <div style={{ margin: '0 64px', paddingTop: '60px' }}>
          <Divider />
        </div>

        {/* ── Mobile Pill Nav ── */}
        {isMobile && (
          <div
            style={{
              overflowX: 'auto',
              display: 'flex',
              gap: '8px',
              padding: '20px 24px',
              borderBottom: `1px solid ${BORDER}`,
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {sections.map(({ id, number, title: sectionTitle }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                style={{
                  flexShrink: 0,
                  padding: '8px 16px',
                  borderRadius: '999px',
                  border: `1px solid ${activeSection === id ? ACCENT : 'rgba(245,244,247,0.16)'}`,
                  background: activeSection === id ? ACCENT : 'transparent',
                  color: activeSection === id ? '#05060b' : MUTED_LABEL,
                  fontFamily: SM,
                  fontSize: '11px',
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                {number} {sectionTitle.toUpperCase()}
              </button>
            ))}
          </div>
        )}

        {/* ── Two Column Layout ── */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'flex-start',
            padding: isMobile ? '0 24px' : '0 64px',
          }}
        >
          {/* ── Sidebar ── */}
          {!isMobile && (
            <aside
              style={{
                width: '25%',
                flexShrink: 0,
                position: 'sticky',
                top: '110px',
                height: 'calc(100vh - 110px)',
                paddingTop: '80px',
                paddingRight: '40px',
                paddingBottom: '40px',
                overflowY: 'auto',
              }}
            >
              <nav>
                {sections.map(({ id, number, title: sectionTitle }) => {
                  const isActive = activeSection === id
                  return (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '10px 0',
                        textAlign: 'left',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: SM,
                          fontSize: '11px',
                          color: isActive ? ACCENT : MUTED_LABEL,
                          letterSpacing: '0.06em',
                          transition: 'color 0.2s ease',
                          minWidth: '20px',
                        }}
                      >
                        {number}
                      </span>
                      <span
                        style={{
                          fontFamily: BODY,
                          fontSize: '14px',
                          color: isActive ? ACCENT : MUTED_LABEL,
                          fontWeight: isActive ? 600 : 400,
                          borderLeft: isActive ? `2px solid ${ACCENT}` : '2px solid transparent',
                          paddingLeft: '12px',
                          transition: 'all 0.2s ease',
                        }}
                      >
                        {sectionTitle}
                      </span>
                    </button>
                  )
                })}
              </nav>
            </aside>
          )}

          {/* ── Main Content ── */}
          <div style={{ flex: 1, minWidth: 0, paddingTop: '80px', paddingBottom: '80px' }}>
            {children}
          </div>
        </div>

        {/* ── Case Study Footer ── */}
        <footer style={{ borderTop: `1px solid ${BORDER}`, padding: '80px 64px', textAlign: 'center' }}>
          <p style={{ fontFamily: SM, fontSize: '11px', color: MUTED_LABEL, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
            Next Project
          </p>
          <a
            href={nextHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            <span
              style={{
                fontFamily: HEADLINE,
                fontWeight: 700,
                fontSize: 'clamp(32px, 5vw, 64px)',
                color: TEXT,
                letterSpacing: '-0.01em',
                lineHeight: 1,
                transition: 'color 0.2s ease',
              }}
            >
              {nextLabel}
            </span>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ flexShrink: 0 }}
            >
              <path
                d="M8 20H32M32 20L22 10M32 20L22 30"
                stroke={TEXT}
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </footer>

      </main>
    </div>
  )
}
