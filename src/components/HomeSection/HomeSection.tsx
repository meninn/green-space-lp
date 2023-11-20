import "./styles.scss";

const HomeSection = () => {
  return (
    <section className="home__section">
      <div className="main__content home__content">

        <div className="home__content__text">
          <h2>GREEN SPACE</h2>
          <p>O melhor lugar para se plantar ideias</p>

        <div className="contact__group">
          <div className="contact__group__button">
            <img src="src/assets/svg/logo-without-name.svg" alt="GreenSpace logo" />
            <p>
              Clique aqui para <br />
              conhecer a <br/>
              nossa rede
            </p>
          </div>
        </div>

        </div>

        <div className="home__content__image">
          <img src="src/assets/svg/welcomeIMG.svg" alt="Gente regando uma planta" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
