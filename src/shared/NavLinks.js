import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom'
const NavLinks = () => {
    const history = useHistory();
    const [path,setPath] = useState(history.location.pathname)


    return <ul className="nav">
                <li className="nav_link" onClick={()=> setPath('/')}>
                    <Link to="/" className={path === "/" ? "link-active" : "link"}>Home</Link>
                </li>
                <li className="nav_link" onClick={()=>setPath("/favorites")}>
                    <Link to="/favorites" className={path === "/favorites"? "link-active": "link"}>Favorites</Link>
                </li>
            </ul>
}

export default NavLinks;
