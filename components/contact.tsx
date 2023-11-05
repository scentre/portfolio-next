"use client";
import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

// async function sendEmail(formData: FormData) {
//   "use server";

//   console.log(formData.get("email"), formData.get("message"));
// }

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[mim(100%, 38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
      ref={ref}
    >
      <SectionHeading text=" Contact me" />
      <p className="text-gray-700">
        Please contact me directly at{" "}
        <a href="mailto:ebukareed@gmail.com" className="underline">
          ebukareed@gmail.com
        </a>
      </p>

      <form
        action={async (formData) => {
          await sendEmail(formData);
        }}
        className="mt-10 flex flex-col"
      >
        <input
          type="email"
          className="h-14 rounded-lg borderBlack"
          required
          placeholder="email"
          name="email"
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="message"
          required
          maxLength={700}
          name="message"
        />
        <button
          type="submit"
          className="h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all flex items-center justify-center gap-2 group"
        >
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950" />
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
