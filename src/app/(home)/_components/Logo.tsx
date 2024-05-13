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
      .timeline({ paused: true, yoyo: true })
      .from(boxes, { opacity: 0, y: 30, visibility: 'hidden' })
      .to(boxes, {
        rotation: 360,
        opacity: 1,
        ease: Power2.easeInOut,
        y: 0,
        visibility: 'visible',
        marginRight: '20px',
      })

    const text = document.querySelector('#text-e-logo')
    const textRight = document.querySelector('#text-right-logo')

    tlText.current = gsap
      .timeline({ paused: true, yoyo: true })
      .to(text, { opacity: 0, y: -70, duration: 0.7, ease: Power2.easeInOut })
      .from(textRight, {
        x: 10,
      })
      .to(textRight, {
        x: 7,
      })
  }, [])

  const onSpin = () => {
    tlText.current.duration(1).play(0)
    tl.current.play(0)
  }

  const onSpinRevert = () => {
    tlText.current.duration(0.7).reversed(!tlText.current.reversed())
    tl.current.reversed(!tl.current.reversed())
  }

  return (
    <div className="relative flex items-center gap-6">
      <h2
        className="absolute top-1/2 flex items-center text-[32px] font-bold text-tertiary"
        onMouseEnter={onSpin}
        onMouseLeave={onSpinRevert}
      >
        L<span id="text-e-logo">e</span>
        <span
          id="text-right-logo"
          className="flex items-center"
        >
          <Image
            src="/image/pinwheel.svg"
            alt="leminhquyen"
            id="logo-ivgnod"
            width={30}
            height={30}
            className="-translate-x-4"
          />
          <span
            id="text-fullname"
            className="-translate-x-8"
          >
            Minh Quyen
          </span>
        </span>
      </h2>
    </div>
  )
}

export default Logo
