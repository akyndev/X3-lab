import { Development } from "@/components/development"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { nomixa } from "../fonts"

const IncubatorHub = () => {
  return (
    <div className="container space-y-10 pb-16  pt-10">
      <div className="flex lg:flex-row flex-col gap-6 lg:gap-28">
        <div className="space-y-8">
          <h2 className={cn(nomixa.className, "lg:text-5xl text-3xl font-semibold")}>Incubation Hub</h2>

          <p className="text-xl font-light">Turn Your Idea Into a Viable Startup</p>
        </div>

        <div className="flex-1 ">
          <p className="text-lg lg:text-xl font-light">
            X3Lab Incubation hub is an idea harvesting hub, where tech and non-tech talents are supported to shape,
            validate, and refine their ideas into impactful products through real-world projects, expert mentorship and 
            product validation strategies.
          </p>

          <Button className="py-6 bg[#1B5299] mt-4">
            <Link href={"https://chat.whatsapp.com/Bp3fzOESpWJLltxEM2iMpH"}>Join Community</Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-6 items-center justify-between relative">
        <div className="lg:space-y-14 lg:w-6/12 space-y-10">
          <Development
            label="What we offer?"
            description="Talents are exposed to projects that bridge the gap between personal experiences, like school projects, and industry-level experience through collaboration with skilled peers and access to essential startup resources"
          />
          <Development
            label="Who is it ideal for?"
            description="Early-stage founders, startup teams, and solo innovators who have developed a Minimum Viable Product (MVP) or a validated concept and are now ready to refine, test, and scale their solution into a sustainable business."
          />
        </div>

        <div className="relative flex lg:h-[610px] h-[500px] flex-row items-center gap-8 justify-center overflow-hidden px-8">
          <div className="space-y-8 translate-x-14 lg:translate-x-24">
            <div className="bg-[#1CFEBA] w-44 lg:w-56 h-72 rounded-2xl"></div>
            <div className="bg-[#1B5299] w-44 lg:w-56 h-[280px] lg:h-[320px] rounded-2xl relative">
              <div className="absolute -bottom-4 flex items-center justify-center">
                <Image
                  src={"/hub-image.png"}
                  alt="hub image"
                  height={620}
                  width={350}
                />
              </div>
            </div>
            <div className="bg-[#1CFEBA] w-44 lg:w-56 h-72 rounded-2xl"></div>
          </div>
          <div className="space-y-8 h-full flex-1 flex flex-col translate-x-24 py-6">
            <div className="bg-[#1B5299] w-56 flex-1 rounded-2xl"></div>
            <div className="bg-[#1CFEBA] w-56 flex-1 rounded-2xl"></div>
          </div>
        </div>

        <div className="absolute inset-0 z-10 ">
          <Image src={"/tunnel.png"} alt="tunnel" width={500} height={500} className="object-cover w-full h-full" />
        </div>
      </div>

      <section className="pt-14 space-y-8">
        <div className="text-center space-y-4">
          <h3 className={cn("text-4xl", nomixa.className)}>FUTA Incubator Hub</h3>
          <p className="font-light">Watch a video of our space and enviroment in FUTA Campus</p>
        </div>

        <div className="w-full aspect-video rounded-xl overflow-hidden">
          <iframe
            className="aspect-video w-full h-full"
            src="https://www.youtube.com/embed/y9W1xSOg2eA?si=BXwOM2t0-cuwZE4v"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  )
}

export default IncubatorHub
