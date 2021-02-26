import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import {Form} from 'react-bootstrap';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import {SET_ERROR_ALERT } from '../redux/constants';

const regExp = '/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/'
const AuthComplete = ({cities,setQuery,handleQueryComplete,onChange}) => {

    const [search,setSearch] = useState("");
    const dispatch = useDispatch();
    const handleChange = (query) => {
        console.log("AUTHCOMPLETE RENDER")
        if(!/^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/.test(query) && query !== ""){
            dispatch({
                type:SET_ERROR_ALERT,
                payload: {
                    errorText: "Invalid input. Please Enter only English characters.",
                    severity: "error"
                }
            })
        }
        else{
            setSearch(query);
            setQuery(query);
            onChange(query);

        }

    }

    const handleSelectCity = (city) => {
        console.log("AUTHCOMPLETE RENDER")
        console.log(city);
        if(city){
            handleQueryComplete(city)
            handleChange("")
        }

    }
    return <>
        <Form>
            <Form.Group controlId="formBasicEmail" className="search">
                <Form.Control type="select" placeholder="Search a city" className="search_input" onChange={(e)=>handleChange(e.target.value)}/>
            </Form.Group>

            {cities.length > 1 && search !== "" &&
                <List component="nav" className="autocomplete" aria-label="main mailbox folders" style={{position:'fixed',left:'42%',background:'#fff',zIndex:'10'}}>
                    {cities.map(city =>
                        <ListItem button onClick={(e)=>handleSelectCity(city)} onChange={(e)=>handleChange(e.target.value)}>
                            <ListItemText primary={city} />
                        </ListItem>
                    )}
                </List>
           }
        </Form>

    </>
};
export default AuthComplete;
