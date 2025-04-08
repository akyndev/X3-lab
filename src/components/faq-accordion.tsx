import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQsAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full text-[#2B2A2A]" defaultValue="item-0">
      {faqsArr.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>{faq.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

const faqsArr = [
  {
    question: "Is X3Lab only opened to tech skills?",
    answer:
      "In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security. In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security."
  },
  {
    question: "Where are you located?",
    answer:
      "In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security. In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security."
  },
  {
    question: "Is X3Lab open for only teaching or mentorship",
    answer:
      "In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security. In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security."
  },
  {
    question: "Is it open for only FUTA students?",
    answer:
      "In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security. In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security."
  },
  {
    question: "Can graduates apply to use the Lab?",
    answer:
      "In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security. In summary, hash rate serves as a fundamental pillar in cryptocurrency mining, affecting both individual miner profitability and network security."
  }
]
