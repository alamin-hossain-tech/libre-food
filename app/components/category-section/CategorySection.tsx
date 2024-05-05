import {
  Box,
  Button,
  Container,
  Heading,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import NextIcon from "../icons/next-icon";
import PreviousIcon from "../icons/prev-icon";

const CategorySection = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();
  const [isLastSlide, setIsLastSlide] = useState<boolean>(false);
  const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);

  return (
    <Container maxW={"container.xl"} textAlign={"center"} py={"60px"}>
      <Box position={"relative"}>
        <Heading position={"relative"} variant={"heading-2"}>
          Food category
        </Heading>
        <Text variant={"body-normal"} maxW={"430px"} mx={"auto"} pt={"8px"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </Text>
        <Image
          src="/assets/category-section/category-title.svg"
          pos={"absolute"}
          top={"-50%"}
          left={"50%"}
          transform={"translateX(-50%)"}
        />
      </Box>
      <Box pos={"relative"} pt={"56px"}>
        <Swiper
          onSwiper={setSwiperRef}
          //   style={{ overflow: "visible" }}
          slidesPerView={4}
          modules={[Navigation]}
          spaceBetween={24}
          className="mySwiper"
          onSlideChange={() => {
            if (swiperRef) {
              setIsLastSlide(swiperRef.isEnd);
              setIsFirstSlide(swiperRef.isBeginning);
            }
          }}
        >
          {[...Array(8).keys()].map((_, index) => {
            return (
              <SwiperSlide key={index}>
                <Box w={"full"} height={400} bg={"hover"}></Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <IconButton
          rounded={"4px"}
          aria-label=""
          position={"absolute"}
          top={"50%"}
          right={-12}
          transform={"translateY(-50%)"}
          _hover={{ bgColor: "none" }}
          bgColor={swiperRef?.isEnd ? "hover" : "primary.100"}
          icon={<NextIcon />}
          zIndex={999}
          onClick={() => swiperRef?.slideNext()}
        />
        <IconButton
          rounded={"4px"}
          aria-label=""
          position={"absolute"}
          top={"50%"}
          left={-12}
          transform={"translateY(-50%)"}
          _hover={{ bgColor: "none" }}
          bgColor={swiperRef?.isBeginning ? "hover" : "primary.100"}
          icon={<PreviousIcon />}
          zIndex={999}
          onClick={() => swiperRef?.slidePrev()}
        />
      </Box>
    </Container>
  );
};

export default CategorySection;
