'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function FigmaCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const seenRef = useRef(false)

  useEffect(() => {
    const el = cursorRef.current
    if (!el) return

    gsap.set(el, { x: -120, y: -120 })

    const xTo = gsap.quickTo(el, 'x', { duration: 0.25, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, 'y', { duration: 0.25, ease: 'power3.out' })

    const onMove = (e: MouseEvent) => {
      if (!seenRef.current) {
        gsap.to(el, { opacity: 1, duration: 0.15 })
        seenRef.current = true
      }
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const onLeave = () => gsap.to(el, { opacity: 0, duration: 0.15 })
    const onEnter = () => gsap.to(el, { opacity: 1, duration: 0.15 })

    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    document.documentElement.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
      document.documentElement.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
        opacity: 0,
      }}
    >
      {/* Arrow — hot-spot is top-left at (0,0) */}
      <svg
        width="22"
        height="30"
        viewBox="0 0 22 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: 'block' }}
      >
        <path
          d="M1.5 1.5 L1.5 22 L6.5 16.5 L10 25.5 L13.5 24 L10 15.5 L16.5 15.5 Z"
          fill="#E8694A"
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>

      {/* Name tag */}
      <div
        style={{
          position: 'absolute',
          top: '24px',
          left: '14px',
          background: '#E8694A',
          color: '#fff',
          padding: '3px 9px',
          borderRadius: '2px 10px 10px 10px',
          fontSize: '11px',
          fontFamily: 'var(--font-space-mono, "Space Mono", monospace)',
          fontWeight: 700,
          whiteSpace: 'nowrap',
          letterSpacing: '0.04em',
          lineHeight: 1.5,
          userSelect: 'none',
        }}
      >
        You
      </div>
    </div>
  )
}
