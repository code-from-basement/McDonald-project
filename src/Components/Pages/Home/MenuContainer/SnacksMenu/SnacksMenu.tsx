import React from "react";
import Styles from "./SnacksMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function SnacksMenu() {
  const { menuLists }: any = useGlobalContext();
  const { snackAndSides } = menuLists;
  return (
    <div className={Styles.snacksMenuContainer}>
      <h3 className={Styles.title}>SnacksMenu</h3>
      {snackAndSides?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default SnacksMenu;
