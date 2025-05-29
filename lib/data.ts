import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import { FaReact } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import pokeddexImg from "@/public/pokedex.png";

export const links = [
  {
    name: "Home",
    hash: "/#",
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
  },
  {
    name: "Skills",
    hash: "/#skills",
  },
  {
    name: "Experience",
    hash: "/#experience",
  },
  {
    name: "Contact",
    hash: "/#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "My Full-Stack Web Development Journey Begins",
    location: "Surat, India",
    description:
      "I started from the ground up, learning the fundamentals of HTML, CSS, and JavaScript before moving into more advanced frameworks. Within five months, I focused intensively on mastering React.js, building a solid understanding of component-based architecture, state management, hooks, and creating responsive, dynamic user interfaces.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Leveling Up with Modern Web Technologies",
    location: "Surat, India",
    description:
      "As part of advancing my full-stack development skills, I’ve been actively learning and working with modern technologies such as Next.js, TypeScript, Tailwind CSS, and MongoDB. These tools have enabled me to build more efficient, scalable, and user-friendly applications. Next.js has introduced me to server-side rendering and optimized routing, while TypeScript has improved the reliability and maintainability of my code through static typing. With Tailwind CSS, I’m able to design clean, responsive interfaces quickly and MongoDB has given me the flexibility of a powerful NoSQL database. Together, these technologies are helping me build full-stack applications that are modern, performant, and production-ready.",
    icon: React.createElement(FaReact),
    date: "2019-2023",
  },
  {
    title: "Real-World Builds",
    location: "Surat, India",
    description:
      "I am currently engaged in building comprehensive project that brings together all the technologies and tools I have learned throughout my journey so far. This initiative is designed to not only reinforce my technical understanding but also challenge me to think critically and solve real-world problems. By integrating various programming languages, frameworks, and development practices, the project serves as a hands-on opportunity to bridge theory with application. It allows me to design, build, and refine a functional solution from the ground up, while also enhancing my problem-solving abilities, creativity, and attention to detail. Through this process, I am gaining deeper insights into how different technologies interact and complement each other, which is proving to be an incredibly meaningful and practical learning experience.",
    icon: React.createElement(CgWorkAlt),
    date: "2025 - present",
  },
] as const;

export const projectsData = [
  {
    id: 1,
    title: "Pokedex: React App",
    description:
      "This project is a dynamic and responsive web application built using React, integrated with Redux for robust state management, and styled with SASS to ensure scalable and maintainable design. It also leverages Firebase Authentication, allowing users to seamlessly sign in using their Google accounts, enhancing both security and user experience. The combination of these modern technologies results in a performant, user-friendly platform that's designed for scalability and future growth.",
    tags: ["React", "Saas", "Redux", "Firebase"],
    imageUrl: pokeddexImg,
    link: "https://pokedex-harshal-savaliya.netlify.app/",
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
  "Firebase",
  "Saas",
  "Sanity",
  "Strapi",
] as const;
