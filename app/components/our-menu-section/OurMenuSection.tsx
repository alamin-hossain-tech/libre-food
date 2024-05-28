import {
  Box,
  Container,
  Heading,
  Image,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  HStack,
  Stack,
  Button,
} from "@chakra-ui/react";
import MenuItem from "./MenuItem";

const OurMenuSection = () => {
  return (
    <Container maxW={"container.xl"} py={"60px"}>
      <Box pos={"relative"} textAlign={"center"}>
        <Heading variant={"heading-2"}>Our Food Menu</Heading>
        <Text variant={"body-normal"} maxW={"430px"} mx={"auto"} pt={"8px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </Text>
        <Image
          src="/assets/category-section/category-title.svg"
          pos={"absolute"}
          top={"-20%"}
          left={"50%"}
          transform={"translateX(-50%)"}
          zIndex={-1}
        />
      </Box>
      <Tabs mt={"56px"}>
        <TabList
          borderBottomWidth={"1px"}
          borderColor={"gray.500"}
          justifyContent={"center"}
          gap={"16px"}
        >
          <Tab _selected={{ borderColor: "primary.100", color: "primary.100" }}>
            Breakfast
          </Tab>
          <Tab _selected={{ borderColor: "primary.100", color: "primary.100" }}>
            Lunch
          </Tab>
          <Tab _selected={{ borderColor: "primary.100", color: "primary.100" }}>
            Dinner
          </Tab>
          <Tab _selected={{ borderColor: "primary.100", color: "primary.100" }}>
            Dessert
          </Tab>
          <Tab _selected={{ borderColor: "primary.100", color: "primary.100" }}>
            Drink
          </Tab>
          <Tab _selected={{ borderColor: "primary.100", color: "primary.100" }}>
            Snack
          </Tab>
        </TabList>

        <TabPanels py={"32px"}>
          {[...Array(6).keys()].map((_, index) => (
            <TabPanel p={0} key={index}>
              <HStack gap={"64px"}>
                <Stack w={"full"}>
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                </Stack>
                <Stack w={"full"}>
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                  <MenuItem />
                </Stack>
              </HStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
      <Box textAlign={"center"} mt={"24px"}>
        <Button variant={"primary-outline"} rounded={"none"}>
          View menu
        </Button>
      </Box>
    </Container>
  );
};

export default OurMenuSection;
