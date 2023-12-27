import React from "react";
import Styles from "./BreakfastMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function BreakfastMenu() {
  const { menuLists }: any = useGlobalContext();
  const { breakfast } = menuLists;
  return (
    <div className={Styles.breakfastMenuContainer}>
      <h1>BreakfastMenu</h1>
      {breakfast?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default BreakfastMenu;
