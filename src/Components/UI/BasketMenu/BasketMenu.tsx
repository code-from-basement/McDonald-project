import React from "react";
import Styles from "./BasketMenu.module.css";
import { motion } from "framer-motion";
import { basketMenuAnimationStyles } from "../Animation/AnimationStyles";
function BasketMenu() {
  return (
    <motion.div {...basketMenuAnimationStyles} className={Styles.basketMenu}>
      BasketMenu
    </motion.div>
  );
}

export default BasketMenu;
