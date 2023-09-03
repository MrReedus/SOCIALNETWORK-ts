import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.scss";

const navItems = ['Profile', 'Dialogs', 'Messages', 'News',  'Music', 'Setting' ]

const Navbar = () => {
    return (
        <nav className={styles.nav}>1
            <ul>
                {navItems.map(item =>
                    <NavLink to={`/${item.toLowerCase()}`}> <li>{item}</li></NavLink>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
