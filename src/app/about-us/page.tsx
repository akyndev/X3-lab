import Future from "@/components/future"
import Mentors from "@/components/mentors"
import Image from "next/image"
import HeroImage from "/public/about-hero.png"
import { cn } from "@/lib/utils"
import { nomixa } from "../fonts"

const AboutUsPage = () => {
  return (
    <div className="container space-y-32 py-16">
      <div className="flex items-center justify-between relative">
        <Image src={"/frame.svg"} width={120} height={120} alt="frame svg" className="absolute -left-4 -top-6 -z-10" />
        <div>
          <h2 className={cn("text-5xl font-semibold", nomixa.className)}>
            WE BELIEVE THE
            <span className="text-blue-500 underline ml-2.5">FUTURE</span>
            <br />
            BELONGS TO THOSE WHO <br />
            DARES TO
            <span className="text-red-400 underline ml-2.5">CREATE!</span>
          </h2>
        </div>
        <div className="relative">
          <Image
            src={"/framea.svg"}
            width={120}
            height={120}
            alt="frame svg"
            className="absolute -bottom-20 -z-10 -left-20"
          />
          <Image src={HeroImage} alt="hero image" className="rounded-lg w-[32rem] h-auto" />
        </div>
      </div>

      <div className="bg-gray-100 space-y-10   p-20 rounded-lg mx-auto">
        <p className="font-light text-3xl">
          X3Lab is a collaborative ecosystem designed to empower tech creatives, innovators, and problem-solvers. We
          provide a dynamic environment where bold ideas are nurtured into impactful solutions. Through free workspace,
          research & development (R&D) initiatives, structured mentorship, and hands-on training, we bridge the gap
          between innovation and execution.
        </p>
        <p className="font-light text-3xl">
          Our Mission is To ignite innovation by providing a nurturing space, technical support, and growth
          opportunities for aspiring and experienced tech builders alike.
        </p>
      </div>

      <Future />

      <Mentors title="Our Mentors." description="Experts dedicated to shaping the next generation of innovators!" />
      <Mentors title="X3LAB FUTA Team" description="Group of young, vibrant innovators ready to shape the future" />
    </div>
  )
}

export default AboutUsPage
