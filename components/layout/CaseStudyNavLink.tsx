'use client'

import { useState } from 'react'
import { CASE_STUDIES } from './caseStudies'

type CaseStudyNavLinkProps = {
  href?: string
  className?: string
  style?: React.CSSProperties
  label?: string
}

export default function CaseStudyNavLink({ href = '#work', className, style, label = 'CASE STUDY' }: CaseStudyNavLinkProps) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <a href={href} className={className} style={{ ...style, textDecoration: 'none' }}>
        {label}
      </a>

      {open && (
        // Outer layer starts flush against the trigger (no marginTop gap) and uses
        // paddingTop for the visual spacing instead — a margin gap here would be a
        // dead zone the mouse has to cross without hovering any part of this wrapper,
        // firing mouseleave before the cursor ever reaches the panel below.
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            paddingTop: '10px',
            zIndex: 300,
          }}
        >
          <div
            style={{
              background: '#12121a',
              border: '1px solid rgba(245,244,247,0.16)',
              borderRadius: '6px',
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              minWidth: '150px',
              boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
            }}
          >
            {CASE_STUDIES.map((cs) => (
              <a
                key={cs.href}
                href={cs.href}
                className="nav-link"
                style={{
                  fontSize: '12px',
                  color: '#f5f4f7',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  padding: '7px 10px',
                  borderRadius: '4px',
                  whiteSpace: 'nowrap',
                }}
              >
                {cs.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
