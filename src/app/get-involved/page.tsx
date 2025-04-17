import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  ApplyIcon,
  Explore,
  JoinX3Lab,
  MentorIcon,
  TrainingIcon,
} from "@/lib/icons";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { nomixa } from "../fonts";

const waysToGetInvolved = [
  {
    label: "Join X3Lab",
    description:
      "Become part of our vibrant tech ecosystem where ideas come to life. Gain access to a free workspace, cutting-edge resources, and a community of like-minded innovators.",
    icon: <JoinX3Lab />,
  },
  {
    label: "Apply for R&D support",
    description:
      "Our Research & Development (R&D) program provides the resources, mentorship, and funding you need to develop and test innovative solutions.",
    icon: <ApplyIcon />,
  },
  {
    label: "Become a Mentor",
    description:
      "Your experience can inspire and guide the next generation of innovators. Share your knowledge, provide career insights, and help shape the future of tech.",
    icon: <MentorIcon />,
  },
  {
    label: "Mentorship based Training Program",
    description:
      "Whether you're new to tech or looking to specialize, our expert-led programs will equip you with real-world experience.",
    icon: <TrainingIcon />,
  },
];

const members = [
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

const GetInvolvedPage = () => {
  return (
    <main className="space-y-24">
      <section>
        <div className="container ">
          <div className="flex py-24 justify-between gap-24 flex-col lg:flex-row">
            <div className=" relative lg:w-4/12 space-y-6">
              <h2 className={cn(nomixa.className, "text-4xl font-semibold")}>
                Get Involved
              </h2>
              <p>Be part of the innovation movement</p>

              <div className="absolute -right-28 -bottom-16 -z-10">
                <svg
                  width="200"
                  height="200"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_107_16255)">
                    <mask
                      id="mask0_107_16255"
                      style={{ maskType: "luminance" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="200"
                      height="200"
                    >
                      <path d="M200 0H0V200H200V0Z" fill="white" />
                    </mask>
                    <g mask="url(#mask0_107_16255)">
                      <path
                        d="M100 0L102.665 74.6397L120.791 2.18524L107.88 75.7481L140.674 8.64545L112.75 77.9164L158.779 19.0983L117.063 81.0498L174.314 33.0869L120.63 85.0115L186.603 50L123.295 89.6282L195.106 69.0983L124.943 94.6982L199.452 89.5471L125.5 100L199.452 110.453L124.943 105.302L195.106 130.902L123.295 110.372L186.603 150L120.63 114.989L174.314 166.913L117.063 118.95L158.779 180.902L112.75 122.084L140.674 191.355L107.88 124.252L120.791 197.815L102.665 125.36L100 200L97.3345 125.36L79.2088 197.815L92.1201 124.252L59.3263 191.355L87.25 122.084L41.2215 180.902L82.9372 118.95L25.6855 166.913L79.3701 114.989L13.3975 150L76.7046 110.372L4.89439 130.902L75.0572 105.302L0.547852 110.453L74.5 100L0.547852 89.5471L75.0572 94.6982L4.89439 69.0983L76.7046 89.6282L13.3975 50L79.3701 85.0115L25.6855 33.0869L82.9372 81.0498L41.2215 19.0983L87.25 77.9164L59.3263 8.64545L92.1201 75.7481L79.2088 2.18524L97.3345 74.6397L100 0Z"
                        fill="url(#paint0_linear_107_16255)"
                      />
                    </g>
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_107_16255"
                      x1="100"
                      y1="0"
                      x2="100"
                      y2="200"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#B8DBFC" />
                      <stop offset="1" stopColor="#F8FBFE" />
                    </linearGradient>
                    <clipPath id="clip0_107_16255">
                      <rect width="200" height="200" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="lg:w-8/12">
              <p className="text-xl font-light">
                X3Lab thrives on collaboration, mentorship, and support from
                passionate individuals and organizations. Whether you&apos;re an
                aspiring innovator, an industry expert, or a company looking to
                make an impact, there’s a place for you here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-10">
          {members.map((member) => (
            <Image
              key={member.name}
              src={`/members/${member.image}`}
              width={315}
              height={387}
              alt="akinlade Joseph"
              className="rounded-md w-full"
            />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full text-white bg-black">
        <div className={`space-y-10 swatch-bg w-full`}>
          <div className="flex container py-16 flex-col lg:flex-row gap-16 lg:gap-0">
            <div className="lg:w-5/12 space-y-8">
              <h3
                className={cn(
                  nomixa.className,
                  "text-3xl lg:text-4xl font-medium"
                )}
              >
                Explore the many <br />
                Ways you can get <br />
                involved!
              </h3>

              <div className="hidden lg:block">
                <Explore />
              </div>
            </div>

            <div className="lg:w-7/12 space-y-10">
              {waysToGetInvolved.map((way, index) => (
                <>
                  <div
                    key={way.label + index.toString()}
                    className="flex items-start lg:items-center gap-8 flex-col lg:flex-row"
                  >
                    <div className="scale-75">{way.icon}</div>

                    <div className="space-y-4">
                      <h3
                        className={cn(nomixa.className, "text-xl lg:text-3xl")}
                      >
                        {way.label}
                      </h3>
                      <p className="lg:text-lg text-base font-light">
                        {way.description}
                      </p>
                    </div>
                  </div>
                  <Separator key={index} className="opacity-50" />
                </>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-44">
        <div className="container flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
          <div className="space-y-6">
            <h2 className={cn(nomixa.className, "text-3xl")}>
              Partner <br /> With Us
            </h2>

            <p className="text-lg font-light pb-6">
              Partner with X3Lab to support <br /> research, mentor emerging{" "}
              <br /> talents, and drive impact through <br /> collaboration
            </p>

            <Button className="w-[203px] py-6">
              Partner With Us
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 21H13.62C14.197 21 14.7672 20.8751 15.2914 20.634C15.8157 20.3928 16.2815 20.0411 16.657 19.603L21.759 13.651C21.8658 13.5266 21.9404 13.3778 21.9762 13.2178C22.012 13.0577 22.0079 12.8913 21.9642 12.7333C21.9206 12.5752 21.8387 12.4303 21.7258 12.3113C21.6129 12.1923 21.4726 12.1029 21.317 12.051L19.349 11.395C18.8734 11.2401 18.3669 11.205 17.8745 11.2928C17.382 11.3805 16.9188 11.5884 16.526 11.898L13.341 14.445L12.724 13.21C12.3935 12.5443 11.8831 11.9844 11.2507 11.5938C10.6184 11.2032 9.88926 10.9975 9.146 11H4C2.897 11 2 11.897 2 13V19C2 20.103 2.897 21 4 21ZM4 13H9.146C9.909 13 10.594 13.423 10.935 14.105L11.382 15H7V17H13.014C13.1678 16.9978 13.3191 16.9602 13.456 16.89L13.459 16.889L13.463 16.887H13.466L13.468 16.886H13.472L13.473 16.885C13.482 16.888 13.476 16.884 13.476 16.884C13.486 16.884 13.478 16.883 13.478 16.883H13.479L13.481 16.882L13.484 16.881L13.486 16.88L13.488 16.879L13.491 16.878L13.493 16.877C13.496 16.877 13.494 16.876 13.495 16.876L13.498 16.874L13.5 16.873L13.502 16.872L13.505 16.871L13.507 16.87H13.508L13.51 16.869L13.513 16.868L13.515 16.867C13.524 16.866 13.518 16.866 13.518 16.866L13.52 16.865C13.5584 16.8415 13.5951 16.8155 13.63 16.787L17.776 13.47C18.038 13.262 18.399 13.197 18.716 13.303L19.273 13.489L15.14 18.312C14.9498 18.5278 14.716 18.7008 14.4539 18.8194C14.1919 18.938 13.9076 18.9996 13.62 19H4V13ZM16 2.00001H15.983C15.82 2.00201 14.977 2.03901 14 2.70501C13.049 2.05701 12.226 2.00501 12.032 2.00101L12.002 2.00001H11.998C11.197 2.00001 10.443 2.31301 9.879 2.87801C9.313 3.44501 9 4.19801 9 5.00001C9 5.80201 9.313 6.55501 9.861 7.10401L13.275 10.69C13.3689 10.7875 13.4816 10.8651 13.6062 10.918C13.7308 10.9709 13.8648 10.9982 14.0002 10.9981C14.1356 10.998 14.2696 10.9706 14.3941 10.9175C14.5187 10.8643 14.6312 10.7866 14.725 10.689L18.121 7.12101C18.688 6.55501 19 5.80201 19 5.00001C19 4.19801 18.687 3.44501 18.122 2.87901C17.8443 2.59964 17.5139 2.37811 17.15 2.22724C16.7861 2.07636 16.3959 1.99913 16.002 2.00001H16ZM17 5.00001C17 5.26701 16.896 5.51801 16.689 5.72501L14 8.55001L11.293 5.70701C11.104 5.51801 11 5.26701 11 5.00001C11 4.73301 11.104 4.48201 11.294 4.29201C11.475 4.10834 11.7211 4.00342 11.979 4.00001C12.004 4.00101 12.481 4.03201 13.046 4.48501C13.1267 4.55034 13.209 4.62434 13.293 4.70701L14 5.41401L14.707 4.70701C14.791 4.62434 14.8733 4.55034 14.954 4.48501C15.483 4.06001 15.93 4.00701 16.006 4.00101C16.269 4.00238 16.5208 4.10729 16.707 4.29301C16.896 4.48201 17 4.73301 17 5.00001Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>

          <div className="flex flex-col lg:flex-row">
            <Image
              width={313}
              height={432}
              className="lg:translate-y-16 rounded-md w-full p-4"
              src={"/partner-with-us-1.png"}
              alt="partner with us"
            />
            <Image
              width={313}
              height={432}
              className="lg:translate-y-0 rounded-md w-full p-4"
              src={"/partner-with-us.png"}
              alt="partner with us"
            />
            <Image
              width={313}
              height={432}
              className="lg:translate-y-32 rounded-md w-full p-4"
              src={"/partner-with-us-2.png"}
              alt="partner with us"
            />
          </div>
        </div>
      </section>

      <section className=" relative text-white">
        <div className="absolute inset-0 bg-[#1CFEBA] -z-10" />
        <div className="w-6/12 bg-[#10315C] -z-10 absolute inset-y-0 left-0 rounded-tr-[4rem]" />
        <div className="w-6/12 bg-[#10315C] -z-10 absolute inset-y-0 right-0 rounded-tl-[4rem]" />

        <div className="container flex items-center justify-center flex-col py-20 space-y-6">
          <h3 className={cn(nomixa.className, "font-medium text-4xl")}>
            Support Our Vision
          </h3>
          <p className="text-center font-light ">
            {" "}
            Every contribution helps us grow and provide more opportunities for
            creators. <br className="hidden lg:block" /> You can support X3Lab
            through donations, resource contributions, or by advocating for our
            mission.{" "}
          </p>
          <Button className="bg-[#1CFEBA] text-black">
            Donate via Bank Transfer
          </Button>
        </div>
      </section>
    </main>
  );
};

export default GetInvolvedPage;
