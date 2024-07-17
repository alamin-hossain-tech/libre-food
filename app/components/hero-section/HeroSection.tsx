// import {
//   Box,
//   Button,
//   Container,
//   Flex,
//   HStack,
//   Heading,
//   Image,
//   Text,
// } from "@chakra-ui/react";
// import FeaturedTitle from "../shared/feature-title/FeaturedTitle";

// const HeroSection = () => {
//   return (
//     <Box
//       bgSize={{ base: "70%", lg: "contain" }}
//       mt={"-80px"}
//       bgPos={"top right"}
//       bgRepeat={"no-repeat"}
//       bgImage={"./assets/hero-section/her-section-bg.svg"}
//       minH={"100vh"}
//     >
//       <Container maxW={"container.xl"}>
//         <Flex
//           h={"100vh"}
//           justify={"space-between"}
//           align={"center"}
//           flexDir={{ base: "column-reverse", lg: "row" }}
//           py={"80px"}
//         >
//           <Box flex={1}>
//             <>
//               {/* <Image src="/assets/hero-section/hero-left.svg" /> */}
//               <FeaturedTitle title="Healthy & Testy Food" />
//               <Box position={"relative"} maxW={"570px"}>
//                 <Heading variant={"heading-1"}>
//                   Enjoy Healthy Life & Testy Food.
//                 </Heading>
//                 <Image
//                   position={"absolute"}
//                   bottom={-3}
//                   right={90}
//                   src="/assets/hero-section/stars.svg"
//                 />
//               </Box>
//               <Text variant={"body-normal"} py={"32px"}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 <br></br> Varius sed pharetra dictum neque massa congue
//               </Text>
//               <HStack>
//                 <Button variant={"primary-solid"}>Show more</Button>
//                 <Button variant={"primary-outline"}>Place an order</Button>
//               </HStack>
//             </>
//           </Box>
//           <Box flex={1}>
//             <Image
//               w={{ base: "70%", lg: "95%" }}
//               src="/assets/hero-section/hero-section-right-image.svg"
//               ml={{ base: 0, lg: -20 }}
//             />
//           </Box>
//         </Flex>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;

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
import FeaturedTitle from "../shared/feature-title/FeaturedTitle";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const HeroSection = () => {
  return (
    <Box
      bgSize={{ base: "70%", lg: "contain" }}
      mt={"-80px"}
      bgPos={"top right"}
      bgRepeat={"no-repeat"}
      bgImage={"./assets/hero-section/her-section-bg.svg"}
      minH={"100vh"}
    >
      <Container maxW={"container.xl"}>
        <Flex
          h={"100vh"}
          justify={"space-between"}
          align={"center"}
          flexDir={{ base: "column-reverse", lg: "row" }}
          py={"80px"}
        >
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <>
              {/* <Image src="/assets/hero-section/hero-left.svg" /> */}
              <FeaturedTitle title="Healthy & Testy Food" />
              <MotionBox
                position={"relative"}
                maxW={"570px"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <MotionHeading variant={"heading-1"}>
                  Enjoy Healthy Life & Testy Food.
                </MotionHeading>
                <MotionImage
                  position={"absolute"}
                  bottom={-3}
                  right={90}
                  src="/assets/hero-section/stars.svg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </MotionBox>
              <MotionText
                variant={"body-normal"}
                py={"32px"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br /> Varius sed pharetra dictum neque massa congue
              </MotionText>
              <HStack>
                <MotionButton
                  variant={"primary-solid"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                >
                  Show more
                </MotionButton>
                <MotionButton
                  variant={"primary-outline"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  Place an order
                </MotionButton>
              </HStack>
            </>
          </MotionBox>
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MotionImage
              w={{ base: "70%", lg: "95%" }}
              src="/assets/hero-section/hero-section-right-image.svg"
              ml={{ base: 0, lg: -20 }}
            />
          </MotionBox>
        </Flex>
      </Container>
    </Box>
  );
};

export default HeroSection;
