import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.scss";

const navItems = ['Profile', 'Messages', 'News',  'Music', 'Setting' ]

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                {navItems.map(item => <li>{item}</li>)}
            </ul>
        </nav>
    );
};

export default Navbar;
