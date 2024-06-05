import { Box, Button, Container, Heading, Image, Text } from "@chakra-ui/react";
import { LinksFunction } from "@remix-run/node";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import css from "./PartnersClientSection.css";
import { ReactNode, useEffect, useRef, useState } from "react";
import { Swiper as SwiperTypes } from "swiper";

// export const links: LinksFunction = () => {
//   return [
//     {
//       rel: "stylesheet",
//       href: css,
//     },
//   ];
// };

const PartnersClientSection = () => {
  return (
    <div>
      <Container maxW={"container.xl"} textAlign={"center"} py={"60px"}>
        <Box pos={"relative"}>
          <Text variant={"featured"} zIndex={2}>
            Partners & Clients
          </Text>
          <Heading position={"relative"} variant={"heading-2"} zIndex={2}>
            We work with the best people
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
            top={"-25%"}
            left={"50%"}
            transform={"translateX(-50%)"}
            zIndex={0}
            w={"110px"}
          />
        </Box>
        <Box
          sx={{
            ".client-slider .swiper-wrapper": {
              transitionTimingFunction: "linear",
            },
          }}
          mt={"30px"}
        >
          <Swiper
            slidesPerView={"auto"}
            className="client-slider"
            modules={[Autoplay]}
            autoplay={{
              delay: 0.1,
              disableOnInteraction: false,
            }}
            loop={true}
            spaceBetween={30}
            speed={2000}
          >
            {[...Array(6).keys()].map((_, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <Image src={`/assets/partners-client/image-${index + 1}.png`} />
              </SwiperSlide>
            ))}
            {[...Array(6).keys()].map((_, index) => (
              <SwiperSlide key={index} style={{ width: "auto" }}>
                <Image src={`/assets/partners-client/image-${index + 1}.png`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </div>
  );
};

export default PartnersClientSection;
