import React from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {getIconFromApi} from "../services/api";
import Card from "@material-ui/core/Card";
import {forecastStyle} from "./material-css/useStyles";
import {getLocationByLocationKey} from '../services/api';


const FavoriteItem = ({location}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = forecastStyle();

   
    const backToHomePage = () => {
        dispatch(getLocationByLocationKey(location.city));
        history.push('/');
    }
    return <Card className={`${classes.root} forecast_item favorite-item`} onClick={backToHomePage}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {location.city}
                </Typography>
                <Typography variant="h5" component="h2">
                {location.status}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {location.temprature}&#176;
                </Typography>
                    <img src={getIconFromApi(location.icon)} alt="image" />     
                <div className="favorite_btn">
                    <a href="/" className="btn btn-danger">
                        Remove
                    </a>
                </div>

            </CardContent>
        </Card>
}

export default FavoriteItem;
