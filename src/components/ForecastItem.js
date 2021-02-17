import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme)=>({
    root: {
        minWidth: 200,
        margin:'1rem 2rem'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        margin: 14,

    },
    avatar: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(2),
        },
    }
}));

const ForecastItem = ({item}) => {
    const classes = useStyles();
    return <Card className={`${classes.root} forecast_item`}>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {item.day}
            </Typography>
            <Typography variant="h5" component="h2">
                {item.status}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                {item.max}&#176; | {item.min}&#176;
            </Typography>
            <div className="forecast_icon">
                <Avatar alt="ICON" src={item.icon}/>
            </div>

        </CardContent>
        </Card>
}
export default ForecastItem;
