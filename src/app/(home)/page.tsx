'use client'

import { useGSAP, gsap } from '@/lib/gsap'

import { useRef } from 'react'
export default function Home() {
  const container = useRef<HTMLElement | any>()
  const tl = useRef<GSAPTimeline | any>()

  return (
    <div
      className=" min-h-[calc(100vh-88px)] dark:bg-primary"
      ref={container}
    >
      dvccc
    </div>
  )
}
