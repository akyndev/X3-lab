import { Development } from "@/components/development"
import { Marquee } from "@/components/magicui/marquee"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { nomixa } from "../fonts"

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it."
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing."
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it."
  }
]

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ name, username, body }: { name: string; username: string; body: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

const IncubatorHub = () => {
  return (
    <div className="container space-y-10 py-16">
      <div className="space-y-8">
        <h2 className={cn(nomixa.className, "text-5xl font-semibold")}>Incubation Hub</h2>

        <p className="text-2xl">
          Connect with like-minded creatives, access resources, and collaborate <br /> on impactful projects
        </p>
      </div>

      <div className="flex">
        <div className="space-y-14 w-6/12">
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
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
        </div>
      </div>

      <section>
        <div className="text-center">
          <h3 className={cn("text-4xl", nomixa.className)}>FUTA Incubator Hub</h3>
          <p className="font-light">Watch a video of our space and enviroment in FUTA Campus</p>
        </div>

        <div></div>
      </section>
    </div>
  )
}

export default IncubatorHub
