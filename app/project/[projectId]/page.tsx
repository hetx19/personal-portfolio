"use client";

import React from "react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

// Data
import { projectsData } from "@/lib/data";

export default function ProjectPage() {
  const router = useRouter();
  const slug = useParams();

  const projectData = projectsData.find(
    (project) => project.id === Number(slug.projectId)
  );

  return (
    <div>
      {projectData ? (
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-6 py-20 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
              <a
                target="_blank"
                href={
                  projectData?.link ||
                  "https://harshal-personal-portfolio.vercel.app/"
                }
              >
                <div className="overflow-hidden pt-6">
                  <Image
                    alt={projectData?.title || "Project Image"}
                    src={
                      projectData?.imageUrl || "https://dummyimage.com/400x400"
                    }
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover object-center transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </a>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-xl font-bold text-indigo-600 dark:text-white/70 tracking-widest uppercase mb-2">
                  PROJECT NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1 dark:text-white">
                  {projectData?.title}
                </h1>

                <p className="leading-relaxed text-gray-700 dark:text-gray-300 pb-3">
                  {projectData?.description}
                </p>
                <div className="flex justify-center items-center">
                  <a
                    target="_blank"
                    href={
                      projectData?.link ||
                      "https://harshal-personal-portfolio.vercel.app/"
                    }
                    className="inline-flex items-center justify-center bg-gray-900 focus:scale-110 hover:scale-110 active:scale-105 text-white font-medium px-6 py-3 rounded-full transition duration-300 dark:bg-white/10"
                  >
                    Visit Website
                  </a>
                  <button
                    onClick={() => {
                      router.back();
                    }}
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack duration-300 dark:bg-white/10 ml-auto mr-auto"
                  >
                    Go Back
                  </button>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-indigo-600 dark:text-white/70 tracking-widest uppercase mt-5 mb-2">
                  Tech Stack
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {projectData?.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 px-4 py-2 text-sm uppercase tracking-widest text-white rounded-full shadow-md hover:brightness-110 transition dark:from-purple-400 dark:via-pink-400 dark:to-red-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
          <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            404
          </h1>
          <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Page Not Found
          </p>
          <p className="text-md text-gray-500 dark:text-gray-400 mb-6 max-w-md">
            Sorry, the page you&apos;re looking for doesn&apos;t exist
          </p>

          <button
            onClick={() => {
              router.push("/");
            }}
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack duration-300 dark:bg-white/10 ml-auto mr-auto"
          >
            Go to Homepage
          </button>
        </div>
      )}
    </div>
  );
}
