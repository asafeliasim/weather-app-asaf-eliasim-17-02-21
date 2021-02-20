import React,{useState} from 'react';
import {useSelector} from 'react-redux';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import {forecastStyle} from './material-css/useStyles';
import {getIconFromApi} from '../services/api';
import {getCelsius} from '../context/utils/helpers';

import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations'
const bounceAnimation = keyframes`${bounce}`;
const BouncyDiv = styled.div`
  animation: infinite 2s ${bounceAnimation};
`;


const ForecastItem = ({item}) => {
    const dayByIndex = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const classes = forecastStyle();
    const dayToDisplay = dayByIndex[new Date(item.Date).getDay()]
  
    const app = useSelector(state => state.app);
    const {isCel} = app;
    const max = isCel ?  getCelsius(item.Temperature.Maximum.Value): item.Temperature.Maximum.Value ;
    const min = isCel ?  getCelsius(item.Temperature.Minimum.Value): item.Temperature.Minimum.Value
    return <Card className={`${classes.root} forecast_item`}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {dayToDisplay}
            </Typography>
            <Typography variant="h5" component="h2">
                {item.Day.IconPhrase}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                
                {max}&#176; | {min}&#176;
            </Typography>
            <BouncyDiv className="forecast_icon">
                <img src={getIconFromApi(item.Day.Icon)} alt="image" />
            </BouncyDiv>
        </CardContent>
        </Card>
}
export default ForecastItem;
