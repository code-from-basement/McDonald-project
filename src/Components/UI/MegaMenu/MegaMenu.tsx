import { useGlobalContext } from "../../Context/GlobalContext";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./MegaMenu.module.css";
import { motion } from "framer-motion";
import { megaMenuAnimationStyles } from "../Animation/AnimationStyles";

function MegaMenu() {
  const { megaMenuToggler } = useGlobalContext();

  const onClickMegaMenuToggler = () => {
    megaMenuToggler();
  };

  return (
    <motion.div {...megaMenuAnimationStyles} className={Styles.megaMenu}>
      <div className={Styles.bg__logo}>
        <img src={bgLogo} alt="background logo" />
      </div>
      <section className={Styles.foodCategory}>food categories</section>
      <section className={Styles.menuAds}>menu ads</section>
      <button className={Styles.menuCloser} onClick={onClickMegaMenuToggler}>
        <KeyboardArrowUpRoundedIcon />
      </button>
    </motion.div>
  );
}

export default MegaMenu;
