"use client";

import {
  ReactNode,
  useState,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";

import type { SectionName } from "@/lib/types";

type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: Dispatch<SetStateAction<number>>;
};

const ActiveContext = createContext<ActiveSectionContextType>({
  activeSection: "Home",
  setActiveSection: () => {},
  timeOfLastClick: 0,
  setTimeOfLastClick: () => {},
});

export default function ActiveSectionContext({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveContext.Provider>
  );
}

export function useActiveSection() {
  const context = useContext(ActiveContext);

  if (context == null) {
    throw new Error(
      "useActiveSectionContext must  be within  a ActiveContext Provider"
    );
  }

  return context;
}
