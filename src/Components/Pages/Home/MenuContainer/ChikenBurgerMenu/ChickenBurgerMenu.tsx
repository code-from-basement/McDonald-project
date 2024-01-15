import React from "react";
import Styles from "./ChickenBurgerMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function ChickenBurgerMenu() {
  const { menuLists }: any = useGlobalContext();
  const { chickenAndFish } = menuLists;
  return (
    <div className={Styles.chickenBurgerMenuContainer}>
      <h3 className={Styles.title}>ChickenBurgerMenu</h3>
      {chickenAndFish?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default ChickenBurgerMenu;
