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
        <title>WebDev Portfolio</title>
        <meta
          name="description"
          content="Simple portfolio application for displaying websites  that I've created."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
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
        justify="center"
        alignItems="center"
        p={{ base: "1.5rem", "2xl": "1rem" }}
      >
        <Flex
          w="100%"
          h="80%"
          wrap="wrap"
          justify="center"
          alignItems="center"
          gap={{ base: "1.6rem", "2xl": "2rem" }}
          px="2vw"
        >
          <SideBar toggleColorMode={toggleColorMode} />
          {projectsData.map((project, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={project.title}
            >
              <WebsiteBox {...project} />
            </motion.div>
          ))}
        </Flex>
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
    desc: "Website for interior design company, created using client-first design rules",
    techStack: "Webflow",
    liveLink: "https://innovate-interior.webflow.io/",
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
    liveLink: "https://paysafenow.webflow.io/",
    image: CoinstackImage,
    isLight: true,
  },
];
