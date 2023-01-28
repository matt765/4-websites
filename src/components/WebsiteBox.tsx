import { Flex, Link } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";

interface WebsiteBoxProps {
  title: string;
  desc: string;
  techStack: string;
  liveLink: string;
  codeLink?: string;
  image: StaticImageData;
  previewLink?: string;
  isLight?: boolean;
}

export const WebsiteBox = ({
  title,
  desc,
  techStack,
  liveLink,
  codeLink,
  image,
  previewLink,
  isLight,
}: WebsiteBoxProps) => {
  return (
    <Flex
      maxW={{ base: "100%", sm: "40rem", "2xl": "670px" }}
      h={{ base: "auto", md: "17.5rem", "2xl": "18.5rem" }}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="grayBorder"
      borderRadius="15px"
      bg="primaryBg"
      pr={{ base: "1rem", "2xl": "1.3vw" }}
      pl={{ base: "1.5rem", "2xl": "1.8rem" }}
      pt={{ base: "1.5rem", "2xl": "1.5vw" }}
      pb={{ base: "1.5rem", "2xl": "1.8rem" }}
      padding={{ base: "1.5rem", sm: "2.5rem", md: "1.8rem" }}
      fontFamily="Montserrat"
      direction={{ base: "column", md: "row" }}
    >
      <Flex
        w={{ base: "100%", sm: "375px" }}
        maxH={{ base: "600px", md: "155px", "2xl": "11.5rem" }}
        minW={{ base: "100%", md: "265px", "2xl": "50%" }}
        borderStyle="solid"
        borderWidth="1px"
        borderColor="grayBorder"
        borderRadius="6px"
        overflow="hidden"
        mb={{ base: "1.5rem", md: "0" }}
        cursor="pointer"
        position="relative"
        bg="rgb(255,255,255,0)"
        transition="0.3s"
        sx={{
          "&:hover": {
            transform: "scale(1.04)",
          },
          "& a:hover": {
            opacity: "1",
          },
        }}
      >
        <Image src={image} alt="" />
        <Link
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          backgroundColor={
            isLight ? "rgb(49, 151, 149, 0.1)" : "rgb(255,255,255,0.05)"
          }
          opacity="0"
          transition="0.2s"
          href={liveLink}
          isExternal
        />
      </Flex>
      <Flex direction="column" pl={{ base: "0.2rem", md: "1.5rem" }}>
        <Flex
          color="titleColor"
          fontSize={{ base: "2.2rem", md: "1.8rem", "2xl": "2rem" }}
          fontWeight="500"
          alignItems="flex-start"
          mt={{ base: "-0.4rem", "2xl": "0" }}
        >
          {title}
        </Flex>
        <Flex color="primaryText" mt="0.5rem">
          {desc}
        </Flex>
        <Flex
          color="secondaryText"
          mt="0.7rem"
          fontSize={{ base: "0.9rem", "2xl": "1rem" }}
        >
          {techStack}
        </Flex>
        <Flex gap="1.2rem" mt="1.3rem">
          <Link
            w={{ base: "8rem", "2xl": "49%" }}
            h="2.5rem"
            bg="coloredButton"
            href={liveLink}
            borderRadius="5px"
            textDecoration="none"
            _hover={{ bg: "coloredButtonHover" }}
            transition="0.2s"
            isExternal
          >
            <Flex
              w="100%"
              h="100%"
              justify="center"
              alignItems="center"
              color="white"
              fontWeight="500"
              fontSize="0.9rem"
              textDecoration="none"
            >
              Live
            </Flex>
          </Link>
          {(codeLink || previewLink) && (
            <Link
              w={{ base: "8rem", "2xl": "49%" }}
              h="2.5rem"
              bg="transparentButton"
              href={codeLink ? codeLink : previewLink}
              borderRadius="5px"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="coloredButton"
              _hover={{ bg: "transparentButtonHover" }}
              transition="0.2s"
              isExternal
            >
              <Flex
                w="100%"
                h="100%"
                justify="center"
                alignItems="center"
                color="primaryText"
                fontWeight="500"
                fontSize="0.9rem"
              >
                {codeLink ? "Code" : "Preview"}
              </Flex>
            </Link>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};
