import type { Metadata } from 'next'
import { Space_Mono, Bricolage_Grotesque, Inter } from 'next/font/google'
import SplashCursor from '@/components/effects/SplashCursor'
import Particles from '@/components/effects/Particles'
import BubbleMenu, { type BubbleMenuItem } from '@/components/layout/BubbleMenu'
import './globals.css'

const NAV_ITEMS: BubbleMenuItem[] = [
  { label: 'about', href: '/#about', ariaLabel: 'About', rotation: -8, hoverStyles: { bgColor: '#5fe6a0', textColor: '#05060b' } },
  { label: 'work', href: '/#work', ariaLabel: 'Work', rotation: 8, hoverStyles: { bgColor: '#67e8f9', textColor: '#05060b' } },
  { label: 'journey', href: '/#journey', ariaLabel: 'Design Journey', rotation: -8, hoverStyles: { bgColor: '#a78bfa', textColor: '#ffffff' } },
  { label: 'skills', href: '/#skills', ariaLabel: 'Skills', rotation: 8, hoverStyles: { bgColor: '#f5b43c', textColor: '#05060b' } },
  {
    label: 'resume',
    href: 'https://drive.google.com/file/d/1wbFD24DsvsZRSfpl-l4_xM4LFKWFoTCE/view?usp=sharing',
    ariaLabel: 'Resume',
    rotation: -8,
    external: true,
    hoverStyles: { bgColor: '#e0556f', textColor: '#ffffff' },
  },
  { label: 'contact', href: '/#contact', ariaLabel: 'Contact', rotation: 8, hoverStyles: { bgColor: '#2f6fed', textColor: '#ffffff' } },
]

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})

const headline = Bricolage_Grotesque({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-headline',
})

const inter = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Nimisha Karn — UI/UX Designer & Creative Developer',
  description: 'Portfolio of Nimisha Karn — UI/UX Designer & Creative Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${headline.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Ambient background field, fixed to the viewport so it's visible on
            every page — rendered above regular content (z-index) since every
            section has its own opaque background, but below the interactive
            cursor effects and nav. pointer-events:none keeps it purely
            decorative. */}
        <div style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }}>
          <Particles
            particleColors={['#5fe6a0', '#67e8f9', '#f5f4f7']}
            particleCount={200}
            particleSpread={12}
            speed={0.08}
            particleBaseSize={60}
            alphaParticles
            disableRotation={false}
          />
        </div>
        <SplashCursor RAINBOW_MODE={false} COLOR="#5fe6a0" TRANSPARENT SHADING />
        <BubbleMenu
          items={NAV_ITEMS}
          useFixedPosition
          menuAriaLabel="Toggle navigation"
          menuBg="#0a0b12"
          menuContentColor="#f5f4f7"
          bubbleBg="#ffffff"
          bubbleContentColor="#111111"
          animationEase="bounce.out"
          animationDuration={0.5}
          staggerDelay={0.1}
          logo={
            <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 700, fontSize: '15px', color: 'currentColor', letterSpacing: '0.02em' }}>
              NK
            </span>
          }
        />
        {children}
      </body>
    </html>
  )
}
