import { useState, useEffect } from "react";

import { useOpenDescriptionsStore } from "@/store/descState";
import { useWindowDimensions } from "@/utils/useWindowDimensions";

export interface WebsiteBoxProps {
  id: number;
  title: string;
  desc: string;
  techStack: string;
  liveLink: string;
  codeLink?: string;
  image: string;
  previewLink?: string;
  isLight?: boolean;
}

export const useWebsiteBox = ({ id }: { id: number }) => {
  const [isVisible, setIsVisible] = useState(false);
  const openDescriptions = useOpenDescriptionsStore(
    (state) => state.openDescriptions
  );
  const { width } = useWindowDimensions();
  const disableAnimation = (width as number) <= 1024;

  useEffect(() => {
    setIsVisible(openDescriptions.includes(id));
  }, [openDescriptions, id]);

  return { isVisible, disableAnimation };
};
