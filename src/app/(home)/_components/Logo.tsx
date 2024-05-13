'use client'
import { gsap, Power2, useGSAP } from '@/lib/gsap'
import Image from 'next/image'
import { useRef } from 'react'

type Props = {}

const Logo = (props: Props) => {
  const container = useRef<HTMLElement | any>()
  const tl = useRef<GSAPTimeline | any>()
  const tlText = useRef<GSAPTimeline | any>()

  useGSAP(
    () => {
      const boxes = document.querySelector('#logo-ivgnod')
      const text = document.querySelector('#text-e-logo')
      const textRight = document.querySelector('#text-right-logo')
      tl.current = gsap
        .timeline()
        .from(boxes, { opacity: 0, y: 30, rotation: 360 })
        .to(boxes, {
          rotation: -360,
          opacity: 1,
          y: 0,
          marginRight: '16px',
        })
        .reverse()

      tlText.current = gsap
        .timeline()
        .to(text, { opacity: 0, y: -70, ease: Power2.easeInOut })
        .from(textRight, {
          x: 10,
        })

        .reverse()
    },
    { scope: container }
  )

  const onSpin = () => {
    tlText.current.play(0)
    tl.current.play(0)
  }

  const onSpinRevert = () => {
    tlText.current.reversed(!tlText.current.reversed())
    tl.current.reversed(!tl.current.reversed())
  }

  return (
    <div
      className="relative flex items-center gap-6"
      ref={container}
    >
      <h2
        className="absolute top-1/2 flex items-center text-[32px] font-bold text-tertiary"
        onMouseEnter={onSpin}
        onMouseLeave={onSpinRevert}
      >
        L<span id="text-e-logo">e</span>
        <Image
          src="/image/pinwheel.svg"
          alt="leminhquyen"
          id="logo-ivgnod"
          width={24}
          height={24}
          className="-translate-x-4"
        />
        <span
          id="text-right-logo"
          className="flex items-center"
        >
          <span
            id="text-fullname"
            className="-translate-x-7"
          >
            Minh Quyen
          </span>
        </span>
      </h2>
    </div>
  )
}

export default Logo
