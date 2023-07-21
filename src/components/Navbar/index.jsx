import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li className={styles.item}>
                    Profile
                </li>
                <li className={styles.item}>
                    Messages
                </li>
                <li>
                    News
                </li>
                <li>
                    Music
                </li>
                <li>
                    Setting
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
