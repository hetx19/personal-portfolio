"use client";

import React, { useState, createContext, useContext } from "react";

// Data
import type { SectionName } from "@/lib/types";

type SectionContextProviderProps = {
  children: React.ReactNode;
};

type SectionContextType = {
  section: SectionName;
  setSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const SectionContext = createContext<SectionContextType | null>(null);

export default function SectionContextProvider({
  children,
}: SectionContextProviderProps) {
  const [section, setSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <SectionContext.Provider
      value={{
        section,
        setSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);

  if (context === null) {
    throw new Error(
      "UseSectionContext must be used within an SectionContextProvider"
    );
  }

  return context;
}
