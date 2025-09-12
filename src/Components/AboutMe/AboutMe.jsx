import React from 'react';
import styles from './styles.module.css';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className={styles.sobremimPai}>
        <div className={styles.sobremimInfo}>
          <h1>Hey, meu nome é Travis Scott</h1>
          <p>
            Sou Jacques Berman Webster II, o Travis Scott, rapper e produtor
            de Houston. Minha música mistura trap com psicodélica, criando
            experiências únicas no estúdio e no palco. Com álbuns como Rodeo e
            ASTROWORLD, busco sempre expandir os limites do hip-hop. Além da
            música, também me envolvo com moda e design, criando algo
            autêntico e impactante. A conexão com meus fãs é o que impulsiona
            meu trabalho, tornando cada show e lançamento especial.
          </p>

          <div className={styles.sobremimBotoes}>
            <a href="#" rel="noreferrer">
              <button className={styles.sobremimBtn}>Projetos</button>
            </a>

            <a href="#" rel="noreferrer">
              <button className={`${styles.sobremimBtn} ${styles.sobremimBotoes2}`}>LinkedIn</button>
            </a>
          </div>
        </div>

        <div className={styles.sobremimImagem}>
          <div className={styles.circulo}></div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
