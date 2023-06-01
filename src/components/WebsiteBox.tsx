import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

import { devices } from "@/styles/breakpoints";
import { GithubButton } from "./SideButtons";

interface WebsiteBoxProps {
  title: string;
  desc: string;
  techStack: string;
  liveLink: string;
  codeLink?: string;
  image: StaticImageData;
  previewLink?: string;
  isLight?: boolean;
}

export const WebsiteBox = ({
  title,
  desc,
  techStack,
  liveLink,
  codeLink,
  image,
  previewLink,
}: WebsiteBoxProps) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="motion-div"
      >
        <ImageFlex href={liveLink} target="_blank">
          <StyledImage src={image} alt="Website Image" loading="lazy" />
        </ImageFlex>
        <ProjectData>
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
          <GithubButtonFlex>
            <GithubButton />
          </GithubButtonFlex>
        </ProjectData>
      </motion.div>
    </>
  );
};

const ProjectData = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  font-family: "Exo 2", sans-serif;
  color: white;
  justify-content: flex-start;
  text-align: left;
  padding-left: 4rem;
  padding-bottom: 4rem;
  @media ${devices.max1600} {
    padding-bottom: 2rem;
    padding-left: 3rem;
  }
  @media ${devices.max1400} {
    padding-bottom: 2rem;
    padding-left: 2rem;
  }
  @media ${devices.max1280} {
    padding-bottom: 2rem;
    padding-left: 1.5rem;
  }
  @media ${devices.max1024} {
    padding-top: 1rem;
    max-width: 33rem;
    width: 100%;
    margin-bottom: 2rem;
  }
  @media ${devices.max480} {
    padding-left: 0.5rem;
  }
`;

const ImageFlex = styled.a`
  height: 23.5rem;
  border-radius: 6px;
  margin-bottom: 2rem;
  position: relative;
  background-color: rgba(255, 255, 255, 0);
  transition: 0.3s;
  width: 50%;
  padding-left: 0rem;
  @media ${devices.max1600} {
    margin-bottom: 0rem;
  }
  @media ${devices.max1400} {
    margin-bottom: -2rem;
  }
  @media ${devices.max1024} {
    width: 100%;
  }
  @media ${devices.max1024} {
    height: unset;
  }
  @media ${devices.max640} {
    padding-top: 2rem;
  }
`;

const StyledImage = styled(Image)`
  width: auto;
  max-width: 34rem;
  max-height: 20rem;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.03);
  }
  @media ${devices.max1600} {
    max-width: 32rem;
    max-height: 18rem;
  }
  @media ${devices.max1400} {
    max-width: 30rem;
    max-height: 16rem;
  }
  @media ${devices.max1024} {
    max-width: 38rem;
    max-height: 19rem;
  }
  @media ${devices.max640} {
    max-width: 95%;
    max-height: auto;
    height: auto;
  }
`;

const TitleFlex = styled.div`
  font-size: 4.2rem;
  font-weight: 500;
  align-items: flex-start;
  margin-top: -2rem;
  margin-bottom: 1.8rem;
  @media ${devices.max1600} {
    font-size: 3.2rem;
  }
  @media ${devices.max1400} {
    font-size: 2.8rem;
  }
  @media ${devices.max1024} {
    margin-top: 2rem;
  }
`;

const DescFlex = styled.div`
  color: primaryText;
  margin-top: 0rem;
  font-size: 1.5rem;
  line-height: 2.5rem;
  @media ${devices.max1600} {
    font-size: 1.3rem;
  }
  @media ${devices.max1400} {
    line-height: 2.2rem;
  }
`;

const TechStackFlex = styled.div`
  color: secondaryText;
  margin-top: 1.7rem;
  font-size: 1.35em;
  line-height: 1.5;
  @media ${devices.max1600} {
    font-size: 1.25rem;
  }
`;

const GithubButtonFlex = styled.div`
  display: none;
  @media ${devices.max640} {
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const ButtonFlex = styled.div`
  gap: 1.2rem;
  margin-top: 3.1rem;
  width: 100%;
  display: flex;
  @media ${devices.max640} {
    width: 100%;
    justify-content: center;
  }
`;

const LiveLink = styled.a`
  min-width: 9rem;
  width: 11rem;
  height: 2.8rem;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s;
  color: white;
  font-weight: 500;
  background-color: #4b9b97;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #6bb1b0;
  }
`;

const CodeLink = styled.a`
  min-width: 9rem;
  width: 11rem;
  height: 2.8rem;
  background-color: rgb(255, 255, 255, 0);
  border-radius: 5px;
  text-decoration: none;
  transition: 0.2s;
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
`;
