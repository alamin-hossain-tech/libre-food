import {
  Box,
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

  const categoryList = [
    {
      id: "c-1",
      label: "C1",
      items: 22,
      img: "/assets/category-section/category-1.jpg",
    },
    {
      id: "c-2",
      label: "C2",
      items: 22,
      img: "/assets/category-section/category-2.jpg",
    },
    {
      id: "c-3",
      label: "C3",
      items: 22,
      img: "/assets/category-section/category-3.jpg",
    },
    {
      id: "c-4",
      label: "C4",
      items: 22,
      img: "/assets/category-section/category-4.jpg",
    },
    {
      id: "c-5",
      label: "C5",
      items: 22,
      img: "/assets/category-section/category-5.jpg",
    },
    {
      id: "c-6",
      label: "C6",
      items: 22,
      img: "/assets/category-section/category-6.jpg",
    },
    {
      id: "c-7",
      label: "C7",
      items: 22,
      img: "/assets/category-section/category-7.jpg",
    },
    {
      id: "c-8",
      label: "C8",
      items: 22,
      img: "/assets/category-section/category-8.jpg",
    },
    {
      id: "c-9",
      label: "C9",
      items: 22,
      img: "/assets/category-section/category-9.jpg",
    },
  ];

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
          zIndex={-1}
        />
      </Box>
      <Box pos={"relative"} pt={"56px"}>
        <Swiper
          onSwiper={setSwiperRef}
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
          {categoryList?.map((category, index) => {
            return (
              <SwiperSlide key={category.id}>
                <Box w={"full"}>
                  <Image rounded={"6px"} src={category.img} />
                  <Heading
                    variant={"heading-6"}
                    color={"gray.200"}
                    pt={"16px"}
                    pb={"8px"}
                  >
                    {category.label}
                  </Heading>
                  <Text variant={"body-normal"} color={"gray.300"}>
                    {category.items + (category.items > 1 ? " items" : " item")}
                  </Text>
                </Box>
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
          bgColor={isLastSlide ? "hover" : "primary.100"}
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
          bgColor={isFirstSlide ? "hover" : "primary.100"}
          icon={<PreviousIcon />}
          zIndex={999}
          onClick={() => swiperRef?.slidePrev()}
        />
      </Box>
    </Container>
  );
};

export default CategorySection;
