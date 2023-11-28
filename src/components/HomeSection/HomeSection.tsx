import "./styles.scss";

import logoWithoutName from "../../../public/assets/svg/logo-without-name.svg";
import welcomeImg from "../../../public/assets/svg/welcomeIMG.svg";

const URL_TO_SITE = "https://PLACEHOLDERLINK.com";

const HomeSection = () => {
    return (
        <section id="home" className="home__section">
            <div className="main__content home__content">

                <div className="home__content__text">
                    <h2>GREEN SPACE</h2>
                    <p>O melhor lugar para se plantar ideias</p>

                    <div className="contact__group">
                        <a href={URL_TO_SITE} target="_blank" rel="noopener noreferrer">
                            <div className="contact__group__button">
                                <img src={logoWithoutName
                                } alt="GreenSpace logo"/>
                                <p>
                                    Clique aqui para <br/>
                                    conhecer a <br/>
                                    nossa rede
                                </p>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="home__content__image">
                    <img src={welcomeImg} alt="Gente regando uma planta"/>
                </div>
            </div>
        </section>
    );
};

export default HomeSection;
