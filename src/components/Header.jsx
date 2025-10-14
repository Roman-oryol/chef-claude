import logo from '../assets/logo.svg';

function Header() {
  return (
    <header className="header">
      <div className="header__inner container">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип сайта Chef Claude"
        />
      </div>
    </header>
  );
}

export default Header;
