import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {loadingStyles} from '../asserts/material-css/useStyles';

export default function Loading() {
    const classes = loadingStyles();

    return (
        <div className={classes.root}>
            <CircularProgress />
        </div>
    );
}
