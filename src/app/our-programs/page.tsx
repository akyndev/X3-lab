import { cn } from "@/lib/utils";
import Link from "next/link";
import { nomixa } from "../fonts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type GetInvolvedType = {
  label: string;
  description: string;
  link: string;
  linkLabel: string;
};

const getInvolved: GetInvolvedType[] = [
  {
    label: "Innovative Bootcamp",
    description:
      "Where creative ideas are being turned into real solutions by teaching problem-solving, teamwork, and how to test ideas quickly.",
    link: "/innovation-bootcamp",
    linkLabel: "Click to learn more"
  },
  {
    label: "Startup Incubation",
    description:
      "Supporting early-stage startups by providing mentorship, workspace, and access to startup resources to help them grow their ideas into businesses.",
    link: "/incubator-hub",
    linkLabel: "Click to learn more"
  },
  {
    label: "Research & Development Fellowship",
    description:
      "Providing talents a chance to work on research projects, build new technologies, and solve complex problems with guidance from experts.",
    link: "mailto:info@x3lab.org",
    linkLabel: "Click to submit"
  }
]

const GetInvolved = () => {
  return (
    <main>
      <div className="space-y-12 container pb-16  pt-10">
        <h2 className={cn("lg:text-5xl text-4xl text-nowrap font-semibold pb-2 ", nomixa.className)}> Our Programs</h2>

        <Accordion type="multiple" className="w-full text-[#2B2A2A]" defaultValue={["item-0", "item-1", "item-2"]}>
          {getInvolved.map((_, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{_.label}</AccordionTrigger>
              <AccordionContent className="space-y-3">
                <div>{_.description}</div>
                <div>
                  <Link className="text-[#1B5299] underline" href={_.link}>
                    {_.linkLabel}
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  )
};

export default GetInvolved;
