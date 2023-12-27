import { useGlobalContext } from "../../../../Context/GlobalContext";
import Styles from "./AllMenu.module.css";
function AllMenu() {
  const { fullMenuListData }: any = useGlobalContext();
  return (
    <div className={Styles.allMenuContainer}>
      <h1>AllMenu</h1>
      {fullMenuListData?.map((item) => {
        return <h2>{item.title}</h2>;
      })}
    </div>
  );
}

export default AllMenu;
