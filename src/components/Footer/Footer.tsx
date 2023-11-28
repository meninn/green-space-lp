import { Link } from "react-scroll";
import "./styles.scss";

const Footer = () => {
  return (
    <footer id="footer" className="footer__menu">
      <Link
        className="navbar__menu__link"
        to="home"
        spy={true}
        smooth={true}
        duration={500}
      >
        <img src="src/assets/svg/Logo-footer.svg"></img>
      </Link>
      <a
        href="https://github.com/BenoGustavo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/assets/png/githubFooter.png"></img>
        <p>Gustavo</p>
      </a>
      <a
        href="https://github.com/BenoGustavo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/assets/png/githubFooter.png"></img>
        <p>Guilherme</p>
      </a>
      <a
        href="https://github.com/BenoGustavo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/assets/png/githubFooter.png"></img>
        <p>Kauan</p>
      </a>
      <a
        href="https://github.com/BenoGustavo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/assets/png/githubFooter.png"></img>
        <p>Vinicius</p>
      </a>
      <a
        href="https://github.com/BenoGustavo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/assets/png/githubFooter.png"></img>
        <p>Gabriel</p>
      </a>
      <a
        href="https://cesusc.edu.br/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="src/assets/svg/CesuscLogo.svg"></img>
      </a>
    </footer>
  );
};

export default Footer;
