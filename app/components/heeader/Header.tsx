import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import SearchIcon from "../icons/search-icon";
import UserIcon from "../icons/user-icon";
import CartIcon from "../icons/cart-icon";

const HeaderSection = () => {
  const menuList = [
    { id: "menu-1", label: "Home" },
    { id: "menu-2", label: "Menu" },
    { id: "menu-3", label: "Blog" },
    { id: "menu-5", label: "About" },
    { id: "menu-6", label: "Shop" },
    { id: "menu-7", label: "Contact" },
  ];

  const menuListTwo = [
    { id: "menu-icon-1", label: <SearchIcon /> },
    { id: "menu-icon-2", label: <UserIcon /> },
    { id: "menu-icon-3", label: <CartIcon /> },
  ];

  return (
    <HStack justify={"space-between"} h={"80px"}>
      <HStack gap={"98px"}>
        <Image src="/assets/logo/logo.png" w={"90px"} />
        <HStack gap={"32px"}>
          {menuList.map((menuItem) => (
            <Text
              className="text-hover"
              variant={"body-normal"}
              position={"relative"}
              cursor={"pointer"}
              key={menuItem.id}
              _after={{
                content: '""',
                position: "absolute",
                bottom: -1,
                left: 0,
                height: "3px",
                bgColor: "primary.100",
                width: "0%",
              }}
              _hover={{
                _after: {
                  width: "100%",
                  transition: "width 0.5s ease-in-out",
                },
              }}
            >
              {menuItem.label}
            </Text>
          ))}
        </HStack>
      </HStack>
      <HStack color={"white"} gap={"16px"}>
        {menuListTwo.map((menuItem) => (
          <Box key={menuItem.id}>{menuItem.label}</Box>
        ))}
      </HStack>
    </HStack>
  );
};

export default HeaderSection;
