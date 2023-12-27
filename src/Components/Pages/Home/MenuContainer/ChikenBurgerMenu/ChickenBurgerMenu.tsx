import React from "react";
import Styles from "./ChickenBurgerMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function ChickenBurgerMenu() {
  const { menuLists }: any = useGlobalContext();
  const { chickenAndFish } = menuLists;
  return (
    <div>
      <h1 className={Styles.chickenBurgerMenuContainer}>ChickenBurgerMenu</h1>
      {chickenAndFish?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default ChickenBurgerMenu;
