import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import { Swiper as SwiperTypes } from "swiper/types";
import FeaturedTitle from "../shared/feature-title/FeaturedTitle";
import SwiperPreviousIcon from "../icons/swiper-previous-icon";
import SwiperNextIcon from "../icons/swiper-next-icon";
import StarRatingIcon from "../icons/star-rating-icon";

const TestimonialSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperTypes | null>(null);
  const [swiperRef, setSwiperRef] = useState<SwiperTypes | null>(null);
  const [isLastSlide, setIsLastSlide] = useState<boolean>(false);
  const [isFirstSlide, setIsFirstSlide] = useState<boolean>(true);

  return (
    <Container maxW={"container.xl"} py={"60px"}>
      <Flex align={"center"} gap={"74px"} userSelect={"none"}>
        <Box w={"45%"}>
          <FeaturedTitle title="Testimonial" />
          <Heading variant={"heading-2"}>Customer Review</Heading>
          <Image mt={"8px"} mb={"24px"} src="/assets/testimonials/Quotes.svg" />
          <Box pos={"relative"}>
            <Swiper
              className="testimonial-slider-1"
              slidesPerView={1}
              spaceBetween={20}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              onSwiper={setSwiperRef}
              onSlideChange={() => {
                if (swiperRef) {
                  setIsLastSlide(swiperRef.isEnd);
                  setIsFirstSlide(swiperRef.isBeginning);
                }
              }}
            >
              {[...Array(5).keys()].map((slide, index) => (
                <SwiperSlide key={index}>
                  <Box w={"full"}>
                    <Text variant={"body-normal"}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque diam pellentesque bibendum non dui volutpat
                      fringilla bibendum. Urna, elit augue urna, vitae feugiat
                      pretium donec id elementum. Ultrices mattis sed vitae mus
                      risus. Lacus nisi, et ac dapibus sit eu velit in
                      consequat.
                    </Text>
                    <HStack mt={"24px"}>
                      <Image src="/assets/testimonials/reviewer-1.png" />
                      <Box>
                        <Text variant={"body-medium-bold"}>John Doe</Text>
                        <Text variant={"body-normal"}>Customer</Text>
                      </Box>
                    </HStack>
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
            <HStack pos={"absolute"} right={0} bottom={0} zIndex={999}>
              <Box
                cursor={"pointer"}
                onClick={() => swiperRef?.slidePrev()}
                color={isFirstSlide ? "gray.300" : "primary.100"}
              >
                <SwiperPreviousIcon />
              </Box>
              <Box
                cursor={"pointer"}
                onClick={() => swiperRef?.slideNext()}
                color={isLastSlide ? "gray.300" : "primary.100"}
              >
                <SwiperNextIcon />
              </Box>
            </HStack>
          </Box>
        </Box>
        <Box w={"55%"}>
          <Swiper
            onSwiper={setThumbsSwiper}
            allowTouchMove={false}
            slidesPerView={1}
            loop={true}
            spaceBetween={20}
            className="mySwiper"
            modules={[FreeMode]}
          >
            {[...Array(5).keys()].map((slide, index) => (
              <SwiperSlide key={index} style={{ padding: "60px" }}>
                <Box w={"full"} pos={"relative"} overflow={"visible"}>
                  <Image
                    ml={"auto"}
                    src="/assets/testimonials/Testiominal-Right-Side.svg"
                  />
                  <Box
                    rounded={"6px"}
                    p={"30px"}
                    boxShadow={"0px 4px 40px 0px #0000001A"}
                    bgColor={"white"}
                    zIndex={999}
                    pos={"absolute"}
                    left={"-25px"}
                    bottom={"-25px"}
                    ml={"10px"}
                    w={"70%"}
                  >
                    <HStack align={"start"} justify={"space-between"}>
                      <Stack>
                        <Text>Order now</Text>
                        <HStack color={"gold"}>
                          <StarRatingIcon />
                          <StarRatingIcon />
                          <StarRatingIcon />
                          <StarRatingIcon />
                          <StarRatingIcon />
                        </HStack>
                      </Stack>
                      <Text>100$</Text>
                    </HStack>
                    Lorem ipsum dolor sit amet, consectetur elit. Quisque diam
                    pellentesque bibendum fringilla bibendum. Urna, elit augue
                    urna,
                  </Box>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </Container>
  );
};

export default TestimonialSection;
