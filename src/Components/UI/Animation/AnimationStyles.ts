import { motion } from "framer-motion";

/**Mega Menu Animation Styles */
export const megaMenuAnimationStyles = {
  key: "megaMenu",
  initial: { y: "-100%" },
  animate: { y: 0, transition: { duration: 0.4, ease: "easeInOut", bounce: 20 } },
  exit: { y: "-100%", transition: { delay: 0.2, duration: 0.4, ease: "easeInOut" } },
};
//

export const megaMenuBackgroundLogoAnimationStyles = {
  key: "backgroundLogo",
  initial: { y: "-100%" },
  animate: { y: 0, transition: { delay: 0.2 } },
  exit: { y: "300%", transition: { duration: 2 } },
};
