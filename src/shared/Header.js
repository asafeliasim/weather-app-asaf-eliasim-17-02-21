import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import sun from '../asserts/images/sunLogo.png';
import SwitchButton from "./SwitchButton";
import NavLinks from "./NavLinks";
import moon from '../asserts/svgIcons/moon.png';
import {fadeInLeft} from 'react-animations';
import SideDrawer from "./SideDrawer";
import styled, { keyframes } from 'styled-components';
import Backdrop from "./Backdrop";
//<h2 className="header_logo-title">Herolo app</h2>
const fadeAnimation = keyframes`${fadeInLeft}`;
const FadeLogo = styled.div`
  animation: 2s ${fadeAnimation};
`;
const desktop = window.innerWidth > 960 ;

const Header = () => {

    const [drawerIsOpen,setDrawerIsOpen] = useState(false);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);

    }
    const closeDrawerHandler = () => setDrawerIsOpen(false);

    const app = useSelector(state => state.app);
    const {isDark}= app;
    return <div>
        {drawerIsOpen && <Backdrop onClick={closeDrawerHandler}/>}
        {drawerIsOpen && <SideDrawer>
            <div className="header_mobile-links">
                <NavLinks desktop={false} onClose={closeDrawerHandler}/>
            </div>
        </SideDrawer>}
            <header className={!isDark ? "header": "header_night"}>
            <FadeLogo className="header_logo">
                <a href="/">      
                    <img src={!isDark ? sun : moon} alt="sun" className={!isDark? "header_logo-day": "header_logo-night"}/>
                </a>
                    
            </FadeLogo>
            <div className="header_switch">
                <SwitchButton />
            </div>
                {desktop ?
                    (
                        <div className="header_links">
                            <NavLinks desktop={true}/>
                        </div>
                    ):
                    (
                        <button className="header_mobile-btn" onClick={openDrawerHandler}>
                            <span />
                            <span />
                            <span />
                        </button>
                    )
                }



        </header>

    </div>
}

export default Header;
