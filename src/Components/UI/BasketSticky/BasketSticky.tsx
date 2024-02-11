import React from "react";
import Styles from "./BasketSticky.module.css";
import { motion } from "framer-motion";
import { stickyBasketANimationStyles } from "../Animation/AnimationStyles";

function BasketSticky() {
  return (
    <motion.div {...stickyBasketANimationStyles} className={Styles.basketSticky}>
      BasketSticky
    </motion.div>
  );
}

export default BasketSticky;
