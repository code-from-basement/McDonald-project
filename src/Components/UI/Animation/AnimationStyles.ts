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
  initial: { x: "100%" },
  animate: { x: "0%", transition: { duration: 0.5, ease: "easeInOut", bounce: 10 } },
  exit: { x: "100%", transition: { delay: 0.2, duration: 0.3, ease: "easeInOut" } },
};

export const emptyCartContentsAnimationStyles = {
  key: "basketMenu",
  initial: { y: "-2%", opacity: 0 },
  animate: { y: "0%", opacity: 1, transition: { delay: 0.3, duration: 1, ease: "easeInOut" } },
  exit: { y: "2%", opacity: 0, transition: { duration: 0.1, ease: "easeInOut" } },
};

export const stickyBasketANimationStyles = {
  key: "stickyBasket",
  initial: { x: "200%" },
  animate: { x: "0%", transition: { delay: 0.2, duration: 0.5, ease: "easeInOut" } },
  exit: { x: "300%", transition: { duration: 0.5, ease: "easeInOut" } },
};

export const floatImgAnimationStyle = {
  key: "floatImg",
  initial: { y: 100, opacity: 0 },
  whileInView: { y: -10, opacity: 1, transition: { duration: 1.3 } },
  viewport: { once: true },
};

export const animationTitleEffect = {
  key: "titleEffect",
  initial: { y: 120 },
  whileInView: { y: -15, transition: { duration: 1.8, type: "spring", bounce: 0.5 } },
  viewport: { once: true },
};

export const bannerOpacityMotion = {
  key: "bannerOpacity",
  initial: { y: 80, opacity: 0 },
  whileInView: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
  viewport: { once: true },
};

export const animateFadeIn = {
  key: "fadeIn",
  initial: { opacity: 0 },
  whileInView: { opacity: 1, transition: { delay: 0.1, duration: 1.2, ease: "easeInOut" } },
  viewport: { once: true },
};

export const animateBackground = {
  key: "background",
  initial: { y: 100, opacity: 1, backgroundColor: "#008000" },
  whileInView: { y: 0, transition: { ease: "linear", duration: 2, x: { duration: 1 } } },
  viewport: { once: true },
};

export const animationOpacity1 = {
  key: "redirectionModal1",
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.4 } },
};

export const animationOpacity2 = {
  key: "redirectionModal2",
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2, delay: 0.4 } },
};

export const animationOpacity3 = {
  key: "redirectionModal3",
  initial: { y: 200, Opacity: 0 },
  animate: { y: 50, opacity: 0.5, transition: { duration: 0.6, delay: 0.2 } },
  exit: { y: 300, Opacity: 0, transition: { duration: 0.3 } },
};

export const introPageMessageAnimation = {
  key: "introPageMessage",
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.5 } },
  exit: { opacity: 0, transition: { duration: 2 } },
};
