'use client'

import { useGSAP, gsap } from '@/lib/gsap'

import { useRef } from 'react'
export default function Home() {
  const container = useRef<HTMLElement | any>()
  const tl = useRef<GSAPTimeline | any>()

  const toggleTimeline = () => {
    tl.current.reversed(!tl.current.reversed())
  }

  useGSAP(
    () => {
      const boxes: any = gsap.utils.toArray('.box')
      tl.current = gsap
        .timeline()
        .to(boxes[0], { x: 120, rotation: 360 })
        .to(boxes[1], { x: -120, rotation: -360 }, '<')
        .to(boxes[2], { y: -166 })
        .reverse()
    },
    { scope: container }
  )

  return (
    <main>
      <section
        className="boxes-container"
        ref={container}
      >
        <h2>Use the button to toggle a Timeline</h2>
        <div>
          <button onClick={toggleTimeline}>Toggle Timeline</button>
        </div>
        <div className="box bg-gradient-primary">Box 1</div>
        <div className="box bg-gradient-primary">Box 2</div>
        <div className="box bg-gradient-primary">Box 3</div>
      </section>
    </main>
  )
}
