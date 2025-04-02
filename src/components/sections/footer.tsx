import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"

const Footer = () => {
  return (
    <footer className="bg-[#0B0922] text-white pt-20">
      <div className="container space-y-16">
        <div className=" flex gap-20 items-center flex-col lg:flex-row">
          <div>
            <Image src={"/x3-footer-logo.svg"} alt="Footer logo " width={205} height={49} />
          </div>

          <div>
            <nav>
              <ul className="flex flex-col lg:flex-row items-center gap-6 text-white">
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

        <div className="flex justify-end flex-col lg:flex-row gap-6 lg:gap">
          <div className=" mx-auto">
            <div className="flex items-center gap-2">
              {" "}
              <p className="bg-green-400 h-1 w-10" /> EMAIL
            </div>
            <p className={cn("text-xl", nomixa.className)}>X3Lab@gmail.com</p>
          </div>

          <div className="w-ma  mx-auto ">
            <span>Follow Us</span>
            <div className="flex items-center gap-4">
              <Linkedin />
              <Instagram />
            </div>
          </div>
        </div>

        <div className="flex items-start justify-between flex-col lg:flex-row ">
          <div className="flex items-center flex-col lg:flex-row w-full">
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
              <svg width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M36.2225 10.5552L2.88916 10.5552"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1113 2.77745L2.3335 10.5552L10.1113 18.333"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Scan to Join Our Community
            </div>

            <div className="-ml-10">
              <Image src={"/human.png"} alt="Scan me" width={230} height={230} />
            </div>
          </div>

          <span className="text-center text-sm w-full lg:w-max pt-8 text-nowrap">
            &copy;Copyright {new Date().getFullYear()} X3Lab
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
