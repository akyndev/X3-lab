import ProfileCard from "@/components/profile-card";
import { nomixa } from "../fonts";
import { cn } from "@/lib/utils";

const TeamMembers = () => {
  return (
    <main>
      <section>
        <div className="container space-y-14">
          <div className="text-center space-y-6">
            <h2
              className={cn(
                "text-2xl lg:text-5xl lg:leading-[86px]",
                nomixa.className
              )}
            >
              We are the people who <br />
              make up X3Lab FUTA
            </h2>
            <p className="font-light">
              We provide a collaborative ecosystem where tech creatives, <br />
              innovators, and problem-solvers bring their boldest ideas to life
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamMembers;
