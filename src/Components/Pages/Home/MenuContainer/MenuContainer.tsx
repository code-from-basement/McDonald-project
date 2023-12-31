import Styles from "./MenuContainer.module.css";
import { Outlet } from "react-router-dom";

function MenuContainer() {
  return (
    <div className={Styles.menuContainer}>
      <h2 className={Styles.title}>Menu</h2>
      <Outlet />
    </div>
  );
}

export default MenuContainer;
