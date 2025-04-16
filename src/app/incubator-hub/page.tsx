import { Development } from "@/components/development"
import Image from "next/image"
import { Marquee } from "@/components/magicui/marquee"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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

      <div className="flex flex-col lg:flex-row space-y-6">
        <div className="lg:space-y-14 lg:w-6/12">
          <Development
            label="Our Purpose."
            description="NexaScale Study Groups is a vitual community created for people to connect, learn, build projects, and get their technical questions answered. We host bi-weekly office hour sessions for different tracks"
          />
          <Development
            label="Who can join?"
            description="You can join this community if you are transitioning into a technical role in tech and you want to learn with a community . You can also join if you are already a well established tech professional that wants to learn more or help people solve thier problems"
          />
          <Button className="w-[203px] py-6">Join Community</Button>
        </div>

        <div className="relative flex h-[500px] flex-row items-center justify-center overflow-hidden">
          <Marquee pauseOnHover vertical className="[--duration:20s]">
            <div className="bg-[#1CFEBA] w-44 h-60 rounded-lg"></div>
            <div className="bg-[#1B5299] w-44 h-60 rounded-lg relative">
              <div className="absolute -bottom-4 flex items-center justify-center">
                
              <Image src={"/hub-image.png"} alt="hub image" height={680} width={359 }  className="
              "/>
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
                
              <Image src={"/hub-image.png"} alt="hub image" height={680} width={359 }  className="
              "/>
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

        <div className="w-full aspect-video bg-black rounded-xl"></div>
      </section>
    </div>
  )
}

export default IncubatorHub
