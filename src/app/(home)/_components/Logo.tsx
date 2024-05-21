'use client'
import { gsap, useGSAP } from '@/lib/gsap'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

type Props = {}

const Logo = (props: Props) => {
  const container = useRef<HTMLElement | any>()
  const tl = useRef<GSAPTimeline | any>()

  useGSAP(
    () => {
      const logo = document.querySelector('#logo-ivgnod')
      tl.current = gsap.timeline({ paused: true }).from(logo, { opacity: 0, rotation: 360 }).to(logo, {
        rotation: 360,
        opacity: 1,
        repeat: -1,
      })
    },
    { scope: container }
  )

  const onSpin = () => {
    tl.current.play(0)
  }

  const onSpinRevert = () => {
    tl.current.reversed(!tl.current.reversed())
  }

  return (
    <div
      className="relative flex flex-1 items-center gap-6"
      ref={container}
    >
      <Link
        href={'/'}
        className="flex items-center"
      >
        <Image
          src="/image/pinwheel.svg"
          alt="leminhquyen"
          id="logo-ivgnod"
          width={24}
          height={24}
          className="-translate-x-4"
        />
        <h2
          className="text-[32px] font-bold text-tertiary"
          onMouseEnter={onSpin}
          onMouseLeave={onSpinRevert}
        >
          Le Minh Quyen
        </h2>
      </Link>
    </div>
  )
}

export default Logo
