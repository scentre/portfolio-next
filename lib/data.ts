import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import dashboard from "@/public/dashboard.png";
import docs from "@/public/docs.png";
import ecommerce from "@/public/e-commerce.png";
import jobApp from "@/public/job-app.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
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

export const experiencesData = [
  {
    cardTitle: "Rentaa. ng, Remote",
    cardSubtitle: "Front End Developer, React",
    cardDetailedText:
      "A social lending marketplace that allows anyone to lend out and rent gadgets, devices, and equipment with optimal ease, convenience, and security.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    cardTitle: "Huawei Technologies, Lagos Nigeria",
    cardSubtitle: "FRONT OFFICE ENGINEER",
    cardDetailedText:
      "i worked with network monitoring tools to track network devices, servers, and applications, identifying and addressing any issues or anomalies that arise",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    cardTitle: "GomyCode, Lagos Nigeria",
    cardSubtitle: "WEB DEVELOPER, (INSTRUCTOR - CONTRACT)",
    cardDetailedText:
      "i work as a part-time web development instructor with gomycode on the weekends",
    icon: React.createElement(FaReact),
    date: "2023",
  },
  {
    cardTitle: "ImaliPay, Lagos Nigeria",
    cardSubtitle: "FRONT END DEVELOPER, (Fintech Startup)",
    cardDetailedText:
      "I'm front end developer working with a fintech. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to collaborations and other opportunities.",
    icon: React.createElement(FaReact),
    date: "2023",
  },
] as const;

export const projectsData = [
  {
    title: "internal dashboard",
    description:
      "I worked as a front-end developer on this project for.Users can have real-time data on transactions and perform many fuctionalities like export, filter etc.",
    tags: ["React", "Next.js", "CHakra ui", "Tailwind", "swr"],
    imageUrl: dashboard,
  },
  {
    title: "jobify",
    description:
      "I worked as a full-stack developer on this project. Users can post jobs and search for jobs, edit and delete jobs.",
    tags: ["React", "Next.js", "MongoDB", "styled components"],
    imageUrl: jobApp,
  },
  {
    title: "docs",
    description:
      "api docs is a static site to view all our apis and their documentation. I was the front-end developer.",
    tags: ["React", "TypeScript", "docusaurus", "Tailwind"],
    imageUrl: docs,
  },
  {
    title: "ecommerce",
    description:
      "an ecommerce site to buy check out products and add to cart.users can login and add items to cart.",
    tags: ["React", "styled components", "Framer"],
    imageUrl: ecommerce,
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
  "Apollo",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
