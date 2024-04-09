import { AnimatePresence, motion } from "framer-motion";
import { useGlobalContext } from "../../Context/GlobalContext";
import { megaMenuAnimationStyles, megaMenuBackgroundLogoAnimationStyles } from "../Animation/AnimationStyles";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./MegaMenu.module.css";
import MegaMenuItem from "./MegaMenuItem/MegaMenuItem";
import { useMemo } from "react";

function MegaMenu() {
  const { megaMenuRef } = useGlobalContext();
  const { eventToggles, megaMenuItemData }: any = useGlobalContext();
  const { togglerFunc, megaMenuOpen } = eventToggles;

  const MenuItem = useMemo(() => {
    return megaMenuItemData.map((item: any) => {
      return <MegaMenuItem key={item.id} data={item} />;
    });
  }, [megaMenuItemData]);

  return (
    <motion.div {...megaMenuAnimationStyles} className={Styles.megaMenu} ref={megaMenuRef}>
      <AnimatePresence>
        {megaMenuOpen && (
          <motion.div {...megaMenuBackgroundLogoAnimationStyles} className={Styles.bg__logo}>
            <img src={bgLogo} alt="background logo" />
          </motion.div>
        )}
      </AnimatePresence>
      <section className={Styles.foodCategory}>{MenuItem}</section>
      <section className={Styles.menuAds}>menu ads</section>
      <button className={Styles.menuCloser} onClick={() => togglerFunc("megaMenuOpen", !eventToggles.megaMenuOpen)}>
        <KeyboardArrowUpRoundedIcon />
      </button>
    </motion.div>
  );
}

export default MegaMenu;
