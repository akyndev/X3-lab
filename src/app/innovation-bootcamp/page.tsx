import { cn } from "@/lib/utils";
import { nomixa } from "../fonts";
import ScrollPin from "@/components/scroll-pin";
import MobileScrollPin from "@/components/mobile-scroll-pin";

const InnovatoionBootCampPage = () => {
  return (
    <div className="container space-y-10 pb-16 pt-10">
      <div className="space-y-8">
        <h2 className={cn(nomixa.className, "lg:text-5xl text-3xl font-semibold")}>
        Innovation Bootcamps
        </h2>
 
        <p className="text-lg lg:text-xl font-light">
          Connect with like-minded creatives, access resources, <br className="hidden lg:block" />
          and collaborate on impactful projects
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
