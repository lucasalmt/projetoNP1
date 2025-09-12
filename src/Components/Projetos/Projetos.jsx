import React from 'react';
import styles from './styles.module.css';

const projetosData = [
  {
    titulo: "Álbuns",
    descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "#",
    imagem: "/cat.jpeg",
  },
  {
    titulo: "Cactus Jack",
    descricao: "Fundar a Cactus Jack Records foi mais do que criar uma gravadora — foi abrir espaço para novos artistas.",
    link: "#",
    imagem: "/cat.jpeg",
  },
  {
    titulo: "Minhas Colaborações",
    descricao: "Trabalhei com marcas como Nike, Dior e McDonald's, criando produtos que refletem meu estilo e identidade.",
    link: "#",
    imagem: "/cat.jpeg",
  },
];

const Projetos = () => {
  return (
    <section className={styles.projetos}>
      <h1>Projetos</h1>

      {projetosData.map((projeto, index) => (
        <div key={index} className={styles.projetosPai}>
          <div className={styles.projetosAlbuns}>
            <h2>{projeto.titulo}</h2>
            <p>{projeto.descricao}</p>
            <div className={styles.projetosBotao}>
              <a href={projeto.link} target="_blank" rel="noopener noreferrer">
                <button className={styles.sobremimBtn}>Ver projetos</button>
              </a>
            </div>
          </div>

          <div className={styles.projetosImagem}>
            <img 
              src={projeto.imagem} 
              alt={projeto.titulo} 
              className={styles.imagemProjetos} 
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projetos;
