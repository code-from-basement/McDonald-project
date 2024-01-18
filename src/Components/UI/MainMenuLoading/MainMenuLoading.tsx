import { motion } from "framer-motion";
import loadingGift from "../../../assets/UI/yrtk-loader.gif";
import Styles from "./MainMenuLoading.module.css";

function MainMenuLoading() {
  return (
    <motion.div className={Styles.layout} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { delay: 1 } }}>
      <img src={loadingGift} alt="loading gif image" />
    </motion.div>
  );
}

export default MainMenuLoading;
