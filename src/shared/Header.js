import React from 'react';
import {useSelector} from 'react-redux';
import sun from '../asserts/images/sunLogo.png';
import SwitchButton from "./SwitchButton";
import NavLinks from "./NavLinks";
import moon from '../asserts/svgIcons/moon.png';
import {fadeInLeft} from 'react-animations';
import styled, { keyframes } from 'styled-components';
//<h2 className="header_logo-title">Herolo app</h2>
const fadeAnimation = keyframes`${fadeInLeft}`;
const FadeLogo = styled.div`
  animation: 2s ${fadeAnimation};
`;
const Header = () => {

    const app = useSelector(state => state.app);
    const {isDark}= app;
    return <div>
            <header className={!isDark ? "header": "header_night"}>
            <FadeLogo className="header_logo">
                <a href="/">      
                    <img src={!isDark ? sun : moon} alt="sun" className={!isDark? "header_logo-day": "header_logo-night"}/>
                </a>
                    
            </FadeLogo>
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
