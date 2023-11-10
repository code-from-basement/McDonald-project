import Styles from "./Header.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Parallax } from "swiper/modules";
import React from "react";

// Import css style for swiper components

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/parallax";

function Header() {
  return (
    <div className={Styles.header}>
      <section className={Styles.banner}>
        <Swiper
          className={Styles.swiper}
          autoplay={{ disableOnInteraction: false, delay: 20000 }}
          pagination={{ clickable: true }}
          data-swiper-autoplay="20"
          effect="fade"
          speed={500}
          parallax={true}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
        >
          <SwiperSlide className={Styles.banner__1}>
            <div className={Styles.teaserBox} data-swiper-parallax-duration="1300" data-swiper-parallax="45%">
              <div className={Styles.TeaserBox__header} data-swiper-parallax="15%" data-swiper-parallax-duration="600">
                <h1 className={Styles.teaserBox__title}>Whack-a-Mac!</h1>
              </div>
              <div className={Styles.teaserBox__body} data-swiper-parallax="100">
                <p className={Styles.teaserBox__content}>Here’s your chance to win delicious new offers! Pick up your hammer to play and enjoy the crazy deals.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className={Styles.banner__2}>
            <div className={Styles.teaserBox} data-swiper-parallax-duration="1300" data-swiper-parallax="-46%">
              <div className={Styles.TeaserBox__header} data-swiper-parallax="-15%" data-swiper-parallax-duration="600">
                <h1 className={Styles.teaserBox__title}>Just tap the McDonald’s App!</h1>
              </div>
              <div className={Styles.teaserBox__body}>
                <p className={Styles.teaserBox__content}>With every order, earn rewards points! Stack them up and redeem them on exclusive rewards!</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}

export default Header;
