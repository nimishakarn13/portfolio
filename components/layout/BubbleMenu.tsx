'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export interface BubbleMenuItem {
  label: string
  href: string
  ariaLabel?: string
  rotation?: number
  external?: boolean
  hoverStyles?: { bgColor?: string; textColor?: string }
}

export interface BubbleMenuProps {
  logo?: React.ReactNode
  onMenuClick?: (open: boolean) => void
  className?: string
  style?: React.CSSProperties
  menuAriaLabel?: string
  menuBg?: string
  menuContentColor?: string
  /** Background for the logo + toggle bubbles specifically. Falls back to `menuBg` (which also styles the pill list) when omitted. */
  bubbleBg?: string
  /** Icon/content color for the logo + toggle bubbles specifically. Falls back to `menuContentColor` when omitted. */
  bubbleContentColor?: string
  useFixedPosition?: boolean
  items: BubbleMenuItem[]
  animationEase?: string
  animationDuration?: number
  staggerDelay?: number
}

type PillCSSVars = React.CSSProperties & {
  '--item-rot'?: string
  '--pill-bg'?: string
  '--pill-color'?: string
  '--hover-bg'?: string
  '--hover-color'?: string
}

export default function BubbleMenu({
  logo,
  onMenuClick,
  className,
  style,
  menuAriaLabel = 'Toggle menu',
  menuBg = '#fff',
  menuContentColor = '#111',
  bubbleBg = menuBg,
  bubbleContentColor = menuContentColor,
  useFixedPosition = false,
  items,
  animationEase = 'bounce.out',
  animationDuration = 0.5,
  staggerDelay = 0.12,
}: BubbleMenuProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showOverlay, setShowOverlay] = useState(false)

  const overlayRef = useRef<HTMLDivElement>(null)
  const bubblesRef = useRef<(HTMLAnchorElement | null)[]>([])
  const labelRefs = useRef<(HTMLSpanElement | null)[]>([])

  const menuItems = items
  const containerClassName = ['bubble-menu', useFixedPosition ? 'fixed' : 'absolute', className]
    .filter(Boolean)
    .join(' ')

  const handleToggle = () => {
    const nextState = !isMenuOpen
    if (nextState) setShowOverlay(true)
    setIsMenuOpen(nextState)
    onMenuClick?.(nextState)
  }

  useEffect(() => {
    const overlay = overlayRef.current
    const bubbles = bubblesRef.current.filter((el): el is HTMLAnchorElement => Boolean(el))
    const labels = labelRefs.current.filter((el): el is HTMLSpanElement => Boolean(el))

    if (!overlay || !bubbles.length) return

    if (isMenuOpen) {
      gsap.set(overlay, { display: 'flex' })
      gsap.killTweensOf([overlay, ...bubbles, ...labels])
      gsap.set(overlay, { opacity: 0 })
      // Drop-in: each pill falls from above and bounces to rest, like it
      // landed under gravity, instead of popping/scaling into place.
      gsap.set(bubbles, { y: -140, opacity: 0 })
      gsap.set(labels, { autoAlpha: 0 })

      gsap.to(overlay, { opacity: 1, duration: 0.35, ease: 'power2.out' })

      bubbles.forEach((bubble, i) => {
        const delay = i * staggerDelay + gsap.utils.random(-0.05, 0.05)
        const tl = gsap.timeline({ delay })

        tl.to(bubble, {
          y: 0,
          opacity: 1,
          duration: animationDuration + 0.3,
          ease: animationEase,
        })
        if (labels[i]) {
          tl.to(
            labels[i],
            {
              autoAlpha: 1,
              duration: animationDuration * 0.6,
              ease: 'power1.out',
            },
            `-=${animationDuration * 0.4}`
          )
        }
      })
    } else if (showOverlay) {
      gsap.killTweensOf([overlay, ...bubbles, ...labels])
      gsap.to(labels, {
        autoAlpha: 0,
        duration: 0.15,
        ease: 'power2.in',
      })
      gsap.to(bubbles, {
        y: 60,
        opacity: 0,
        duration: 0.25,
        ease: 'power2.in',
      })
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          gsap.set(overlay, { display: 'none' })
          setShowOverlay(false)
        },
      })
    }
  }, [isMenuOpen, showOverlay, animationEase, animationDuration, staggerDelay])

  useEffect(() => {
    const handleResize = () => {
      if (isMenuOpen) {
        const bubbles = bubblesRef.current.filter((el): el is HTMLAnchorElement => Boolean(el))
        const isDesktop = window.innerWidth >= 900

        bubbles.forEach((bubble, i) => {
          const item = menuItems[i]
          if (bubble && item) {
            const rotation = isDesktop ? (item.rotation ?? 0) : 0
            gsap.set(bubble, { rotation })
          }
        })
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isMenuOpen, menuItems])

  return (
    <>
      <nav className={containerClassName} style={style} aria-label="Main navigation">
        <a href="/" className="bubble logo-bubble" aria-label="Home" style={{ background: bubbleBg }}>
          <span className="logo-content">
            {typeof logo === 'string' ? (
              <img src={logo} alt="Logo" className="bubble-logo" />
            ) : (
              <span style={{ color: bubbleContentColor }}>{logo}</span>
            )}
          </span>
        </a>

        <button
          type="button"
          className={`bubble toggle-bubble menu-btn ${isMenuOpen ? 'open' : ''}`}
          onClick={handleToggle}
          aria-label={menuAriaLabel}
          aria-pressed={isMenuOpen}
          style={{ background: bubbleBg }}
        >
          <span className="menu-line" style={{ background: bubbleContentColor }} />
          <span className="menu-line short" style={{ background: bubbleContentColor }} />
        </button>
      </nav>
      {showOverlay && (
        <div
          ref={overlayRef}
          className={`bubble-menu-items ${useFixedPosition ? 'fixed' : 'absolute'}`}
          aria-hidden={!isMenuOpen}
          onClick={(e) => {
            // Close on backdrop click (outside the pill list itself), the
            // usual modal-scrim convention — only meaningful now that the
            // backdrop is a visible dark overlay rather than fully transparent.
            if (e.target === e.currentTarget && isMenuOpen) handleToggle()
          }}
        >
          <ul className="pill-list" role="menu" aria-label="Menu links">
            {menuItems.map((item, idx) => {
              const linkProps = item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}
              const pillStyle: PillCSSVars = {
                '--item-rot': `${item.rotation ?? 0}deg`,
                '--pill-bg': menuBg,
                '--pill-color': menuContentColor,
                '--hover-bg': item.hoverStyles?.bgColor || '#f3f4f6',
                '--hover-color': item.hoverStyles?.textColor || menuContentColor,
              }
              return (
                <li key={idx} role="none" className="pill-col">
                  <a
                    role="menuitem"
                    href={item.href}
                    {...linkProps}
                    aria-label={item.ariaLabel || item.label}
                    className="pill-link"
                    style={pillStyle}
                    onClick={() => {
                      setIsMenuOpen(false)
                      onMenuClick?.(false)
                    }}
                    ref={(el) => {
                      bubblesRef.current[idx] = el
                    }}
                  >
                    <span
                      className="pill-label"
                      ref={(el) => {
                        labelRefs.current[idx] = el
                      }}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      <style>{`
        .bubble-menu {
          left: 0;
          right: 0;
          top: 2em;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 0 2em;
          pointer-events: none;
          z-index: 600;
        }
        .bubble-menu.fixed { position: fixed; }
        .bubble-menu.absolute { position: absolute; }
        .bubble-menu .bubble {
          --bubble-size: 48px;
          width: var(--bubble-size);
          height: var(--bubble-size);
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          pointer-events: auto;
          text-decoration: none;
        }
        .bubble-menu .logo-bubble,
        .bubble-menu .toggle-bubble {
          will-change: transform;
        }
        .bubble-menu .logo-bubble {
          width: auto;
          min-height: var(--bubble-size);
          height: var(--bubble-size);
          padding: 0 18px;
          border-radius: calc(var(--bubble-size) / 2);
          gap: 8px;
        }
        .bubble-menu .toggle-bubble {
          width: var(--bubble-size);
          height: var(--bubble-size);
          border: none;
          cursor: pointer;
          flex-direction: column;
          padding: 0;
        }
        .bubble-menu .bubble-logo {
          max-height: 60%;
          max-width: 100%;
          object-fit: contain;
          display: block;
        }
        .bubble-menu .logo-content {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .bubble-menu .menu-line {
          width: 22px;
          height: 2px;
          border-radius: 2px;
          display: block;
          margin: 0 auto;
          transition: transform 0.3s ease, opacity 0.3s ease;
          transform-origin: center;
        }
        .bubble-menu .menu-line + .menu-line { margin-top: 6px; }
        .bubble-menu .menu-btn.open .menu-line:first-child { transform: translateY(4px) rotate(45deg); }
        .bubble-menu .menu-btn.open .menu-line:last-child { transform: translateY(-4px) rotate(-45deg); }

        @media (min-width: 768px) {
          .bubble-menu .bubble { --bubble-size: 56px; }
        }

        .bubble-menu-items {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: clamp(32px, 6vh, 80px);
          background: rgba(5, 6, 11, 0.94);
          pointer-events: auto;
          z-index: 599;
        }
        .bubble-menu-items.fixed { position: fixed; }
        .bubble-menu-items.absolute { position: absolute; }
        .bubble-menu-items .pill-list {
          list-style: none;
          margin: 0;
          padding: 0 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 0;
          row-gap: 16px;
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          pointer-events: auto;
          justify-content: center;
        }
        .bubble-menu-items .pill-col {
          display: flex;
          justify-content: center;
          align-items: stretch;
          flex: 0 0 calc(100% / 3);
          box-sizing: border-box;
          padding: 8px;
        }
        .bubble-menu-items .pill-link {
          --pill-bg: #0a0b12;
          --pill-color: #f5f4f7;
          --item-rot: 0deg;
          --pill-min-h: 120px;
          --hover-bg: #5fe6a0;
          --hover-color: #05060b;
          width: 100%;
          min-height: var(--pill-min-h);
          padding: clamp(1rem, 2vw, 2.5rem) 0;
          font-size: clamp(1.2rem, 2.4vw, 2.2rem);
          font-weight: 500;
          border-radius: 32px;
          background: var(--pill-bg);
          color: var(--pill-color);
          text-decoration: none;
          border: 1px solid rgba(245,244,247,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          transition: background 0.3s ease, color 0.3s ease, border-color 0.3s ease;
          will-change: transform;
          box-sizing: border-box;
          text-transform: lowercase;
        }
        @media (min-width: 900px) {
          .bubble-menu-items .pill-link { transform: rotate(var(--item-rot)); }
          .bubble-menu-items .pill-link:hover {
            transform: rotate(var(--item-rot)) scale(1.06);
            background: var(--hover-bg);
            color: var(--hover-color);
            border-color: transparent;
          }
          .bubble-menu-items .pill-link:active { transform: rotate(var(--item-rot)) scale(0.94); }
        }
        .bubble-menu-items .pill-link .pill-label {
          display: inline-block;
          will-change: transform, opacity;
        }
        @media (max-width: 899px) {
          .bubble-menu-items { padding-top: 100px; overflow-y: auto; }
          .bubble-menu-items .pill-col { flex: 0 0 100%; }
          .bubble-menu-items .pill-link { min-height: 76px; font-size: clamp(1.1rem, 4vw, 1.6rem); }
          .bubble-menu-items .pill-link:hover,
          .bubble-menu-items .pill-link:active {
            background: var(--hover-bg);
            color: var(--hover-color);
            border-color: transparent;
          }
        }
      `}</style>
    </>
  )
}
