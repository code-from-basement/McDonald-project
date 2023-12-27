import React from "react";
import Styles from "./DrinksMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function DrinksMenu() {
  const { menuLists }: any = useGlobalContext();
  const { drinks } = menuLists;
  return (
    <div>
      <h1 className={Styles.drinksMenuContainer}>DrinksMenu</h1>
      {drinks?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default DrinksMenu;
