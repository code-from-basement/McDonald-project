import Styles from "./HomeMenuList.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import { PaginationItem } from "@mui/material";

function HomeMenuList() {
  return (
    <div className={Styles.homeMenuList}>
      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={Styles.menuListContainer}
      >
        <SwiperSlide className={Styles.categoryItem}>Slide 1</SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>Slide 1</SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>Slide 1</SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>Slide 1</SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>Slide 1</SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>Slide 1</SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>Slide 1</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomeMenuList;
