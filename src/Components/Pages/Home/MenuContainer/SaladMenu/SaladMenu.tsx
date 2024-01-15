import React from "react";
import Styles from "./SaladMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";

function SaladMenu() {
  const { menuLists }: any = useGlobalContext();
  const { salad } = menuLists;
  return (
    <div className={Styles.saladMenuContainer}>
      <h3 className={Styles.title}>Taste and freshness of nature!</h3>
      {salad?.map((item: any) => {
        return <MenuItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default SaladMenu;
