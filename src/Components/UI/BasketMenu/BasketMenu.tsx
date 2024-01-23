import { motion } from "framer-motion";
import { useGlobalContext } from "../../Context/GlobalContext";
import { basketMenuAnimationStyles } from "../Animation/AnimationStyles";
import { NavigateNextRoundedIcon } from "../IconsLibrary/IconsLibrary";
import Styles from "./BasketMenu.module.css";
import EmptyCart from "./EmptyCart/EmptyCart";

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
