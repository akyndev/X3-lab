import { nomixa } from "@/app/fonts";
import { cn } from "@/lib/utils";
import ProfileCard from "./profile-card";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Abidemi Olaosebikan",
    role: "social media manager",
    image: "Abidemi Olaosebikan (social media manager).JPG",
  },
  {
    name: "Ademeso Daniel",
    role: "Founder X3 Lab",
    image: "Ademeso Daniel (Founder X3 Lab).jpg",
  },
  {
    name: "Ademola Anjorin",
    role: "Community Manager",
    image: "Ademola Anjorin (Community Manager).jpg",
  },
  {
    name: "Ayomide Ibidapo",
    role: "front end developer",
    image: "Ayomide Ibidapo (front end developer).jpg",
  },
  {
    name: "Abidemi Olaosebikan",
    role: "social media manager",
    image: "Abidemi Olaosebikan (social media manager).JPG",
  },
  {
    name: "Ademeso Daniel",
    role: "Founder X3 Lab",
    image: "Ademeso Daniel (Founder X3 Lab).jpg",
  },
  {
    name: "Ademola Anjorin",
    role: "Community Manager",
    image: "Ademola Anjorin (Community Manager).jpg",
  },


];

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
        {members.map((member, index) => (
          <ProfileCard key={member.name + index.toString()} {...member} />
        ))}{" "}
        <div className="space-y-4">
          <Image
            src={"/become-a-mentor.png"}
            width={315}
            height={387}
            alt="akinlade Joseph"
            className="rounded-md w-full h-[387px] object-cover"
          />

          <div>
            <Link className="underline text-blue-800" href={"#"}>
              Become a mentor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mentors;
