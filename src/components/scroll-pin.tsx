"use client";
import React, { useRef } from "react";
import { nomixa } from "@/app/fonts";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScrollPin = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    gsap.to(".box1", {
      translateY: "0%",
      scrollTrigger: {
        trigger: ".our-purpose",
        start: "start 32px",
        end: "bottom start",
        scrub: true,
        // pin: true,
      },
    });
    gsap.to(".box2", {
      translateY: "0%",
      scrollTrigger: {
        trigger: ".who-can",
        start: "start 32px",
        end: "bottom start",
        scrub: true,
      },
    });
  });

  return (
    <section ref={containerRef} className="flex justify-between relative">
      <div className="space-y-56  pb-96 w-6/12">
        <div className="space-y-8 our-purpose">
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>Our Purpose</h2>
          <p className="text-lg font-light">
            X3Lab Innovation Bootcamps help participants find new ideas by exposing them to creative thinking
            techniques, guiding them to identify real-world problems, and showing them how to quickly turn their ideas
            into testable models without needing big budgets or resources.
          </p>
        </div>
        <div className="space-y-8 who-can">
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>Who can join?</h2>
          <p className="text-lg font-light">
            Students who are eager to learn, aspiring entrepreneurs with early-stage ideas, tech and non-tech talents
            looking to improve their problem-solving skills, or anyone curious about innovation and wanting to learn how
            to create and test new ideas.
          </p>
        </div>

        <div className="space-y-8 join">
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>What&apos;s in it for You?</h2>
          <p className="text-lg font-light">
            1. Learn how to turn ideas into real solutions <br /> 2. Work on real-world projects <br />
            3. Collaborate with other talents and experts <br /> 4. Boost confidence to start or join innovative
            projects <br /> 5. Get exposed to startup tools and resources
          </p>
        </div>
      </div>

      <div className="sticky top-20">
        <div className="sticky top-8 h-[526px] w-[535px] overflow-hidden">
          <div className="bg-gray-200 box rounded-lg overflow-hidden absolute inset-0">
            <div className="w-full">
              <Image src={"/the-boys.png"} alt="the boys" width={400} height={400} className="w-full" />
            </div>
            <div className="p-6">Our Purpose</div>
          </div>
          <div
            style={{ translate: "0 100%" }}
            className="bg-gray-200 box1 rounded-lg overflow-hidden absolute inset-0 z-10"
          >
            <div className="w-full">
              <Image src={"/who-can-join.png"} alt="the boys" width={400} height={400} className="w-full" />
            </div>
            <div className="p-6">Who can join</div>
          </div>
          <div
            style={{ translate: "0 200%" }}
            className="bg-gray-200 box2 rounded-lg overflow-hidden absolute inset-0 z-20"
          >
            <div className="w-full">
              <Image src={"/what's-in-it-for-you.png"} alt="the boys" width={400} height={400} className="w-full" />
            </div>
            <div className="p-6">What&apos;s in it for you?</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default ScrollPin;
