import Styles from "./Header.module.css";
import React from "react";

function Header() {
  return (
    <div className={Styles.header}>
      <section className={Styles.banner}>Banner</section>
    </div>
  );
}

export default Header;
