import React from 'react';
import styles from './NavBar.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                Ben Winans
            </div>
            <ul className={styles.navList}>
                <li className={styles.navItem}><a href="#home">Home</a></li>
                <li className={styles.navItem}><a href="#about">About</a></li>
                <li className={styles.navItem}><a href="#portfolio">Portfolio</a></li>
                <li className={styles.navItem}><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;