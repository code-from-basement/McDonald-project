import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { InfoRoundedIcon } from "../../../UI/IconsLibrary/IconsLibrary";
import saladsMenu from "./../../../../assets/Image/swipperIcons/01_Ingredients_1.webp";
import allMenu from "./../../../../assets/Image/swipperIcons/02_Halal_0.webp";
import snacksMenu from "./../../../../assets/Image/swipperIcons/04_Chicken.webp";
import burgerMenu from "./../../../../assets/Image/swipperIcons/05_Beef_0.webp";
import chickenAndFishMenu from "./../../../../assets/Image/swipperIcons/07_Fish.webp";
import beveragesMenu from "./../../../../assets/Image/swipperIcons/Beverages.webp";
import breakfastMenu from "./../../../../assets/Image/swipperIcons/breakfast_0.webp";
import VegetarianMenu from "./../../../../assets/Image/swipperIcons/10_Produce.webp";
import Styles from "./HomeMenuList.module.css";

import { NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import ButtonSwiper from "./ButtonSwiper/ButtonSwiper";

function HomeMenuList() {
  return (
    <div className={Styles.homeMenuList}>
      <Swiper slidesPerView="auto" centeredSlides={false} spaceBetween={32} navigation={true} modules={[Pagination, Navigation]} className={Styles.menuListContainer}>
        <SwiperSlide className={Styles.menuListIntro}>
          <div className={Styles.menuListIntroCard}>
            <h2>Choose a menu:</h2>
            <p>
              <InfoRoundedIcon /> You can explore our foods available in our restaurant here, have fun!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink>
            <img src={allMenu} alt="" />
            <h2>All</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink>
            <img src={burgerMenu} alt="" />
            <h2>Hamburgers</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink>
            <img src={chickenAndFishMenu} alt="" />
            <h2>Chicken Burger</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink>
            <img src={breakfastMenu} alt="" />
            <h2>Breakfast</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink>
            <img src={VegetarianMenu} alt="" />
            <h2>Vegetarian Menu</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink>
            <img src={snacksMenu} alt="" />
            <h2>Snacks</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink>
            <img src={beveragesMenu} alt="" />
            <h2>Drinks</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink>
            <img src={saladsMenu} alt="" />
            <h2>Salads</h2>
          </NavLink>
        </SwiperSlide>

        <ButtonSwiper />
      </Swiper>
    </div>
  );
}

export default HomeMenuList;
