import Styles from "./MegaMenu.module.css";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import React, { useCallback } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";

function MegaMenu() {
  const { megaMenuToggler } = useGlobalContext();

  const onClickMegaMenuToggler = () => {
    megaMenuToggler();
  };

  return (
    <div className={Styles.megaMenu}>
      <div className={Styles.bg__logo}>
        <img src={bgLogo} alt="background logo" />
      </div>
      <section className={Styles.foodCategory}>food categories</section>
      <section className={Styles.menuAds}>menu ads</section>
      <button className={Styles.menuCloser} onClick={onClickMegaMenuToggler}>
        <KeyboardArrowUpRoundedIcon />
      </button>
    </div>
  );
}

export default MegaMenu;
