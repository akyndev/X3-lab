import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import { CheckCircle } from "lucide-react"
import Image from "next/image"
import { Button } from "./ui/button"

const Future = () => {
  return (
    <section>
      <div className="text-center">
        <h3 className={cn("text-4xl", nomixa.className)}>The future starts here.</h3>
        <p className="font-light">Here&apos;s how you can be part</p>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 ">
        <div className="w-full h-[660px] shadow-md rounded-md border flex flex-col justify-between pt-10 relative">
          <div className="space-y-6 px-4">
            <span className={cn("font-medium text-[#1B5299]", nomixa.className)}>#BUILD</span>
            <h3 className={cn("text-4xl ", nomixa.className)}>
              Join X3Lab and <br /> start building!
            </h3>
            <p>connect with like-mind creatives, access resources, and collaborate on impactful projects</p>

            <div className="flex items-center justify-center">
              <Button className="py-6 bg-black">Join Community</Button>
            </div>
          </div>
          <div className="flex justify-between pr-4">
            <div>
              <Image src={"/future-gradient.png"} alt="future gradient" width={100} height={100} />
            </div>
            <div className="flex items-center -space-x-4">
              <Image src="/future-image-1.png" alt="future image " width={80} height={80} />
              <Image src="/future-image-1.png" alt="future image " width={80} height={80} />
              <Image src="/future-image-1.png" alt="future image " width={80} height={80} />
            </div>
          </div>

          <div className="absolute inset-0">
            <Image src={"/swatch.png"} alt="swatch" height={660} width={400} className="w-full h-full" />
          </div>
        </div>

        <div className="w-full h-[660px] relative shadow-md bg-[#1B5299] text-white rounded-lg border p-6 pt-10 space-y-12">
          <span className={cn("font-medium text-[#1CFEBA]", nomixa.className)}>#RESEARCH</span>
          <p className="">
            Support for cutting-edge <br /> idea, funding and product <br /> prototyping
          </p>

          <div className="relative rounded-lg w-full flex items-center justify-center">
            <div className="absolute -top-6 left-0">
              <svg width="76" height="77" viewBox="0 0 76 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" width="1.2459" height="1.12972" fill="white" />
                <rect y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="7.53149" width="1.2459" height="1.12972" fill="white" />
                <rect y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="15.063" width="1.2459" height="1.12972" fill="white" />
                <rect y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="22.5944" width="1.2459" height="1.12972" fill="white" />
                <rect y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="30.1259" width="1.2459" height="1.12972" fill="white" />
                <rect y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="37.6573" width="1.2459" height="1.12972" fill="white" />
                <rect y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="45.1888" width="1.2459" height="1.12972" fill="white" />
                <rect y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="52.7202" width="1.2459" height="1.12972" fill="white" />
                <rect y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="60.2517" width="1.2459" height="1.12972" fill="white" />
                <rect y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="67.7832" width="1.2459" height="1.12972" fill="white" />
                <rect y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="8.3064" y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="16.6111" y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="24.9185" y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="33.224" y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="41.5304" y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="49.8359" y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="58.1432" y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="66.4479" y="75.3147" width="1.2459" height="1.12972" fill="white" />
                <rect x="74.7544" y="75.3147" width="1.2459" height="1.12972" fill="white" />
              </svg>
            </div>

            <div className="bg-gray-100 rounded w-9/12 text-black p-10 space-y-3 z-10">
              <div className="flex bg-white px-2 items-center rounded-lg py-1 gap-4 shadow-md">
                <CheckCircle color="green" size={20} /> Idea
              </div>
              <div className="flex bg-white px-2 items-center rounded-lg py-1 gap-4 shadow-md">
                <CheckCircle color="green" size={20} /> Research
              </div>
              <div className="flex bg-white px-2 items-center rounded-lg py-1 gap-4 shadow-md">
                <CheckCircle color="green" size={20} /> Development
              </div>
            </div>
            <div className="absolute -bottom-10 right-0">
              <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_496_97)">
                  <mask
                    id="mask0_496_97"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <path d="M100 0H0V100H100V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_496_97)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M50.1935 45.9266C48.1208 20.2175 26.6 0 0.357145 0C0.357145 26.1212 20.3877 47.5641 45.9266 49.8064C20.2175 51.879 1.14711e-06 73.4 0 99.643C26.1212 99.643 47.5641 79.6125 49.8064 54.0735C51.879 79.7825 73.4 100 99.643 100C99.643 73.879 79.6125 52.436 54.0735 50.1935C79.7825 48.1208 100 26.6 100 0.357143C73.879 0.357142 52.436 20.3877 50.1935 45.9266ZM49.9988 50.001L50.001 50.0015L50.0015 49.9987C50.0005 49.9987 49.9988 49.9987 49.9988 49.9987V50.001Z"
                      fill="url(#paint0_linear_496_97)"
                    />
                  </g>
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_496_97"
                    x1="88.5"
                    y1="-5.53653e-06"
                    x2="19.75"
                    y2="76.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#B0B9FF" />
                    <stop offset="1" stopColor="#E7E9FF" />
                  </linearGradient>
                  <clipPath id="clip0_496_97">
                    <rect width="100" height="100" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <h3 className={cn(nomixa.className, "text-4xl")}>
            Apply for <br />
            R&D Support
          </h3>

          <div className="absolute bottom-0 left-0">
            <Image src={"/future-gradient.png"} alt="future gradient" width={100} height={100} />
          </div>
        </div>
        <div className="w-full h-[660px] pt-10 shadow-md rounded-md border relative flex flex-col justify-between">
          <div className="px-6 space-y-8">
            <span className={cn("font-medium text-[#1B5299]", nomixa.className)}>#MENTORSHIP</span>
            <h3 className={cn("text-4xl ", nomixa.className)}>
              Mentorship <br />
              based Training
            </h3>
            <p>Gain hands-on experience through our simulated work programs.</p>

            <div className="flex items-center justify-center">
              <Button className="py-6 bg-black">Partner Here</Button>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="w-[535px] -z-10 h-[335px] bg-[#1B5299] rounded-t-full absolute inset-0 top-16 left-1/2 -translate-x-1/2"></div>
            <div className="z-10">
              <Image src={"/happy-couple.png"} alt="happy couple" width={372} height={466} className="z-10" />
            </div>
          </div>

          <div className="absolute inset-0">
            <Image src={"/swatch.png"} alt="swatch" height={660} width={400} className="w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Future
