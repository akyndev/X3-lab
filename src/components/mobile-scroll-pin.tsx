"use client";
import React, { useRef } from "react";
import { nomixa } from "@/app/fonts";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const MobileScrollPin = () => {
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
      <div className="space-y-8">
        <div className="space-y-16">
          <div className="sticky top-8 h-96 w-full -z-10 bg-gray-200 overflow-hidden rounded-lg">
            <div className="overflow-hidden sticky top-0">
              <div className="w-full">
                <Image
                  src={"/the-boys.png"}
                  alt="the boys"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="p-6">Our Purpose</div>
            </div>
          </div>

          <div className="space-y-8 sticky top-8 our-purpose -z-10 bg-[gray] rounded-lg text-white h-96 p-8">
            <h2 className={cn(nomixa.className, "font-medium text-3xl")}>
              Our Purpose
            </h2>
            <p className="text-lg font-light">
              X3Lab is a dynamic community where tech enthusiasts, creatives,
              and innovators come together to learn, collaborate, build
              projects, and grow professionally. We host bi-weekly sessions and
              hands-on office hours across various tech and creative tracks
            </p>
          </div>

          <div className="sticky top-8 w-full -z-10 bg-gray-200 overflow-hidden rounded-lg">
            <div className="overflow-hidden sticky top-0">
              <div className="w-full">
                <Image
                  src={"/who-can-join.png"}
                  alt="the boys"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="p-6">Who can join</div>
            </div>
          </div>

          <div className="space-y-8 sticky top-8 our-purpose -z-10 bg-[gray] rounded-lg text-white h-96 p-8">
            <h2 className={cn(nomixa.className, "font-medium text-3xl")}>
              Who can Join?
            </h2>
            <p className="text-lg font-light">
              Whether you&apos;re transitioning into tech, taking your first
              steps as a creative technologist, or you&apos;re a seasoned
              professional eager to give back or level up—this community is for
              you
            </p>
          </div>

          <div className="sticky top-8  w-full -z-10 bg-gray-200 overflow-hidden rounded-lg">
            <div className="overflow-hidden sticky top-0">
              <div className="w-full">
                <Image
                  src={"/what's-in-it-for-you.png"}
                  alt="the boys"
                  width={400}
                  height={400}
                  className="w-full"
                />
              </div>
              <div className="p-6">What&apos;s in it for you?</div>
            </div>
          </div>

          <div className="space-y-8 sticky top-8 our-purpose -z-10 bg-[gray] rounded-lg text-white h-96 p-8">
            <h2 className={cn(nomixa.className, "font-medium text-3xl")}>
              What&apos;s in it for you?
            </h2>
            <p className="text-lg font-light">
              1. Learn from real people solving real problems <br /> 2. Join
              project-based learning sessions <br />
              3. Get help from mentors and peers <br /> 4. Build your portfolio
              and confidence <br /> 5. Stay plugged into a supportive and
              inspiring ecosystem
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileScrollPin;
