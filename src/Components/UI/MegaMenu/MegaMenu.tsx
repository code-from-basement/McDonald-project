import { useGlobalContext } from "../../Context/GlobalContext";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./MegaMenu.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { megaMenuAnimationStyles, megaMenuBackgroundLogoAnimationStyles } from "../Animation/AnimationStyles";

function MegaMenu() {
  const { megaMenuToggler, megaMenuOpen } = useGlobalContext();

  const onClickMegaMenuToggler = () => {
    megaMenuToggler();
  };

  return (
    <motion.div {...megaMenuAnimationStyles} className={Styles.megaMenu}>
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div {...megaMenuBackgroundLogoAnimationStyles} className={Styles.bg__logo}>
            <img src={bgLogo} alt="background logo" />
          </motion.div>
        )}
      </AnimatePresence>
      <section className={Styles.foodCategory}>food categories</section>
      <section className={Styles.menuAds}>menu ads</section>
      <button className={Styles.menuCloser} onClick={onClickMegaMenuToggler}>
        <KeyboardArrowUpRoundedIcon />
      </button>
    </motion.div>
  );
}

export default MegaMenu;
