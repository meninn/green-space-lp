import './styles.scss';

const Header = () => {
  return(
    <header className="navbar__menu">
      
        <a href='#'>
            <img src="src/assets/svg/Logo.svg" alt="Green Space" />
        </a>
        <nav>
          <ul>
            <li><a href="#">SOBRE O PROJETO</a></li>
            <li><a href="#">BUSINESS MODEL</a></li>
            <li><a href="#">FIGMA</a></li>
            <li><a href="#">GITHUB</a></li>
          </ul>
        </nav>

  </header>
  )
}

export default Header;