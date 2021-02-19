import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


const AuthComplete = ({cities,setQuery,handleQueryComplete,onChange}) => {

    const [search,setSearch] = useState("");
    const handleChange = (query) => {
        setSearch(query);
        setQuery(query);
        onChange(query);

    }

    const handleSelectCity = (city) => {
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
                <List component="nav" aria-label="main mailbox folders" style={{position:'fixed',left:'40%',background:'#fff'}}>
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
