import React from 'react';
import {useSelector} from 'react-redux';
const LocalLocation = ({location}) => {
    const isDark = useSelector(state => state.isDark);
    return <div className={!isDark?"local":"local-light"}>

            <div className="local_country">
                {location.country}
            </div>
            <div className="local_city">
                {location.city}
            </div>
           {/* <div className="local_degree">
                {location.degree} &#8457;
            </div>*/}
            <div className="local_hart">
                <a href="#" style={{textDecoration: 'none',color:'red',fontSize:'3rem'}}>
                    <i className="fas fa-heart"/>
                </a>
            </div>
        </div>
}
export default LocalLocation;
