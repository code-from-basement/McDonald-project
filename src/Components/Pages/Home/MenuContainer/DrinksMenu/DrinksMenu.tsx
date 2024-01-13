import { useGlobalContext } from "../../../../Context/GlobalContext";
import Styles from "./DrinksMenu.module.css";

function DrinksMenu() {
  const { menuLists }: any = useGlobalContext();
  const { drinks } = menuLists;

  return (
    <div>
      <h1 className={Styles.drinksMenuContainer}>DrinksMenu</h1>
      {drinks?.map((item: any) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default DrinksMenu;
