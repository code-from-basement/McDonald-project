import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import Styles from "./DrinksMenu.module.css";

function DrinksMenu() {
  const { menuLists }: any = useGlobalContext();
  const { drinks } = menuLists;

  return (
    <div className={Styles.drinksMenuContainer}>
      <h3 className={Styles.title}>Fresh and cold drinks for you!</h3>
      {drinks?.map((item: any) => {
        return <MenuItem key={item._id} item={item} />;
      })}
    </div>
  );
}

export default DrinksMenu;
