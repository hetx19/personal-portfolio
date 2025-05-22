"use client";

import React from "react";

// Data
import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

// Components
import Heading from "./heading";
import Project from "./project";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <Heading>My Projects</Heading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
