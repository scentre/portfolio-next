"use client";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { projectsData } from "@/lib/data";
type ProjectProps = (typeof projectsData)[number];

export default function Project({
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

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.65, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.62, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className=" mb-3 sm:mb-8 last:mb-0"
    >
      <article className="group bg-gray-100 max-w-[42rem] border border-black/5  overflow-hidden sm:pr-8 relative sm:h-[20rem] even:pl-8 hover:bg-gray-200 transition">
        <div className="py-4 px-5sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full pb-6 sm:group-even:ml-[26rem]">
          <h3 className="text-2xl font-semibold dark:text-black/[0.7]">
            {title}
          </h3>

          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
          <ul className="flex flex-wrap  mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="projects "
          quality={95}
          className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl hidden sm:block
        group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2
        group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3 group-even:group-hover:rotate-2
        transition group-even:-rigth-[initial] group-even:-left-40"
        />
      </article>
    </motion.div>
  );
}
