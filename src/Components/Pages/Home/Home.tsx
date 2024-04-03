import { useGlobalContext } from "../../Context/GlobalContext";
import FQA from "./FQA/FQA";
import Header from "./Header/Header";
import Styles from "./Home.module.css";
import HomeMenuList from "./HomeMenuList/HomeMenuList";
import MenuContainer from "./MenuContainer/MenuContainer";

function Home() {
  return (
    <div className={Styles.home}>
      <Header />
      <HomeMenuList />
      <MenuContainer />
      <FQA />
    </div>
  );
}

export default Home;
