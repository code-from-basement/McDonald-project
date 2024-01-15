import React from "react";
import Styles from "./SnacksMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";

function SnacksMenu() {
  const { menuLists }: any = useGlobalContext();
  const { snackAndSides } = menuLists;
  return (
    <div className={Styles.snacksMenuContainer}>
      <h3 className={Styles.title}>let's get some sides!</h3>
      {snackAndSides?.map((item: any) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default SnacksMenu;
