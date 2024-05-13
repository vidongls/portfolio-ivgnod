'use client'
import Image from 'next/image'
import { useLayoutEffect, useRef, useState } from 'react'
import { gsap, Power2 } from '@/lib/gsap'
import { cn } from '@/lib/utils'

type Props = {}

const Logo = (props: Props) => {
  const tl = useRef<GSAPTimeline | any>()
  const tlText = useRef<GSAPTimeline | any>()

  useLayoutEffect(() => {
    const boxes = document.querySelector('#logo-ivgnod')

    tl.current = gsap
      .timeline({ paused: true })
      .from(boxes, { opacity: 0, display: 'none' })
      .to(boxes, { rotation: 360, opacity: 1, ease: Power2.easeInOut, display: 'block' })

    const text = document.querySelector('#text-e-logo')
    tlText.current = gsap.timeline({ paused: true }).to(text, { opacity: 0, display: 'none' })
  }, [])

  const onSpin = () => {
    if (!tl.current.isActive()) {
      tlText.current.play(0)
      tl.current.play(0)
    }
  }

  return (
    <div
      className="flex items-center gap-6"
      onMouseEnter={onSpin}
    >
      <h2 className="relative flex items-center text-[32px] font-bold text-tertiary">
        L<span id="text-e-logo">e</span>
        <Image
          src="/image/pinwheel.svg"
          alt="leminhquyen"
          id="logo-ivgnod"
          width={32}
          height={32}
        />
        Minh Quyen
      </h2>
    </div>
  )
}

export default Logo
