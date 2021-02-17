import {IS_DARK_MODE} from "./constants";

const initialState = {
    isDark:false,
    isCel:false
}

export const appReducer = (
    state=initialState,
    action)=>{

    const {type,payload} = action;
    switch (type) {
        case IS_DARK_MODE:
            return{
                ...state,
                isDark: !state.isDark
            }
        default:
            return state;
    }
}
