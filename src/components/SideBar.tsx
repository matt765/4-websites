import { GithubIcon } from "@/assets/icons/github";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { PaletteIcon } from "@/assets/icons/palette";

interface SideBarProps {
  toggleColorMode: () => void;
}

const GithubButton = () => (
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
);

const ColorModeButton = ({ toggleColorMode }: SideBarProps) => (
  <Flex
    onClick={toggleColorMode}
    borderWidth="1px"
    borderRadius="100%"
    borderStyle="solid"
    borderColor={{ base: "colorTogglerBorder", '2xl': "#6a707c" }}
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
);

const RightSideBar = ({ children }: { children: React.ReactNode }) => (
  <Flex
    position="fixed"
    height="100%"
    width="5rem"
    top="0"
    right="0"
    alignItems="center"
    direction="column"
    zIndex="99"
    justify="center"
    gap="1.5rem"
    display={{ base: "none", "2xl": "flex" }}
  >
    {children}
  </Flex>
);

const BottomSideBar = ({ children }: { children: React.ReactNode }) => (
  <Flex
    position="relative"
    height="5rem"
    width="100%"
    bottom="0"
    alignItems="center"
    zIndex="99"
    justify="center"
    gap="1.5rem"
    display={{ base: "flex", "2xl": "none" }}
    mb="0rem"
    mt={{ base: "1rem", xl: "0" }}
    pt={{ base: "1rem", xl: "2rem" }}
  >
    {children}
  </Flex>
);

export const SideBar = ({ toggleColorMode }: SideBarProps) => {
  return (
    <>
      <RightSideBar>
        <GithubButton />
        <ColorModeButton toggleColorMode={toggleColorMode} />
      </RightSideBar>
      <BottomSideBar>
        <GithubButton />
        <ColorModeButton toggleColorMode={toggleColorMode} />
      </BottomSideBar>
    </>
  );
};
