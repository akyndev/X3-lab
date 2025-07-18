import Future from "@/components/future"
import Members from "@/components/members"
import Mentors from "@/components/mentors"
import { cn } from "@/lib/utils"
import { nomixa } from "../fonts"

const AboutUsPage = () => {
  return (
    <div className="container space-y-32 pb-16  pt-14">
      <div className="flex items-center justify-between flex-col lg:flex-row gap-8 lg:gap-0 relative">
        <div className="absolute -left-4 -top-6 -z-10">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_142_12012)">
              <mask
                id="mask0_142_12012"
                style={{ maskType: "luminance" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="120"
                height="120"
              >
                <path d="M120 0H0V120H120V0Z" fill="white" />
              </mask>
              <g mask="url(#mask0_142_12012)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M60 0H0L60 60H0L60 120H120L60 60H120L60 0Z"
                  fill="url(#paint0_linear_142_12012)"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_142_12012"
                x1="12.3"
                y1="9.6"
                x2="60"
                y2="120"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FFB6E1" />
                <stop offset="1" stopColor="#C0E8FF" />
              </linearGradient>
              <clipPath id="clip0_142_12012">
                <rect width="120" height="120" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="">
          <h2 className={cn("lg:text-5xl text-3xl font-semibold ", nomixa.className)} style={{ lineHeight: 1.4 }}>
            WE BELIEVE THE
            <span className="text-blue-500 underline"> FUTURE </span>
            <br className="hidden lg:block" />
            BELONGS TO THOSE WHO <br className="hidden lg:block" />
            DARES TO
            <span className="text-red-400 underline ml-2.5">CREATE!</span>
          </h2>
        </div>
        <div className="relative w-full lg:w-max">
          <div className="absolute -bottom-20 -z-10 -left-20">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_145_12019)">
                <mask
                  id="mask0_145_12019"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="120"
                  height="120"
                >
                  <path d="M120 0H0V120H120V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_145_12019)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 29.4H16.5H16.8V29.3966C23.7859 29.2372 29.4 23.5242 29.4 16.5V0H33V16.8C33 23.7588 38.6412 29.4 45.6 29.4C52.5588 29.4 58.2 23.7588 58.2 16.8V0H61.8V16.8C61.8 23.7588 67.4412 29.4 74.4 29.4C81.3588 29.4 87 23.7588 87 16.8V0H91.2V16.8C91.2 23.7588 96.8412 29.4 103.8 29.4H120V33H103.2C96.2412 33 90.6 38.6412 90.6 45.6C90.6 52.5588 96.2412 58.2 103.2 58.2H120V61.8H103.2C96.2412 61.8 90.6 67.4412 90.6 74.4C90.6 81.3588 96.2412 87 103.2 87H120V90.6H103.8C96.8412 90.6 91.2 96.2412 91.2 103.2V103.8V120H87V103.2C87 96.2412 81.3588 90.6 74.4 90.6C67.4412 90.6 61.8 96.2412 61.8 103.2V120H58.2V103.2C58.2 96.2412 52.5588 90.6 45.6 90.6C38.6412 90.6 33 96.2412 33 103.2V120H29.4V103.5C29.4 96.4758 23.7859 90.7626 16.8 90.6036V90.6H16.5H0V87H16.8C23.7588 87 29.4 81.3588 29.4 74.4C29.4 67.4412 23.7588 61.8 16.8 61.8H0V58.2H16.8C23.7588 58.2 29.4 52.5588 29.4 45.6C29.4 38.6412 23.7588 33 16.8 33H0V29.4ZM45.6 58.2C52.5588 58.2 58.2 52.5588 58.2 45.6C58.2 38.6412 52.5588 33 45.6 33C38.6412 33 33 38.6412 33 45.6C33 52.5588 38.6412 58.2 45.6 58.2ZM74.4 58.2C81.3588 58.2 87 52.5588 87 45.6C87 38.6412 81.3588 33 74.4 33C67.4412 33 61.8 38.6412 61.8 45.6C61.8 52.5588 67.4412 58.2 74.4 58.2ZM58.2 74.4C58.2 81.3588 52.5588 87 45.6 87C38.6412 87 33 81.3588 33 74.4C33 67.4412 38.6412 61.8 45.6 61.8C52.5588 61.8 58.2 67.4412 58.2 74.4ZM74.4 87C81.3588 87 87 81.3588 87 74.4C87 67.4412 81.3588 61.8 74.4 61.8C67.4412 61.8 61.8 67.4412 61.8 74.4C61.8 81.3588 67.4412 87 74.4 87Z"
                    fill="url(#paint0_linear_145_12019)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_145_12019"
                  x1="12.3"
                  y1="9.6"
                  x2="60"
                  y2="120"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFB6E1" />
                  <stop offset="1" stopColor="#C0E8FF" />
                </linearGradient>
                <clipPath id="clip0_145_12019">
                  <rect width="120" height="120" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden w-full lg:w-96">
            <iframe
              className="aspect-video w-full h-full"
              src="https://www.youtube.com/embed/y9W1xSOg2eA?si=BXwOM2t0-cuwZE4v"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      <section>
        <div className="bg-gray-100 space-y-10 p-6  lg:p-14 rounded-lg mx-auto text-justify">
          <p className="font-light lg:text-xl text-xl break-words" lang="en" style={{ hyphens: "auto" }}>
            At X3lab, we believe the future belongs to those who dare to create. Innovation is born from bold ideas and
            the courage to pursue them. It’s not about waiting for opportunities to come to you, it’s about actively
            creating them. and that’s why we’ve built X3lab, an ecosystem that inspires you to transform your boldest
            ideas into real-world impact. Whether you&apos;re working on a startup, a personal project, or navigating
            new solutions to complex problems, we provide the resources, mentorship, and collaborative environment to
            bring your vision to life.
          </p>
          <p className="font-light lg:textxl w-ma text-xl" style={{ hyphens: "auto" }} lang="en">
            Our mission is to support bold ideas that shape the future, by providing access to tools, guidance, and
            network to turn your ambitions into reality, no matter your field or experience level. Together, we can
            create a future built on innovation, collaboration, and bold thinking.
          </p>
        </div>
      </section>

      <Future />

      <Mentors title="Our Mentors." description="Experts dedicated to shaping the next generation of innovators!" />

      <div>
        <Members title="X3LAB FUTA Team" description="Group of young, vibrant innovators ready to shape the future" />
      </div>
    </div>
  )
}

export default AboutUsPage
