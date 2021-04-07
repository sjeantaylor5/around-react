import headerLogo from '../images/image.svg';

function Header() {
    return (
        <header className="header">
            <img className="header__vector" src={headerLogo} alt="Around the United States"/>
        </header>
    );
}

export default Header;