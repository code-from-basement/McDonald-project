import React from "react";
import Styles from "./DipsMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";

function DipsMenu() {
  const { menuLists }: any = useGlobalContext();
  const { dips } = menuLists;

  return (
    <div className={Styles.dipsMenuContainer}>
      <h3 className={Styles.title}>Let boost our taste in you mouth!</h3>
      {dips?.map((item: any) => {
        return <MenuItem key={item._id} item={item} />;
      })}
    </div>
  );
}

export default DipsMenu;
