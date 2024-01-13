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
import DipsMenu from "./../../../../assets/Image/swipperIcons/14_Values.webp";
import beveragesMenu from "./../../../../assets/Image/swipperIcons/Beverages.webp";
import breakfastMenu from "./../../../../assets/Image/swipperIcons/breakfast_0.webp";
import Styles from "./HomeMenuList.module.css";

import { NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import ButtonSwiper from "./ButtonSwiper/ButtonSwiper";

interface homeMenuListProps {
  isActive: boolean;
}

const isActiveTab = ({ isActive }: homeMenuListProps) => {
  return isActive ? Styles.active : "";
};

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
          <NavLink to="all-menu" className={isActiveTab}>
            <img src={allMenu} alt="image of all menu list" />
            <h2>All</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink to="hamburger-menu" className={isActiveTab}>
            <img src={burgerMenu} alt="image of burger menu list" />
            <h2>Hamburgers</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink to="chicken&fish-menu" className={isActiveTab}>
            <img src={chickenAndFishMenu} alt="image of chicken burger menu list " />
            <h2>Chicken Burger</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink to="breakfast-menu" className={isActiveTab}>
            <img src={breakfastMenu} alt="image of breakfast menu list " />
            <h2>Breakfast</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink to="snacks-menu" className={isActiveTab}>
            <img src={snacksMenu} alt="image of snacks menu list " />
            <h2>Snacks</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink to="drink-menu" className={isActiveTab}>
            <img src={beveragesMenu} alt="image of drink menu list" />
            <h2>Drinks</h2>
          </NavLink>
        </SwiperSlide>
        <SwiperSlide className={Styles.categoryItem}>
          <NavLink to="salad-menu" className={isActiveTab}>
            <img src={saladsMenu} alt="image of salad menu list" />
            <h2>Salads</h2>
          </NavLink>
        </SwiperSlide>

        <SwiperSlide className={Styles.categoryItem}>
          <NavLink to="dips-menu" className={isActiveTab}>
            <img src={DipsMenu} alt="image of dips menu list" />
            <h2>Dips</h2>
          </NavLink>
        </SwiperSlide>

        <ButtonSwiper />
      </Swiper>
    </div>
  );
}

export default HomeMenuList;
