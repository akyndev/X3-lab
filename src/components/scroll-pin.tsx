"use client";
import React from "react";
import { Development } from "./development";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "motion/react";

const ScrollPin = () => {
  return (
    <div className="flex justify-between">
      <div className="space-y-14 w-6/12">
        <Development
          label="Our Purpose."
          description="NexaScale Study Groups is a vitual community created for people to connect, learn, build projects, and get their technical questions answered. We host bi-weekly office hour sessions for different tracks"
        />
        <Development
          label="Who can join?"
          description="You can join this community if you are transitioning into a technical role in tech and you want to learn with a community . You can also join if you are already a well established tech professional that wants to learn more or help people solve thier problems"
        />
        <Development
          label="What's in it for you?"
          description="You can join this community if you are transitioning into a technical role in tech and you want to learn with a community . You can also join if you are already a well established tech professional that wants to learn more or help people solve thier problems"
        />
        <Button className="w-[203px] py-6">Submit Proposal</Button>
      </div>

      <div className="relative h-[526px] w-[535px] overflow-hidden">
        <motion.div className="bg-gray-100 rounded-lg overflow-hidden absolute inset-0">
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
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollPin;
