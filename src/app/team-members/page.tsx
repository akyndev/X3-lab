import ProfileCard from "@/components/profile-card";
import { nomixa } from "../fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const members = [
  {
    name: "Abidemi Olaosebikan",
    role: "social media manager",
    image: "Abidemi Olaosebikan (social media manager).JPG",
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
    name: "Boluwatife Adeyeye",
    role: "Back-end Developer",
    image: "Boluwatife Adeyeye (Back-end Developer).jpg",
  },
  {
    name: "Damilola Akingbade",
    role: "Public Speaker",
    image: "Damilola Akingbade (Public Speaker).jpg",
  },
  {
    name: "Daniel Ademola",
    role: "Devops Engineer",
    image: "Daniel Ademola (Devops Engineer).jpg",
  },
  {
    name: "Daniel Adesina",
    role: "front -end developer",
    image: "Daniel Adesina (front -end developer).JPG",
  },
  {
    name: "David Olukayode",
    role: "Techical writer",
    image: "David Olukayode (Techical writer) .jpg",
  },
  {
    name: "Emmanuel Oluwatundimu",
    role: "Data Analyst",
    image: "Emmanuel Oluwatundimu (Data Analyst).jpg",
  },
  {
    name: "Esther Adediran",
    role: "project manager",
    image: "Esther Adediran (project manager).jpg",
  },
  {
    name: "Faith Sesan",
    role: "community manager",
    image: "Faith Sesan (community manager).jpg",
  },
  {
    name: "Faruq Olanrewaju",
    role: "Motion graphics designer",
    image: "Faruq Olanrewaju (Motion graphics designer).JPG",
  },
  {
    name: "Faud Obatula",
    role: "Back-end developer",
    image: "Faud Obatula (Back-end developer).JPG",
  },
  {
    name: "Feranmi Ojediji",
    role: "product designer",
    image: "Feranmi Ojediji (product designer).jpeg",
  },
  {
    name: "Francis Gbohunmi",
    role: "Back-end developer",
    image: "Francis Gbohunmi (Back-end developer).JPG",
  },
  {
    name: "Ibrahim Sarafadeen",
    role: "Devops Engineer",
    image: "Ibrahim Sarafadeen (Devops Engineer).jpg",
  },
  {
    name: "Isaac Onyeakagbu",
    role: "Project manager",
    image: "Isaac Onyeakagbu (Project manager).jpg",
  },
  {
    name: "John Okpara",
    role: "copy writer",
    image: "John Okpara (copy writer).jpg",
  },
  {
    name: "Kehinde Awodele",
    role: "Back-end developer",
    image: "Kehinde Awodele (Back-end developer).jpg",
  },
  {
    name: "Kelvin Nnadi",
    role: "Embeded system engineer",
    image: "Kelvin Nnadi (Embeded system engineer).jpg",
  },
  {
    name: "Mclenox Daomi",
    role: "Videographer",
    image: "Mclenox Daomi (Videographer).jpg",
  },
  {
    name: "Mercy Adedipe",
    role: "videographer",
    image: "Mercy Adedipe (videographer).png",
  },
  {
    name: "Niel Azuali",
    role: "Embeded system engineer",
    image: "Niel Azuali (Embeded system engineer).jpg",
  },
  {
    name: "Oghenetefa Okotete",
    role: "full stack developer",
    image: "Oghenetefa Okotete (full stack developer).JPG",
  },
  {
    name: "Oludayo Majaro",
    role: "Graphics designer",
    image: "Oludayo Majaro (Graphics designer).jpg",
  },
  {
    name: "Oluwayanmife Awolusi",
    role: "data analyst",
    image: "Oluwayanmife Awolusi (data analyst).JPG",
  },
  {
    name: "Peter Oyeniran",
    role: "Copy writer",
    image: "Peter Oyeniran (Copy writer).JPG",
  },
  {
    name: "Precious Ajiboye",
    role: "product designer",
    image: "Precious Ajiboye (product designer).JPG",
  },
  {
    name: "Samuel Nwanko",
    role: "mobile developer",
    image: "Samuel Nwanko (mobile developer) .jpg",
  },
  {
    name: "Victor Raji",
    role: "Front-end Developer",
    image: "Victor Raji (Front-end Developer).jpg",
  },
];

const TeamMembers = () => {
  return (
    <main>
      <section>
        <div className="container space-y-14">
          <div className="text-center space-y-6">
            <h2
              className={cn(
                "text-2xl lg:text-5xl lg:leading-[65px]",
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

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-8">
            {members.map((member) => (
              <ProfileCard key={member.name} {...member} />
            ))}
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
                  Become a member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TeamMembers;
