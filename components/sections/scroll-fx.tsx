'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type RevealProps = {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
  style?: React.CSSProperties
}

/** Fades + slides a block up into place the first time it crosses into view. */
export function Reveal({ children, delay = 0, y = 32, className, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      )
    })
    return () => ctx.revert()
  }, [delay, y])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

type StaggerGroupProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  stagger?: number
  y?: number
}

/** Reveals each direct child in sequence as the group scrolls into view. */
export function StaggerGroup({ children, className, style, stagger = 0.09, y = 28 }: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const items = Array.from(el.children)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        }
      )
    })
    return () => ctx.revert()
  }, [stagger, y])

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  )
}

type CounterProps = {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
  style?: React.CSSProperties
}

/** Counts up to a value once it scrolls into view. */
export function Counter({ to, prefix = '', suffix = '', duration = 1.6, className, style }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obj = { val: 0 }
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: to,
        duration,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate() {
          el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`
        },
      })
    })
    return () => ctx.revert()
  }, [to, duration, prefix, suffix])

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}0{suffix}
    </span>
  )
}

/** A vertical line that draws itself top-to-bottom as its container scrolls through view. */
export function DrawLine({ className, style }: { className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const container = el.parentElement
    if (!container) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: container,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.6,
          },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return <div ref={ref} className={className} style={{ transformOrigin: 'top', ...style }} />
}
