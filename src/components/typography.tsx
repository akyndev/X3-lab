import { nomixa } from "@/app/fonts"
import { cn } from "@/lib/utils"

type TextType = {
  children: React.ReactNode
  className?: string
}

export const H1 = ({ children, className }: TextType) => {
  return <h1 className={cn(nomixa.className, className, "lg:text-[3.5rem] text-[2rem]  font-semibold inline mx-auto")}>{children}</h1>
}
export const H2 = ({ children, className }: TextType) => {
  return <h2 className={cn(nomixa.className, className, "lg:text-[3rem] text-2xl  font-medium leading-tight inline mx-auto")}>{children}</h2>
}
