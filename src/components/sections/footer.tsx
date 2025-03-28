import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { ArrowLeft, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"

const Footer = () => {
  return (
    <footer className="bg-[#0B0922] text-white pt-20 pb-6">
      <div className="container space-y-16">
        <div className=" flex gap-20 items-center justify-between">
          <div>
            <Image src={"/x3-footer-logo.svg"} alt="Footer logo " width={205} height={49} />
          </div>

          <div>
            <nav>
              <ul className="flex items-center gap-6 text-white">
                <li className="hover:underline hover:text-blue-500">
                  <Link href={"/about-us"}>About Us</Link>
                </li>
                <li className="hover:underline hover:text-blue-500">
                  <Link href={"/get-involved"}>Get Involve</Link>
                </li>
                <li className="hover:underline hover:text-blue-500">
                  <Link href={"/research-and-development"}>Our Programs</Link>
                </li>
                <li className="hover:underline hover:text-blue-500">
                  <Link href={"/contact-us"}>Contact Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Separator className="opacity-50" />

        <div className="flex justify-end gap-56">
          <div className="">
            <div className="flex items-center gap-2">
              {" "}
              <p className="bg-green-400 h-1 w-10" /> EMAIL
            </div>
            <p className={cn("text-xl", nomixa.className)}>X3Lab@gmail.com</p>
          </div>

          <div>
            <span>Follow Us</span>
            <div className="flex items-center gap-4">
              <Linkedin />
              <Instagram />
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between ">
          <div className="flex items-center gap-6">
            <div className="relative w-[188px] h-[188px]">
              <div className="absolute rotate-[21.78deg] -right-2 bottom-4">
                <Image src={"/scan-me.png"} alt="Scan me" width={157} height={157} />
              </div>
              <div className="absolute z-10 inset-0">
                <Image src={"/scan-me.png"} alt="Scan me" width={185} height={185} />
              </div>
              <div className="absolute -rotate-[21.78deg] -left-2 bottom-4">
                <Image src={"/scan-me.png"} alt="Scan me" width={157} height={157} />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ArrowLeft />
              Scan to Join Our Community
            </div>

            <Image src={"/human.png"} alt="Scan me" width={230} height={230} />
          </div>

          <span>&copy;Copyright {new Date().getFullYear()} X3Lab</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
