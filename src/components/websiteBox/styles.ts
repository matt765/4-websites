import styled from "styled-components";
import { motion } from "framer-motion";

import { devices } from "@/styles/breakpoints";

type MainFlexProps = {
  image: string;
};

type OverlayProps = {
  isVisible: boolean;
  boxId: number;
};

export const MainFlex = styled(motion.div)<MainFlexProps>`
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

export const LinkOverlay = styled.a`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;

export const ProjectDataMobile = styled.div`
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

export const ProjectData = styled.div<{ isVisible: boolean }>`
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
  @media ${devices.max1024} {
    display: none !important;
  }
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
`;

export const Overlay = styled.div<OverlayProps>`
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
  @media ${devices.max1024} {
    display: none !important;
  }
  @media ${devices.max480} {
  }
`;

export const TitleFlex = styled.div`
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

export const DescFlex = styled.div`
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

export const TechStackFlex = styled.div`
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

export const ButtonFlex = styled.div`
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

export const LiveLink = styled.a`
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

export const CodeLink = styled.a`
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
