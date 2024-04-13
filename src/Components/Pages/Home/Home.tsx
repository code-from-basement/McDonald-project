import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import FQA from "./FQA/FQA";
import Header from "./Header/Header";
import Styles from "./Home.module.css";
import HomeMenuList from "./HomeMenuList/HomeMenuList";
import MenuContainer from "./MenuContainer/MenuContainer";

function Home() {
  const pathName = useLocation();
  console.log(pathName);

  useEffect(() => {
    const reloadFunc = () => {
      console.log("-----------------------------");
      pathName.pathname == "/";
      // window.location.reload();
    };

    window.addEventListener("beforeunload", reloadFunc);
    return () => {
      window.removeEventListener("beforeunload", reloadFunc);
    };
  }, []);

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
