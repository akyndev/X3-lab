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
      "A fast-paced, immersive program that equips participants with the skills to build and launch tech solutions.",
    link: "/innovation-bootcamp",
    linkLabel: "Click to learn more",
  },
  {
    label: "Startup Incubation",
    description:
      "A structured pathway for early-stage entrepreneurs, including mentorship, funding, and business development support.",
    link: "/incubator-hub",
    linkLabel: "Click to learn more",
  },
  {
    label: "Research & Development Fellowship",
    description:
      "A research-focused initiative that provides funding and resources to develop groundbreaking solutions.",
    link: "/research-and-development",
    linkLabel: "Click to submit",
  },
];

const GetInvolved = () => {
  return (
    <main>
      <div className="space-y-12 container py-16">
        <h2
          className={cn(
            "lg:text-5xl text-4xl text-nowrap font-semibold pb-6 ",
            nomixa.className
          )}
        >
          {" "}
          Our Programs
        </h2>

        <Accordion
          type="multiple"
          className="w-full text-[#2B2A2A]"
          defaultValue={["item-0", "item-1", "item-2"]}
        >
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
  );
};

export default GetInvolved;
