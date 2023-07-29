import { motion } from "framer-motion";

import { useWebsiteBox } from "./useWebsiteBox";
import {
  ButtonFlex,
  CodeLink,
  DescFlex,
  LinkOverlay,
  LiveLink,
  MainFlex,
  Overlay,
  ProjectData,
  ProjectDataMobile,
  TechStackFlex,
  TitleFlex,
} from "./styles";

interface WebsiteBoxProps {
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

export const WebsiteBox = ({
  id,
  title,
  desc,
  techStack,
  liveLink,
  codeLink,
  image,
  previewLink,
}: WebsiteBoxProps) => {
  const { isVisible, disableAnimation } = useWebsiteBox({ id });

  return (
    <>
      <MainFlex
        image={image}
        initial={disableAnimation ? { opacity: 1 } : { opacity: 0 }}
        animate={disableAnimation ? { opacity: 1 } : { opacity: 1 }}
        transition={
          disableAnimation
            ? { duration: 0, delay: 0 }
            : { duration: 0.2, delay: id / 10 }
        }
      >
        {!isVisible && <LinkOverlay href={liveLink} target="_blank" />}
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            style={{ position: "relative", zIndex: 999999 }}
            exit={{ opacity: 0 }}
          >
            <ProjectData isVisible={isVisible}>
              <TitleFlex>{title}</TitleFlex>
              <DescFlex>{desc}</DescFlex>
              <TechStackFlex>Tech stack: {techStack}</TechStackFlex>
              <ButtonFlex>
                <LiveLink href={liveLink} target="_blank">
                  Live
                </LiveLink>
                {(codeLink || previewLink) && (
                  <CodeLink
                    href={codeLink ? codeLink : previewLink}
                    target="_blank"
                  >
                    {codeLink ? "Code" : "Preview"}
                  </CodeLink>
                )}
              </ButtonFlex>
            </ProjectData>
          </motion.div>
        )}
        <Overlay isVisible={isVisible} boxId={id} />
      </MainFlex>
      <ProjectDataMobile>
        <TitleFlex>{title}</TitleFlex>
        <DescFlex>{desc}</DescFlex>
        <TechStackFlex>Tech stack: {techStack}</TechStackFlex>
        <ButtonFlex>
          <LiveLink href={liveLink} target="_blank">
            Live
          </LiveLink>
          {(codeLink || previewLink) && (
            <CodeLink href={codeLink ? codeLink : previewLink} target="_blank">
              {codeLink ? "Code" : "Preview"}
            </CodeLink>
          )}
        </ButtonFlex>
      </ProjectDataMobile>
    </>
  );
};
