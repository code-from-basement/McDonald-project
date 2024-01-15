import React from "react";
import Styles from "./DipsMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function DipsMenu() {
  const { menuLists } = useGlobalContext();
  const { dips } = menuLists;
  return (
    <div className={Styles.dipsMenuContainer}>
      <h3 className={Styles.title}>dips menu</h3>
      {dips?.map((item) => {
        return <h2 key={item.id}>{item.title}</h2>;
      })}
    </div>
  );
}

export default DipsMenu;
