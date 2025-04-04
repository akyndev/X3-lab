import { nomixa } from "@/app/fonts";
import { cn } from "@/lib/utils"

export const Development = ({ label, description }: { label: string; description: string }) => {
  return (
    <div className="space-y-3 md:space-y-4">
      <h3 className={cn(nomixa.className, "text-xl md:text-2xl lg:text-3xl font-medium")}>
        {label}
      </h3>
      <p className="text-base md:text-lg font-light">
        {description}
      </p>
    </div>
  )
}
