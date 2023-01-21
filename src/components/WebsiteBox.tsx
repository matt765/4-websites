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
      w="46rem"
      h="19rem"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="#444850"
      borderRadius="10px"
      bg="#32363e"
      padding="2rem"
      fontFamily="Montserrat"   
    >
      <Flex
        w="375px"
        h="225px"
        maxW="375px"
        minW="375px"
        borderStyle="solid"
        borderWidth="1px"
        borderColor="#444850"
        borderRadius="6px"
        overflow="hidden"
      >
        <Image src={image} alt="" />
      </Flex>
      <Flex direction="column" pl="1.5rem">
        <Flex color="white" fontSize="2rem" fontWeight="500">
          {title}
        </Flex>
        <Flex color="white" mt="0.5rem">
          {desc}
        </Flex>
        <Flex color="rgb(255,255,255,0.7)" mt="0.7rem">
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
