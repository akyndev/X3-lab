"use client"
import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const ScrollPin = () => {
  const containerRef = useRef<HTMLDivElement | null>(null)

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top 20px",
      endTrigger: ".join",
      end: "top 20px",
      pin: "#pics",
      pinSpacing: false
    })

    gsap.to("#can-join", {
      translateY: "0%",

      scrollTrigger: {
        trigger: ".our-purpose",
        start: "top 20px",
        scrub: true,
      }
    })
    gsap.to("#for", {
      translateY: "0%",

      scrollTrigger: {
        trigger: ".who-can",
        start: "top 20px",
        scrub: true,
      }
    })
  })

  return (
    <section ref={containerRef} className="flex justify-between gap-16 overflow-hidden">
      <div className="space-y-56  pb-96 w-5/12">
        <div className="space-y-8 our-purpose">
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>Our Purpose</h2>
          <p className="text-lg font-light">
            X3Lab Innovation Bootcamps help participants find new ideas by exposing them to creative thinking
            techniques, guiding them to identify real-world problems, and showing them how to quickly turn their ideas
            into testable models without needing big budgets or resources.
          </p>
        </div>
        <div className="space-y-8 who-can">
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>Who can join?</h2>
          <p className="text-lg font-light">
            Students who are eager to learn, aspiring entrepreneurs with early-stage ideas, tech and non-tech talents
            looking to improve their problem-solving skills, or anyone curious about innovation and wanting to learn how
            to create and test new ideas.
          </p>
        </div>

        <div className="space-y-8 join">
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>What&apos;s in it for You?</h2>
          <p className="text-lg font-light">
            1. Learn how to turn ideas into real solutions <br /> 2. Work on real-world projects <br />
            3. Collaborate with other talents and experts <br /> 4. Boost confidence to start or join innovative
            projects <br /> 5. Get exposed to startup tools and resources
          </p>
        </div>
      </div>

      <div id="pics" className="w-[54%] overflow-hidden">
        <div className="w-full h-[65vh] rounded-lg relative overflow-hidden">
          <div className="bg-gray-200 box h-full flex flex-col">
            <div className="w-full flex-1 overflow-hidden">
              <Image
                src={"/the-boys.png"}
                alt="the boys"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">Our Purpose</div>
          </div>
          <div
            id="can-join"
            style={{ translate: "0 100%" }}
            className="bg-gray-200 box absolute inset-0 flex flex-col z-10"
          >
            <div className="w-full flex-1 overflow-hidden bg-green-400">
              <Image
                src={"/who-can-join.png"}
                alt="the boys"
                width={700}
                height={700}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 ">Who can join</div>
          </div>
          <div id="for" style={{ translate: "0 100%" }} className="bg-gray-200 box absolute inset-0 flex flex-col z-20">
            <div className="w-full flex-1 overflow-hidden bg-blue-400">
              <Image
                src={"/what's-in-it-for-you.png"}
                alt="the boys"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">What&apos;s in it for you?</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScrollPin
