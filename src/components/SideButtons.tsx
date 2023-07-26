import React from "react";
import styled from "styled-components";

import { GithubIcon } from "@/assets/icons/github";
import { devices } from "@/styles/breakpoints";
import { DescIcon } from "@/assets/icons/desc";
import { useOpenDescriptionsStore } from "@/store/descState";

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
  const openDescriptions = useOpenDescriptionsStore(
    (state) => state.openDescriptions
  );
  const addDescription = useOpenDescriptionsStore(
    (state) => state.addDescription
  );
  const removeAllDescriptions = useOpenDescriptionsStore(
    (state) => state.removeAllDescriptions
  );

  const handleBookIconClick = () => {
    if (openDescriptions.length === 4) {
      removeAllDescriptions();
    } else {
      [0, 1, 2, 3].forEach((num) => addDescription(num));
    }
  };

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

const StyledLink = styled.a`
  width: 3rem;
  fill: rgb(255, 255, 255, 0.6);
  transition: 0.3s;
  &:hover {
    fill: rgb(255, 255, 255, 0.9);
  }
  @media ${devices.max1024} {
    width: 4rem;
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
  gap: 1.2rem;
  z-index: 99;
  @media ${devices.max768} {
    display: none;
  }
  @media ${devices.max1400} {
    bottom: 1rem;
    right: 0.5rem;
  }
  @media ${devices.max1024} {
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
  position: absolute;
  z-index: 99;
  margin-top: 1rem;
  bottom: 1.5rem;
  left: 0;
  @media ${devices.max1024} {
    display: flex;
  }
`;

const SideButtonDesc = styled.button`
  width: 3.6rem;
  height: 3.6rem;
  min-width: 3.6rem;
  min-height: 3.6rem;
  border-style: solid;
  padding: 0.9rem;
  padding-top: 0.8rem;
  padding-left: 0.8rem;
  border-width: 1px;
  border-color: rgb(255, 255, 255, 0.3);
  border-radius: 50px !important;
  cursor: pointer;
  transition: 0.3s;
  background-color: rgb(255, 255, 255, 0);
  @media ${devices.max768} {
    display: none;
  }
  & svg {
    transition: 0.3s;
  }
  &:hover {
    border-color: rgb(255, 255, 255, 0.5);
    & svg {
      stroke: rgb(255, 255, 255, 0.9);
    }
  }
`;
