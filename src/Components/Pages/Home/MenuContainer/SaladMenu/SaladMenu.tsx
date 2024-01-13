import React from "react";
import Styles from "./SaladMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";

function SaladMenu() {
  const { menuLists }: any = useGlobalContext();
  const { salad } = menuLists;
  return (
    <div>
      <h1 className={Styles.saladMenuContainer}>SaladMenu</h1>
      {salad?.map((item: any) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default SaladMenu;
