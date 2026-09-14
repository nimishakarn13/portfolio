import type { Metadata } from 'next'
import { Space_Mono, Bricolage_Grotesque, Inter } from 'next/font/google'
import FigmaCursor from '@/components/animations/CustomCursor'
import './globals.css'

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
        <FigmaCursor />
        {children}
      </body>
    </html>
  )
}
