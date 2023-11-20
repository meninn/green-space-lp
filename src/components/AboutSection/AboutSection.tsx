import "./styles.scss";

const AboutSection = () => {
  return (
    <div className="about__section">
      <div className="header">
        <h2 className="header__title">Sobre o projeto.</h2>
        <p className="header__subTitle">
          conheça um pouco mais sobre o GreenSpace.
        </p>
      </div>
      <div className="about__cards">
        <div className="card">
          <h3 className="card__title">
            <span className="card__title--italic">1</span> Problema
          </h3>
          <p>
            Atualmente, por conta do grande crescimento dos centros urbanos e da
            praticidade na hora de compra de frutas e vegetais, acabamos
            deixando de lado aqueles interessados em jardinagem e agricultura.
            Com base nisso tivemos a ideia de criar um espaço social reservado
            aos interessados no assunto, assim incentivando a troca de fotos,
            artigos e pensamentos.
          </p>
        </div>
        <div className="card">
          <h3 className="card__title">
            <span className="card__title--italic">2</span> Ideia
          </h3>
          <p>
            Atualmente, por conta do grande crescimento dos centros urbanos e da
            praticidade na hora de compra de frutas e vegetais, acabamos
            deixando de lado aqueles interessados em jardinagem e agricultura.
            Com base nisso tivemos a ideia de criar um espaço social reservado
            aos interessados no assunto, assim incentivando a troca de fotos,
            artigos e pensamentos.
          </p>
        </div>
        <div className="card">
          <h3 className="card__title">
            <span className="card__title--italic">3</span> Nicho
          </h3>
          <p>
            O nosso nicho são os usuários interessados em jardinagem e
            agricultura.
          </p>
          <h3 className="card__title">
            <span className="card__title--italic">4</span> Valor
          </h3>
          <p>
            A GreenSpace será um local agradável aos entusiastas de jardinagem,
            agricultura e natureza, onde os usuários poderão realizar a troca de
            fotos, artigos e pensamentos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
