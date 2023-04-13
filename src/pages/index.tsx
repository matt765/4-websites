import Head from "next/head";
import { Flex, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { SideBar } from "@/components/SideBar";
import { WebsiteBox } from "@/components/WebsiteBox";
import TailcastImage from "../assets/images/tailcast.png";
import CoinstackImage from "../assets/images/paysafenow.png";
import InnovateImage from "../assets/images/innovate.png";
import FoodhubImage from "../assets/images/foodhub.png";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta
          name="description"
          content="Simple portfolio application for displaying websites that I've created."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
    
      </Head>
      <Flex
        w="100vw"
        h="100%"
        minH="100vh"
        bgImage={colorMode === "light" ? "url(bg.jpg)" : ""}
        bg={colorMode === "light" ? "" : "secondaryBg"}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        bgAttachment="fixed"
        justify={{ base: "center", "4xl": "center" }}
        alignItems="center"
        direction="column"
        pt={{ base: "1.5rem", xl: "0rem", "1xl": "0vw", "4xl": "0rem" }}
        px={{ base: "1rem", md: "0rem" }}
        pb={{
          base: "1.5rem",
          xl: "0rem",
          "2xl": "0rem",
          "3xl": "0rem",
          "4xl": "0rem",
        }}
      >
        <Flex
          w={{ base: "auto", sm: "100%" }}
          h="80%"
          wrap="wrap"
          justify="center"
          alignItems="center"
          gap={{ base: "1.6rem", "2xl": "2rem" }}
          px="2vw"
          direction={{ base: "column", xl: "row" }}
        >
          {projectsData.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
              key={project.title}
            >
              <WebsiteBox {...project} />
            </motion.div>
          ))}
        </Flex>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1}}
          transition={{ duration: 0.7 }}
        >
          <SideBar toggleColorMode={toggleColorMode} />{" "}
        </motion.div>
      </Flex>
    </>
  );
}

const projectsData = [
  {
    title: "Tailcast",
    desc: "Dark themed website template built on AstroJS, designed for startup saas business.",
    techStack: "Astro, React, Tailwind",
    liveLink: "https://tailcast.vercel.app/",
    codeLink: "https://github.com/matt765/Tailcast",
    image: TailcastImage,
  },
  {
    title: "InnoVate",
    desc: "Website for modern interior design company, created using client-first design rules",
    techStack: "Webflow",
    liveLink: "https://innovate-interior.vercel.app/",
    previewLink:
      "https://preview.webflow.com/preview/innovate-interior?utm_medium=preview_link&utm_source=designer&utm_content=innovate-interior&preview=a7b8553f8c91a11c0d12c3876699a7a4&workflow=preview",
    image: InnovateImage,
  },
  {
    title: "GreenHub",
    desc: "Healthy and organic food restaurant website with lots of images and vivid color palette",
    techStack: "HTML, CSS, JS, Shuffle.dev",
    liveLink: "https://greenhubfoods.vercel.app/",
    image: FoodhubImage,
  },
  {
    title: "PaySafeNow",
    desc: "Example of a website template for a startup that offers safe online payment solutions",
    techStack: "Webflow",
    liveLink: "https://paysafenow.vercel.app/",
    image: CoinstackImage,
    isLight: true,
  },
];
