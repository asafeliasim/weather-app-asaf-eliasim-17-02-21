import React from 'react';

const LocalLocation = ({location}) => {
    return <div className="local">
            <div className="local_country">
                {location.country}
            </div>
            <div className="local_city">
                {location.city}
            </div>
            <div className="local_degree">
                {location.degree} &#8457;
            </div>
        </div>
}
export default LocalLocation;
