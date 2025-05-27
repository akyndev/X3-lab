import { ContactForm } from "@/components/form"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import { nomixa } from "../fonts"
import Link from "next/link"
const ContactUsPage = () => {
  return (
    <div className="container py-16">
      <div className="flex flex-col lg:flex-row space-y-10">
        <div className="space-y-8 lg:space-y-16 lg:w-6/12 w-full">
          <div className="flex items-center">
            <Dot color="green" size={46} className="p-0" />
            CONNECT WITH US
          </div>

          <h2 className={cn(nomixa.className, "text-4xl lg:text-5xl ")}>
            Together, we can <br />{" "}
            <b>
              {" "}
              do extraordinary <br /> things.{" "}
            </b>{" "}
          </h2>

          <div className="flex gap-4 items-center">
            <h4>
              <Link href="mailto:info@X3Lab.org">info@X3Lab.org</Link>
            </h4>
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
        </div>

        <div className="lg:w-5/12 w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
