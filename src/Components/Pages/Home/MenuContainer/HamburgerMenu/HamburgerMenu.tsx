import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import Styles from "./HamburgerMenu.module.css";

function HamburgerMenu() {
  const { menuLists }: any = useGlobalContext();
  const { hamburger } = menuLists;
  return (
    <div className={Styles.hamburgerMenuContainer}>
      <h1 className={Styles.title}>Enjoy of our unique taste's hamburgers!</h1>
      {hamburger.map((item: any) => {
        return <MenuItem key={item._id} item={item} />;
      })}
    </div>
  );
}

export default HamburgerMenu;
