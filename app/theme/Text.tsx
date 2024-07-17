import { defineStyle } from "@chakra-ui/react";

const TextTheme = {
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
      color: "gray.300",
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
    featured: defineStyle({
      fontFamily: "Miniver",
      fontSize: "18px",
      lineHeight: "26px",
      color: "primary.100",
    }),
  },
};

export default TextTheme;
