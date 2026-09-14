import { Bricolage_Grotesque, Inter, Space_Mono } from 'next/font/google'

// Headline font across the site — hero, section titles, big display numbers.
export const headline = Bricolage_Grotesque({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
})

export const inter = Inter({ weight: ['400', '500', '600'], subsets: ['latin'] })

export const spaceMono = Space_Mono({ weight: ['400', '700'], subsets: ['latin'] })
