"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// Data
import { projectsData } from "@/lib/data";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  id,
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <Link href={`/project/${id}`}>
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgess,
          opacity: opacityProgess,
        }}
        className="group mb-3 sm:mb-8 last:mb-0"
      >
        <section className="relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-white/10 dark:to-white/20 border border-black/5 rounded-2xl overflow-hidden shadow-2xl sm:pr-16 sm:h-[26rem] group hover:shadow-[0_15px_60px_rgba(0,0,0,0.2)] transition-all duration-500 w-full max-w-screen-xl xl:pr-24 pl-4 my-10 backdrop-blur-sm">
          <div className="pt-10 pb-12 sm:pt-16 sm:max-w-[60%] flex flex-col h-full sm:group-even:ml-[28rem]">
            <h3 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6 tracking-tight leading-snug">
              {title}
            </h3>

            <p className="text-base text-gray-700 dark:text-gray-300 mb-6">
              {description}
            </p>

            <div className="flex flex-wrap gap-3 mt-auto">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-md hover:brightness-110 transition-transform duration-300 transform hover:scale-105 dark:from-purple-400 dark:via-pink-400 dark:to-red-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Image
            src={imageUrl}
            alt="Project Image"
            quality={95}
            className="absolute hidden sm:block top-10 -right-56 w-[34rem] rounded-xl shadow-2xl transition-all duration-500 group-hover:scale-[1.07] group-hover:-translate-x-4 group-hover:translate-y-4 group-hover:-rotate-2 group-even:group-hover:translate-x-4 group-even:group-hover:translate-y-4 group-even:group-hover:rotate-2 group-even:right-auto group-even:-left-56"
          />
        </section>
      </motion.div>
    </Link>
  );
}
