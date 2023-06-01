import React from "react";
import styled from "styled-components";

import { GithubIcon } from "@/assets/icons/github";
import { devices } from "@/styles/breakpoints";

export const GithubButton = () => (
  <StyledLink
    href="https://github.com/matt765/4-websites"
    target="_blank"
    rel="noopener noreferrer"
  >
    <GithubIcon />
  </StyledLink>
);

export const SideButtons = () => {
  return (
    <>
      <StyledRightSideBar>
        <GithubButton />
      </StyledRightSideBar>
      <StyledBottomSideBar>
        <GithubButton />
      </StyledBottomSideBar>
    </>
  );
};

const StyledLink = styled.a`
  width: 3rem;
  fill: rgb(255, 255, 255, 0.6);
  transition: 0.3s;
  &:hover {
    fill: rgb(255, 255, 255, 0.9);
  }
`;
const StyledRightSideBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  height: 5rem;
  width: 5rem;
  bottom: 2rem;
  right: 1rem;
  gap: 1.5rem;
  z-index: 99;
  @media ${devices.max768} {
    display: none;
  }
`;

const StyledBottomSideBar = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 5rem;
  width: 100%;
  bottom: 0;
  gap: 1.5rem;
  z-index: 99;
  @media ${devices.max768} {
    display: none;
  }
`;
