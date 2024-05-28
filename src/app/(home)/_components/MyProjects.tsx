import { ICON_ARROW_RIGHT } from '@/public/icons'
import { PROJECT_RESWITCH, PROJECT_SABOMALL, PROJECT_VIETNAM_RAILWAY } from '@/public/image'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const MyProjects = (props: Props) => {
  const projects = [
    {
      title: 'SaboMall',
      description: 'A technology platform that provides solutions to access wholesale goods for business people.',
      imageUrl: PROJECT_SABOMALL,
    },
    {
      title: 'Reswitch',
      description:
        'Reswitch helps people living close to renewable energy project reduced power bills through subsidies!',
      imageUrl: PROJECT_RESWITCH,
    },
    {
      title: 'VietNam Railway',
      description: 'An online service that helps you easily choose and book train tickets quickly and conveniently.',
      imageUrl: PROJECT_VIETNAM_RAILWAY,
    },
  ]

  return projects.map((project, index) => (
    <section
      className="panel2 flex h-screen flex-col bg-primary px-20  pb-20 pt-[124px]"
      key={index}
    >
      <h3 className="mb-10 text-[64px] font-semibold text-tertiary">Selected Works</h3>
      <div className="flex flex-1 gap-x-6 rounded-3xl bg-secondary p-6">
        <div className="max-w-80">
          <div className="text-[32px] font-light text-tertiary">
            {index < 8 ? '0' : ''} {index + 1}
          </div>
          <h4 className="mb-4 inline-block bg-gradient-to-r from-[#FF8709] to-[#F7BDF8] bg-clip-text text-[32px] font-bold text-transparent">
            {project.title}
          </h4>
          <p className="mb-7 text-base font-light leading-6 text-tertiary">{project.description}</p>

          <Link
            href="/"
            className="group flex w-fit items-baseline gap-[10px]"
          >
            <span className=" text-xl leading-[30px] group-hover:underline"> View project</span>
            <Image
              src={ICON_ARROW_RIGHT}
              alt="view project"
              height={24}
              width={24}
              className="transition-all duration-300 group-hover:translate-x-3"
            />
          </Link>
        </div>
        <div className="flex-1">
          <Image
            src={project.imageUrl}
            width={10}
            height={10}
            className="h-full w-full"
            alt="sabomall project"
          />
        </div>
      </div>
    </section>
  ))
}

export default MyProjects
