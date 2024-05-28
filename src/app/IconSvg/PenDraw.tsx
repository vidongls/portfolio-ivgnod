import { gsap, useGSAP } from '@/lib/gsap'

export const PenDraw = () => {
  useGSAP(() => {
    gsap
      .fromTo(
        '#line',
        { drawSVG: '50% 50%' },
        {
          duration: 2,
          ease: 'power2.inOut',
          drawSVG: '0% 100%',
          repeat: -1,
          yoyo: true,
          repeatDelay: 0.5,
          repeatRefresh: true,
        }
      )
      .repeat(10)
  })

  return (
    <svg
      width="146"
      height="66"
      viewBox="0 0 146 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.584">
        <path
          d="M92.6667 10.4307C92.6667 13.3762 95.0545 15.764 98 15.764C100.946 15.764 103.333 13.3762 103.333 10.4307C103.333 7.48515 100.946 5.09733 98 5.09733C95.0545 5.09733 92.6667 7.48515 92.6667 10.4307ZM4.66667 10.4307C4.66667 13.3762 7.05448 15.764 10 15.764C12.9455 15.764 15.3333 13.3762 15.3333 10.4307C15.3333 7.48515 12.9455 5.09733 10 5.09733C7.05448 5.09733 4.66667 7.48515 4.66667 10.4307ZM97 10.4307C97 25.107 91.6066 36.0679 83.577 43.3747C75.5307 50.6967 64.7781 54.4017 53.9973 54.4305C43.2166 54.4593 32.4664 50.812 24.4223 43.5064C16.395 36.2161 11 25.227 11 10.4307L9 10.4307C9 25.7519 14.605 37.2921 23.0777 44.987C31.5336 52.6666 42.7834 56.4605 54.0027 56.4305C65.2219 56.4005 76.4693 52.5466 84.923 44.854C93.3934 37.1461 99 25.6366 99 10.4307H97Z"
          fill="url(#paint0_linear_295_678)"
          id="line"
        />
        <path
          d="M133.335 14.727L99.6927 8.58105L98.4345 10.2357L117.681 24.8075C118.134 24.3904 118.719 24.1447 119.334 24.1127C119.949 24.0807 120.557 24.2644 121.051 24.6321C121.351 24.8381 121.607 25.103 121.802 25.4106C121.997 25.7182 122.127 26.0622 122.185 26.4217C122.244 26.7812 122.228 27.1488 122.14 27.5022C122.052 27.8556 121.893 28.1875 121.673 28.4777C121.453 28.768 121.177 29.0105 120.86 29.1908C120.544 29.371 120.194 29.4851 119.832 29.5262C119.47 29.5673 119.104 29.5346 118.755 29.4299C118.406 29.3253 118.082 29.151 117.803 28.9175C117.311 28.5437 116.966 28.0097 116.827 27.4081C116.687 26.8065 116.763 26.1752 117.04 25.6234L97.8169 11.0821L96.635 12.6072L111.786 44.1755C119.411 35.2388 129.698 40.3629 129.698 40.3629L135.973 32.0896C126.968 25.2726 133.335 14.727 133.335 14.727Z"
          fill="url(#paint1_linear_295_678)"
        />
        <path
          d="M137.483 30.1527L127.969 42.6904L135.733 48.5809L145.246 36.0431L137.483 30.1527Z"
          fill="url(#paint2_linear_295_678)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_295_678"
          x1="-39.2537"
          y1="5.22537"
          x2="74.2035"
          y2="92.3892"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.427083"
            stopColor="#FF8709"
          />
          <stop
            offset="0.791667"
            stopColor="#F7BDF8"
          />
        </linearGradient>
        <linearGradient
          id="paint1_linear_295_678"
          x1="74.6172"
          y1="4.46373"
          x2="142.478"
          y2="33.9274"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.427083"
            stopColor="#FF8709"
          />
          <stop
            offset="0.791667"
            stopColor="#F7BDF8"
          />
        </linearGradient>
        <linearGradient
          id="paint2_linear_295_678"
          x1="121.747"
          y1="49.0265"
          x2="147.282"
          y2="39.5221"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            offset="0.427083"
            stopColor="#FF8709"
          />
          <stop
            offset="0.791667"
            stopColor="#F7BDF8"
          />
        </linearGradient>
      </defs>
    </svg>
  )
}
