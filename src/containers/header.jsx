const Header = () => {
    return (
    <header className="header">
        <h1 className="header__title title"><span>Marvel</span> information portal</h1>
        <nav className="menu">
            <ul className="menu__list">
                <li className="menu__item"><a href="/">Characters</a></li>
                <li className="menu__item menu__item_active"><a href="/comics.html">Comics</a></li>
            </ul>
        </nav>
    </header>
    )
    
}

export default Header;