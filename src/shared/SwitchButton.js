import React,{useState,useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {IS_DARK_MODE} from "../redux/constants";
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {setDarknessState} from '../redux/actions';
import { SET_TEMP_DEGREE} from '../redux/constants';

const SwitchButton = () => {
    const dispatch = useDispatch();

    const [isDark, setIsDark] = useState(false);
    const [isCel, setIsCel] = useState(false);

    const darkChangeHandler = () => {
        dispatch(setDarknessState())
        setIsDark(prevCheck => !prevCheck);

    };

    const celChangeHandler = () => {
        dispatch({
            type: SET_TEMP_DEGREE
        })
        setIsCel(prevCheck => !prevCheck);

    };
    return <FormGroup >
            <FormControlLabel
                control={<Switch checked={isDark} onChange={darkChangeHandler} name="isDark" />}
                label="Dark Mode"
                />
            <FormControlLabel
                control={<Switch checked={isCel} onChange={celChangeHandler} name="cel" />}
                label="Celsius"
            />
    </FormGroup>

}

export default SwitchButton;
