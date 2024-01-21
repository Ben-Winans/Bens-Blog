import React, { useState } from 'react';
import styles from './NavBar.module.css';
import hamburgerMenuIcon from '../assets/hamburger_menu.svg';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                Ben Winans
            </div>
            <ul className={`${styles.navList} ${isMenuOpen ? styles.show : ''}`}>
                <li className={styles.navItem}><a href="#about">About</a></li>
                <li className={styles.navItem}><a href="#skills">Skills</a></li>
                <li className={styles.navItem}><a href="#projects">Projects</a></li>
                <li className={styles.navItem}><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <img src={hamburgerMenuIcon} alt="Menu" />
            </div>
        </nav>
    );
};

export default NavBar;


