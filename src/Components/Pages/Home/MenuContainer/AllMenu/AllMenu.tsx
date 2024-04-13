import { useGlobalContext } from "../../../../Context/GlobalContext";
import MenuItem from "../../../../UI/MenuItem/MenuItem";
import Styles from "./AllMenu.module.css";
function AllMenu() {
  const { fullMenuListData }: any = useGlobalContext();

  return (
    <div className={Styles.allMenuContainer}>
      <h3 className={Styles.title}>All menu</h3>
      {fullMenuListData?.map((item: any) => {
        return <MenuItem key={item._id} item={item} />;
      })}
    </div>
  );
}

export default AllMenu;
