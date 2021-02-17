import {IS_DARK_MODE} from "./constants";

export const setDarknessState = () => dispatch => {
    dispatch({
        type:IS_DARK_MODE
    })
}
