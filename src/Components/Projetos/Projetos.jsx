import React from "react";
import styles from "./styles.module.css";

const projetosData = [
  {
    titulo: "CLASS x GUADALUPE - LOOKBOOK",
    descricao:
      "Para comemorar a amizade de longa data, CLASS e Guadalupe se uniram em uma colaboração inédita que celebra o movimento operário latino-americano. \n\n A coleção cápsula de quatro peças, busca romper com os estereótipos impostos pelo culturalismo global, misturando os avanços tecnológicos que vivemos com a identidade cultural latina. \n\n  Re-imaginamos matérias primas que normalmente são utilizadas para o design de calçados e criamos peças de vestuário que misturam qualidade e autenticidade, numa ode a história de ambas as marcas.",
    link: "www.instagram.com/class___official/",
    imagem: "/Projeto1.jpg",
  },
  {
    titulo: "CLASS FALL '25 DROP1 - LOOKBOOK",
    descricao:
      "Para a estação de outono de 2025, a CLASS apresenta uma coleção criada num mundo distópico, onde o controle do distrito ABC foi tomado por uma grande corporação chamada “St. Georges Mill”, que transformou a região em uma máquina de exploração e repressão. \n\n Nesse cenário hostil, nasce uma juventude operária que, nas sombras, se organiza por meio de sindicatos e, influenciada pela cultura punk, se apropria de seus uniformes de trabalho, transformando-os em verdadeiros símbolos de resistência e contestação.\n\n Todo o vestuário apresentado conversa diretamente com essa atmosfera. Algumas peças usam tecidos resistentes e tecnológicos, outras emulam metais e ferrugens. Além disso, as silhuetas já conhecidas pelos fãs foram ressignificadas para essa estética hostil, utilizando técnicas de lavanderia e serigrafia para criar efeitos únicos em peças que carregam o DNA da CLASS.",
    link: "www.instagram.com/class___official/",
    imagem: "/Projeto2.jpg",
  },
  {
    titulo: "CLASS FALL '24 DROP1 - LOOKBOOK",
    descricao:
      "Tendo como pilar criativo principal a miscigenação entre a cultura nipônica e brasileira, a coleção de Outono 2024 da CLASS apresenta uma visão contemporânea sobre a estética modernista de ambos os países. \n\n De um lado temos movimento metabolista japonês, que foi traduzido pela marca em sistemas de ampliações, adições de elementos removíveis e ajustáveis que se ressignificam em outros objetos, e do outro, o modernismo brasileiro, inspirando aplicações de curvas e gráficos que remetem a essa época de ouro no design nacional. \n\n A primeira coleção do ano da CLASS conta com um mix de produtos bem amplo, com variedade de tipos de moletons, jaquetas e calças, de diferentes estilos, modelagens e materiais.",
    link: "www.instagram.com/class___official/",
    imagem: "/Projeto3.jpg",
  },
    {
    titulo: "CLASS SUMMER '22 DROP4 - LOOKBOOK",
    descricao:
      "Entre passado, presente e futuro, o lançamento de verão de 2023 da CLASS sintetiza o espírito do tempo em seu design, criando peças atemporais com estética minimalista em tecidos tecnológicos. Todos os produtos foram idealizados e produzidos com precisão no Brasil.",
    link: "www.instagram.com/class___official/",
    imagem: "/Projeto4.jpg",
  },
    {
    titulo: "CLASS SPRING '24 DROP2 - LOOKBOOK",
    descricao:
      "Para a coleção de Primavera 2024, nós exploramos algumas cidades que se construíram à margem do Mar Mediterrâneo, refletindo sobre a oposição temporal nunca resolvida das características urbanas, paisagísticas, culturais e sociais da região. \n\n Arcaísmo Ultra Moderno é a base da construção dessa coleção que une o antigo e o contemporâneo, onde cada item combina diferentes influências mediterrâneas, desde o frescor que a paisagem transmite, passando pelas cores e matérias primas utilizadas tanto na arquitetura quanto na pintura local.",
    link: "www.instagram.com/class___official/",
    imagem: "/Projeto5.jpg",
  },
   {
    titulo: "CLASS WINTER '22 DROP2 - LOOKBOOK",
    descricao:
      "A coleção de inverno 2022 da CLASS mescla o tradicional com experimental, falando muito sobre autoestima brasileira, com tecidos e recortes de alta qualidade e estampas subjetivas, com grande identificação nacional, sendo possível ser traduzida de forma muito pessoal para cada consumidor, com várias camadas de conceito e interpretações. Destacando a peça puffer com tecido jacquard (um tecido que geralmente não é usado para tal) e o sobretudo de veludo 100% algodão que está trazendo muito da identidade de marca em uma manga com regulador em etiqueta de borracha. Nas famosas estampas gráficas, a marca explorou a autoestima brasileira, com a estampa Brazilian Influence, onde relata o poder do Brasil no meio intelectual, mostrando que exportamos muita cultura, música, design, arte, e moda para fora do país. Nos acessórios, a marca está lançando novamente o boné La Classe em lã inglesa, e um boné La CLasse novo composto de algoão com linho, ambos com fecho de couro legítimo. Os bonés sports com lacinho no modelo pipa também estão de volta.",
    link: "www.instagram.com/class___official/",
    imagem: "/Projeto6.jpg",
  },
];

const Projetos = () => {
  return (
    <section id="projetos" className={styles.projetos}>
      <h1>Archive</h1>

      <div className={styles.projetosContainer}>
        {projetosData.map((projeto, index) => (
          <div key={index} className={styles.projetosPai}>
            <div className={styles.projetosAlbuns}>
              <h2>{projeto.titulo}</h2>
              <p>{projeto.descricao}</p>
              <div className={styles.projetosBotao}>
                <a
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className={styles.sobremimBtn}>Ver projeto</button>
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
      </div>
    </section>
  );
};

export default Projetos;
