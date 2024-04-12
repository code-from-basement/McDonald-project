import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import Styles from "./BreakfastMenu.module.css";

function BreakfastMenu() {
  const { menuLists }: any = useGlobalContext();
  const { breakfast } = menuLists;

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
