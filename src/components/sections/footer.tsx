import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"

const Footer = () => {
  return (
    <footer className="bg-[#0B0922] text-white pt-20 pb-8">
      <div className="container space-y-16">
        {/* Logo and Navigation Section */}
        <div className="flex gap-8 md:gap-20 items-center flex-col lg:flex-row">
          <div className="w-full lg:w-auto text-center">
            <Image 
              src={"/x3-footer-logo.svg"} 
              alt="Footer logo" 
              width={205} 
              height={49}
              className="max-w-[160px] md:max-w-[205px] mx-auto lg:mx-0" 
            />
          </div>

          <nav className="w-full lg:w-auto">
            <ul className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 text-white">
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

        <Separator className="opacity-50" />

        {/* Contact and Social Section */}
        <div className="flex justify-center lg:justify-end flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="text-center lg:text-left">
            <div className="flex items-center gap-2 justify-center lg:justify-start mb-2">
              <p className="bg-green-400 h-1 w-10" /> 
              <span>EMAIL</span>
            </div>
            <p className={cn("text-lg md:text-xl", nomixa.className)}>X3Lab@gmail.com</p>
          </div>

          <div className="text-center lg:text-left">
            <span className="block mb-2">Follow Us</span>
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <Linkedin className="w-6 h-6 hover:text-blue-500 cursor-pointer" />
              <Instagram className="w-6 h-6 hover:text-pink-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Scan and Copyright Section */}
        <div className="flex items-center justify-between flex-col lg:flex-row gap-8">
          <div className="flex items-center flex-col lg:flex-row w-full gap-6">
            {/* QR Code Section */}
            <div className="relative w-[160px] h-[160px] md:w-[188px] md:h-[188px]">
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

            <div className="flex items-center gap-4 text-center lg:text-left">
              <svg className="hidden md:block" width="39" height="21" viewBox="0 0 39 21" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              <span className="text-sm md:text-base">Scan to Join Our Community</span>
            </div>

            <div className="hidden lg:block -ml-10">
              <Image 
                src={"/human.png"} 
                alt="Community illustration" 
                width={230} 
                height={230}
                className="max-w-[180px] xl:max-w-[230px]" 
              />
            </div>
          </div>

          <span className="text-center text-xs md:text-sm w-full lg:w-max pt-4 lg:pt-8">
            &copy;Copyright {new Date().getFullYear()} X3Lab
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
