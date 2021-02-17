import React from 'react';

import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import {forecastStyle} from './material-css/useStyles';
import {getIconFromApi} from '../services/api';



const ForecastItem = ({item}) => {
    const dayByIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const classes = forecastStyle();
    const dayToDisplay = dayByIndex[new Date(item.Date).getDay()]
    console.log(item.Date)
    return <Card className={`${classes.root} forecast_item`}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {dayToDisplay}
            </Typography>
            <Typography variant="h5" component="h2">
                {item.Day.IconPhrase}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {item.Temperature.Maximum.Value}&#176; | {item.Temperature.Minimum.Value}&#176;
            </Typography>
            <div className="forecast_icon">
                <img src={getIconFromApi(item.Day.Icon)} alt="image" />

            </div>
        </CardContent>
        </Card>
}
export default ForecastItem;
