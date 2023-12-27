import Styles from "./MenuContainer.module.css";
import { Outlet } from "react-router-dom";

function MenuContainer() {
  return (
    <div className={Styles.menuContainer}>
      <h2>menu</h2>
      <Outlet />
    </div>
  );
}

export default MenuContainer;
