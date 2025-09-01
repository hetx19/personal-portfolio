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
        My journey in tech began back in class{" "}
        <span className="font-medium">VI</span>, when I became fascinated by{" "}
        <span className="font-medium">How Website Works</span>, That curiosity
        sparked a passion for coding and led me to dive into full-stack web
        development soon after.
      </p>

      <p>
        Now, I&apos;m a first-year B.Tech CSE student at{" "}
        <span className="font-bold underline">IIIT Kottayam</span>, and I love
        building real-world projects that bring ideas to life. My core tech
        stack includes{" "}
        <span className="font-bold underline">
          React, Next.js, Node.js, and MongoDB
        </span>
        , and I&apos;m also familiar with{" "}
        <span className="font-bold underline">TypeScript and Prisma</span>.
        I&apos;m always eager to explore and learn new technologies to sharpen
        my skills.
      </p>

      <p>
        Currently, I&apos;m also learning{" "}
        <span className="font-medium underline">
          Data Structures and Algorithms (DSA)
        </span>{" "}
        to strengthen my problem solving abilities.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, you&apos;ll
        find me playing video games, watching movies, or enjoying some quiet
        time in nature.. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium underline">
          Data Structure And Algorithm(DSA)
        </span>
        .
      </p>
    </motion.section>
  );
}
