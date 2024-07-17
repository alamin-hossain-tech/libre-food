import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputRightAddon,
  Stack,
  Text,
} from "@chakra-ui/react";
import AirMailIcon from "~/components/icons/air-mail-icon";
import { TwitterIcon } from "~/components/icons/social-icons";
import FacebookIcon from "~/components/icons/social-icons/facebook-icon";
import InstagramIcon from "~/components/icons/social-icons/instagram-icon";
import PrinterestIcon from "~/components/icons/social-icons/printerest-icon";

import { Icon } from "@iconify/react";

const FooterSection = () => {
  const socialIcons = [
    { id: "printerest", icon: "logos:pinterest", url: "" },
    { id: "twitter", icon: "logos:twitter", url: "" },
    { id: "facebook", icon: "logos:facebook", url: "" },
    { id: "instagram", icon: "skill-icons:instagram", url: "" },
    { id: "youtube", icon: "logos:youtube-icon", url: "" },
  ];
  return (
    <Box bgColor={"footer"} py={"60px"}>
      <Container maxW={"container.xl"}>
        <HStack>
          <Box>
            <Image w={"90px"} src="/assets/logo/logo.png" />
            <Text variant={"body-medium"}>
              Subscribe our newsletter and get discount 25%off
            </Text>
            <InputGroup>
              <Input />
              <InputRightAddon color={"white"} bgColor={"primary.100"}>
                <AirMailIcon />
              </InputRightAddon>
            </InputGroup>
            <HStack>
              {socialIcons.map((social) => (
                <Box key={social.id}>
                  <Icon name={social.icon} icon={social.icon} />
                </Box>
              ))}
            </HStack>
          </Box>
          <Box>
            <Heading>Contact us</Heading>
            <Stack>
              <HStack>
                <Box>
                  <Icon icon={"ep:location"} />
                </Box>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Text>
              </HStack>
              <HStack>
                <Box>
                  <Icon icon={"ph:phone-light"} />
                </Box>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Text>
              </HStack>
              <HStack>
                <Box>
                  <Icon icon={"oui:email"} />
                </Box>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Text>
              </HStack>
              <HStack>
                <Box>
                  <Icon icon={"ph:clock"} />
                </Box>
                <Text>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                </Text>
              </HStack>
            </Stack>
          </Box>
        </HStack>
      </Container>
    </Box>
  );
};

export default FooterSection;
