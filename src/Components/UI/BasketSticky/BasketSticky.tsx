import { motion } from "framer-motion";
import { stickyBasketANimationStyles } from "../Animation/AnimationStyles";
import { LocalMallOutlinedIcon } from "../IconsLibrary/IconsLibrary";
import Styles from "./BasketSticky.module.css";
import { useGlobalContext } from "../../Context/GlobalContext";
import { useLocation } from "react-router-dom";

function BasketSticky() {
  const { basketList } = useGlobalContext();
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  if (isLogin) return null;

  return (
    <motion.div {...stickyBasketANimationStyles} className={Styles.basketSticky}>
      <LocalMallOutlinedIcon />
      <div className={Styles.divider}>&nbsp;</div>
      <h2>{basketList.length}</h2>
    </motion.div>
  );
}

export default BasketSticky;
