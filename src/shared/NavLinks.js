import React from 'react';
import {Link} from 'react-router-dom';

const NavLinks = () => {
    return <ul className="nav">
                <li className="nav_link">
                    <Link to="/" className="link">Home</Link>
                </li>
                <li className="nav_link">
                    <Link to="/favorites" className="link">Favorites</Link>
                </li>
            </ul>
}

export default NavLinks;
