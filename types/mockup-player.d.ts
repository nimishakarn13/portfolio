import type { DetailedHTMLProps, HTMLAttributes } from 'react'

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'mockup-player': DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> & {
        'mockup-id'?: string
        width?: string
        'aspect-ratio'?: string
        trigger?: string
        'trigger-range'?: string
        'trigger-affect-page'?: string
        'cursor-range'?: string
        'zoom-mode'?: string
        'zoom-amount'?: string
        'zoom-duration'?: string
        'camera-zoom'?: string
        'background-color'?: string
      }
    }
  }
}

export {}
