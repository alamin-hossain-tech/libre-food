import { defineStyle } from "@chakra-ui/react";

const ButtonTheme = {
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

export default ButtonTheme;
