import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import {getIconFromApi} from "../services/api";
import Card from "@material-ui/core/Card";
import {forecastStyle} from "./material-css/useStyles";
import {getLocationByLocationKey} from '../services/api';
import {getCelsius} from "../context/utils/helpers";
import {REMOVE_FROM_FAVORITE} from '../redux/constants';

const FavoriteItem = ({location}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = forecastStyle();
    const app = useSelector(state=>state.app);
    const {isCel} = app;

    let temperature = isCel ? getCelsius(location.temprature) : location.temprature;
    
    const backToHomePage = () => {
        dispatch(getLocationByLocationKey(location.city));
        history.push('/');
    }
    const removeHandler = (location) => {

        dispatch({
            type:REMOVE_FROM_FAVORITE,
            payload: location
        })
    }
    return <Card className={`${classes.root} forecast_item favorite-item`} >
            <CardContent onClick={backToHomePage}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {location.city}
                </Typography>
                <Typography variant="h5" component="h2">
                {location.status}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                {temperature}&#176;
                </Typography>
                    <img src={getIconFromApi(location.icon)} alt="image" />
            </CardContent>
            <div className="favorite_btn">
                <button className="btn btn-danger" onClick={()=>removeHandler(location)}>
                    Remove
                </button>
            </div>
        </Card>
}

export default FavoriteItem;
