import { cn } from "@/lib/utils"
import { nomixa } from "../fonts"
import ScrollPin from "@/components/scroll-pin"

const InnovatoionBootCampPage = () => {
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

    <ScrollPin />

    </div>
  )
}

export default InnovatoionBootCampPage


