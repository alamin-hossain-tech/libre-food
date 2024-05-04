import { defineStyle, extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#195A00",
    coffee: "#BC9A6C",
    orange: "#FF9F0D",
  },
  secondary: {
    100: "#AF872F",
    coffee: "#EDEAE3",
    200: "#999966",
  },
  gray: {
    100: "#333333",
    200: "#4F4F4F",
    300: "#828282",
    400: "#BDBDBD",
    500: "#E0E0E0",
  },
  black: {
    100: "#1E1E1E",
    200: "#1D1D1D",
    300: "#282828",
  },
  state: {
    info: "#2F80ED",
    success: "#219653",
    warning: "#E2B93B",
    error: "#EB5757",
  },
  hover: "#A8BCA1",
};

const Heading = {
  baseStyle: {
    fontFamily: "Helvetica, sans-serif",
    fontWeight: "bold",
  },
  variants: {
    "heading-1": defineStyle({
      fontSize: "60px",
      lineHeight: "68px",
    }),
    "heading-2": defineStyle({
      fontSize: "48px",
      lineHeight: "56px",
      letterSpacing: "52.8px",
    }),
    "heading-3": defineStyle({
      fontSize: "40px",
      lineHeight: "48px",
      letterSpacing: "44px",
    }),
    "heading-4": defineStyle({
      fontSize: "32px",
      lineHeight: "40px",
    }),
    "heading-5": defineStyle({
      fontSize: "24px",
      lineHeight: "32px",
    }),
    "heading-6": defineStyle({
      fontSize: "20px",
      lineHeight: "28px",
    }),
  },
};

const Text = {
  baseStyle: defineStyle({
    fontFamily: '"Inter", sans-serif',
  }),
  variants: {
    "body-large-bold": defineStyle({
      fontSize: "20px",
      fontWeight: "bold",
      lineHeight: "28px",
    }),
    "body-large": defineStyle({
      fontSize: "20px",
      fontWeight: "normal",
      lineHeight: "28px",
    }),
    "body-medium-bold": defineStyle({
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "26px",
    }),
    "body-medium": defineStyle({
      fontSize: "18px",
      fontWeight: "normal",
      lineHeight: "26px",
    }),
    "body-normal-bold": defineStyle({
      fontSize: "16px",
      fontWeight: "bold",
      lineHeight: "24px",
    }),
    "body-normal": defineStyle({
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "24px",
    }),
    "body-small-bold": defineStyle({
      fontSize: "14px",
      fontWeight: "bold",
      lineHeight: "22px",
    }),
    "body-small": defineStyle({
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "22px",
    }),
  },
};

const Button = {
  baseStyle: {},
  variants: {
    "primary-solid": defineStyle({
      bgColor: "primary.100",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "26px",
      //   letterSpacing: "25.2px",
      color: "white",
      px: "42px",
      py: "24px",
      //   border: "1.5px solid transparent",
      _hover: {
        bgColor: "hover",
        // color: "primary.100",
        // border: "1.5px solid var(--chakra-colors-primary-100)",
      },
    }),
    "primary-outline": defineStyle({
      borderColor: "red",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "26px",
      px: "42px",
      py: "24px",
      color: "primary.100",
      border: "1.5px solid var(--chakra-colors-primary-100)",
      _hover: {
        bgColor: "hover",
        color: "white",
        border: "1.5px solid var(--chakra-colors-hover)",
      },
    }),
  },
};

const ThemeConfig = extendTheme({
  colors,
  components: { Heading, Text, Button },
});

export default ThemeConfig;
