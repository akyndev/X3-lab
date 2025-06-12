import { cn } from "@/lib/utils";
import { nomixa } from "../fonts";
import ScrollPin from "@/components/scroll-pin";
import MobileScrollPin from "@/components/mobile-scroll-pin";

const InnovatoionBootCampPage = () => {
  return (
    <div className="container space-y-10 pb-16 pt-10">
      <div className="space-y-8">
        <h2 className={cn(nomixa.className, "text-5xl font-semibold")}>
          Research & <br />
          Development Fellowship
        </h2>

        <p className="text-xl">
          A chance to connect with like-minds, be empowered with <br /> problem solving skills and collaborate on impactful
          projects.
        </p>
      </div>

      <div className="hidden lg:block">
        <ScrollPin />
      </div>

      <div className="block lg:hidden">
        <MobileScrollPin />
      </div>
    </div>
  )
};

export default InnovatoionBootCampPage;
