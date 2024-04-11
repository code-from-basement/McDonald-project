import { AnimatePresence } from "framer-motion";
import { useGlobalContext } from "../../../Context/GlobalContext";
import MainMenuLoading from "../../../UI/MainMenuLoading/MainMenuLoading";
import Styles from "./MenuContainer.module.css";
import { Outlet } from "react-router-dom";

function MenuContainer() {
  const { isLoading }: any = useGlobalContext();
  return (
    <div className={Styles.menuContainer} id="menuContainerID">
      <AnimatePresence>{isLoading && <MainMenuLoading />}</AnimatePresence>
      <h2 className={Styles.title}>Menu</h2>
      <Outlet />
    </div>
  );
}

export default MenuContainer;
