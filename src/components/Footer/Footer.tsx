import './styles.scss';

const Footer = () => {
  return(
    <footer className='footer__menu'>
        <ul>
            <li className='footer__logo'><a href="#"><img src="src/assets/svg/Logo-footer.svg" alt="GreenSpace logo" /></a></li>
            <li><a href="#"><img src="src/assets/svg/Github ico - footer.svg" alt="GitHub icon with the name of the devs" />Gustavo</a></li>
            <li><a href="#"><img src="src/assets/svg/Github ico - footer.svg" alt="GitHub icon with the name of the devs" />Guilherme</a></li>
            <li><a href="#"><img src="src/assets/svg/Github ico - footer.svg" alt="GitHub icon with the name of the devs" />Kauan</a></li>
            <li><a href="#"><img src="src/assets/svg/Github ico - footer.svg" alt="GitHub icon with the name of the devs" />Vinicius</a></li>
            <li><a href="#"><img src="src/assets/svg/Github ico - footer.svg" alt="GitHub icon with the name of the devs" />Gabriel</a></li>
            <li className='footer__logo'><a href="#"><img src="src/assets/svg/CesuscLogo.svg" alt="Cesusc Logo" /></a></li>
        </ul>
  </footer>
  )
}

export default Footer;