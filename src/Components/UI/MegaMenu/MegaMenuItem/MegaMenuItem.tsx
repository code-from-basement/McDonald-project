import { NavLink } from "react-router-dom";
import Styles from "./MegaMenuItem.module.css";

function MegaMenuItem({ data }: any) {
  return (
    <NavLink to={``} className={Styles.megaMenuItem}>
      <h2 className={Styles.title}>{data.title}</h2>
      <h2 className={Styles.description}></h2>
      <img className={Styles.itemImage} src={""} alt={data.title} />
    </NavLink>
  );
}

export default MegaMenuItem;
