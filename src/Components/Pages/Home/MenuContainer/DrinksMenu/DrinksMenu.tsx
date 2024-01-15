import { useGlobalContext } from "../../../../Context/GlobalContext";
import Styles from "./DrinksMenu.module.css";

function DrinksMenu() {
  const { menuLists }: any = useGlobalContext();
  const { drinks } = menuLists;

  return (
    <div className={Styles.drinksMenuContainer}>
      <h3 className={Styles.title}>DrinksMenu</h3>
      {drinks?.map((item: any) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default DrinksMenu;
