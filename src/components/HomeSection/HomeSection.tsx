import "./styles.scss";

const HomeSection = () => {
  return (
    <section className="home__section">
      <div className="main__content home__content">
        <div className="home__content__text">
          <h2>GREEN SPACE</h2>
          <p>O melhor lugar para se plantar ideias</p>
        </div>

        <div className="home__content__image">
          <img src="src/assets/svg/welcomeIMG.svg" alt="Gente regando uma planta" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
