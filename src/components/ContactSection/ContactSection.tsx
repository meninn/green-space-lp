import "./styles.scss";

import FigmaIcon from "../../../public/assets/svg/FIGMA ICO.svg";
import GithubIcon from "../../../public/assets/svg/GIGTHUB ICO.svg";

const URL_TO_FIGMA = "https://www.figma.com/file/22oeLkCZHzc3hnrwP6b0ZJ/GreenSpace?type=design&node-id=0%3A1&mode=design&t=fX0rG0ZqSG94HZ4D-1"
const URL_TO_GITHUB = "https://github.com/meninn/green-space-lp"

const ContactSection = () => {
  return (
    <section id="figma" className="contact__section">
      <div className="contact__section__header">
        <h2>FIGMA PROTO &&</h2>
        <h2>GITHUB REPO</h2>
        <h4>Prototipo da aplicação referente ao projeto Green Space</h4>
      </div>

      <div className="contact__group">
      <a href={URL_TO_FIGMA} target="_blank" rel="noopener noreferrer">
          <div className="contact__group__button">
            <img src={FigmaIcon} alt="Figma's logo" />
            <p>
              Clique aqui para <br />
              ver o nosso figma
            </p>
          </div>
        </a>
        <a href={URL_TO_GITHUB} target="_blank" rel="noopener noreferrer">
          <div className="contact__group__button">
            <img src={GithubIcon} alt="Github's logo" />
            <p>
              Clique aqui para <br />
              ver o nosso github
            </p>
          </div>
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
