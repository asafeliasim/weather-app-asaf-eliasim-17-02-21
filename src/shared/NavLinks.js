import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'; 
import {  SET_HOMEPAGE_LINK} from '../redux/constants';

const NavLinks = () => {
    const dispatch = useDispatch();

    const app = useSelector(state => state.app);
    const {homePage} = app;

    const handleLinkClicked = () => {
        dispatch({
            type:SET_HOMEPAGE_LINK
        })
    }
    return <ul className="nav">
                <li className="nav_link" onClick={handleLinkClicked}>
                    <Link to="/" className={homePage ? "link-active" : "link"}>Home</Link>
                </li>
                <li className="nav_link" onClick={handleLinkClicked}>
                    <Link to="/favorites" className={!homePage? "link-active": "link"}>Favorites</Link>
                </li>
            </ul>
}

export default NavLinks;
