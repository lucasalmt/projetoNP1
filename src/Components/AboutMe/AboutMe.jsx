import React from "react";
import styles from "./styles.module.css";

const AboutMe = () => {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <div className={styles.sobremimPai}>
        <div className={styles.sobremimInfo}>
          <h1>Class</h1>
          <p>
            Fundada em Santo André - ABC Paulista, com oito anos de história e
            presente em quase todo o país, a CLASS é reconhecida no mercado, não
            só por oferecer peças esportivas de luxo, mas também por apresentar
            a cultura brasileira como sua verdadeira referência com peças que
            refletem o estilo de vida e improvisação com artigos sofisticados,
            rico em conteúdo histórico e atraente parapúblico jovem. Da cena do
            skate à presença em lojas prestigiadas, a CLASS vem acompanhando o
            crescimento mundial do mercado.
          </p>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
