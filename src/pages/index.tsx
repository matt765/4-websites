import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { WebsiteBox } from "@/components/WebsiteBox";
import TailcastImage from "../assets/images/tailcast.png";
import CoinstackImage from "../assets/images/paysafenow.png";
import InnovateImage from "../assets/images/innovate.png";
import FoodhubImage from "../assets/images/foodhub.png";
import { Navigation } from "@/components/Navigation";
import bgPattern from "../assets/icons/github.svg";
import { GithubIcon } from "@/assets/icons/github";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Matt765 websites</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Flex
        w="100vw"
        h="100%"
        minH="100vh"
        //  bgImage="url(bg.jpg)"
        // bgImage={`url(bgPattern.svg)`}
        bg="#272a30"
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        justify="center"
        alignItems="center"
        p={{ base: "1.5rem", "2xl": "1rem" }}
        // bgGradient=" linear-gradient(40deg, rgba(41,44,51,1) 25%, rgba(39,42,48,1) 100%)"
      >
        <Flex
          w="100%"
          h="80%"
          wrap="wrap"
          justify="center"
          alignItems="center"
          gap={{ base: "1.6rem", "2xl": "2rem" }}
        >
          <WebsiteBox
            title="Tailcast"
            desc="Dark themed website template built on AstroJS, designed for saas/startup business."
            techStack="Astro, React, Tailwind, Framer Motion"
            liveLink="https://tailcast.vercel.app/"
            codeLink="https://github.com/matt765/Tailcast"
            image={TailcastImage}
          />
          <WebsiteBox
            title="InnoVate"
            desc="Website for interior design company, created using client-first design rules"
            techStack="Webflow"
            liveLink="https://innovate-interior.webflow.io/"
            previewLink="https://preview.webflow.com/preview/innovate-interior?utm_medium=preview_link&utm_source=designer&utm_content=innovate-interior&preview=a7b8553f8c91a11c0d12c3876699a7a4&workflow=preview"
            image={InnovateImage}
          />

          <WebsiteBox
            title="GreenHub"
            desc="Healthy and organic food restaurant website with lots of images and vivid color palette"
            techStack="HTML, CSS, JS, Shuffle.dev"
            liveLink="https://greenhubfoods.vercel.app/"
            image={FoodhubImage}
          />
          <WebsiteBox
            title="PaySafeNow"
            desc="Example of a website template for a startup that offers safe online payment solutions"
            techStack="Webflow"
            liveLink="https://paysafenow.webflow.io/"
            image={CoinstackImage}
          />
        </Flex>
      </Flex>
      <Navigation />
      <Link
        href="https://github.com/matt765/4-websites"
        isExternal
        width="3rem"
        fill="rgb(255,255,255,0.4)"
        _hover={{ fill: "rgb(255,255,255,0.9)" }}
        transition="0.3s"
        position="fixed"
        bottom="2rem"
        right="2rem"
      >
        <Flex width="3rem">
          <Icon as={GithubIcon} />
        </Flex>
      </Link>
    </>
  );
}
