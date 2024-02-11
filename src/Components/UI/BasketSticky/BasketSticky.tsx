import { motion } from "framer-motion";
import { stickyBasketANimationStyles } from "../Animation/AnimationStyles";
import { LocalMallOutlinedIcon } from "../IconsLibrary/IconsLibrary";
import Styles from "./BasketSticky.module.css";
import { useGlobalContext } from "../../Context/GlobalContext";

function BasketSticky() {
  const { basketList } = useGlobalContext();
  return (
    <motion.div {...stickyBasketANimationStyles} className={Styles.basketSticky}>
      <LocalMallOutlinedIcon />
      <div className={Styles.divider}>&nbsp;</div>
      <h2>{basketList.length}</h2>
    </motion.div>
  );
}

export default BasketSticky;
