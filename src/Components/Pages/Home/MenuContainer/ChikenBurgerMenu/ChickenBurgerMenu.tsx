import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import Styles from "./ChickenBurgerMenu.module.css";

function ChickenBurgerMenu() {
  const { menuLists }: any = useGlobalContext();
  const { chickenAndFish } = menuLists;
  return (
    <div className={Styles.chickenBurgerMenuContainer}>
      <h3 className={Styles.title}>Taste of crunchy of our chicken!</h3>
      {chickenAndFish?.map((item: any) => {
        return <MenuItem key={item._id} item={item} />;
      })}
    </div>
  );
}

export default ChickenBurgerMenu;
