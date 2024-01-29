import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../../Context/GlobalContext";
import { megaMenuAnimationStyles, megaMenuBackgroundLogoAnimationStyles } from "../Animation/AnimationStyles";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./MegaMenu.module.css";
import MegaMenuItem from "./MegaMenuItem/MegaMenuItem";

function MegaMenu() {
  const { eventToggles, megaMenuItemData }: any = useGlobalContext();
  const { togglerFunc, megaMenuOpen } = eventToggles;

  const megaMenuListItem = () => {
    return megaMenuItemData.map((item) => {
      return <MegaMenuItem key={item.id} data={item} />;
    });
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
      <section className={Styles.foodCategory}>{megaMenuListItem()}</section>
      <section className={Styles.menuAds}>menu ads</section>
      <button className={Styles.menuCloser} onClick={() => togglerFunc("megaMenuOpen", !eventToggles.megaMenuOpen)}>
        <KeyboardArrowUpRoundedIcon />
      </button>
    </motion.div>
  );
}

export default MegaMenu;
