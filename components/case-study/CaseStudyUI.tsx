'use client'

import { useEffect, useState } from 'react'
import { ACCENT, BODY, BORDER, HEADLINE, MUTED, MUTED_LABEL, SM, SURFACE, TEXT } from './theme'

export function LiveClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      )
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span style={{ fontFamily: SM, fontSize: '12px', color: MUTED_LABEL, letterSpacing: '0.04em' }}>
      {time} · Ahmedabad, IN
    </span>
  )
}

export function ImgPlaceholder({ label, aspect = '16 / 9' }: { label: string; aspect?: string }) {
  return (
    <div
      style={{
        width: '100%',
        aspectRatio: aspect,
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
      }}
    >
      <span style={{ fontFamily: SM, fontSize: '11px', color: MUTED_LABEL, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </div>
  )
}

export function SectionEyebrow({ number, title }: { number: string; title: string }) {
  return (
    <p style={{ fontFamily: SM, fontSize: '11px', color: MUTED_LABEL, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '20px' }}>
      {number} · {title}
    </p>
  )
}

export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="case-section-heading"
      style={{
        fontFamily: HEADLINE,
        fontWeight: 600,
        fontSize: 'clamp(28px, 4vw, 44px)',
        lineHeight: 1.1,
        color: TEXT,
        margin: '0 0 32px 0',
        letterSpacing: '-0.01em',
      }}
    >
      {children}
    </h2>
  )
}

export function BodyText({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <p style={{ fontFamily: BODY, fontSize: '16px', lineHeight: 1.75, color: MUTED, margin: '0 0 20px 0', ...style }}>
      {children}
    </p>
  )
}

export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      style={{
        margin: '48px 0 0 0',
        padding: '32px 40px',
        borderLeft: `3px solid ${ACCENT}`,
        background: 'rgba(95,230,160,0.06)',
        borderRadius: '0 10px 10px 0',
      }}
    >
      <p
        style={{
          fontFamily: HEADLINE,
          fontWeight: 600,
          fontSize: 'clamp(20px, 2.5vw, 28px)',
          color: TEXT,
          lineHeight: 1.3,
          margin: 0,
          letterSpacing: '-0.005em',
        }}
      >
        {children}
      </p>
    </blockquote>
  )
}

export function Divider() {
  return <div style={{ width: '100%', height: '1px', background: BORDER }} />
}
