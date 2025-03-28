import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { nomixa } from "../fonts"

const ResearchAndDevelopmentPage = () => {
  return (
    <div className="container space-y-10 py-16">
      <div className="space-y-8">
        <h2 className={cn(nomixa.className, "text-5xl font-semibold")}>
          Research & <br />
          Development Fellowship
        </h2>

        <p className="text-2xl">
          Connect with like-minded creatives, access resources, and collaborate <br /> on impactful projects
        </p>
      </div>

      <div className="flex">
        <div className="space-y-14">
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

        <div>
          <div className="h-56 w-56 rounded bg-gray-100">Our Purpose</div>
        </div>
      </div>
    </div>
  )
}

export default ResearchAndDevelopmentPage

const Development = ({ label, description }: { label: string; description: string }) => {
  return (
    <div className="space-y-8">
      <h2 className={cn(nomixa.className, "font-medium text-4xl")}>{label}</h2>
      <p className="text-2xl">{description}</p>
    </div>
  )
}
