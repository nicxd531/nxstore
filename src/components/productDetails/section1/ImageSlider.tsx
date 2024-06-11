"use client";
import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface myComponentProps {
  data?: string[];
}
function ImageSlider({ data }: myComponentProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Box sx={{ width: { xs:"100%",lg: "33%" } }}>
      <Swiper
        style={{
          border: "2px solid #DEE2E7",
          borderRadius: "5px",
        }}
        loop={true}
        spaceBetween={10}
        navigation={false}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {data?.map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper 
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {data?.map((data, index) => {
          return (
            <SwiperSlide
            style={{
                border: "2px solid #DEE2E7",
                borderRadius: "5px",
                backgroundColor:"#979797"
              }}
             key={index}>
              <img src={data} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
}

export default ImageSlider;
