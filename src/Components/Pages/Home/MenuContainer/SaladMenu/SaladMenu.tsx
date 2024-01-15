import React from "react";
import Styles from "./SaladMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function SaladMenu() {
  const { menuLists }: any = useGlobalContext();
  const { salad } = menuLists;
  return (
    <div className={Styles.saladMenuContainer}>
      <h3 className={Styles.title}>SaladMenu</h3>
      {salad?.map((item: any) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default SaladMenu;
