import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "START",
//     location: "INDIA",
//     description: "XYZ",
//     icon: React.createElement(LuGraduationCap),
//     date: "20XX",
//   },
// ] as const;

export const experiencesData = [
  {
    title: "Started My Journey",
    location: "Surat, India",
    description:
      "I started learing full stack web development. I learned react within 5 months.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Learning Modern Technologies",
    location: "Surat, India",
    description:
      "I'm learning new technologies like Next.js, TypeScript, Tailwind, Prisma and MongoDB.",
    icon: React.createElement(FaReact),
    date: "2019-2023",
  },
  {
    title: "Building Projects",
    location: "Surat, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Dummy",
    description: "Desc",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
] as const;
