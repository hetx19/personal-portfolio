"use client";

import React from "react";
import { motion } from "framer-motion";

// Components
import Heading from "./heading";

// Data
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <Heading>About Me</Heading>
      <p className="mb-3">
        During my class <span className="font-medium">VI</span> I got fasinated
        about <span className="font-medium">Coding And How Website Works</span>,
        This led me to learn programming. After my class{" "}
        <span className="font-medium">VI</span> I started learning{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is to
        build projects. My core stack is{" "}
        <span className="font-medium underline">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. Currently I am a student in Class{" "}
        <span className="font-medium">XII</span>
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, watching movies, and sitting in nature. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{" "}
        <span className="font-medium underline">
          Data Structure And Algorithm(DSA)
        </span>
        .
      </p>
    </motion.section>
  );
}
