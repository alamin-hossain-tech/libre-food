import { Box, Container, Heading, Text } from "@chakra-ui/react";
import type { MetaFunction } from "@remix-run/node";
import HeaderSection from "~/components/heeader/Header";
import HeroSection from "~/components/hero-section/HeroSection";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <HeaderSection />
      </Container>
      <HeroSection />
    </Box>
  );
}
