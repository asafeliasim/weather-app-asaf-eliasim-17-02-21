import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from "react-redux";
import Alert from '@material-ui/lab/Alert';
import {errorStyle} from "../asserts/material-css/useStyles";
import Dialog from '@material-ui/core/Dialog';
import {REFRESH_ERROR_ALERT} from '../redux/constants';

const ErrorAlert = ({openAlert}) => {
    const classes = errorStyle();
    const dispatch = useDispatch();
    const [open,setOpen] = useState(false);
    const errorAlert = useSelector(state => state.errorAlert);
    const {message,severity} = errorAlert;

    useEffect(()=>{
        setOpen(openAlert);
    },[openAlert])

    const handleClose = () => {
        setOpen(false);
        dispatch({type:REFRESH_ERROR_ALERT})
    };
    return  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
            <div className={classes.root}>
                <Alert severity={severity}>{message}</Alert>
            </div>
    </Dialog>
}
export default ErrorAlert;
