import { ContactForm } from "@/components/form"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import Link from "next/link"
import { nomixa } from "../fonts"
const ContactUsPage = () => {
  return (
    <div className="container pb-16 pt-10">
      <div className="flex flex-col lg:flex-row space-y-10">
        <div className="space-y-8 lg:space-y-16 lg:w-6/12 w-full">
          <div className="flex items-center">
            <Dot color="green" size={46} className="p-0" />
            CONNECT WITH US
          </div>

          <h2 className={cn(nomixa.className, "text-4xl lg:text-5xl pb-4 lg:pb-8 font-semibold")}>
            Learn, Test, <br />
            Build with <br className="hidden lg:block" />
            X3Lab
          </h2>

          <Link href="mailto:info@X3Lab.org">
            <div className="flex gap-4 items-center text-lg">
              <h4>info@X3Lab.org</h4>
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="#1CFEBA" />
                <path
                  d="M15.358 26.5156L24.6419 13.4845M24.6419 13.4845L26.0471 21.8526M24.6419 13.4845L16.2738 14.8897"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </Link>
        </div>

        <div className="lg:w-5/12 w-full rounded-xl shadow-[0_0_25px_-5px_rgba(0,0,0,0.25)]">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
