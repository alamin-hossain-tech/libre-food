import { defineStyle } from "@chakra-ui/react";

const HeadingTheme = {
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
    }),
    "heading-3": defineStyle({
      fontSize: "40px",
      lineHeight: "48px",
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
      color: "gray.200",
    }),
  },
};

export default HeadingTheme;
