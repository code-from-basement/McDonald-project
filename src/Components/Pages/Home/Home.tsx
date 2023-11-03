import React from "react";

import Styles from "./Home.module.css";
import Header from "./Header/Header";
import HomeMenuList from "./HomeMenuList/HomeMenuList";
import MenuContainer from "./MenuContainer/MenuContainer";
import FQA from "./FQA/FQA";

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
