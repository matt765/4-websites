import { checkIfSmallLaptop } from "@/utils/checkIfSmallLaptop";
import { Flex, Link } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";

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
  const [isSmallLaptop, setIsSmallLaptop] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsSmallLaptop(checkIfSmallLaptop());
    }
  }, []);

  return (
    <Flex
      maxW={
        isSmallLaptop
          ? "40rem"
          : {
              base: "100%",
              sm: "37rem",
              xl: "37.5rem",
              "1xl": "41rem",
              "3xl": "44rem",
              "4xl": "47rem",
            }
      }
      h={
        isSmallLaptop
          ? "18rem"
          : {
              base: "auto",
              md: "auto",
              xl: "17.5rem",
              "1xl": "18.5rem",
              "2xl": "18.5rem",
              "3xl": "19.5rem",
              "4xl": "20.5rem",
            }
      }
      borderWidth="1px"
      borderStyle="solid"
      borderColor="grayBorder"
      borderRadius="15px"
      bg="primaryBg"
      pr={{
        base: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
        xl: "1.8vw",
        "1xl": "2.5vw",
        "2xl": "1.5vw",
      }}
      pl={{ base: "1.5rem", sm: "2rem", md: "2.5rem", xl: "1.8rem" }}
      pt={{
        base: "1.5rem",
        sm: "2rem",
        md: "2.5rem",
        xl: "1.9vw",
        "3xl": "1.7vw",
      }}
      pb={{ base: "1.5rem", sm: "2rem", md: "2.5rem", xl: "1.8rem" }}
      fontFamily="Montserrat"
      direction={{ base: "column", xl: "row" }}
    >
      <Flex
        w={{ base: "100%", sm: "375px" }}
        maxH={
          isSmallLaptop
            ? "11.5rem"
            : {
                base: "600px",
                md: "600px",
                xl: "10rem",
                "1xl": "11rem",
                "3xl": "13rem",
              }
        }
        minW={{ base: "100%", xl: "45%", "1xl": "52%" }}
        borderStyle="solid"
        borderWidth="1px"
        borderColor="grayBorder"
        borderRadius="6px"
        overflow="hidden"
        mb={{ base: "1.5rem", xl: "0" }}
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
        mr={{ base: "0", "3xl": "0.5rem" }}
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
      <Flex direction="column" pl={{ base: "0.2rem", xl: "1.5rem" }}>
        <Flex
          color="titleColor"
          fontSize={
            isSmallLaptop
              ? "1.9rem"
              : {
                  base: "1.8rem",
                  md: "1.8rem",
                  "2xl": "1.8rem",
                  "3xl": "2.1rem",
                }
          }
          fontWeight="500"
          alignItems="flex-start"
          mt={{ base: "-0.4rem", "2xl": "-0.4rem" }}
        >
          {title}
        </Flex>
        <Flex
          color="primaryText"
          mt="0.7rem"
          fontSize={
            isSmallLaptop
              ? "1rem"
              : {
                  base: "1rem",
                  md: "1rem",
                  "1xl": "1.05rem",
                  "3xl": "1.1rem",
                }
          }
        >
          {desc}
        </Flex>
        <Flex
          color="secondaryText"
          mt={{ base: "0.8rem", "2xl": "0.8rem", "3xl": "1rem" }}
          fontSize={{ base: "1rem", "2xl": "1.05rem", "3xl": "1.1rem" }}
        >
          {techStack}
        </Flex>
        <Flex
          gap="1.2rem"
          mt={{ base: "1.6rem", "2xl": "1.6rem", "3xl": "1.8rem" }}
        >
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
