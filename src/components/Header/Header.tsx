import { Link } from "react-scroll";
import "./styles.scss";

import logo from "../../../public/assets/svg/Logo.svg";

const Header = () => {
    return (
        <header className="navbar__menu">
            <Link
                className="navbar__menu__link"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
            >
                <img src={logo} alt="Green Space" />
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link
                            className="navbar__menu__link"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            SOBRE O PROJETO
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="navbar__menu__link"
                            to="business"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            BUSINESS MODEL
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="navbar__menu__link"
                            to="diagrams"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            UML
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="navbar__menu__link"
                            to="figma"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            FIGMA
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="navbar__menu__link"
                            to="footer"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            GITHUB
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

// Literally does what the name says
const HeaderSpacing = () => {
    return <div className="navbar__spacing"></div>;
};

export { HeaderSpacing };
export default Header;
