import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  breakpoints: {
    sm: "30em", // 480px
    md: "48em", // 768px
    lg: "62em", // 992px
    xl: "80em", // 1280px
    "1xl": "87.5em", // 1400px
    "2xl": "96em", // 1536px
    "3xl": "100em", // 1600px
    "4xl": "106.25em", // 1700px
  },
  semanticTokens: {
    colors: {
      primaryBg: {
        default: "rgba(62, 67, 85, 0.6)",
        _dark: "#32363e",
      },
      secondaryBg: {
        default: "#272a30",
        _dark: "#272a30",
      },    
      primaryText: {
        default: "white",
        _dark: "white",
      },
      secondaryText: {
        default: "rgb(255,255,255,0.7)",
        _dark: "rgb(255,255,255,0.7)",
      },
      titleColor: {
        default: "white",
        _dark: "white",
      },
      coloredButton: {
        default:"rgb(45, 108, 164)",
        _dark: "rgb(49, 151, 149)",
      },
      coloredButtonHover: {
        default: "#3784c8",
        _dark: "rgb(37, 116, 114)",
      },
      transparentButton: {
        default: "rgba(45, 53, 80, 0)",
        _dark: "rgba(45, 53, 80, 0)",
      },
      transparentButtonHover: {
        default: "rgb(255,255,255,0.1)",
        _dark: "rgb(255,255,255,0.1)",
      },
      grayBorder: {
        default: "rgb(255,255,255,0.1)",
        _dark: "#444850",
      },
      githubIcon: {
        default: "rgb(255,255,255,0.9)",
        _dark: "rgb(255,255,255,0.4)",
      },
      colorTogglerBorder: {
        default: "rgb(255,255,255,0.7)",
        _dark: "rgb(255,255,255,0.4)",
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: "#272a30",
      }
    }
  },
});

export default theme;
