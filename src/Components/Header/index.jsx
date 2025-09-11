import React from 'react';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} container`}>
        <a href="#" className={styles.nav__logo}>
          Shop.
        </a>

        <div className={styles.nav__menu} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="#home" className={`${styles.nav__link} scroll-active`}>
                <i className="ri-home-line"></i>
                <span>Home</span>
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#new" className={styles.nav__link}>
                <i className="ri-price-tag-3-line"></i>
                <span>New</span>
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#collection" className={styles.nav__link}>
                <i className="ri-compass-line"></i>
                <span>Collection</span>
              </a>
            </li>
            <li className={styles.nav__item}>
              <a href="#products" className={styles.nav__link}>
                <i className="ri-t-shirt-line"></i>
                <span>Products</span>
              </a>
            </li>
          </ul>
        </div>

        <i className="ri-moon-line change-theme" id="theme-button"></i>
      </nav>
    </header>
  );
};

export default Header;
