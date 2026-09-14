import Hero from '@/components/sections/Hero'
import WhatIDo from '@/components/sections/WhatIDo'
import SelectedWork from '@/components/sections/SelectedWork'
import DesignJourney from '@/components/sections/DesignJourney'
import Skills from '@/components/sections/Skills'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <SelectedWork />
      <DesignJourney />
      <Skills />
      <Footer />
    </>
  )
}
