import React from "react";
import { useInView } from "react-intersection-observer";

// Context
import { useSectionContext } from "@/context/section-context";

// Data
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });

  const { setSection, timeOfLastClick } = useSectionContext();

  React.useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setSection(sectionName);
    }
  }, [inView, setSection, timeOfLastClick, sectionName]);

  return { ref };
}
