import React from "react";
import Styles from "./MenuContainer.module.css";
import { useGlobalContext } from "../../../Context/GlobalContext";

function MenuContainer() {
  const { fullMenuListData } = useGlobalContext();
  return (
    <div className={Styles.menuContainer}>
      {fullMenuListData?.map((item, i) => (
        <div key={i} style={{ border: "1px solid", width: "min-content" }}>
          <h5>{item.title}</h5>
          <img style={{ width: "100px", height: "auto" }} src={item.url} alt="pic" />
        </div>
      ))}
    </div>
  );
}

export default MenuContainer;
