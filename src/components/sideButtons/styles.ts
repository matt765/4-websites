import styled from "styled-components";

import { devices } from "@/styles/breakpoints";

export const StyledLink = styled.a`
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

export const StyledRightSideBar = styled.div`
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

export const StyledBottomSideBar = styled.div`
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

export const SideButtonDesc = styled.button`
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
