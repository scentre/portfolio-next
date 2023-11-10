"use client";

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      id="about"
      ref={ref}
    >
      <SectionHeading text="About me" />
      <p className="mb-3">
        <span className="block font-bold">What I Do:</span>
        <span>
          {" "}
          <span className="font-bold "> Development: </span>I specialize in
          React, Next.js, Node.js, and MongoDB, with a knack for TypeScript and
          Prisma.
        </span>
        <span className="block">
          <span className="font-bold ">Teaching: </span> I love sharing
          knowledge. From writing articles to mentoring, empowering others in
          coding is my thing. The tech world never stands still, and neither do
          I. I am always exploring new technologies to stay ahead. Join me on
          this tech journey, where innovation meets simplicity.
        </span>
        <span className="block">
          <span className="font-bold ">
            Writing and Open Source Contributions :
          </span>{" "}
          Beyond coding, I channel my enthusiasm into the written word. I
          regularly pen down articles on software development, sharing insights,
          tips, and my experiences in the tech landscape. Additionally, I am an
          avid supporter of the open-source community, contributing to projects
          that resonate with my mission of fostering collaboration and
          innovation on my linkedin.
        </span>
      </p>
    </motion.section>
  );
};

export default About;
