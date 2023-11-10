"use client";
import Image from "next/image";
import myImg from "@/public/tc.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSection } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  const { setActiveSection, setTimeOfLastClick } = useActiveSection();

  return (
    <section
      className="mb-2 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            duration: 0.3,
          }}
        >
          <Image
            src={myImg}
            alt="my picture"
            width={"250"}
            height={"250"}
            quality={"96"}
            priority={true}
            className="h-[110px] w-[110px] rounded-full  border-[0.35rem] border-white object-cover shadow-xl"
          />
        </motion.div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold ml-1">Hello I am ebuka</span> I am a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold ">3 years</span> of experience in the fintech
        realm. I enjoy building <span className="italic">sites & apps</span>. My
        focus is <span className="underline">React (Next.js)</span> i also love
        writing article and contributing to open source.
        <span> visit my linkedln for more</span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group  bg-grey-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale:110 hover:scale-110 hover: bg-gray-950 active:scale-105 transition-all"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me Here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>

        <a
          className="group bg-white   px-7 py-3 flex items-center gap-2 rounded-full  outline-none focus:scale:110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10"
          href="/new ebuka-1.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />{" "}
        </a>

        <a
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem] focus:scale-[1.15] hover:scale-110 active:scale-[1.15] hover:text-gray-950 transition-all cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60"
          href="https://www.linkedin.com/in/ebuka-tc"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 flex items-center gap-2 rounded-full text-gray-700 text-[1.35rem] focus:scale-[1.15] hover:scale-110 active:scale-[1.15] hover:text-gray-950 transition-all cursor-pointer border border-black/10  dark:bg-white/10 dark:text-white/60"
          href="https://github.com/whitechapel007"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
