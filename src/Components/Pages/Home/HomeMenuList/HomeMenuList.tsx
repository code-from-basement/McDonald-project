import Styles from "./HomeMenuList.module.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";
import ButtonSwiper from "./ButtonSwiper/ButtonSwiper";
import { InfoRoundedIcon } from "../../../UI/IconsLibrary/IconsLibrary";

function HomeMenuList() {
  return (
    <div className={Styles.homeMenuList}>
      <Swiper slidesPerView="auto" centeredSlides={false} spaceBetween={36} navigation={true} modules={[Pagination, Navigation]} className={Styles.menuListContainer}>
        <SwiperSlide className={Styles.menuListIntro}>
          <div className={Styles.menuListIntroCard}>
            <h2>Choose a menu:</h2>
            <p>
              <InfoRoundedIcon /> You can explore our foods available in our restaurant here, have fun!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <h3>Hamburgers</h3>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <h3>chicken Burgers</h3>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <h3>Vegetarian Burger</h3>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <h3>Breakfast</h3>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <h3>Snacks</h3>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <h3>Salads</h3>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <h3>Dessert</h3>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <h3>Drinks</h3>
        </SwiperSlide>

        <ButtonSwiper />
      </Swiper>
    </div>
  );
}

export default HomeMenuList;
