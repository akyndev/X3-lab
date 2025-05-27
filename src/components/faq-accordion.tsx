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
    question: "Is X3Lab only for tech skills?",
    answer:
      "No, X3lab is not limited to tech skills. While we have a strong focus on innovation and technology, our ecosystem welcomes creatives, entrepreneurs, and problem-solvers from various fields."
  },
  {
    question: "Do I need to have a startup or project before joining?",
    answer:
      "No. X3lab is designed for both aspiring innovators and experienced builders. Whether you have a clear idea or just a passion for learning and creating, our ecosystem provides every resource needed to turn ideas into real-world impact."
  },
  {
    question: "How does mentorship work at X3lab?",
    answer:
      "For each project you’re given, expertise in that field will ensure to put you through from time to time, providing valuable information when needed."
  },
  {
    question: "Is X3lab free, or is there a membership fee?",
    answer: "Yes, X3LAB is free, and also there’s no fee paid to gain membership."
  },
  {
    question: "How can I get involved with X3lab?",
    answer:
      "You can be a member of X3LAB through recruitment, that’s it, the initial phase requires being interviewed and when you merit it, you will be given an offer letter."
  }
]
