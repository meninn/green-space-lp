import "./styles.scss";

import FigmaIcon from "../../assets/svg/FIGMA ICO.svg";
import GithubIcon from "../../assets/svg/GIGTHUB ICO.svg";

const ContactSection = () => {
  return (
    <section className="contact__section">
      <div className="contact__section__header">
        <h2>FIGMA PROTO &&</h2>
        <h2>GITHUB REPO</h2>
        <h4>Prototipo da aplicação referente ao projeto Green Space</h4>
      </div>

      <div className="contact__group">
        <div className="contact__group__link">
          <img src={FigmaIcon} alt="Figma's logo" />
          <p>
            Clique aqui para <br />
            ver o nosso figma
          </p>
        </div>
        <div className="contact__group__link">
          <img src={GithubIcon} alt="Github's logo" />
          <p>
            Clique aqui para <br />
            ver o nosso github
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
