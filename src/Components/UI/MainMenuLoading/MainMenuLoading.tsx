import React from "react";
import Styles from "./MainMenuLoading.module.css";
import loadingGift from "../../../assets/UI/yrtk-loader.gif";

function MainMenuLoading() {
  return (
    <div className={Styles.layout}>
      <img src={loadingGift} alt="loading gif image" />
    </div>
  );
}

export default MainMenuLoading;
