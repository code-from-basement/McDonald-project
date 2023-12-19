import React from "react";
import Styles from "./BasketMenu.module.css";
import { motion } from "framer-motion";
import { basketMenuAnimationStyles } from "../Animation/AnimationStyles";
import { NavigateNextRoundedIcon } from "../IconsLibrary/IconsLibrary";
import EmptyCart from "./EmptyCart/EmptyCart";
import { useGlobalContext } from "../../Context/GlobalContext";
function BasketMenu() {
  const { eventToggles } = useGlobalContext();
  const { togglerFunc, isBasketEmpty } = eventToggles;
  return (
    <motion.div {...basketMenuAnimationStyles} className={Styles.basketMenu}>
      <button onClick={() => togglerFunc("isBasketShow", !eventToggles.isBasketShow)} className={Styles.btn__close}>
        <NavigateNextRoundedIcon />
      </button>
      <h2 className={Styles.basketMenu__title}>Order List:</h2>
      {isBasketEmpty && <EmptyCart />}
    </motion.div>
  );
}

export default BasketMenu;
