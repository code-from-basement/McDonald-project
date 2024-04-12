import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContext";
import { stickyBasketANimationStyles } from "../Animation/AnimationStyles";
import { LocalMallOutlinedIcon } from "../IconsLibrary/IconsLibrary";
import Styles from "./BasketSticky.module.css";

function BasketSticky() {
  const { basketList, setEventToggles } = useGlobalContext();
  // const { isBasketShow } = eventToggles;
  const location = useLocation();
  const isLogin = location.pathname === "/login";

  const onClickStickyBasketHandler = () => {
    document.querySelector("#navbar")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setTimeout(() => {
      setEventToggles((prevData: any) => {
        return { ...prevData, isBasketShow: true };
      });
    }, 1000);
  };

  if (isLogin) return null;

  return (
    <motion.div onClick={onClickStickyBasketHandler} {...stickyBasketANimationStyles} className={Styles.basketSticky}>
      <LocalMallOutlinedIcon />
      <div className={Styles.divider}>&nbsp;</div>
      <h2>{basketList.length}</h2>
    </motion.div>
  );
}

export default BasketSticky;
