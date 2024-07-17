import { extendTheme } from "@chakra-ui/react";
import ButtonTheme from "./Button";
import colors from "./colors";
import HeadingTheme from "./heading";
import TextTheme from "./Text";

const ThemeConfig = extendTheme({
  colors: colors,
  components: { Heading: HeadingTheme, Text: TextTheme, Button: ButtonTheme },
});

export default ThemeConfig;
