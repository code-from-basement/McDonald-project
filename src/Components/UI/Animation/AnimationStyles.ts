import { motion } from "framer-motion";

/**Mega Menu Animation Styles */
export const megaMenuAnimationStyles = {
  key: "megaMenu",
  initial: { y: "-100%" },
  animate: { y: 0, transition: { duration: 0.4, ease: "easeInOut", bounce: 20 } },
  exit: { y: "-100%", transition: { delay: 0.3, duration: 0.4, ease: "easeInOut" } },
};
//

export const megaMenuBackgroundLogoAnimationStyles = {
  key: "backgroundLogo",
  initial: { y: "-100%" },
  animate: { y: 0, transition: { delay: 0.2 } },
  exit: { y: "100%", transition: { delay: 0.1, duration: 1.2 } },
};

export const basketMenuAnimationStyles = {
  key: "megaMenu",
  initial: { x: "120%" },
  animate: { x: "0%", transition: { duration: 1, ease: "easeInOut", bounce: 10 } },
  exit: { x: "120%", transition: { delay: 0.1, duration: 0.8, ease: "easeInOut" } },
};
