import { ContactForm } from "@/components/form"
import { cn } from "@/lib/utils"
import { Dot } from "lucide-react"
import { nomixa } from "../fonts"

const ContactUsPage = () => {
  return (
    <div className="container py-16">
      <div className="flex ">
        <div className="space-y-16 w-8/12">
          <div className="flex items-center">
            <Dot color="green" size={46} className="p-0" />
            CONNECT WITH US
          </div>

          <h2 className={cn(nomixa.className, "text-5xl ")}>
            Together, we can <br />{" "}
            <b>
              {" "}
              do extraordinary <br /> things.{" "}
            </b>{" "}
          </h2>

          <h4>hello@X3Lab.org icon</h4>
        </div>
        <div className="">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUsPage
