"use client";
import { experiencesData } from "@/lib/data";
import SectionHeading from "./section-heading";

import { Chrono } from "react-chrono";
import { useSectionInView } from "@/lib/hooks";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40" ref={ref}>
      <SectionHeading text="My experience" />

      <div>
        <Chrono
          items={experiencesData}
          mode="VERTICAL_ALTERNATING"
          cardWidth={800}
          cardHeigth={300}
          timelinePointShape={"circle"}
          hideControls
          theme={{
            primary: "grey",
            boxShadow: "black",
            titleColor: "black",
            titleColorActive: "grey",
            textAlign: "left",
            padding: "1.3rem 2rem",
          }}
          slideShow="true"
          slideItemDuration={4500}
        />
      </div>

      {/* <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: "#f3f4f6",
              boxShadow: "none",
              border: "1px solid rgba(0,0,0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight: "0.4rem solid #f3f4f6",
            }}
            date={experience.date}
            icon={experience.icon}
            iconStyle={{
              background: "white",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{experience.title}</h3>
            <p className="font-normal !mt-0">{experience.location}</p>

            <p className="!mt-1 font-normal text-gray-700">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline> */}
    </section>
  );
};

export default Experience;
