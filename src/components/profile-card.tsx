import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"
import Image from "next/image"


type ProfileCardType = {
  name: string
  role: string
  image: string
}

const ProfileCard = ({ name, role, image }: ProfileCardType) => {
    return (
      <div className="space-y-4 ">
        <div className="w-full h-[387px] overflow-hidden">

        <Image src={`/members/${image}`} width={315} height={387} alt="akinlade Joseph" className="transition-all duration-500 hover:scale-110 ease-in-out grayscale w-full h-[387px] object-cover" />
        </div>
  
        <div>
          <h2 className={cn(nomixa.className, "text-[22px]")}>{name}</h2>
          <h3 className="capitalize">{role}</h3>
  
          <div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.75 1.75H2.25C1.97344 1.75 1.75 1.97344 1.75 2.25V13.75C1.75 14.0266 1.97344 14.25 2.25 14.25H13.75C14.0266 14.25 14.25 14.0266 14.25 13.75V2.25C14.25 1.97344 14.0266 1.75 13.75 1.75ZM5.45781 12.4016H3.60313V6.43594H5.45781V12.4016ZM4.53125 5.62031C4.31863 5.62031 4.11079 5.55726 3.93401 5.43914C3.75723 5.32102 3.61944 5.15313 3.53808 4.9567C3.45672 4.76027 3.43543 4.54412 3.47691 4.33559C3.51838 4.12706 3.62077 3.93551 3.77111 3.78517C3.92145 3.63483 4.113 3.53245 4.32153 3.49097C4.53006 3.44949 4.7462 3.47078 4.94263 3.55214C5.13907 3.63351 5.30696 3.77129 5.42508 3.94807C5.5432 4.12486 5.60625 4.3327 5.60625 4.54531C5.60469 5.13906 5.12344 5.62031 4.53125 5.62031ZM12.4016 12.4016H10.5484V9.5C10.5484 8.80781 10.5359 7.91875 9.58438 7.91875C8.62031 7.91875 8.47188 8.67188 8.47188 9.45V12.4016H6.62031V6.43594H8.39844V7.25156H8.42344C8.67031 6.78281 9.275 6.2875 10.1781 6.2875C12.0563 6.2875 12.4016 7.52344 12.4016 9.12969V12.4016Z"
                fill="#1B5299"
              />
            </svg>
          </div>
        </div>
      </div>
    )
}

  
export default ProfileCard