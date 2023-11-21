import Styles from "./MegaMenu.module.css";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import breakfastMenuImg from "./../../../assets/Image/megaMenu/breakfast.png";
import dessertMenuImg from "./../../../assets/Image/megaMenu/dessert.png";
import drinkMenuImg from "./../../../assets/Image/megaMenu/drink.png";
import hamburgerMenuImg from "./../../../assets/Image/megaMenu/hamburger.png";
import snackMenuImg from "./../../../assets/Image/megaMenu/snack.png";
import vegiBurgerMenuImg from "./../../../assets/Image/megaMenu/vegiBurger.png";
import chickenBurgerMenuImg from "./../../../assets/Image/megaMenu/chickenBuger.png";
import saladMenuImg from "./../../../assets/Image/megaMenu/salad.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import React from "react";
import { NavLink } from "react-router-dom";
function MegaMenu() {
  return (
    <div className={Styles.megaMenu}>
      <div className={Styles.bg__logo}>
        <img src={bgLogo} alt="background logo" />
      </div>
      <section className={Styles.foodCategory}>food categories</section>
      <section className={Styles.menuAds}>menu ads</section>
      <button className={Styles.menuCloser}>
        <KeyboardArrowUpRoundedIcon />
      </button>
    </div>
  );
}

export default MegaMenu;
