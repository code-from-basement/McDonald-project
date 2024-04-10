import { AnimatePresence, motion } from "framer-motion";
import { memo, useEffect, useMemo } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import { megaMenuAnimationStyles, megaMenuBackgroundLogoAnimationStyles } from "../Animation/AnimationStyles";
import bgLogo from "./../../../assets/Image/logo/macLogo-mid-size.png";
import { KeyboardArrowUpRoundedIcon } from "./../../UI/IconsLibrary/IconsLibrary";
import Styles from "./MegaMenu.module.css";
import MegaMenuItem from "./MegaMenuItem/MegaMenuItem";
import macIcon from "./../../../assets/Image/logo/macLogo-mid-size.png";

function MegaMenu() {
  const { megaMenuRef } = useGlobalContext();
  const { eventToggles, megaMenuItemData, fullMenuListData }: any = useGlobalContext();
  const { togglerFunc, megaMenuOpen } = eventToggles;

  const MenuItem = useMemo(() => {
    return megaMenuItemData?.map((item: any) => {
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
