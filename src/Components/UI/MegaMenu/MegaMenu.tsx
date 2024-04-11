import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useMemo } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import { megaMenuAnimationStyles, megaMenuBackgroundLogoAnimationStyles } from "../Animation/AnimationStyles";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./MegaMenu.module.css";
import MegaMenuItem from "./MegaMenuItem/MegaMenuItem";
import macIcon from "./../../../assets/Image/logo/macLogo-mid-size.png";
import hamburgersIcon from "./../../../assets/Image/swipperIcons/05_Beef_0.webp";
import snackIcon from "./../../../assets/Image/swipperIcons/04_Chicken.webp";
import breakfastIcon from "./../../../assets/Image/swipperIcons/breakfast_0.webp";
import chickenIcon from "./../../../assets/Image/swipperIcons/07_Fish.webp";
import drinksIcon from "./../../../assets/Image/swipperIcons/Beverages.webp";
import saladIcon from "./../../../assets/Image/swipperIcons/01_Ingredients_1.webp";
import dipsIcon from "./../../../assets/Image/swipperIcons/14_Values.webp";

import { ArrowForwardIosRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import { useNavigate } from "react-router-dom";
function MegaMenu() {
  const navigate = useNavigate();
  const { megaMenuRef } = useGlobalContext;
  const { eventToggles, setEventToggles }: any = useGlobalContext();
  const { togglerFunc, megaMenuOpen } = eventToggles;

  const onclickNavigateHandler = (e) => {
    const value = e.target.value;
    navigate(`/${value}`);
    setEventToggles((prevData) => {
      return {
        ...prevData,
        megaMenuOpen: false,
      };
    });
    const menuContainerLocation = document.getElementById("menuContainerID");
    setTimeout(() => {
      menuContainerLocation?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  };

  return (
    <motion.div {...megaMenuAnimationStyles} className={Styles.megaMenu} ref={megaMenuRef}>
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div {...megaMenuBackgroundLogoAnimationStyles} className={Styles.bg__logo}>
            <img src={bgLogo} alt="background logo" />
          </motion.div>
        )}
      </AnimatePresence>
      <section className={Styles.foodCategory}>
        {/* burger menu item */}
        <div className={Styles.foodCategory__item}>
          <div className={Styles.card__image}>
            <img src={hamburgersIcon} alt="" />
          </div>
          <div className={Styles.card__content}>
            <h2 className={Styles.content__title}>Hamburgers</h2>
            <p className={Styles.content__description}>Our popular Cheeseburger with 100% pure beef.</p>
            <p className={Styles.content__numberOfMenus}>
              <span>9</span> type of Burger{" "}
            </p>
          </div>
          <div className={Styles.card__btn}>
            <button value={"hamburger-menu"} onClick={(e) => onclickNavigateHandler(e)}>
              View Menu <ArrowForwardIosRoundedIcon />
            </button>
          </div>
        </div>

        {/* chicken menu item  */}
        <div className={Styles.foodCategory__item}>
          <div className={Styles.card__image}>
            <img src={chickenIcon} alt="" />
          </div>
          <div className={Styles.card__content}>
            <h2 className={Styles.content__title}>Chicken & Fish</h2>
            <p className={Styles.content__description}>At McDonald's you will find wonderfully tasty chicken burgers.</p>
            <p className={Styles.content__numberOfMenus}>
              <span>12</span> Chicken burger.{" "}
            </p>
          </div>
          <div className={Styles.card__btn}>
            <button value={"chicken&fish-menu"} onClick={(e) => onclickNavigateHandler(e)}>
              View Menu <ArrowForwardIosRoundedIcon />
            </button>
          </div>
        </div>

        {/* breakfast item menu */}
        <div className={Styles.foodCategory__item}>
          <div className={Styles.card__image}>
            <img src={breakfastIcon} alt="" />
          </div>
          <div className={Styles.card__content}>
            <h2 className={Styles.content__title}>Breakfast</h2>
            <p className={Styles.content__description}>Every morning we serve a quick and tasty breakfast until 10 in most of our restaurants.</p>
            <p className={Styles.content__numberOfMenus}>
              <span>7</span> number of Breakfast.{" "}
            </p>
          </div>
          <div className={Styles.card__btn}>
            <button value={"breakfast-menu"} onClick={(e) => onclickNavigateHandler(e)}>
              View Menu <ArrowForwardIosRoundedIcon />
            </button>
          </div>
        </div>

        {/* snacks item menu */}
        <div className={Styles.foodCategory__item}>
          <div className={Styles.card__image}>
            <img src={snackIcon} alt="" />
          </div>
          <div className={Styles.card__content}>
            <h2 className={Styles.content__title}>Snacks & Sides</h2>
            <p className={Styles.content__description}>Snacks are the treats that make life worth living.</p>
            <p className={Styles.content__numberOfMenus}>
              <span>7</span> number of snacks.
            </p>
          </div>
          <div className={Styles.card__btn}>
            <button value={"snacks-menu"} onClick={(e) => onclickNavigateHandler(e)}>
              View Menu <ArrowForwardIosRoundedIcon />
            </button>
          </div>
        </div>

        {/* Drinks item menu */}
        <div className={Styles.foodCategory__item}>
          <div className={Styles.card__image}>
            <img src={drinksIcon} alt="" />
          </div>
          <div className={Styles.card__content}>
            <h2 className={Styles.content__title}>Drinks</h2>
            <p className={Styles.content__description}>Whether you want to quench your thirst or indulge yourself, we have a drink for you..</p>
            <p className={Styles.content__numberOfMenus}>
              <span>6</span> number of Drinks.
            </p>
          </div>
          <div className={Styles.card__btn}>
            <button value={"drink-menu"} onClick={(e) => onclickNavigateHandler(e)}>
              View Menu <ArrowForwardIosRoundedIcon />
            </button>
          </div>
        </div>

        {/* salads item menu */}
        <div className={Styles.foodCategory__item}>
          <div className={Styles.card__image}>
            <img src={saladIcon} alt="" />
          </div>
          <div className={Styles.card__content}>
            <h2 className={Styles.content__title}>Salads</h2>
            <p className={Styles.content__description}>Satisfying and full of flavor. Made with nature's freshest ingredients.</p>
            <p className={Styles.content__numberOfMenus}>
              <span>3</span> number of Salads.
            </p>
          </div>
          <div className={Styles.card__btn}>
            <button value={"salad-menu"} onClick={(e) => onclickNavigateHandler(e)}>
              View Menu <ArrowForwardIosRoundedIcon />
            </button>
          </div>
        </div>

        {/* dips item menu */}
        <div className={Styles.foodCategory__item}>
          <div className={Styles.card__image}>
            <img src={dipsIcon} alt="" />
          </div>
          <div className={Styles.card__content}>
            <h2 className={Styles.content__title}>Dips</h2>
            <p className={Styles.content__description}>Our dips are the perfect complement to your meal.</p>
            <p className={Styles.content__numberOfMenus}>
              <span>5</span> number of Salads.
            </p>
          </div>
          <div className={Styles.card__btn}>
            <button value={"dips-menu"} onClick={(e) => onclickNavigateHandler(e)}>
              View Menu <ArrowForwardIosRoundedIcon />
            </button>
          </div>
        </div>
      </section>
      <div className={Styles.dividerV}>&nbsp;</div>
      <section className={Styles.menuAds}>
        <div className={Styles.menuAds__card}>
          <img src={macIcon} alt="" />
          <h2>Check new Drinks Menu!</h2>
          <p>Every month we comes with new idea until new year! follow use in the social media to be updated.</p>
        </div>
      </section>
      <button className={Styles.menuCloser} onClick={() => togglerFunc("megaMenuOpen", !eventToggles.megaMenuOpen)}>
        <KeyboardArrowUpRoundedIcon />
      </button>
    </motion.div>
  );
}

export default memo(MegaMenu);
