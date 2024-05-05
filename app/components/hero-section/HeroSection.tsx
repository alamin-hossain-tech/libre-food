import {
  Box,
  Button,
  Container,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FeaturedTitle from "../shared/feature-title/FeaturedTitle";

const HeroSection = () => {
  return (
    <Box
      bgSize={{ base: "70%", lg: "52%" }}
      mt={"-80px"}
      bgPos={"top right"}
      bgRepeat={"no-repeat"}
      bgImage={"./assets/hero-section/her-section-bg.svg"}
    >
      <Container maxW={"container.xl"}>
        <HStack
          justify={"space-between"}
          align={"center"}
          flexDir={{ base: "column-reverse", lg: "row" }}
          py={"80px"}
        >
          <Box flex={1}>
            <>
              {/* <Image src="/assets/hero-section/hero-left.svg" /> */}
              <FeaturedTitle title="Healthy & Testy Food" />
              <Box position={"relative"} maxW={"570px"}>
                <Heading variant={"heading-1"}>
                  Enjoy Healthy Life & Testy Food.
                </Heading>
                <Image
                  position={"absolute"}
                  bottom={-3}
                  right={90}
                  src="/assets/hero-section/stars.svg"
                />
              </Box>
              <Text variant={"body-normal"} py={"32px"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br></br> Varius sed pharetra dictum neque massa congue
              </Text>
              <HStack>
                <Button variant={"primary-solid"}>Show more</Button>
                <Button variant={"primary-outline"}>Place an order</Button>
              </HStack>
            </>
          </Box>
          <Box flex={1}>
            <Image
              w={{ base: "70%", lg: "95%" }}
              src="/assets/hero-section/hero-section-right-image.svg"
              ml={{ base: 0, lg: -20 }}
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
