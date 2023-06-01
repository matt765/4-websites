import React from "react";
import { EffectFade, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { WebsiteBox } from "@/components/WebsiteBox";
import { projectsData } from "@/data/projectsData";

export const Carousel = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectFade, Pagination, Navigation]}
      className="mySwiper"
      effect="slide-down"
      style={
        {
          "--swiper-navigation-color": "rgba(255,255,255,0.6)",
          "--swiper-navigation-size": "70px",
        } as any
      }
      noSwiping={true}
      allowTouchMove={false}
    >
      <SwiperSlide>
        <WebsiteBox {...projectsData[0]} />
      </SwiperSlide>
      <SwiperSlide>
        <WebsiteBox {...projectsData[1]} />
      </SwiperSlide>
      <SwiperSlide>
        <WebsiteBox {...projectsData[2]} />
      </SwiperSlide>
      <SwiperSlide>
        <WebsiteBox {...projectsData[3]} />
      </SwiperSlide>
    </Swiper>
  );
};
