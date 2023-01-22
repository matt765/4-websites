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
}

export const WebsiteBox = ({
  title,
  desc,
  techStack,
  liveLink,
  codeLink,
  image,
  previewLink,
}: WebsiteBoxProps) => {
  return (
    <Flex
      w={{ base: "100%", sm: "40rem", "2xl": "45rem" }}
      h={{ base: "auto", md: "17.5rem", "2xl": "19rem" }}
      borderWidth="1px"
      borderStyle="solid"
      borderColor="#444850"
      borderRadius="10px"
      bg="#32363e"
      pr={{ base: "1rem", '2xl': "1.7rem" }}
      pl={{ base: "1.5rem", '2xl': "1.8rem" }}
      pt={{ base: "1.5rem", '2xl': "1.8rem" }}
      padding={{ base: "1.5rem", sm: "2.5rem", 'md': "1.8rem" }}
      fontFamily="Montserrat"
      direction={{ base: "column", "md": "row" }}
    >
      <Flex
        w={{ base: "100%", "sm": "375px" }}
        maxH={{ base: "600px", md: "155px", "2xl": "210px" }}
        minW={{ base: "100%", md: "265px",  "2xl": "345px" }}
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#444850"
        borderRadius="6px"
        overflow="hidden"
        mb={{ base: "1.5rem", md: "0" }}
      >
        <Image src={image} alt="" />
      </Flex>
      <Flex direction="column" pl={{ base: "0.2rem", md: "1.5rem" }}>
        <Flex color="white" fontSize={{ base: "2.2rem", md: "1.8rem", '2xl': "2rem" }} fontWeight="500" alignItems="flex-start" 
        
        mt={{ base: "-0.4rem", '2xl': "0"}}>
          {title}
        </Flex>
        <Flex color="white" mt="0.5rem">
          {desc}
        </Flex>
        <Flex color="rgb(255,255,255,0.7)" mt="0.7rem" fontSize={{ base: "0.9rem", '2xl': "1rem"}}>
          {techStack}
        </Flex>
        <Flex gap="1.2rem" mt="1.3rem">
          <Link
            w="8rem"
            h="2.5rem"
            bg="rgb(49, 151, 149)"
            href={liveLink}
            borderRadius="5px"
            textDecoration="none"
            _hover={{ bg: "#257472" }}
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
              w="8rem"
              h="2.5rem"
              bg="rgba(45, 53, 80, 0)"
              href={codeLink ? codeLink : previewLink}
              borderRadius="5px"
              border="1px solid rgb(62, 121, 130)"
              _hover={{ bg: "rgb(255,255,255,0.05)" }}
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
