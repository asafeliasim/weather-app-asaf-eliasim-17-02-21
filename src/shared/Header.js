import React from 'react';
import {useSelector} from 'react-redux';
import sun from '../asserts/images/sun.svg';
import SwitchButton from "./SwitchButton";
import NavLinks from "./NavLinks";
import moon from '../asserts/svgIcons/moon.png';

const Header = () => {
    const app = useSelector(state => state.app);
    const {isDark}= app;
    return <div>
            <header className={!isDark ? "header": "header_night"}>
            <div className="header_logo">
                <a href="/">
                    <img src={!isDark ? sun : moon} alt="sun" className="header_logo-img"/>
                </a>
                    <h2 className="header_logo-title">Herolo app</h2>
            </div>
            <div className="header_switch">
                <SwitchButton />
            </div>
            <div className="header_links">
                <NavLinks />
            </div>

        </header>

    </div>
}

export default Header;
