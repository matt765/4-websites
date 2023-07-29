import React from "react";

import { GithubIcon } from "@/assets/icons/github";
import { DescIcon } from "@/assets/icons/desc";
import useSideButtons from "./useSideButtons";
import {
  SideButtonDesc,
  StyledBottomSideBar,
  StyledLink,
  StyledRightSideBar,
} from "./styles";

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
  const { handleBookIconClick } = useSideButtons();

  return (
    <>
      <StyledRightSideBar>
        <SideButtonDesc onClick={handleBookIconClick}>
          <DescIcon />
        </SideButtonDesc>
        <GithubButton />
      </StyledRightSideBar>
      <StyledBottomSideBar>
        <GithubButton />
      </StyledBottomSideBar>
    </>
  );
};
