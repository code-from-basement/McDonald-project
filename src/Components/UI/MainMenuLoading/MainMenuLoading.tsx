import { motion } from "framer-motion";
import loadingGift from "../../../assets/UI/yrtk-loader.gif";
import Styles from "./MainMenuLoading.module.css";
import { useEffect } from "react";

function MainMenuLoading() {
  useEffect(() => {
    document.getElementById("mainMenuLoadingID")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  }, []);
  return (
    <motion.div id="mainMenuLoadingID" className={Styles.layout} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 1 } }}>
      <img src={loadingGift} alt="loading gif image" />
    </motion.div>
  );
}

export default MainMenuLoading;
