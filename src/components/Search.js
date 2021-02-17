import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2),
            width: '40ch',
        },
        '& .MuiOutlinedInput-input':{
            backgroundColor:'#fff',
            fontSize:'2rem',
        },
        '& .MuiInputLabel-outlined':{
            fontSize:'1.6rem',

        }

    },
}));
const Search = () => {
    const classes = useStyles();
    return <div className="search">
        <form className={classes.root} >
            <TextField id="outlined-basic" label="Search a city." variant="outlined" />
        </form>
    </div>
};
export default Search;
