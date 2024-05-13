'use client'
import { gsap, Power2, useGSAP } from '@/lib/gsap'
import Image from 'next/image'
import Link from 'next/link'
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
      className="relative flex flex-1 items-center gap-6"
      ref={container}
    >
      <Link href={'/'}>
        <h2
          className="absolute top-1/2 flex -translate-y-1/2 items-center text-[32px] font-bold text-tertiary"
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
      </Link>
    </div>
  )
}

export default Logo
