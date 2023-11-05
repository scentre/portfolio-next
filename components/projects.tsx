"use client";
import { projectsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import Project from "./project";

import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      {" "}
      <SectionHeading text="My Projects"></SectionHeading>{" "}
      <div>
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
