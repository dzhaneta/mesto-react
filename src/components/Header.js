import logoPath from '../images/header_logo.svg';

function Header() {
  return (
    <header className="header">
        <img className="header__logo" src={logoPath} alt="логотип Mesto"/>
    </header>
  );
}

export default Header;
