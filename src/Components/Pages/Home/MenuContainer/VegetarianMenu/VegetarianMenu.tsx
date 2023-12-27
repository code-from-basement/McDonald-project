import React from "react";
import Styles from "./VegetarianMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function VegetarianMenu() {
  const { menuLists }: any = useGlobalContext();
  const { vegetarian } = menuLists;
  return (
    <div>
      <h1 className={Styles.vegetarianMenuContainer}>VegetarianMenu</h1>
      {vegetarian?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default VegetarianMenu;
