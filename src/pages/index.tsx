import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { Carousel } from "../components/Carousel";
import { SideButtons } from "@/components/SideButtons";
import { devices } from "@/styles/breakpoints";
import Head from "next/head";

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
        <Carousel />
        <CentralBox />
        <SideButtons />
      </AppContainer>
    </>
  );
}

const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Jost", sans-serif;
  background-image: url(pattern.svg);
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 0rem;
  background-color: #2c2f35;

  @media ${devices.max1024} {
    background-image: none;
  }
`;

const CentralBox = styled.div`
  display: flex;
  max-width: 100%;
  border-radius: 25px;
  padding: 3rem;
  font-family: "Exo 2", sans-serif;
  display: flex;
  color: white;
  justify-content: space-between;
  width: 83rem;
  height: 65%;
  align-items: center;
  padding-top: 0rem;
  border-style: solid;
  border-width: 1px;
  border-color: rgb(255, 255, 255, 0.2);
  padding-top: 2rem;
  position: fixed;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #393c42;

  @media ${devices.max1600} {
    width: 70rem;
    height: 64%;
  }
  @media ${devices.max1400} {
    width: 67rem;
    height: 62%;
  }
  @media ${devices.max1280} {
    width: 100%;
    height: 62%;
    border-radius: 0px;
  }
  @media ${devices.max1024} {
    display: none;
  }
`;
