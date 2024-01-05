import { useGlobalContext } from "../../../../Context/GlobalContext";
import Styles from "./AllMenu.module.css";
function AllMenu() {
  const { fullMenuListData }: any = useGlobalContext();
  return (
    <div className={Styles.allMenuContainer}>
      <h3 className={Styles.title}>All menu</h3>
      {fullMenuListData?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default AllMenu;
