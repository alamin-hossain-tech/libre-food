import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import CalendarIcon from "../icons/calendar-icon";
import MessageIcon from "../icons/message-icon";
import NextIcon from "../icons/next-icon";
import SwiperNextIcon from "../icons/swiper-next-icon";

const BlogSection = () => {
  return (
    <Box py={"60px"}>
      <Box position={"relative"} textAlign={"center"}>
        <Heading position={"relative"} variant={"heading-2"} zIndex={2}>
          Latest news & Blog
        </Heading>
        <Text
          variant={"body-normal"}
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
      <Container maxW={"container.xl"} mt={"56px"}>
        <Grid gridTemplateColumns={"repeat(3,1fr)"} gap={"24px"}>
          <GridItem
            rounded={"6px"}
            boxShadow={"0px 0px 80px 0px rgba(205, 205, 205, 0.25)"}
            p={"16px"}
            pt={"0px"}
          >
            <Image
              mt={"-19px"}
              src="/assets/blog-section/blog-feature-image-1.svg"
            />
            <Box p={"8px"} pt={"24px"}>
              <HStack color={"gray.100"}>
                <HStack>
                  <CalendarIcon />
                  <Text variant={"body-normal"}>02 Jan 2024</Text>
                </HStack>
                <HStack>
                  <MessageIcon />
                  <Text variant={"body-normal"}>Comments (03)</Text>
                </HStack>
              </HStack>
              <Heading variant={"heading-6"} color={"gray.100"} mt={"16px"}>
                Chocolate Truffle Cake With Honey Flavor
              </Heading>
              <Text
                variant={"body-normal"}
                color={"gray.200"}
                pt={"8px"}
                pb={"16px"}
              >
                Lorem ipsum dolor sit amet, consectetur elit. Non mi sed etiam a
                id at ultricies neque.Tempus,poten diam ac integer id tellus
                est.
              </Text>
              <HStack
                color={"gray.200"}
                cursor={"pointer"}
                _hover={{
                  ".read-more-icon": {
                    transition: "transform 0.5s ease-in-out",
                    transform: "translateX(10px)",
                  },
                  color: "primary.100",
                  ".read-more-text": {
                    color: "primary.100",
                  },
                }}
              >
                <Text
                  variant={"body-normal"}
                  color={"gray.200"}
                  className="read-more-text"
                >
                  Read More
                </Text>
                <SwiperNextIcon className="read-more-icon" />
              </HStack>
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogSection;
