import { AnimatePresence, motion } from "framer-motion";
import { emptyCartContentsAnimationStyles } from "../../Animation/AnimationStyles";
import emptyCartImage from "./../../../../assets/Image/BasketMenu/fast-food-isometric-50951.png";
import Styles from "./EmptyCart.module.css";
function EmptyCart() {
  return (
    <AnimatePresence>
      <motion.div {...emptyCartContentsAnimationStyles} className={Styles.emptyCart}>
        <img className={Styles.emptyCartImage} src={emptyCartImage} alt="imag eof empty basket" />
        <h2 className={Styles.title}>It is time to order some food!</h2>
        <p className={Styles.description}>Add some of our bulgur to your cart, let's eat to gether with family and friends</p>
      </motion.div>
    </AnimatePresence>
  );
}

export default EmptyCart;
