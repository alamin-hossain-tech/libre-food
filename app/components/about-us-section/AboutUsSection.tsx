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
// import { motion } from "framer-motion";
// import PlayIcon from "../icons/play-icon";
// import MotionBox from "../shared/MotionBox/MotionBox";
// import FeaturedTitle from "../shared/feature-title/FeaturedTitle";

// const AboutUsSection = () => {
//   return (
//     <Box>
//       <Container maxW={"container.xl"}>
//         <HStack gap={"125px"} py={"60px"}>
//           <Box flex={1}>
//             <Flex gap={"24px"}>
//               <Box flexShrink={0} flex={1}>
//                 <Image
//                   rounded={"6px"}
//                   src="/assets/about-us/photo-grid-1.jpg"
//                 />
//               </Box>

//               <Box flex={1} flexShrink={0}>
//                 <Image
//                   rounded={"6px"}
//                   mt={"54px"}
//                   mb={"24px"}
//                   src="/assets/about-us/photo-grid-2.jpg"
//                 />
//                 <Image
//                   rounded={"6px"}
//                   src="/assets/about-us/photo-grid-3.jpg"
//                 />
//               </Box>
//             </Flex>
//           </Box>
//           <Box flex={1}>
//             <FeaturedTitle title="About Us" />
//             <Heading variant={"heading-2"} maxW={"560px"}>
//               Food is an important part Of a balanced Diet
//             </Heading>
//             <Text variant={"body-normal"} py={"32px"}>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
//               diam pellentesque bibendum non dui volutpat fringilla bibendum.
//               Urna, elit augue urna, vitae feugiat pretium donec id elementum.
//               Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
//               velit in consequat.
//             </Text>
//             <HStack>
//               <Button variant={"primary-solid"}>Show more</Button>
//               <MotionBox
//                 rounded={"full"}
//                 bgColor={"primary.100"}
//                 p={"18px"}
//                 _hover={{ bgColor: "hover" }}
//                 cursor={"pointer"}
//                 as={motion.div}
//                 initial={{ scale: 0.9 }}
//                 animate={{ scale: 1 }}
//                 transition={{
//                   repeat: Infinity,
//                   duration: 1,
//                   repeatType: "reverse",
//                 }}
//               >
//                 <PlayIcon />
//               </MotionBox>
//             </HStack>
//           </Box>
//         </HStack>
//       </Container>
//     </Box>
//   );
// };

// export default AboutUsSection;

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
import FeaturedTitle from "../shared/feature-title/FeaturedTitle";

const MotionBox = motion(Box);
const MotionImage = motion(Image);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const AboutUsSection = () => {
  return (
    <Box>
      <Container maxW={"container.xl"}>
        <HStack gap={"125px"} py={"60px"}>
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Flex gap={"24px"}>
              <MotionBox flexShrink={0} flex={1}>
                <MotionImage
                  rounded={"6px"}
                  src="/assets/about-us/photo-grid-1.jpg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                />
              </MotionBox>

              <MotionBox flex={1} flexShrink={0}>
                <MotionImage
                  rounded={"6px"}
                  mt={"54px"}
                  mb={"24px"}
                  src="/assets/about-us/photo-grid-2.jpg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                />
                <MotionImage
                  rounded={"6px"}
                  src="/assets/about-us/photo-grid-3.jpg"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 }}
                />
              </MotionBox>
            </Flex>
          </MotionBox>
          <MotionBox
            flex={1}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <FeaturedTitle title="About Us" />
            <MotionHeading
              variant={"heading-2"}
              maxW={"560px"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Food is an important part Of a balanced Diet
            </MotionHeading>
            <MotionText
              variant={"body-normal"}
              py={"32px"}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </MotionText>
            <HStack>
              <MotionButton
                variant={"primary-solid"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
              >
                Show more
              </MotionButton>
              <MotionBox
                rounded={"full"}
                bgColor={"primary.100"}
                p={"18px"}
                _hover={{ bgColor: "hover" }}
                cursor={"pointer"}
                as={motion.div}
                initial={{ scale: 0.9 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  repeatType: "reverse",
                }}
              >
                <PlayIcon />
              </MotionBox>
            </HStack>
          </MotionBox>
        </HStack>
      </Container>
    </Box>
  );
};

export default AboutUsSection;
