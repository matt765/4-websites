import { GithubIcon } from "@/assets/icons/github";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { PaletteIcon } from "@/assets/icons/palette";

interface SideBarProps {
  toggleColorMode: () => void;
}
export const SideBar = ({ toggleColorMode }: SideBarProps) => {
  return (
    <>
      <Flex
        position={{ base: "relative", md: "fixed" }}
        height={{ base: "5rem", md: "100%" }}
        width={{ base: "100%", md: "5rem" }}
        top="0"
        right="0"
        alignItems="center"
        direction={{ base: "row", md: "column" }}
        zIndex="99"
        justify="center"
        gap="1.5rem"
      >
        <Link
          href="https://github.com/matt765/4-websites"
          isExternal
          width="3rem"
          fill="githubIcon"
          _hover={{ fill: "rgb(255,255,255,0.9)" }}
          transition="0.3s"
  
        >
          <Flex width="3rem">
            <Icon as={GithubIcon} />
          </Flex>
        </Link>
        <Flex
          onClick={toggleColorMode}
          borderWidth="1px"
          borderRadius="100%"
          borderStyle="solid"         
          borderColor={{ base: "secondaryText", md: "#6a707c" }}
          w="3rem"
          h="3rem"
          cursor="pointer"
          pr="0.1rem"
          transition="0.2s"
          sx={{
            "& svg": {
              width: "20px",
              fill: "secondaryText",
              transition: "0.2s",
            },
            "&:hover": {
              borderColor: "primaryText",
              "& svg": {
                fill: "primaryText",
              },
            },
          }}
          justify="center"
          alignItems="center"
        >
          <Icon as={PaletteIcon} />
        </Flex>
      </Flex>
    </>
  );
};
