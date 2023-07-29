import React from "react";
import styled from "styled-components";
import Head from "next/head";

import { SideButtons } from "@/components/sideButtons/SideButtons";
import { devices } from "@/styles/breakpoints";
import { WebsiteBox } from "@/components/websiteBox/WebsiteBox";
import { projectsData } from "@/data/projectsData";

export default function Home() {
  return (
    <>
      <Head>
        <title>4 websites</title>
        <meta
          name="description"
          content="Simple portfolio application for displaying websites that I've created."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppContainer>
        <WebsitesArea>
          {projectsData.map((project, index) => (
            <WebsiteBox key={index} id={index} {...project} />
          ))}
        </WebsitesArea>
        <SideButtons />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  padding-top: 20vh;
  padding-bottom: 20vh;
  padding-right: 0.5rem;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  font-family: "Jost", sans-serif;
  background-repeat: no-repeat;
  background-size: cover;
  background: radial-gradient(
      at 49% 80%,
      hsla(226, 10%, 24%, 1) 0px,
      transparent 50%
    ),
    radial-gradient(at 66% 49%, hsla(226, 10%, 24%, 1) 0px, transparent 50%),
    radial-gradient(at 29% 49%, hsla(226, 10%, 24%, 1) 0px, transparent 50%),
    radial-gradient(at 49% 22%, hsla(226, 10%, 24%, 1) 0px, transparent 50%);
  background-color: hsla(220, 4%, 14%, 1);
  @media ${devices.max1024} {
    background-image: none;
    overflow: auto;
    overflow-x: hidden;
    height: 100%;
    padding-top: 2rem;
    padding-bottom: 8rem;
    position: relative;
  }
`;

const WebsitesArea = styled.div`
  width: 87rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  @media ${devices.max1600} {
    width: 68rem;
  }
  @media ${devices.max1400} {
    width: 62rem;
    gap: 3rem;
  }
  @media ${devices.max1024} {
    flex-direction: column;
    width: 30rem;
    gap: unset;
  }
  @media ${devices.max640} {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`;
