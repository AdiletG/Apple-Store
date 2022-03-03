import React from 'react';
import Logo from '../../assets/logo.svg'
import './header.css'

const Header = () => {
    return (
        <header className= 'header'>
            <div className="container">
                <nav className="header__nav">
                    <div className="header__logo">
                        <img src={Logo} alt="Apple Logo"/>
                    </div>
                    <ul className="header__list">
                        <li className="header__link"><a href="#" className="header__links">Design</a></li>
                        <li className="header__link"><a href="#" className="header__links">Health</a></li>
                        <li className="header__link"><a href="#" className="header__links">Workout</a></li>
                        <li className="header__link"><a href="#" className="header__links">Activity</a></li>
                        <li className="header__link"><a href="#" className="header__links">Connect</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;