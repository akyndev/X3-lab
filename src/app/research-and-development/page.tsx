import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { nomixa } from "../fonts"
import Image from "next/image"

const ResearchAndDevelopmentPage = () => {
  return (
    <div className="container space-y-10 py-16">
      <div className="space-y-8">
        <h2 className={cn(nomixa.className, "text-5xl font-semibold")}>
          Research & <br />
          Development Fellowship
        </h2>

        <p className="text-xl">
          Connect with like-minded creatives, access resources, and collaborate <br /> on impactful projects
        </p>
      </div>

      <div className="flex justify-between">
        <div className="space-y-14 w-6/12">
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
          <Button className="w-[203px] py-6">Submit Proposal</Button>
        </div>

        <div className="bg-gray-100 rounded-lg overflow-hidden h-max ">
          <div>
            <Image src={"/the-boys.png"} alt="the boys" width={400} height={400} />
          </div>
          <div className="p-6">Our Purpose</div>
        </div>
      </div>
    </div>
  )
}

export default ResearchAndDevelopmentPage

export const Development = ({ label, description }: { label: string; description: string }) => {
  return (
    <div className="space-y-8">
      <h2 className={cn(nomixa.className, "font-medium text-3xl")}>{label}</h2>
      <p className="text-lg font-light">{description}</p>
    </div>
  )
}
