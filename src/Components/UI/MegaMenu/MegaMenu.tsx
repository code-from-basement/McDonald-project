import { useGlobalContext } from "../../Context/GlobalContext";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./MegaMenu.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { megaMenuAnimationStyles, megaMenuBackgroundLogoAnimationStyles } from "../Animation/AnimationStyles";

function MegaMenu() {
  const { eventToggles }: any = useGlobalContext();
  const { togglerFunc, megaMenuOpen } = eventToggles;

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
      <button className={Styles.menuCloser} onClick={() => togglerFunc("megaMenuOpen", !eventToggles.megaMenuOpen)}>
        <KeyboardArrowUpRoundedIcon />
      </button>
    </motion.div>
  );
}

export default MegaMenu;
