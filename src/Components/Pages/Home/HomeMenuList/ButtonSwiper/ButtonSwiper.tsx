import Styles from "./ButtonSwiper.module.css";
import React from "react";
import { useSwiper } from "swiper/react";
import { NavigateBeforeRoundedIcon, NavigateNextRoundedIcon } from "../../../../UI/IconsLibrary/IconsLibrary";
function ButtonSwiper() {
  const swiper = useSwiper();
  return (
    <div className={Styles.buttonContainer}>
      <button onClick={() => swiper.slidePrev()}>
        <NavigateBeforeRoundedIcon />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <NavigateNextRoundedIcon />
      </button>
    </div>
  );
}

export default ButtonSwiper;
