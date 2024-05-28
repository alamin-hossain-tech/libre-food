import { Box, Divider, HStack, Heading, Stack, Text } from "@chakra-ui/react";

const MenuItem = () => {
  return (
    <>
      <HStack align={"start"} justify={"space-between"}>
        <Stack spacing={"8px"}>
          <Heading variant={"heading-5"} color={"primary.100"}>
            Alder Grilled Chinook Salmon
          </Heading>
          <Text variant={"body-normal"} color={"gray.200"}>
            Toasted French bread topped with romano, cheddar
          </Text>
          <Text variant={"body-normal"} color={"gray.300"}>
            560 CAL
          </Text>
        </Stack>
        <Heading variant={"heading-5"} color={"primary.100"}>
          32$
        </Heading>
      </HStack>
      <Divider borderColor={"gray.500"} borderStyle={"dotted"} mt={"12px"} />
    </>
  );
};

export default MenuItem;
