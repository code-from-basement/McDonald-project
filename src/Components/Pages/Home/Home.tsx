import React from "react";

import Styles from "./Home.module.css";
import Header from "./Header/Header";
import HomeMenuList from "./HomeMenuList/HomeMenuList";
import MenuContainer from "./MenuContainer/MenuContainer";
import FQA from "./FQA/FQA";
import { useGlobalContext } from "../../Context/GlobalContext";

const LoadingDemo = () => {
  return (
    <div>
      <h1>loading...</h1>
    </div>
  );
};

function Home() {
  const { isLoading } = useGlobalContext() as { isLoading: boolean };

  return (
    <div className={Styles.home}>
      {isLoading && <LoadingDemo />}
      <Header />
      <HomeMenuList />
      <MenuContainer />
      <FQA />
    </div>
  );
}

export default Home;
