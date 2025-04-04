import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { nomixa } from "../fonts"
import Image from "next/image"
import { Development } from "@/components/development"

const ResearchAndDevelopmentPage = () => {
  return (
    <div className="container space-y-10 md:space-y-16 py-8 md:py-16">
      <div className="space-y-6 md:space-y-8">
        <h2 className={cn(nomixa.className, "text-3xl md:text-4xl lg:text-5xl font-semibold lg:text-left")}>
          Research & <br className="hidden md:block" />
          Development Fellowship
        </h2>

        <p className="text-base md:text-lg lg:text-xl lg:text-left">
          Connect with like-minded creatives, access resources, and collaborate 
          <br className="hidden lg:block" /> on impactful projects
        </p>

        <div className="lg:hidden w-full">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <div className="w-full">
              <Image 
                src={"/the-boys.png"} 
                alt="the boys" 
                width={400} 
                height={400}
                className="w-full h-auto object-cover" 
              />
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-medium">Our Purpose</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16">
        <div className="space-y-8 md:space-y-14 w-full lg:w-6/12">
          <Development
            label="Our Purpose."
            description="NexaScale Study Groups is a vitual community created for people to connect, learn, build projects, and get their technical questions answered. We host bi-weekly office hour sessions for different tracks"
          />
          <Development
            label="Who can join?"
            description="You can join this community if you are transitioning into a technical role in tech and you want to learn with a community . You can also join if you are already a well established tech professional that wants to learn more or help people solve thier problems"
          />
          <Development
            label="What's in it for you?"
            description="You can join this community if you are transitioning into a technical role in tech and you want to learn with a community . You can also join if you are already a well established tech professional that wants to learn more or help people solve thier problems"
          />
          <Button className="sm:w-[203px] py-6">Submit Proposal</Button>
        </div>

        <div className="hidden lg:block bg-gray-100 rounded-lg overflow-hidden h-max w-full lg:w-5/12">
          <div className="w-full">
            <Image 
              src={"/the-boys.png"} 
              alt="the boys" 
              width={400} 
              height={400}
              className="w-full h-auto object-cover" 
            />
          </div>
          <div className="p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-medium">Our Purpose</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResearchAndDevelopmentPage


