import React from "react";
import styles from "./styles.module.css";
import Home from '../../assets/icons/home.svg';
import Profile from '../../assets/icons/profile.svg';
import Cart from '../../assets/icons/cart.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.leftIcons}>
        <img src={Home} alt="Home" />
        <img src={Profile} alt="Cadastro" />
        <img src={Cart} alt="Carrinho" />
      </div>
      <h1 className={styles.title}>CLASS</h1>
      <nav>
        <ul className={styles.navList}>
          <li>
            <a href="#about-me" className={styles.navLink}>
              SOBRE
            </a>
          </li>
          <li>
            <a href="#projetos" className={styles.navLink}>
              PROJETOS
            </a>
          </li>
          <li>
            <a href="#login" className={styles.navLink}>
              LOGIN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
