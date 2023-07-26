import styled from "styled-components";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { devices } from "@/styles/breakpoints";
import { useOpenDescriptionsStore } from "@/store/descState";
import { useWindowDimensions } from "@/hooks/useWindowDimensions";

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

type MainFlexProps = {
  image: string;
};

type OverlayProps = {
  isVisible: boolean;
  boxId: number;
};

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
  const [isVisible, setIsVisible] = useState(false);
  const openDescriptions = useOpenDescriptionsStore(
    (state) => state.openDescriptions
  );
  const { width } = useWindowDimensions();
  const disableAnimation = (width as number) <= 1024;

  useEffect(() => {
    setIsVisible(openDescriptions.includes(id));
  }, [openDescriptions, id]);

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

const MainFlex = styled(motion.div)<MainFlexProps>`
  width: 41%;
  max-width: 41%;
  height: 20rem;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.49) 0px 26px 30px -10px,
    rgba(0, 0, 0, 0.33) 0px 16px 10px -10px;
  transition: 0.3s;
  margin-right: 0rem;
  margin-left: 0rem;
  cursor: pointer;
  border-width: 0px;
  border-color: rgb(255, 255, 255, 0.02);
  border-style: solid;
  &:hover {
    transform: scale(1.05);
  }
  position: relative;
  @media ${devices.max1600} {
    height: 16rem;
  }
  @media ${devices.max1400} {
    height: 15rem;
  }
  @media ${devices.max1280} {
  }
  @media ${devices.max1024} {
    width: 100%;
    max-width: 100%;
    height: 17rem;
  }
  @media ${devices.max640} {
    height: 16rem;
  }
  @media ${devices.max480} {
    height: 14rem;
    background-position: center;
  }
`;

const LinkOverlay = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
const ProjectDataMobile = styled.div`
  display: none;
  width: 100%;
  max-width: 100%;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  font-family: "Exo 2", sans-serif;
  color: white;
  @media ${devices.max1024} {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;
    margin-top: 3rem;
  }
`;

const ProjectData = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  border-radius: 15px;
  flex-direction: column;
  width: 100%;
  padding-right: 4rem;
  font-family: "Exo 2", sans-serif;
  color: white;
  padding-left: 3.5rem;
  padding-top: 2.3rem;
  @media ${devices.max1600} {
    padding-left: 3rem;
    padding-top: 1.4rem;
  }
  @media ${devices.max1400} {
    padding-top: 1.5rem;
    padding-left: 2.5rem;
  }
  @media ${devices.max1280} {
  }
  @media ${devices.max1024} {
    display: none !important;
  }
  @media ${devices.max480} {
  }
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;

const Overlay = styled.div<OverlayProps>`
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
  width: 100%;
  border-radius: ${(props) => (props.boxId === 3 ? "10px" : "15px")};
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  border-width: 1px;
  border-color: rgb(255, 255, 255, 0.1);
  border-style: solid;
  background-color: ${(props) =>
    props.boxId === 3 ? "rgb(49, 52, 58, 0.95)" : "rgb(54, 57, 64, 0.8)"};
  backdrop-filter: blur(20px);
  @media ${devices.max1600} {
  }
  @media ${devices.max1400} {
  }
  @media ${devices.max1280} {
  }
  @media ${devices.max1024} {
    display: none !important;
  }
  @media ${devices.max480} {
  }
`;

const TitleFlex = styled.div`
  font-size: 2.3rem;
  font-weight: 500;
  align-items: flex-start;
  margin-bottom: 1.2rem;
  @media ${devices.max1600} {
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  }
  @media ${devices.max1400} {
    font-size: 1.4rem;
  }
  @media ${devices.max1024} {
    margin-top: -1rem;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const DescFlex = styled.div`
  color: primaryText;
  margin-top: 0rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  @media ${devices.max1600} {
    font-size: 1rem;
  }
  @media ${devices.max1400} {
    line-height: 1.6rem;
    font-size: 0.9rem;
  }
  @media ${devices.max1024} {
    font-size: 1.1rem;
  }
`;

const TechStackFlex = styled.div`
  color: secondaryText;
  margin-top: 1.2rem;
  font-size: 1.1rem;
  line-height: 1.5;
  @media ${devices.max1600} {
    font-size: 1rem;
    margin-top: 0.8rem;
  }
  @media ${devices.max1400} {
    font-size: 0.9rem;
  }
  @media ${devices.max1024} {
    font-size: 1.1rem;
  }
`;

const ButtonFlex = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  display: flex;
  @media ${devices.max1600} {
    margin-top: 1.2rem;
  }
  @media ${devices.max1024} {
    margin-top: 2rem;
  }
  @media ${devices.max640} {
    width: 100%;
  }
`;

const LiveLink = styled.a`
  min-width: 9rem;
  width: 11rem;
  height: 2.8rem;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s;
  color: white;
  font-weight: 500;
  background-color: #4b9b97;
  margin-right: 1.2rem;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #6bb1b0;
  }
  @media ${devices.max1600} {
    width: 10rem;
    height: 2.5rem;
  }
  @media ${devices.max1400} {
    width: 9rem;
    height: 2.4rem;
  }
`;

const CodeLink = styled.a`
  min-width: 9rem;
  width: 11rem;
  height: 2.8rem;
  background-color: rgb(255, 255, 255, 0);
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s;
  color: white;
  border: 1px solid #4b9b97;
  font-weight: 500;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: rgb(255, 255, 255, 0.1);
  }
  @media ${devices.max1600} {
    width: 10rem;
    height: 2.5rem;
  }
  @media ${devices.max1400} {
    width: 9rem;
    height: 2.4rem;
  }
`;
