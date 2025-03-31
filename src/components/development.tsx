
import { nomixa } from "@/app/fonts";
import { cn } from "@/lib/utils"

export const Development = ({ label, description }: { label: string; description: string }) => {
  return (
    <div className="space-y-8">
      <h2 className={cn(nomixa.className, "font-medium text-3xl")}>{label}</h2>
      <p className="text-lg font-light">{description}</p>
    </div>
  )
}
