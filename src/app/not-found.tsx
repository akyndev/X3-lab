import { cn } from "@/lib/utils";
import Link from "next/link";
import { nomixa } from "./fonts";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center space-y-20 py-40">
      <h2
        className={cn(
          nomixa.className,
          "text-4xl lg:8xl font-medium text-center"
        )}
      >
       Too Dry Here <br /> <br /> Return Home
      </h2>
      <Link href={"/"} className="mx-auto">
        <Button className="px-12 py-6">Home Sweet Home</Button>
      </Link>
    </div>
  );
}
