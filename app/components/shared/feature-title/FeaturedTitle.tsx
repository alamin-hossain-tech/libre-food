import { Text } from "@chakra-ui/react";
import React from "react";

const FeaturedTitle: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Text
      variant={"featured"}
      position={"relative"}
      display={"inline"}
      _after={{
        position: "absolute",
        right: "-50px",
        bottom: 2,
        transform: "translateY(-50%)",
        content: `''`,
        width: "35px",
        height: "1.2px",
        bgColor: "primary.100",
      }}
    >
      {title}
    </Text>
  );
};

export default FeaturedTitle;
