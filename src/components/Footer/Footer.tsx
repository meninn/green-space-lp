import {Link} from "react-scroll";
import "./styles.scss";

import logoFooter from "../../../public/assets/svg/Logo-footer.svg";
import githubFooter from "../../../public/assets/png/githubFooter.png";
import cesuscLogo from "../../../public/assets/svg/CesuscLogo.svg";

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
                <img src={logoFooter}></img>
            </Link>
            <a
                href="https://github.com/BenoGustavo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={githubFooter}></img>
                <p>Gustavo</p>
            </a>
            <a
                href="https://github.com/luchinivictorino"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={githubFooter}></img>
                <p>Guilherme</p>
            </a>
            <a
                href="https://github.com/Kauan-Azevedo"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={githubFooter}></img>
                <p>Kauan</p>
            </a>
            <a
                href="https://github.com/tsvini"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={githubFooter}></img>
                <p>Vinicius</p>
            </a>
            <a
                href="https://github.com/meninn"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={githubFooter}></img>
                <p>Gabriel</p>
            </a>
            <a
                href="https://cesusc.edu.br/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={cesuscLogo}></img>
            </a>
        </footer>
    );
};

export default Footer;
