import { nomixa } from "@/app/fonts";
import { cn } from "@/lib/utils";
import ProfileCard from "./profile-card";

const Mentors = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="space-y-14">
      <div className="text-center">
        <h3 className={cn("text-2xl lg:text-4xl", nomixa.className)}>
          {title}
        </h3>
        <p className="font-light">{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </div>
    </section>
  );
};

export default Mentors;
