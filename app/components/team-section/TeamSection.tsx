import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FacebookIcon, TwitterIcon, YoutubeIcon } from "../icons/social-icons";

const TeamSection = () => {
  return (
    <Box py={"60px"} h={"auto"}>
      <Box
        pt={"120px"}
        h={"460px"}
        bgImage={"/assets/team-section/team-member-bg.jpg"}
        bgSize={"cover"}
        bgPos={"center"}
        style={{
          borderImage:
            "linear-gradient(rgba(25, 90, 0, 0.85), rgba(25, 90, 0, 0.85))fill 1",
        }}
      >
        <Box position={"relative"} color={"white"} textAlign={"center"}>
          <Heading position={"relative"} variant={"heading-2"} zIndex={2}>
            Team Member
          </Heading>
          <Text
            variant={"body-normal"}
            color={"white"}
            maxW={"430px"}
            mx={"auto"}
            pt={"8px"}
            zIndex={2}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </Text>
          <Image
            src="/assets/category-section/category-title.svg"
            pos={"absolute"}
            top={"-50%"}
            left={"50%"}
            transform={"translateX(-50%)"}
            zIndex={0}
          />
        </Box>
      </Box>
      <Container maxW={"container.xl"}>
        <Grid gridTemplateColumns={"repeat(4,1fr)"} mt={"-150px"} gap={"24px"}>
          {[...Array(4).keys()].map((_, index) => (
            <GridItem key={index}>
              <Box
                pos={"relative"}
                transition={"all 0.5s ease-in-out"}
                _hover={{
                  ".social": {
                    opacity: 1,
                    transition: "opacity 0.7s ease-in-out",
                  },
                  ".team-overlay": {
                    transition: "top 0.5s ease-in-out",
                    top: 0,
                  },
                  cursor: "pointer",
                }}
                bgImage={"/assets/team-section/team-member-1.svg"}
                h={"350px"}
                overflow={"hidden"}
              >
                {/* overlay  */}
                <Box
                  className="team-overlay"
                  pos={"absolute"}
                  w={"100%"}
                  h={"100%"}
                  top={350}
                  left={0}
                  bgColor={"rgba(25, 90, 0, 0.5)"}
                ></Box>
                {/* <Image src="/assets/team-section/team-member-1.svg" /> */}
                <VStack
                  pos={"absolute"}
                  top={"10px"}
                  right={"10px"}
                  opacity={0}
                  className="social"
                  transition={"opacity 0.5s ease-in-out"}
                >
                  <HStack
                    h={"35px"}
                    w={"35px"}
                    bg={"white"}
                    rounded={"4px"}
                    justify={"center"}
                    align={"center"}
                    _hover={{ bg: "primary.orange", color: "white" }}
                    cursor={"pointer"}
                  >
                    <FacebookIcon />
                  </HStack>
                  <HStack
                    h={"35px"}
                    w={"35px"}
                    bg={"white"}
                    rounded={"4px"}
                    justify={"center"}
                    align={"center"}
                    _hover={{ bg: "primary.orange", color: "white" }}
                    cursor={"pointer"}
                  >
                    <TwitterIcon />
                  </HStack>
                  <HStack
                    h={"35px"}
                    w={"35px"}
                    bg={"white"}
                    rounded={"4px"}
                    justify={"center"}
                    align={"center"}
                    _hover={{ bg: "primary.orange", color: "white" }}
                    cursor={"pointer"}
                  >
                    <YoutubeIcon />
                  </HStack>
                </VStack>
              </Box>
              <Box
                bg={"white"}
                boxShadow={"0px 0px 80px 0px rgba(205, 205, 205, 0.25)"}
                textAlign={"center"}
                py={"16px"}
              >
                <Heading variant={"heading-6"}>Mark Henry</Heading>
                <Text variant={"body-normal"}>Owner</Text>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TeamSection;
