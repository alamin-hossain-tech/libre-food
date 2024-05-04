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

const HeroSection = () => {
  return (
    <Box
      minH={"calc(100vh - 80px)"}
      bgSize={"contain"}
      mt={"-80px"}
      bgPos={"right"}
      bgRepeat={"no-repeat"}
      bgImage={"./assets/hero-section/her-section-bg.svg"}
    >
      <Container pt={"80px"} maxW={"container.xl"}>
        <HStack>
          <Box flex={1} ml={20}>
            <>
              <Image src="/public/assets/hero-section/hero-left.svg" />
              <Box position={"relative"}>
                <Heading variant={"heading-1"}>
                  Enjoy Healthy Life & Testy Food.
                </Heading>
                <Image
                  position={"absolute"}
                  bottom={-3}
                  right={90}
                  src="/public/assets/hero-section/stars.svg"
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
              w={"95%"}
              my={"auto"}
              mx={"auto"}
              src="/public/assets/hero-section/hero-section-right-image.svg"
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default HeroSection;
