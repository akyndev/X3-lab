"use client";
import React, { useRef } from "react";
// import { Development } from "./development";
// import { Button } from "./ui/button";
// import Image from "next/image";
import {
  motion,
  useAnimate,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { nomixa } from "@/app/fonts";
import { cn } from "@/lib/utils";

const ScrollPin = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const ref1 = useRef<HTMLDivElement | null>(null);
  const ref2 = useRef<HTMLDivElement | null>(null);
  const [scope1, animate] = useAnimate();
  const [scope2, animate2] = useAnimate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const y1 = useTransform(scrollYProgress1, [0, 1], [200, 0]);

  useMotionValueEvent(scrollYProgress, "change", () => {
    animate(scope1.current, { translateY: `${y.get()}%` }, {ease: "linear", damping: 300});
  });
  useMotionValueEvent(scrollYProgress1, "change", () => {
    animate2(scope2.current, { translateY: `${y1.get()}%` }, {ease: "linear", damping: 300});
  });

  return (
    <div className="flex justify-between relative">
      <div className="space-y-56  pb-96 w-6/12">
        <div className="space-y-8" ref={ref}>
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>
            Who can join?
          </h2>
          <p className="text-lg font-light">
            You can join this community if you are transitioning into a
            technical role in tech and you want to learn with a community . You
            can also join if you are already a well established tech
            professional that wants to learn more or help people solve thier
            problems
          </p>
        </div>
        <div className="space-y-8" ref={ref1}>
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>
            Who can join?
          </h2>
          <p className="text-lg font-light">
            You can join this community if you are transitioning into a
            technical role in tech and you want to learn with a community . You
            can also join if you are already a well established tech
            professional that wants to learn more or help people solve thier
            problems
          </p>
        </div>

        <div className="space-y-8" ref={ref2}>
          <h2 className={cn(nomixa.className, "font-medium text-3xl")}>
            Who can join?
          </h2>
          <p className="text-lg font-light">
            You can join this community if you are transitioning into a
            technical role in tech and you want to learn with a community . You
            can also join if you are already a well established tech
            professional that wants to learn more or help people solve thier
            problems
          </p>
        </div>

        {/* <Development
          label="Who can join?"
          description="You can join this community if you are transitioning into a technical role in tech and you want to learn with a community . You can also join if you are already a well established tech professional that wants to learn more or help people solve thier problems"
        />
        <Development
          label="What's in it for you?"
          description="You can join this community if you are transitioning into a technical role in tech and you want to learn with a community . You can also join if you are already a well established tech professional that wants to learn more or help people solve thier problems"
        /> */}
        {/* <Button className="w-[203px] py-6">Submit Proposal</Button> */}
      </div>

      <div className="sticky top-20">
        <div className="sticky top-8 h-[526px] w-[535px] overflow-hidden">
          {/* <motion.div className="bg-gray-100 rounded-lg overflow-hidden absolute inset-0">
          <div>
          <Image
          src={"/the-boys.png"}
          alt="the boys"
          width={400}
          height={400}
          />
          </div>
          <div className="p-6">Our Purpose</div>
          </motion.div>
          <motion.div initial={{ translateY: "100%"}} className="bg-gray-100 rounded-lg overflow-hidden absolute inset-0 z-10">
          <div>
          <Image
          src={"/the-boys.png"}
          alt="the boys"
          width={400}
          height={400}
          />
          </div>
          <div className="p-6">Our main Purpose</div>
          </motion.div>
          <motion.div initial={{ translateY: "200%" }} className="bg-gray-100 rounded-lg overflow-hidden absolute inset-0 z-20">
          <div>
          <Image
          src={"/the-boys.png"}
          alt="the boys"
          width={400}
          height={400}
          />
          </div>
          <div className="p-6">Our main original Purpose</div>
          </motion.div> */}

          <motion.div
            className="bg-gray-800 rounded-lg overflow-hidden absolute inset-0"
          ></motion.div>
          <motion.div
            ref={scope1}
            initial={{ background: "yellow", translateY: "100%" }}
            className="bg-red-800 rounded-lg overflow-hidden absolute inset-0 z-10"
          >
            {y.get()}
          </motion.div>
          <motion.div
            ref={scope2}
            initial={{ background: "red", translateY: "200%" }}
            className="bg-green-800 rounded-lg overflow-hidden absolute inset-0 z-20"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

export default ScrollPin;
