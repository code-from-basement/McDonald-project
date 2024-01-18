import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Styles from "./MainMenuLoading.module.css";
import loadingGift from "../../../assets/UI/yrtk-loader.gif";

function MainMenuLoading() {
  return (
    <motion.div className={Styles.layout} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <img src={loadingGift} alt="loading gif image" />
    </motion.div>
  );
}

export default MainMenuLoading;
