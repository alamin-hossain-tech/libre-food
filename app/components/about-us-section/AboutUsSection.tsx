import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PlayIcon from "../icons/play-icon";
import MotionBox from "../shared/MotionBox/MotionBox";
import FeaturedTitle from "../shared/feature-title/FeaturedTitle";

const AboutUsSection = () => {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <HStack gap={"125px"} py={"60px"}>
          <Box flex={1}>
            <Flex gap={"24px"}>
              <Box flexShrink={0} flex={1}>
                <Image
                  rounded={"6px"}
                  src="/assets/about-us/photo-grid-1.jpg"
                />
              </Box>

              <Box flex={1} flexShrink={0}>
                <Image
                  rounded={"6px"}
                  mt={"54px"}
                  mb={"24px"}
                  src="/assets/about-us/photo-grid-2.jpg"
                />
                <Image
                  rounded={"6px"}
                  src="/assets/about-us/photo-grid-3.jpg"
                />
              </Box>
            </Flex>
          </Box>
          <Box flex={1}>
            <FeaturedTitle title="About Us" />
            <Heading variant={"heading-2"} maxW={"560px"}>
              Food is an important part Of a balanced Diet
            </Heading>
            <Text variant={"body-normal"} py={"32px"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </Text>
            <HStack>
              <Button variant={"primary-solid"}>Show more</Button>
              <MotionBox
                rounded={"full"}
                bgColor={"primary.100"}
                p={"18px"}
                _hover={{ bgColor: "hover" }}
                cursor={"pointer"}
                as={motion.div}
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                }}
              >
                <PlayIcon />
              </MotionBox>
            </HStack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
