import React from "react";
import Styles from "./MenuContainer.module.css";
import { useGlobalContext } from "../../../Context/GlobalContext";

function MenuContainer() {
  return <div className={Styles.menuContainer}></div>;
}

export default MenuContainer;
