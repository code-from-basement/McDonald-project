import React from "react";
import Styles from "./DipsMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function DipsMenu() {
  const { menuLists } = useGlobalContext();
  const { dips } = menuLists;
  return (
    <div className={Styles.dipsMenuContainer}>
      <h1>dips menu</h1>
      {dips?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default DipsMenu;
