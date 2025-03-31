import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { nomixa } from "../fonts"

const DonatePage = () => {
  return (
    <main className="space-y-24">
      <section className="">
        <div className="flex text-white items-center lg:w-[1440px] mx-auto bg-blue-600">
          <div className=" p-8 space-y-16 w-6/12">
            <h2 className={cn(nomixa.className, "text-6xl font-semibold")}>Donate to our program</h2>

            <div className="space-y-6">
              <p className={cn(nomixa.className, "text-2xl text-[#1CFEBA]")}>WE NEED YOUR HELP</p>

              <p className="text-lg">
                Connect with like-minded creatives, access resources, and collaborate on impactful projects
              </p>
            </div>
          </div>

          <div className="w-6/12">
            <Image src={"/donate-image.png"} alt="donate image " width={766} height={714} />
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-6">
          <div className="text-center">
            <h3 className={cn("text-4xl", nomixa.className)}>How to Donate to X3Lab.</h3>
          </div>

          <article className="py-6 px-4 rounded-lg bg-[#D4Fdf1] space-y-4">
            <h2 className={cn(nomixa.className, "text-3xl font-medium")}>Donate in Kind</h2>
            <p className="text-2xl font-light">
              We accept donations in kind. if you&apos;d like to donate laptops, books, or other tech gear for our
              community memebes. Please reach out to us on info@nexascale.org so that we can plan delivery logistics. We
              appreciate the gesture in advance
            </p>
          </article>

          <article className="py-6 px-4 rounded-lg bg-[#ffd3ed] space-y-4">
            <h2 className={cn(nomixa.className, "text-3xl font-medium")}>Donate in Kind</h2>
            <p className="text-2xl font-light">
              We accept donations in kind. if you&apos;d like to donate laptops, books, or other tech gear for our
              community memebes. Please reach out to us on info@nexascale.org so that we can plan delivery logistics. We
              appreciate the gesture in advance
            </p>
          </article>

          <article className="py-6 px-4 rounded-lg bg-[#d9e9ff] space-y-4">
            <h2 className={cn(nomixa.className, "text-3xl font-medium")}>Donate in Kind</h2>
            <p className="text-2xl font-light">
              We accept donations in kind. if you&apos;d like to donate laptops, books, or other tech gear for our
              community memebes. Please reach out to us on info@nexascale.org so that we can plan delivery logistics. We
              appreciate the gesture in advance
            </p>
          </article>
        </div>
      </section>

      <section className="donate-bg pt-40 pb-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8 text-white text-center">
            <h5 className={cn(nomixa.className, "text-lg font-medium text-[#1CFEBA]")}>
              REAL IMPACT, MEASURABLE GROWTH
            </h5>

            <h3 className={cn(nomixa.className, "text-4xl font-medium")}>
              WE ARE IMPACTING THE <br /> FUTURE OF TECH TALENTS{" "}
            </h3>

            <p className="text-2xl">
              We want to empower people with the tools and opportunities neededd to <br /> grow and scale their
              technology careers
            </p>

            <Button className="py-6 bg-[#1CFEBA] hover:bg-[#1CFEBA]/80 text-black">Donate Via Bank Transfer</Button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default DonatePage
