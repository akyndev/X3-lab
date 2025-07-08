"use client"
import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"
import { Button } from "./ui/button"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const MobileScrollPin = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    gsap.to(".box1", {
      translateY: "0%",
      scrollTrigger: {
        trigger: ".our-purpose",
        start: "start 32px",
        end: "bottom start",
        scrub: true
        // pin: true,
      }
    })
    gsap.to(".box2", {
      translateY: "0%",
      scrollTrigger: {
        trigger: ".who-can",
        start: "start 32px",
        end: "bottom start",
        scrub: true
      }
    })
  })

  return (
    <>
      <section ref={containerRef} className="flex justify-between relative">
        <div className="space-y-8">
          <div className="space-y-16">
            <div className="sticky top-8 h-96 w-full flex -z-10 bg-gray-200 overflow-hidden rounded-lg">
              <div className="overflow-hidden sticky flex flex-col top-0">
                <div className="w-full flex-1">
                  <Image
                    src={"/the-boys.png"}
                    alt="the boys"
                    width={400}
                    height={400}
                    className="w-full object-cover h-full"
                  />
                </div>
                <div className="p-6">Our Purpose</div>
              </div>
            </div>

            <div className="space-y-8 sticky top-8 our-purpose -z-10 bg-[white] rounded-lg h-96 px-4 py-6">
              <h2 className={cn(nomixa.className, "font-medium text-3xl")}>Our Purpose</h2>
              <p className="text-lg font-light">
                X3Lab is a dynamic community where tech enthusiasts, creatives, and innovators come together to learn,
                collaborate, build projects, and grow professionally. We host bi-weekly sessions and hands-on office
                hours across various tech and creative tracks
              </p>
            </div>

            <div className="sticky top-8 w-full h-96 -z-10 bg-gray-200 overflow-hidden rounded-lg">
              <div className="overflow-hidden flex-col flex sticky top-0 h-full">
                <div className="w-full flex-1">
                  <Image
                    src={"/who-can-join.png"}
                    alt="the boys"
                    width={400}
                    height={400}
                    className="w-full object-cover h-full"
                  />
                </div>
                <div className="p-6 bg-red-50">Who can join</div>
              </div>
            </div>

            <div className="space-y-8 sticky top-8 our-purpose -z-10 bg-[white] rounded-lg h-96 px-4 py-6">
              <h2 className={cn(nomixa.className, "font-medium text-3xl")}>Who can Join?</h2>
              <p className="text-lg font-light">
                Whether you&apos;re transitioning into tech, taking your first steps as a creative technologist, or
                you&apos;re a seasoned professional eager to give back or level up—this community is for you
              </p>
            </div>

            <div className="sticky top-8  w-full -z-10 bg-gray-200 overflow-hidden rounded-lg">
              <div className="overflow-hidden flex flex-col sticky top-0">
                <div className="w-full flex-1">
                  <Image
                    src={"/what's-in-it-for-you.png"}
                    alt="the boys"
                    width={400}
                    height={400}
                    className="w-full object-cover h-full"
                  />
                </div>
                <div className="p-6">What&apos;s in it for you?</div>
              </div>
            </div>

            <div className="space-y-8 sticky top-8 our-purpose -z-10 bg-[white] rounded-lg px-4 py-6">
              <h2 className={cn(nomixa.className, "font-medium text-3xl")}>What&apos;s in it for you?</h2>
              <p className="text-lg font-light">
                1. Learn from real people solving real problems <br /> 2. Join project-based learning sessions <br />
                3. Get help from mentors and peers <br /> 4. Build your portfolio and confidence <br /> 5. Stay plugged
                into a supportive and inspiring ecosystem
              </p>
            </div>
          </div>
        </div>
      </section>
      <Button className="py-6 bg[#1B5299] mt-4">
        <Link href={"https://chat.whatsapp.com/Bp3fzOESpWJLltxEM2iMpH"}>Submit Proposal</Link>
      </Button>
    </>
  )
}

export default MobileScrollPin
