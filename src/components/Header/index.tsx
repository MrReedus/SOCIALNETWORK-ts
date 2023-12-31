import React from "react";
import styles from "./Header.module.scss";
import logo from "../../img/header-logotype.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
    </header>
  );
};

export default Header;
