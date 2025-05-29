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
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt={projectData?.title ? projectData.title : ""}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={
              projectData?.imageUrl
                ? projectData.imageUrl
                : "https://dummyimage.com/400x400"
            }
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              PROJECT NAME
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {projectData?.title}
            </h1>

            <p className="leading-relaxed mb-5">{projectData?.description}</p>

            <div className="flex justify-center items-center">
              <a target="_blank" href={projectData?.link}>
                <button className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 ml-auto mr-auto">
                  Vist Website
                </button>
              </a>
              <button
                onClick={() => {
                  router.back();
                }}
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 ml-auto mr-auto"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
