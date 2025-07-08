import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { nomixa } from "../fonts"

const DonatePage = () => {
  return (
    <main className="space-y-24">
      <section className=" relative">
        <div className=" bg-[#1B5299]">
          <div
            className="relative bg-repeat bg-left-top bg-[length:416px_450px]"
            style={{ backgroundImage: "url('/swatch.png')" }}
          >
            <div className="flex text-white items-center justify-between lg:max-w-[1440px] lg:w-full flex-col lg:flex-row mx-auto ">
              <div className="lg:space-y-16 space-y-10 p-8 lg:w-max ml-auto ">
                <h2 className={cn(nomixa.className, "lg:text-6xl text-4xl font-semibold lg:-translate-x-24")}>
                  Donate to <br /> our program
                </h2>

                <div className="space-y-6 lg:w-max ml-auto mr-10">
                  <p className={cn(nomixa.className, "text-2xl text-[#1CFEBA]")}>WE NEED YOUR HELP</p>

                  <p className="text-lg font-light">
                    Connect with like-minded creatives, access
                    <br className="hidden lg:block" /> {" "}
                    resources, and collaborate on impactful projects
                  </p>
                </div>
              </div>

              <div className="lg:w-6/12">
                <Image src={"/donate-image.png"} alt="donate image " width={766} height={714} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container space-y-6">
          <div className="text-center">
            <h3 className={cn("text-3xl lg:text-4xl", nomixa.className)}>How to Donate to X3Lab.</h3>
          </div>

          <article className="lg:p-8 lg:py-12 p-6  rounded-lg bg-[#D4Fdf1] space-y-4">
            <h2 className={cn(nomixa.className, "lg:text-3xl text-2xl font-medium")}>Donate in Kind</h2>
            <p className=" text-lg lg:text-xl font-light">
              We accept donations in kind. If you'd like to donate laptops, books, or other tech gear for our community
              members, please reach out to us on info@x3lab.org so that we can plan delivery logistics. We appreciate
              the gesture in advance
            </p>
          </article>

          <article className="lg:p-8 lg:py-12 p-6  rounded-lg bg-[#ffd3ed] space-y-4">
            <h2 className={cn(nomixa.className, "lg:text-3xl text-2xl font-medium")}>Donate in Cash</h2>
            <p className=" text-lg lg:text-xl font-light">
              We recognize that every cash donation is significant, and we&apos;re committed to ensuring that your
              donation has the greatest possible impact.
            </p>
          </article>

          <article className="lg:p-8 lg:py-12 p-6  rounded-lg bg-[#d9e9ff] space-y-4">
            <h2 className={cn(nomixa.className, "lg:text-3xl text-2xl font-medium")}>Support a Hub</h2>
            <p className=" text-lg lg:text-xl font-light">
              Your experience can inspire and guide the next generation of innovators. Share your knowledge, provide
              career insights, and help shape the future of tech.
            </p>
          </article>
        </div>
      </section>

      <section className="donate-bg pt-40 pb-16">
        <div className="container">
          <div className="flex flex-col items-center gap-8 text-white text-center">
            <h5 className={cn(nomixa.className, "lg:text-lg text-sm font-medium text-[#1CFEBA]")}>
              REAL IMPACT, MEASURABLE GROWTH
            </h5>

            <h3 className={cn(nomixa.className, "lg:text-4xl text-3xl font-medium")}>
              WE ARE IMPACTING THE <br /> FUTURE OF TECH TALENTS{" "}
            </h3>

            <p className="lg:text-2xl text-lg">
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
