import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ProfileCard from "./profile-card"
import { Button } from "./ui/button"

const members = [
  {
    name: "Ademeso Daniel",
    role: "Founder X3 Lab",
    image: "Ademeso Daniel (Founder X3 Lab).jpg"
  },
  {
    name: "Badewa Adesola",
    role: "Program Manager",
    image: "BADEWA ADESOLA Oluwatoyin (Program Manager).jpg"
  },
  {
    name: "Promise Umoh",
    role: "Assist. Program Manager",
    image: "Promise Umoh(Assist. Program Manager).jpg"
  }
]

const Members = ({ title, description }: { title: string; description: string }) => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h3 className={cn("text-2xl lg:text-4xl", nomixa.className)}>{title}</h3>
        <p className="font-light lg:text-xl text-lg mt-2">{description}</p>
      </div>
      <div className="w-max mx-auto">
        <Link href={"/team-members"} className="bg-red-500 ">
          <Button variant={"outline"} className="px-8 py-6 border-blue-800 text-blue-800">
            See All Here <ArrowRight className="ml-4" />
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 pt-6">
        {members.map((member) => (
          <ProfileCard key={member.name} {...member} />
        ))}
      </div>
    </section>
  )
}

export default Members
