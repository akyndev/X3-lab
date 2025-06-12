import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { Separator } from "../ui/separator"

const Footer = () => {
  return (
    <footer className="bg-[#0B0922] text-white pt-20 overflow-hidden">
      <div className="container">
        <div className=" flex gap-11 lg:gap-20 items-start flex-col lg:flex-row">
          <div>
            <Image src={"/x3-footer-logo.svg"} alt="Footer logo " className="w-32 h-8" width={205} height={49} />
          </div>

          <div>
            <nav className="text-[1.2rem]">
              <ul className="flex flex-col lg:flex-row lg:items-center gap-7 text-white">
                <li className=" hover:text-blue-500 transition-colors duration-300">
                  <Link href={"/about-us"}>About Us</Link>
                </li>
                <li className=" hover:text-blue-500 transition-colors duration-300">
                  <Link href={"/get-involved"}>Get Involve</Link>
                </li>
                <li className=" hover:text-blue-500 transition-colors duration-300">
                  <Link href={"/our-programs"}>Our Programs</Link>
                </li>
                <li className=" hover:text-blue-500 transition-colors duration-300">
                  <Link href={"/contact-us"}>Contact Us</Link>
                </li>
                <li className=" hover:text-blue-500 transition-colors duration-300">
                  <Link href={"/contact-us"}>Podcast</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <Separator className="opacity-50 lg:my-16 my-11" />

        <div className="flex justify-end flex-col lg:flex-row gap-7 lg:gap-44 lg:gap">
          <div className=" w-max space-y-4 lg;space-y-6">
            <div className="flex items-center gap-2">
              {" "}
              <p className="bg-green-400 h-1 w-10" /> EMAIL
            </div>
            <p className={cn("text-xl", nomixa.className)}>
              <Link href="mailto:info@X3Lab.org">info@X3Lab.org</Link>
            </p>
          </div>

          <div className="w-max space-y-4 lg:space-y-6 ">
            <span>Follow Us</span>
            <div className="flex items-center gap-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.3337 9.99984C18.3337 5.39984 14.6003 1.6665 10.0003 1.6665C5.40033 1.6665 1.66699 5.39984 1.66699 9.99984C1.66699 14.0332 4.53366 17.3915 8.33366 18.1665V12.4998H6.66699V9.99984H8.33366V7.9165C8.33366 6.30817 9.64199 4.99984 11.2503 4.99984H13.3337V7.49984H11.667C11.2087 7.49984 10.8337 7.87484 10.8337 8.33317V9.99984H13.3337V12.4998H10.8337V18.2915C15.042 17.8748 18.3337 14.3248 18.3337 9.99984Z"
                  fill="white"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_553_69)">
                  <path
                    d="M0 9.16774C0 4.84601 0.314136 2.68443 1.29529 1.34221C2.27644 -2.56144e-07 3.85654 0 7.01571 0H12.9843C16.1435 0 17.7225 -2.56144e-07 18.7047 1.34221C19.6869 2.68443 20 4.84601 20 9.16774V10.8323C20 15.154 19.6859 17.3156 18.7047 18.6578C17.7236 20 16.1435 20 12.9843 20H7.01571C3.85654 20 2.27644 20 1.29529 18.6578C0.314136 17.3156 0 15.154 0 10.8323V9.16774Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8122 9.27084L8.34309 5.45047C8.24798 5.36914 8.13868 5.32413 8.02655 5.32012C7.91442 5.3161 7.80355 5.35323 7.70545 5.42764C7.60735 5.50204 7.52561 5.61102 7.4687 5.74325C7.41179 5.87548 7.3818 6.02614 7.38184 6.17959V13.8218C7.38199 13.9751 7.41211 14.1256 7.4691 14.2576C7.52608 14.3896 7.60784 14.4984 7.70591 14.5726C7.80397 14.6469 7.91477 14.6839 8.02681 14.6798C8.13885 14.6757 8.24805 14.6307 8.34309 14.5494L12.8122 10.7291C12.9027 10.6519 12.9773 10.5444 13.029 10.4168C13.0807 10.2893 13.1078 10.1458 13.1078 9.99996C13.1078 9.85409 13.0807 9.71063 13.029 9.58307C12.9773 9.45552 12.9027 9.34807 12.8122 9.27084Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_553_69">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.0009 1C8.28507 1 7.94424 1.01187 6.87756 1.06042C5.81296 1.10917 5.08629 1.27771 4.45045 1.525C3.79273 1.78041 3.23481 2.12208 2.67898 2.67813C2.12272 3.23395 1.78105 3.79187 1.5248 4.44937C1.27688 5.08541 1.10813 5.81228 1.06021 6.87645C1.0125 7.94311 1 8.28415 1 11C1 13.7158 1.01208 14.0556 1.06042 15.1223C1.10938 16.1869 1.27792 16.9135 1.525 17.5494C1.78063 18.2071 2.1223 18.765 2.67835 19.3208C3.23398 19.8771 3.79191 20.2195 4.44921 20.475C5.08545 20.7222 5.81234 20.8908 6.87673 20.9395C7.9434 20.988 8.28403 21 10.9996 21C13.7158 21 14.0555 20.988 15.1223 20.9395C16.1868 20.8908 16.9143 20.7222 17.5506 20.475C18.2081 20.2195 18.7652 19.8771 19.3208 19.3208C19.8771 18.765 20.2188 18.2071 20.4749 17.5496C20.7209 16.9135 20.8896 16.1867 20.9396 15.1225C20.9875 14.0558 21 13.7158 21 11C21 8.28415 20.9875 7.94332 20.9396 6.87666C20.8896 5.81207 20.7209 5.08541 20.4749 4.44958C20.2188 3.79187 19.8771 3.23395 19.3208 2.67813C18.7646 2.12188 18.2083 1.78021 17.55 1.525C16.9125 1.27771 16.1854 1.10917 15.1208 1.06042C14.0541 1.01187 13.7145 1 10.9978 1H11.0009ZM10.1038 2.80208C10.3701 2.80166 10.6672 2.80208 11.0009 2.80208C13.671 2.80208 13.9874 2.81166 15.0418 2.85958C16.0168 2.90417 16.546 3.06708 16.8985 3.20396C17.3652 3.3852 17.6979 3.60187 18.0476 3.95187C18.3977 4.30187 18.6144 4.6352 18.796 5.10187C18.9329 5.45395 19.096 5.98311 19.1404 6.95811C19.1883 8.01228 19.1987 8.32894 19.1987 10.9977C19.1987 13.6664 19.1883 13.9831 19.1404 15.0373C19.0958 16.0122 18.9329 16.5414 18.796 16.8935C18.6148 17.3602 18.3977 17.6925 18.0476 18.0423C17.6976 18.3923 17.3654 18.6089 16.8985 18.7902C16.5464 18.9277 16.0168 19.0901 15.0418 19.1348C13.9876 19.1827 13.671 19.193 11.0009 19.193C8.3307 19.193 8.01424 19.1827 6.96006 19.1348C5.98505 19.0898 5.45588 18.9268 5.10317 18.79C4.6365 18.6087 4.30315 18.3921 3.95316 18.0421C3.60315 17.6921 3.38648 17.3595 3.20481 16.8927C3.06794 16.5406 2.90481 16.0114 2.86043 15.0364C2.81252 13.9822 2.80294 13.6656 2.80294 10.9952C2.80294 8.32478 2.81252 8.00977 2.86043 6.95562C2.90502 5.98062 3.06794 5.45145 3.20481 5.09895C3.38607 4.63228 3.60315 4.29895 3.95316 3.94895C4.30315 3.59895 4.6365 3.38228 5.10317 3.20063C5.45567 3.06313 5.98505 2.90062 6.96006 2.85583C7.88257 2.81417 8.24008 2.80166 10.1038 2.79958V2.80208ZM16.3389 4.46249C15.6764 4.46249 15.1389 4.99937 15.1389 5.66207C15.1389 6.32458 15.6764 6.86207 16.3389 6.86207C17.0014 6.86207 17.5389 6.32458 17.5389 5.66207C17.5389 4.99958 17.0014 4.46249 16.3389 4.46249ZM11.0009 5.86458C8.16486 5.86458 5.86547 8.16394 5.86547 11C5.86547 13.8361 8.16486 16.1343 11.0009 16.1343C13.837 16.1343 16.1356 13.8361 16.1356 11C16.1356 8.16394 13.837 5.86458 11.0009 5.86458ZM11.0009 7.66666C12.8418 7.66666 14.3343 9.15894 14.3343 11C14.3343 12.8408 12.8418 14.3333 11.0009 14.3333C9.15987 14.3333 7.66757 12.8408 7.66757 11C7.66757 9.15894 9.15987 7.66666 11.0009 7.66666Z"
                  fill="white"
                />
              </svg>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_96_12469)">
                  <mask
                    id="mask0_96_12469"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="20"
                    height="20"
                  >
                    <path d="M19.9992 0H0V20H19.9992V0Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_96_12469)">
                    <path
                      d="M16.7857 16.9012H13.8174V12.2984C13.8174 11.2009 13.7977 9.78796 12.2736 9.78796C10.7277 9.78796 10.4911 10.9838 10.4911 12.2185V16.9009H7.52292V7.43576H10.3724V8.72927H10.4123C10.6975 8.24647 11.1096 7.8493 11.6046 7.58006C12.0997 7.31081 12.6593 7.17958 13.2238 7.20032C16.2322 7.20032 16.7869 9.15973 16.7869 11.7088L16.7857 16.9012ZM4.17377 6.14194C3.83309 6.142 3.50004 6.04203 3.21675 5.85467C2.93344 5.6673 2.71263 5.40096 2.58221 5.08933C2.45177 4.77769 2.41759 4.43476 2.484 4.10389C2.5504 3.77303 2.7144 3.46909 2.95526 3.23052C3.19611 2.99194 3.503 2.82944 3.83712 2.76357C4.17124 2.6977 4.51758 2.73142 4.83235 2.86045C5.14712 2.98949 5.41618 3.20805 5.60549 3.4885C5.79482 3.76895 5.8959 4.0987 5.89597 4.43603C5.89601 4.66002 5.85148 4.88181 5.76496 5.08876C5.67843 5.29571 5.5516 5.48376 5.39168 5.64216C5.23176 5.80057 5.04189 5.92624 4.83291 6.01199C4.62395 6.09774 4.39998 6.1419 4.17377 6.14194ZM5.65788 16.9012H2.68657V7.43576H5.65788V16.9012ZM18.2654 0.00135143H1.19504C0.807589 -0.00297805 0.434234 0.145182 0.15705 0.413275C-0.120135 0.681368 -0.278475 1.04746 -0.283203 1.4311V18.4041C-0.278637 18.788 -0.120389 19.1543 0.156786 19.4227C0.433961 19.6911 0.807397 19.8395 1.19504 19.8354H18.2654C18.6539 19.8402 19.0283 19.6922 19.3066 19.4239C19.5849 19.1555 19.7442 18.7887 19.7495 18.4041V1.42988C19.744 1.04547 19.5846 0.678966 19.3063 0.41088C19.028 0.142794 18.6537 -0.00494354 18.2654 0.000126304"
                      fill="white"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_96_12469">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="lg:hidden text-xl pt-16 pb-3">Scan for community</div>

        <div className="flex items-center justify-between flex-col lg:flex-row ">
          <div className="flex items-center w-full">
            <div className="relative w-[188px] h-[188px] scale-90 lg:scale-100">
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

            <div className="hidden  lg:flex items-center gap-4">
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

            <div className="-ml-10 w-7/12 lg:w-max lg:translate-y-0 -translate-y-10">
              <Image src={"/human.png"} className="w-full h-auto" alt="Scan me" width={230} height={230} />
            </div>
          </div>

          <span className="text-center text-sm font-light w-full lg:w-max pt-8 text-nowrap pb-8">
            &copy;Copyright {new Date().getFullYear()} X3Lab
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
