import Styles from "./MegaMenu.module.css";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import React from "react";
function MegaMenu() {
  return (
    <div className={Styles.megaMenu}>
      <div className={Styles.bg__logo}>
        <img src={bgLogo} alt="background logo" />
      </div>
      <section className={Styles.menuList}>menu list</section>
      <section className={Styles.menuAds}>menu ads</section>
    </div>
  );
}

export default MegaMenu;
