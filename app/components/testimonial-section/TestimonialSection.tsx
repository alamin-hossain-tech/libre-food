import { useState } from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Box, HStack } from "@chakra-ui/react";

const TestimonialSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <HStack>
      <Swiper
        className="testimonial-slider-1"
        loop={true}
        spaceBetween={0}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {[...Array(5).keys()].map((slide, index) => (
          <SwiperSlide key={index}>
            <Box height={100} w={"full"} bg={"red"}>
              {index + 1}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={0}
        // slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {[...Array(5).keys()].map((slide, index) => (
          <SwiperSlide key={index}>
            <Box height={100} w={"full"} bg={"red"}>
              {index + 1}
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </HStack>
  );
};

export default TestimonialSection;
