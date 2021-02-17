import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import {Form} from 'react-bootstrap';
import {searchStyle} from './material-css/useStyles';


const Search = () => {
    const classes = searchStyle();
    return <div className="search">
        <Form>
            <Form.Group controlId="formBasicEmail" className="search_input">
                <Form.Control type="text" placeholder="Search city" />
            </Form.Group>
        <form className={classes.root} >
            <TextField id="outlined-basic" label="Search a city." variant="outlined" />
        </form>
        </Form>
    </div>
};
export default Search;
