import React from 'react';
import ForecastItem from "./ForecastItem";
import rain from '../asserts/svgIcons/rain.svg';
import sun from '../asserts/svgIcons/sun.svg';

const DUMMY_LIST = [
    {
        id:1,
        day:'Wednesday',
        status:'Rain',
        max:'55',
        min: '49',
        icon:rain
    },
    {
        id:2,
        day:'Thursday',
        status:'Partly sunny w/ showers\n',
        max:'60',
        min: '52',
        icon:sun
    },
    {
        id:3,
        day:'Friday',
        status:'Showers',
        max:'60',
        min: '50',
        icon:sun
    },
    {
        id:4,
        day:'Saturday',
        status:'Partly sunny\n',
        max:'61',
        min: '51',
        icon:sun
    },
    {
        id:5,
        day:'Sunday',
        status:'Intermittent clouds\n',
        max:'62',
        min: '51',
        icon:sun
    }
]
const ForecastList = () => {
    return <div className="forecast_list">
        {DUMMY_LIST.map(item =>
            <ForecastItem item={item} key={item.id} />
        )}
    </div>
}
export default ForecastList;
