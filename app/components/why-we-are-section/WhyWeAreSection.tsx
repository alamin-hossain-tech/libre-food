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
import DeliveryIcon from "../icons/delivery-icon";
import FreshFoodIcon from "../icons/fresh-food-icon";
import QualityIcon from "../icons/quality-icon";
import TimeIcon from "../icons/time-icon";
import FeaturedTitle from "../shared/feature-title/FeaturedTitle";

const WhyWeAreSection = () => {
  const featuredItems = [
    {
      id: "f1",
      label: "Fast Delivery",
      icon: <DeliveryIcon />,
    },
    {
      id: "f2",
      label: "24/7 services",
      icon: <TimeIcon />,
    },
    {
      id: "f3",
      label: "Fresh food",
      icon: <FreshFoodIcon />,
    },
    {
      id: "f4",
      label: "Quality maintain",
      icon: <QualityIcon />,
    },
  ];
  return (
    <Container maxW={"container.xl"} py={"60px"}>
      <HStack gap={"125px"} align={"start"}>
        <Box w={"full"}>
          <HStack gap={0} align={"start"}>
            <Image rounded={"6px"} w={"50%"} src="/assets/why-we-are/1.jpg" />
            <Image
              rounded={"6px"}
              w={"50%"}
              ml={"-25px"}
              mt={"60px"}
              src="/assets/why-we-are/2.jpg"
            />
          </HStack>
        </Box>
        <Box w={"full"}>
          <FeaturedTitle title="Why Choose us" />
          <Heading variant={"heading-2"}>Why We are the best?</Heading>
          <Text variant={"body-normal"} pt={"32px"} pb={"16px"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </Text>
          <Text variant={"body-normal"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </Text>
          <Grid gridTemplateColumns={"repeat(2,1fr)"} gap={"20px"} pt={"32px"}>
            {featuredItems.map((feature) => (
              <GridItem
                cursor={"pointer"}
                key={feature.id}
                py={"10px"}
                px={"20px"}
                rounded={"6px"}
                shadow={"sm"}
                borderLeft={"3px solid transparent"}
                _hover={{
                  borderLeft: "3px solid var(--chakra-colors-primary-100)",
                  shadow: "md",
                }}
              >
                <HStack gap={"20px"}>
                  {feature.icon}
                  <Heading variant={"heading-6"}>{feature.label}</Heading>
                </HStack>
              </GridItem>
            ))}
          </Grid>
        </Box>
      </HStack>
    </Container>
  );
};

export default WhyWeAreSection;
