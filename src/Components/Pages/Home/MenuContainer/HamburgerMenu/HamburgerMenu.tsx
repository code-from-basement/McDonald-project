import React from "react";
import Styles from "./HamburgerMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function HamburgerMenu() {
  const { menuLists }: any = useGlobalContext();
  const { hamburger } = menuLists;
  return (
    <div className={Styles.hamburgerMenuContainer}>
      <h1>HamburgerMenu</h1>
      {hamburger?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default HamburgerMenu;
