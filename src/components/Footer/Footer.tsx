import "./styles.scss";

const Footer = () => {
    return (
        <footer className="footer__menu">
            <ul>
                <li>
                    <div className="footer__logo">
                        <a href="#">
                            <img
                                src="src/assets/svg/Logo-footer.svg"
                                alt="GreenSpace logo"
                            />
                        </a>
                    </div>
                </li>
                <li>
                    <a href="#">
                        <img
                            src="src/assets/svg/Github ico - footer.svg"
                            alt="GitHub icon with the name of the devs"
                        />
                        <p>Gustavo</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src="src/assets/svg/Github ico - footer.svg"
                            alt="GitHub icon with the name of the devs"
                        />
                        <p>Guilherme</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src="src/assets/svg/Github ico - footer.svg"
                            alt="GitHub icon with the name of the devs"
                        />
                        <p>Kauan</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src="src/assets/svg/Github ico - footer.svg"
                            alt="GitHub icon with the name of the devs"
                        />
                        <p>Vinicius</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img
                            src="src/assets/svg/Github ico - footer.svg"
                            alt="GitHub icon with the name of the devs"
                        />
                        <p>Gabriel</p>
                    </a>
                </li>
                <li>
                    <div className="footer__logo">
                        <a href="#">
                            <img
                                src="src/assets/svg/CesuscLogo.svg"
                                alt="Cesusc Logo"
                            />
                        </a>
                    </div>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;