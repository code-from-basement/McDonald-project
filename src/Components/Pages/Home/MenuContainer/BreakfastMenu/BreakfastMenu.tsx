import React from "react";
import Styles from "./BreakfastMenu.module.css";
import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";

function BreakfastMenu() {
  const { menuLists }: any = useGlobalContext();
  const { breakfast } = menuLists;
  console.log("render breakfast");
  return (
    <div className={Styles.breakfastMenuContainer}>
      <h3 className={Styles.title}>Let get something to start Beautiful day!</h3>
      {breakfast?.map((item: any) => {
        return <MenuItem key={item._id} item={item} />;
      })}
    </div>
  );
}

export default BreakfastMenu;
