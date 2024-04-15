import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../../../Context/GlobalContext";
import MainMenuLoading from "../../../UI/MainMenuLoading/MainMenuLoading";
import Styles from "./MenuContainer.module.css";

function MenuContainer() {
  const { isLoading, fullMenuListData }: any = useGlobalContext();

  return (
    <div className={Styles.menuContainer} id="menuContainerID">
      <AnimatePresence>{isLoading && fullMenuListData && <MainMenuLoading />}</AnimatePresence>
      <h2 className={Styles.title}>Menu</h2>
      <Outlet />
    </div>
  );
}

export default MenuContainer;
