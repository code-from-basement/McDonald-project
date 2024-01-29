import React from "react";
import Styles from "./MegaMenuItem.module.css";
import { NavLink } from "react-router-dom";

function MegaMenuItem({ data }) {
  return (
    <NavLink to={``} className={Styles.megaMenuItem}>
      <h2 className={Styles.title}>{data.title}</h2>
      <h2 className={Styles.description}></h2>
      <img className={Styles.itemImage} src={data.image} alt={data.title} />
    </NavLink>
  );
}

export default MegaMenuItem;
