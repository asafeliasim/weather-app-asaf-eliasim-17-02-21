import React from 'react';
import {useField} from "formik";
import {makeStyles} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme=> ({
    root: {
        '& .MuiInputBase-root': {
            width:"85%"
        },
        '& .Mui-error':{
            fontSize: 16,
        },
        "& .MuiOutlinedInput-input:-webkit-autofill":{
            width:'100%',
            background:'#fff'
        },
        "& .makeStyles-input-3": {
            width:'100%',
        }


    },
    input:{
        background: "#fff",
        padding: theme.spacing(1),
        width:'50%',
        fontSize: '1.8rem',
        "&::placeholder":{
            fontSize: 16,
        },
    }

    }))

export const InputField = ({placeholder,...props}) => {
    const classes = useStyles();
    const [field,meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return <div>
        <TextField
            id="outline-basic"
            variant="outlined"
            size={props.size}
            fullWidth
            name={props.name}
            type={props.type}
            placeholder={placeholder}
            {...field} helperText={errorText}
            error={!!errorText}
            color="primary"
            className={classes.root}
            inputProps={{
                className:classes.input,
            }}
        />
    </div>
}
