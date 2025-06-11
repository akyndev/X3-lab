import { Development } from "@/components/development"
import { Marquee } from "@/components/magicui/marquee"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { nomixa } from "../fonts"

const IncubatorHub = () => {
  return (
    <div className="container space-y-10 py-16">
      <div className="space-y-8">
        <h2 className={cn(nomixa.className, "text-5xl font-semibold")}>Incubation Hub</h2>

        <p className="text-2xl">
          Connect with like-minded creatives, access resources, and collaborate <br /> on impactful projects
        </p>
      </div>

      <div className="flex flex-col lg:flex-row space-y-6 justify-between">
        <div className="lg:space-y-14 lg:w-6/12">
          <Development
            label="What we offer"
            description="Talents are exposed to projects that bridge the gap between personal experiences, like school projects, and industry-level experience through collaboration with skilled peers and access to essential startup resources."
          />
          <Development
            label="Who is it ideal for?"
            description="Early-stage founders, startup teams, who have developed a minimum viable product (MVP) and talents with validate concept who are now ready to refine, test, and scale their solution into a sustainable business"
          />
          <Button className="w-[203px] py-6">Join Community</Button>
        </div>

        <div className="relative flex h-[500px] flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            <div className="bg-[#1CFEBA] w-44 h-60 rounded-lg"></div>
            <div className="bg-[#1B5299] w-44 h-60 rounded-lg relative">
              <div className="absolute -bottom-4 flex items-center justify-center">
                <Image
                  src={"/hub-image.png"}
                  alt="hub image"
                  height={680}
                  width={359}
                  className="
              "
                />
              </div>
            </div>
            <div className="bg-[#1CFEBA] w-44 h-60 rounded-lg"></div>
            <div className="bg-[#1B5299] w-44 h-60 rounded-lg"></div>
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            <div className="bg-[#1B5299] w-44 h-60 rounded-lg"></div>
            <div className="bg-[#1CFEBA] w-44 h-60 rounded-lg"></div>
            <div className="bg-[#1B5299] w-44 h-60 rounded-lg"></div>
            <div className="bg-[#1CFEBA] w-44 h-60 rounded-lg relative">
              <div className="absolute -bottom-4 flex items-center justify-center">
                <Image
                  src={"/hub-image.png"}
                  alt="hub image"
                  height={680}
                  width={359}
                  className="
              "
                />
              </div>
            </div>
          </Marquee>
        </div>
      </div>

      <section>
        <div className="text-center">
          <h3 className={cn("text-4xl", nomixa.className)}>FUTA Incubator Hub</h3>
          <p className="font-light">Watch a video of our space and enviroment in FUTA Campus</p>
        </div>

        <div className="w-full aspect-video rounded-xl overflow-hidden">
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
      </section>
    </div>
  )
}

export default IncubatorHub
