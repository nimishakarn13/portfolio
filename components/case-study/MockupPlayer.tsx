'use client'

import { useEffect } from 'react'

const EMBED_SRC = 'https://embed.mckp.live/embed.js'

function useMckpEmbedScript() {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SRC}"]`)) return
    const script = document.createElement('script')
    script.src = EMBED_SRC
    script.async = true
    document.body.appendChild(script)
  }, [])
}

export function MockupPlayer({ mockupId }: { mockupId: string }) {
  useMckpEmbedScript()

  return (
    <mockup-player
      mockup-id={mockupId}
      width="100%"
      aspect-ratio="4 / 3"
      trigger="scroll"
      trigger-range="30-30"
      trigger-affect-page="true"
      cursor-range="1-22-1-22"
      zoom-mode="dolly"
      zoom-amount="85"
      zoom-duration="400"
      camera-zoom="32"
      background-color="#000000"
      style={{ borderRadius: '10px', overflow: 'hidden', display: 'block' }}
    />
  )
}

export default MockupPlayer
