import React from "react";
import Styles from "./ChickenBurgerMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";

function ChickenBurgerMenu() {
  const { menuLists }: any = useGlobalContext();
  const { chickenAndFish } = menuLists;
  return (
    <div className={Styles.chickenBurgerMenuContainer}>
      <h3 className={Styles.title}>Taste of crunchy of our chicken!</h3>
      {chickenAndFish?.map((item: any) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default ChickenBurgerMenu;
