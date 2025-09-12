import React from 'react';
import styles from './styles.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Travis Scott</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#about-me" className={styles.navLink}>Sobre</a>
          </li>
          <li>
            <a href="#projetos" className={styles.navLink}>Projetos</a>
          </li>
          <li>
            <a href="#login" className={styles.navLink}>Login</a>
          </li>
        </ul>
      </nav> 
    </header>
  );
};

export default Header;
