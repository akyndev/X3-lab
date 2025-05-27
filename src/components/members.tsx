import { nomixa } from "@/app/fonts";
import { cn } from "@/lib/utils";
import ProfileCard from "./profile-card";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Ademeso Daniel",
    role: "Founder X3 Lab",
    image: "Ademeso Daniel (Founder X3 Lab).jpg",
  },
  {
    name: "Badewa Adesola",
    role: "Program Manager",
    image: "BADEWA ADESOLA Oluwatoyin (Program Manager).jpg",
  },
  {
    name: "Promise Umoh",
    role: "Assist. Program Manager",
    image: "Promise Umoh(Assist. Program Manager).jpg",
  },
];

const Members = ({
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
        {members.map((member) => (
          <ProfileCard key={member.name} {...member} />
        ))}{" "}
        <div className="space-y-4">
          <Image
            src={"/become-a-mentor.png"}
            width={315}
            height={387}
            alt=""
            className="rounded-md w-full h-[387px] object-cover"
          />

          <div>
            <Link className="underline text-blue-800" href={"#"}>
              Become a member
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
